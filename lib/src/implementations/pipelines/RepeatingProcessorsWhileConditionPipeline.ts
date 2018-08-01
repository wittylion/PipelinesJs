import { SafeTypeProcessor } from "../../SafeTypeProcessor";
import { RepeatingProcessorsPipelineConcept } from "./RepeatingProcessorsPipelineConcept";

export class RepeatingProcessorsWhileConditionPipeline<TArgs> extends RepeatingProcessorsPipelineConcept<TArgs> {
    public static readonly ConditionMustBeSpecifiedGeneric: string = "Creating a generic pipeline that repeats processor, you have to provide condition of the loop.";

    public constructor(processors: SafeTypeProcessor<TArgs>[], protected condition: () => boolean) {
        super(processors);

        if (!condition) {
            throw new ReferenceError(RepeatingProcessorsWhileConditionPipeline.ConditionMustBeSpecifiedGeneric);
        }
    }

    public Condition(): boolean {
        return this.condition();
    }
}