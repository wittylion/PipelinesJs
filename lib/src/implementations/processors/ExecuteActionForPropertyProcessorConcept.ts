import { PipelineContext } from "../../PipelineContext";
import { SafeProcessor } from "../../SafeProcessor";

export abstract class ExecuteActionForPropertyProcessorConcept<TContext extends PipelineContext, TProperty>
    extends SafeProcessor<TContext> {

    public async SafeExecute(args: TContext): Promise<void> {

        let propertyName = this.GetPropertyName(args);
        let property = args.GetPropertyValueOrUndefined<TProperty>(propertyName);
        if (!property) {
            return;
        }

        await this.PropertyExecution(args, property);
    }

    public abstract async PropertyExecution(args: TContext, property: TProperty): Promise<void>;
    public abstract GetPropertyName(args: TContext): string;
}