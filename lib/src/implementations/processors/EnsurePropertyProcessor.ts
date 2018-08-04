import { EnsurePropertyProcessorConcept } from "./EnsurePropertyProcessorConcept";
import { PipelineContext } from "../../PipelineContext";

export class EnsurePropertyProcessor<TValue>
    extends EnsurePropertyProcessorConcept<PipelineContext, TValue> {

    constructor(private readonly name: string, private readonly value: TValue) {
        super();
    }

    public GetName(args: PipelineContext): string {
        return this.name;
    }

    public GetValue(args: PipelineContext): TValue {
        return this.value;
    }
}