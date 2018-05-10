import { PipelineContext } from "./PipelineContext";

export class QueryContext<TResult> extends PipelineContext {
    protected Result: TResult | undefined;

    public GetResult(): TResult {
        return this.Result;
    }

    public GetResultOr(fallbackValue: TResult): TResult {
        return this.Result === undefined ? fallbackValue : this.Result;
    }

    public AbortPipelineWithErrorAndNoResult(message: string) {
        this.Result = undefined;
        this.AbortPipelineWithErrorMessage(message);
    }

    public AbortPipelineWithWarningAndNoResult(message: string) {
        this.Result = undefined;
        this.AbortPipelineWithWarningMessage(message);
    }

    public AbortPipelineWithInformationAndNoResult(message: string) {
        this.Result = undefined;
        this.AbortPipelineWithInformationMessage(message);
    }

    public ResetResultWithInformation(message: string) {
        this.Result = undefined;
        this.AddInformation(message);
    }

    public ResetResultWithWarning(message: string) {
        this.Result = undefined;
        this.AddWarning(message);
    }

    public ResetResultWithError(message: string) {
        this.Result = undefined;
        this.AddError(message);
    }

    public SetResultWithInformation(result: TResult, message: string) {
        this.Result = result;
        this.AddInformation(message);
    }

    public SetResultWithWarning(result: TResult, message: string) {
        this.Result = result;
        this.AddWarning(message);
    }

    public SetResultWithError(result: TResult, message: string) {
        this.Result = result;
        this.AddError(message);
    }
}