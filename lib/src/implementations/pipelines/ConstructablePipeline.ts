import { IProcessor } from "../../IProcessor";
import { IPipeline } from "../../IPipeline";
import { PipelineContext } from "../../PipelineContext";
import { ActionProcessor } from "../processors/ActionProcessor";
import { CommonProcessors } from "../processors/CommonProcessors";
import { EnsurePropertyProcessor } from "../processors/EnsurePropertyProcessor";
import { ExecuteForEachElementInPropertyProcessor } from "../processors/ExecuteForEachElementInPropertyProcessor";

export abstract class ConstructablePipeline implements IPipeline {

    public abstract GetProcessors(): IProcessor[];

    public Action<TArgs>(action: (object: any) => Promise<void>): ActionProcessor<TArgs> {
        return CommonProcessors.Action<TArgs>(action);
    }

    public EnsureProperty<TValue>(name: string, value: TValue): EnsurePropertyProcessor<TValue> {
        return CommonProcessors.EnsureProperty<TValue>(name, value);
    }

    public ExecuteForEachElementInProperty<TContext extends PipelineContext, TElement>(
        action: (context: TContext, element: TElement) => Promise<void>,
        propertyName: string
    ): ExecuteForEachElementInPropertyProcessor<TContext, TElement> {
        return CommonProcessors.ExecuteForEachElementInProperty<TContext, TElement>(action, propertyName);
    }
}