import { SafeTypeProcessor } from "../../SafeTypeProcessor";
import { PredefinedPipeline } from "./PredefinedPipeline";

export abstract class RepeatingProcessorsPipelineConcept<TArgs> extends PredefinedPipeline<TArgs> {
    constructor(processors: SafeTypeProcessor<TArgs>[]) {
        super(processors);
    }

    public GetProcessorsOfType(): SafeTypeProcessor<TArgs>[] {
        let result: SafeTypeProcessor<TArgs>[] = [];

        while (this.Condition()) {
            result = result.concat(...super.processors);
        }

        return result;
    }

    public abstract Condition(): boolean;
}