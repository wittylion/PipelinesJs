import { IPipeline } from './IPipeline';
import { PipelineRunner } from './PipelineRunner';

export class PipelineExecutor
{
    public static readonly PipelineIsNotSetError: string = "Pipeline object is not specified, pipeline executor requires an instance of pipeline object, which will be executed.";
    public static readonly RunnerIsNotSetError: string = "Pipeline runner is not specified, provide an instance of pipeline runner or use a default constructor.";

    
    private _pipeline : IPipeline;
    public get Pipeline() : IPipeline {
        return this._pipeline;
    }

    
    private _runner : PipelineRunner;
    public get Runner() : PipelineRunner {
        return this._runner;
    }

    public constructor(pipeline: IPipeline, runner: PipelineRunner = PipelineRunner.StaticInstance)
    {
        if (!pipeline)
        {
            throw new Error(PipelineExecutor.PipelineIsNotSetError);
        }

        if (!runner)
        {
            throw new Error(PipelineExecutor.RunnerIsNotSetError);
        }

        this._pipeline = pipeline;
        this._runner = runner;
    }

    public async Execute(args: any): Promise<void>
    {
        await this.Runner.RunPipeline(this.Pipeline, args);
    }
}