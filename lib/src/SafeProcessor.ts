import { IProcessor } from "./IProcessor";
import { SafeTypeProcessor } from "./SafeTypeProcessor";
import { PipelineContext } from "./PipelineContext";

/**
 * Abstract implementation of the IProcessor,
 * which has a condition, that checks parameters
 * before they will be passed to execution method.
 */
export abstract class SafeProcessor<T extends PipelineContext> extends SafeTypeProcessor<T> {
    public SafeCondition(args: T): boolean {
        return super.SafeCondition(args) && !args.IsAborted;
    }
}