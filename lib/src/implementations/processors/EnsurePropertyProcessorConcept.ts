import { PipelineContext } from "../../PipelineContext";
import { SafeProcessor } from "../../SafeProcessor";

export abstract class EnsurePropertyProcessorConcept<TContext extends PipelineContext, TValue>
    extends SafeProcessor<TContext> {

    public async SafeExecute(args: TContext): Promise<void> {
        let name = this.GetName(args);
        let value = this.GetValue(args);

        args.AddOrSkipPropertyIfExists(name, value);
    }

    public abstract GetName(args: TContext): string;
    public abstract GetValue(args: TContext): TValue;

}
