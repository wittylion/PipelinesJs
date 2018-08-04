import { IProcessor } from "../../IProcessor";
import { IPipeline } from "../../IPipeline";
import { PipelineContext } from "../../PipelineContext";
import { ActionProcessor } from "../processors/ActionProcessor";
import { CommonProcessors } from "../processors/CommonProcessors";
import { EnsurePropertyProcessor } from "../processors/EnsurePropertyProcessor";
import { ExecuteForEachElementInPropertyProcessor } from "../processors/ExecuteForEachElementInPropertyProcessor";
import { EnsurePropertyByContextProcessor } from "../processors/EnsurePropertyByContextProcessor";
import { ExecuteActionForPropertyProcessor } from "../processors/ExecuteActionForPropertyProcessor";

export abstract class ConstructablePipeline implements IPipeline {

    public abstract GetProcessors(): IProcessor[];

    public Action<TArgs>(action: (object: any) => Promise<void>): ActionProcessor<TArgs> {
        return CommonProcessors.Action<TArgs>(action);
    }

    public EnsureProperty<TValue>(propertyName: string, value: TValue): EnsurePropertyProcessor<TValue> {
        return CommonProcessors.EnsureProperty<TValue>(propertyName, value);
    }

    public EnsurePropertyByContext<TContext extends PipelineContext, TValue>(
        propertyName: string, 
        valueProvider: (TContext) => TValue
    ): EnsurePropertyByContextProcessor<TContext, TValue> {

        return CommonProcessors.EnsurePropertyByContext(propertyName, valueProvider);
    
    }

    public static ExecuteActionForProperty<TContext extends PipelineContext, TProperty>(
        propertyName: string,
        action: (TContext, TProperty) => Promise<void>
    ): ExecuteActionForPropertyProcessor<TContext, TProperty> {

        return CommonProcessors.ExecuteActionForProperty<TContext, TProperty>(propertyName, action);
    
    }

    public ExecuteForEachElementInProperty<TContext extends PipelineContext, TElement>(
        propertyName: string,
        action: (context: TContext, element: TElement) => Promise<void>
    ): ExecuteForEachElementInPropertyProcessor<TContext, TElement> {

        return CommonProcessors.ExecuteForEachElementInProperty<TContext, TElement>(propertyName, action);
    
    }
}