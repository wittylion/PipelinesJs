import { IPipeline } from "../../IPipeline";
import { IProcessor } from "../../IProcessor";

export class PipelineOfState<TStateObject> implements IPipeline
{
    constructor(private state: TStateObject, private processorsRetriever: (TStateObject) => IProcessor[]) {}

    GetProcessors(): IProcessor[] {
        return this.processorsRetriever(this.state);
    }
}