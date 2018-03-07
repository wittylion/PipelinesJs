module Pipelines {
    export interface IPipeline {
        GetProcessors(): IProcessor[];
    }
}