import { ConditionalProcessorConcept } from "./ConditionalProcessorConcept";

export class ConditionalActionProcessor<TArgs> extends ConditionalProcessorConcept<TArgs> {

    public static readonly ActionMustBeSpecifiedInGenericProcessor: string = "Creating a generic 'conditional' processor, that handles action delegate, you have to provide action delegate, represented by (GenericType) => Promise<void>.";

    public constructor(protected condition: (TArgs) => boolean, protected action: (TArgs) => Promise<void>) {
        super(condition);
        if (!action) {
            throw new ReferenceError(
                ConditionalActionProcessor.ActionMustBeSpecifiedInGenericProcessor);
        }
    }

    public async CustomExecute(args: TArgs): Promise<void> {
        await this.action(args);
    }
}