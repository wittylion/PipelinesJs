import { SafeTypeProcessor } from "../../SafeTypeProcessor";

export class ActionProcessor<TArgs> extends SafeTypeProcessor<TArgs> {

    public static readonly ActionMustBeSpecifiedInGenericProcessor: string = "Creating a generic 'action' processor, you have to provide action which will be executed. Action represented by parameter (GenericType) => Promise<void>.";

    public static FromAction<T>(action: (Object) => Promise<void>): ActionProcessor<T> {
        return new ActionProcessor<T>(action);
    }

    public static From<T>(action: (T) => Promise<void>): SafeTypeProcessor<T> {
        return new ActionProcessor<T>(action);
    }

    constructor(protected action: (TArgs) => Promise<void>) {
        super();
        if (!action) {
            throw new ReferenceError(ActionProcessor.ActionMustBeSpecifiedInGenericProcessor);
        }
    }

    public SafeExecute(args: TArgs): Promise<void> {
        return this.action(args);
    }
}