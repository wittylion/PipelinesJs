import { IProcessor } from "./IProcessor";
import { SafeTypeProcessor } from "./SafeTypeProcessor";
import { PipelineContext } from "./PipelineContext";

export abstract class SafeProcessor<T extends PipelineContext> extends SafeTypeProcessor<T> {
    public SafeCondition(args: T): boolean {
        return super.SafeCondition(args) && !args.IsAborted;
    }
}