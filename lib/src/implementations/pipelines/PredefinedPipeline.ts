import { SafeTypePipeline } from "../../SafeTypePipeline";
import { SafeTypeProcessor } from "../../SafeTypeProcessor";
import { IPipeline } from "../../IPipeline";

export class PredefinedPipeline<TArgs> extends SafeTypePipeline<TArgs> {
    public static readonly ProcessorsMustNotBeNullForGeneric: string = "Creating a generic pipeline with predefined processor, be sure to pass a not null list of processors.";
    public static GetEmpty<T>(): SafeTypePipeline<T> {
        return PredefinedPipeline.FromProcessors<T>([]);
    }

    public static FromProcessors<T>(processors: SafeTypeProcessor<T>[]): SafeTypePipeline<T> {
        return new PredefinedPipeline<T>(processors);
    }

    constructor(protected processors: SafeTypeProcessor<TArgs>[]) {
        super();

        if (!this.processors) {
            throw new ReferenceError(PredefinedPipeline.ProcessorsMustNotBeNullForGeneric);
        }
    }

    GetProcessorsOfType(): SafeTypeProcessor<TArgs>[] {
        return this.processors;
    }
}