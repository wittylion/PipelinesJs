/// <reference path="./ExtensionMethods/ObjectExtensions.ts" />

import ObjectExtensionMethods = Pipelines.ExtensionMethods.ObjectExtensionMethods;

module Pipelines {
    export class PipelineRunner {
        public RunPipeline<TArgs>(pipeline: IPipeline, args: TArgs): Promise<void> {
            if (ObjectExtensionMethods.HasNoValue(pipeline)) {
                return;
            }
            return this.RunProcessors(pipeline.GetProcessors(), args);
        }
        public async RunProcessors<TArgs>(processors: IProcessor[], args: TArgs): Promise<void> {
            processors = ObjectExtensionMethods.Ensure(processors, []);

            for (let index = 0; index < processors.length; index++) {
                const processor = processors[index];
                await this.RunProcessor(processor, args);
            }
        }
        public async RunProcessor<TArgs>(processor: IProcessor, args: TArgs): Promise<void> {
            if (ObjectExtensionMethods.HasValue(processor))
                await processor.Execute(args);
        }
    }
}