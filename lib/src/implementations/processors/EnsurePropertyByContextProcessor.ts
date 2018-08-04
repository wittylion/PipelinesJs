import { EnsurePropertyProcessorConcept } from "./EnsurePropertyProcessorConcept";
import { PipelineContext } from "../../PipelineContext";

export class EnsurePropertyByContextProcessor<TContext extends PipelineContext, TValue>
    extends EnsurePropertyProcessorConcept<TContext, TValue> {

    constructor(private readonly name: string, private readonly valueProvider: (TContext) => TValue) {
        super();
    }

    public GetName(args: TContext): string {
        return this.name;
    }

    public GetValue(args: TContext): TValue {
        return this.valueProvider(args);
    }
}