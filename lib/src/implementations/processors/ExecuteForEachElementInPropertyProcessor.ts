import { ExecuteForEachElementInPropertyProcessorConcept } from "./ExecuteForEachElementInPropertyProcessorConcept";
import { PipelineContext } from "../../PipelineContext";

export class ExecuteForEachElementInPropertyProcessor<TContext extends PipelineContext, TElement> extends
    ExecuteForEachElementInPropertyProcessorConcept<TContext, TElement>
{
    public static readonly ActionMustBeSpecifiedInGeneric: string =
        "Creating a generic class used to execute action for each element, you have to specify an action which will be executed on each element.";

    public static readonly PropertyNameMustBeSpecifiedInGeneric: string =
        "Creating a generic class used to execute action for each element, you have to specify property name of the enumerable of elements.";

    constructor(
        private readonly propertyName: string,
        private readonly action: (TContext, TElement) => Promise<void>
    ) {
        super();
        if (!action) {
            throw new ReferenceError(
                ExecuteForEachElementInPropertyProcessor.ActionMustBeSpecifiedInGeneric);
        }

        if (!propertyName) {
            throw new ReferenceError(
                ExecuteForEachElementInPropertyProcessor.PropertyNameMustBeSpecifiedInGeneric);
        }
    }

    public async ElementExecution(context: TContext, element: TElement): Promise<void> {
        this.action(context, element);
    }

    public GetPropertyName(context: TContext): string {
        return this.propertyName;
    }
}