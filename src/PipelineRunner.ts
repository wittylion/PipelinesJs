import { IProcessor } from "./IProcessor";
import { IPipeline } from "./IPipeline";
import { HasNoValue, Ensure, HasValue } from "./ObjectExtensions";

/**
 * Runs your pipeline or a set of processors or a single processor.
 */
export class PipelineRunner {
    public static readonly StaticInstance: PipelineRunner = new PipelineRunner();
    public RunPipeline<TArgs>(pipeline: IPipeline, args: TArgs): Promise<void> {
        if (HasNoValue(pipeline)) {
            return;
        }
        return this.RunProcessors(pipeline.GetProcessors(), args);
    }
    public async RunProcessors<TArgs>(processors: IProcessor[], args: TArgs): Promise<void> {
        processors = Ensure(processors, []);

        for (let index = 0; index < processors.length; index++) {
            const processor = processors[index];
            await this.RunProcessor(processor, args);
        }
    }
    public async RunProcessor<TArgs>(processor: IProcessor, args: TArgs): Promise<void> {
        if (HasValue(processor))
            await processor.Execute(args);
    }
}