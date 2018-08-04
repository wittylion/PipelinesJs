import { PipelineContext } from "../../PipelineContext";
import { ExecuteActionForPropertyProcessorConcept } from "./ExecuteActionForPropertyProcessorConcept";

export abstract class ExecuteForEachElementInPropertyProcessorConcept<TContext extends PipelineContext, TElement>
    extends ExecuteActionForPropertyProcessorConcept<TContext, TElement[]> {

    public async PropertyExecution(args: TContext, property: TElement[]): Promise<void> {
        await this.CollectionExecution(args, property);
    }

    public async CollectionExecution(args: TContext, collection: TElement[]): Promise<void> {
        for (let element of collection) {
            await this.ElementExecution(args, element);
        }
    }

    public abstract ElementExecution(args: TContext, element: TElement): Promise<void>;
}