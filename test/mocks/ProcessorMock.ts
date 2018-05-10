import { IProcessor } from "../../lib";

export class ProcessorMock implements IProcessor {
    constructor(
        public executeFunction: () => Promise<void> = async () => {  }
    ) {

    }
    
    Execute(args: Object): Promise<void> {
        return this.executeFunction();
    }
}