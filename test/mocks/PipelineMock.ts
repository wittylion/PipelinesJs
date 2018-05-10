import { IPipeline, IProcessor } from "../../lib";

export class PipelineMock implements IPipeline {

    constructor(
        public getProcessorFunction: () => void = () => {  }, 
        public processors: IProcessor[] = []
    ) {

    }

    GetProcessors(): IProcessor[] {
        this.getProcessorFunction();
        return this.processors;
    }
}