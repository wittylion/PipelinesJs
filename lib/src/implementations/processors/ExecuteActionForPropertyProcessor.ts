import { PipelineContext } from "../../PipelineContext";
import { ExecuteActionForPropertyProcessorConcept } from "./ExecuteActionForPropertyProcessorConcept";

export class ExecuteActionForPropertyProcessor<TContext extends PipelineContext, TProperty> extends
    ExecuteActionForPropertyProcessorConcept<TContext, TProperty>
{
    public static readonly ActionMustBeSpecifiedInGeneric: string =
        "Creating a generic class used to execute action for property, you have to specify an action which will be executed on each element.";

    public static readonly PropertyNameMustBeSpecifiedInGeneric: string =
        "Creating a generic class used to execute action for property, you have to specify property name of the enumerable of elements.";

    constructor(
        private readonly propertyName: string,
        private readonly action: (TContext, TProperty) => Promise<void>
    ) {
        super();
        if (!action) {
            throw new ReferenceError(
                ExecuteActionForPropertyProcessor.ActionMustBeSpecifiedInGeneric);
        }

        if (!propertyName) {
            throw new ReferenceError(
                ExecuteActionForPropertyProcessor.PropertyNameMustBeSpecifiedInGeneric);
        }
    }

    public async PropertyExecution(context: TContext, element: TProperty): Promise<void> {
        this.action(context, element);
    }

    public GetPropertyName(context: TContext): string {
        return this.propertyName;
    }
}