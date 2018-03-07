module Pipelines {
    export interface IProcessor {
        Execute(arguments: Object): Promise<void>;
    }
}