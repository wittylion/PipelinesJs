import { ActionProcessor } from './ActionProcessor'
import { PipelineContext } from '../../PipelineContext';
import { EnsurePropertyProcessor } from './EnsurePropertyProcessor';
import { ExecuteForEachElementInPropertyProcessor } from './ExecuteForEachElementInPropertyProcessor';
import { EnsurePropertyByContextProcessor } from './EnsurePropertyByContextProcessor';
import { ExecuteActionForPropertyProcessor } from './ExecuteActionForPropertyProcessor';

export class CommonProcessors {
    public static Action<TArgs>(action: (Object) => Promise<void>): ActionProcessor<TArgs> {
        return ActionProcessor.FromAction<TArgs>(action);
    }

    public static EnsureProperty<TValue>(propertyName: string, value: TValue): EnsurePropertyProcessor<TValue> {
        return new EnsurePropertyProcessor<TValue>(propertyName, value);
    }

    public static EnsurePropertyByContext<TContext extends PipelineContext, TValue>(
        propertyName: string, 
        valueProvider: (TContext) => TValue
    ): EnsurePropertyByContextProcessor<TContext, TValue> {

        return new EnsurePropertyByContextProcessor<TContext, TValue>(propertyName, valueProvider);
    
    }

    public static ExecuteActionForProperty<TContext extends PipelineContext, TProperty>(
        propertyName: string,
        action: (TContext, TProperty) => Promise<void>
    ): ExecuteActionForPropertyProcessor<TContext, TProperty> {
        return new ExecuteActionForPropertyProcessor<TContext, TProperty>(propertyName, action);
    }

    public static ExecuteForEachElementInProperty<TContext extends PipelineContext, TElement>(
        propertyName: string,
        action: (context, element) => Promise<void>
    ): ExecuteForEachElementInPropertyProcessor<TContext, TElement> {
    
        return new ExecuteForEachElementInPropertyProcessor<TContext, TElement>(propertyName, action);
    
    }
}
