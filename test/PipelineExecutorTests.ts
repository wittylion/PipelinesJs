import { PipelineExecutor } from "../lib/src/PipelineExecutor";
import { PipelineRunner } from "../lib/src/PipelineRunner";

'use strict';
import { expect } from "chai";
import { PipelineMock } from "./mocks/PipelineMock";
import { ProcessorMock } from "./mocks/ProcessorMock";

describe('PipelinesJS Pipeline Executor', () => {
    context('Negative scenario', () => {
        it('Should throw an error when user tries to create an executor with undefined pipeline', () => {
            let executorFactory = () => {
                return new PipelineExecutor(undefined);
            }
            
            expect(executorFactory).throws(
                PipelineExecutor.PipelineIsNotSetError, 
                "When pipeline is undefined, an error must be thrown."
            );
        });

        it('Should throw an error when user tries to create an executor with null runner', () => {
            let executorFactory = () => {
                return new PipelineExecutor(new PipelineMock(), null);
            }
            
            expect(executorFactory).throws(
                PipelineExecutor.RunnerIsNotSetError, 
                "When runner is undefined, an error must be thrown."
            );
        });
    });
    
    context('Positive scenario', () => {
        it('Should execute processors specified in pipeline', async () => {

            let executed = false;
            let processor:ProcessorMock = new ProcessorMock(async() => { executed = true; });
            let pipeline:PipelineMock = new PipelineMock(undefined, [processor]);
            let executor = new PipelineExecutor(pipeline);
            await executor.Execute("");
            
            expect(executed).to.be.true;
        });
    });
});