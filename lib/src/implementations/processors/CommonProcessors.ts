import { ActionProcessor } from './ActionProcessor'
import { PipelineContext } from '../../PipelineContext';
import { EnsurePropertyProcessor } from './EnsurePropertyProcessor';
import { ExecuteForEachElementInPropertyProcessor } from './ExecuteForEachElementInPropertyProcessor';
import { EnsurePropertyByContextProcessor } from './EnsurePropertyByContextProcessor';

export class CommonProcessors {
    public static Action<TArgs>(action: (Object) => Promise<void>): ActionProcessor<TArgs> {
        return ActionProcessor.FromAction<TArgs>(action);
    }

    public static EnsureProperty<TValue>(name: string, value: TValue): EnsurePropertyProcessor<TValue> {
        return new EnsurePropertyProcessor<TValue>(name, value);
    }

    public static EnsurePropertyByContext<TContext extends PipelineContext, TValue>(
        name: string, 
        valueProvider: (TContext) => TValue
    ): EnsurePropertyByContextProcessor<TContext, TValue> {

        return new EnsurePropertyByContextProcessor<TContext, TValue>(name, valueProvider);
    
    }

    public static ExecuteForEachElementInProperty<TContext extends PipelineContext, TElement>(
        action: (context, element) => Promise<void>,
        propertyName: string
    ): ExecuteForEachElementInPropertyProcessor<TContext, TElement> {
    
        return new ExecuteForEachElementInPropertyProcessor<TContext, TElement>(action, propertyName);
    
    }
}
