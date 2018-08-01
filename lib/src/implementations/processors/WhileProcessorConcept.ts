import { SafeTypeProcessor } from "../../SafeTypeProcessor";

export abstract class WhileProcessorConcept<TArgs> extends SafeTypeProcessor<TArgs>
{

    public static readonly ConditionMustBeSpecifiedInGenericProcessor: string = "Creating a generic 'while' processor, you have to provide condition of the loop.";

    protected constructor(protected condition: (TArgs) => boolean) {
        super();
        if (!condition) {
            throw new ReferenceError(
                WhileProcessorConcept.ConditionMustBeSpecifiedInGenericProcessor);
        }
    }

    public async SafeExecute(args: TArgs): Promise<void> {
        while (this.condition(args)) {
            await this.CustomExecute(args);
        }
    }

    public abstract CustomExecute(args: TArgs): Promise<void>;
}