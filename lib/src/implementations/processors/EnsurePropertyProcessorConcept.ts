import { PipelineContext } from "../../PipelineContext";
import { SafeProcessor } from "../../SafeProcessor";

export abstract class EnsurePropertyProcessorConcept<TValue> extends SafeProcessor<PipelineContext> {

    public async SafeExecute(args: PipelineContext): Promise<void> {
        let name = this.GetName();
        let value = this.GetValue();

        args.AddOrSkipPropertyIfExists(name, value);
    }

    public abstract GetName(): string;
    public abstract GetValue(): TValue;

}
