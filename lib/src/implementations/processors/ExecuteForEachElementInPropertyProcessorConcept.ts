import { PipelineContext } from "../../PipelineContext";
import { SafeProcessor } from "../../SafeProcessor";

export abstract class ExecuteForEachElementInPropertyProcessorConcept<TContext extends PipelineContext, TElement>
    extends SafeProcessor<TContext> {

    public async SafeExecute(args: TContext): Promise<void> {

        let propertyName = this.GetPropertyName(args);
        let property = args.GetPropertyValueOrUndefined<TElement[]>(propertyName);
        if (!property) {
            return;
        }

        await this.CollectionExecution(args, property);
    }

    public async CollectionExecution(args: TContext, collection: TElement[]): Promise<void> {
        for (let element of collection) {
            await this.ElementExecution(args, element);
        }
    }

    public abstract ElementExecution(args: TContext, element: TElement): Promise<void>;
    public abstract GetPropertyName(args: TContext): string;

}