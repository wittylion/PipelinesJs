import { IPipeline } from "./IPipeline";
import { SafeTypeProcessor } from "./SafeTypeProcessor";
import { IProcessor } from "./IProcessor";

/**
 * Implementation of @see IPipeline 
 * which is intended to handle @see SafeTypeProcessor{TArgs} 
 * with arguments of type @see TArgs .
 * @typeparam TArgs 
 * Type of arguments which has to be handled by each processor of this pipeline.
 */
export abstract class SafeTypePipeline<TArgs> implements IPipeline {
    /**
     * Implementation of @see IPipeline.GetProcessors  method
     * which ensures that will be retrieved only processors that can
     * handle arguments of type @see TArgs .
     * @returns  
     * Processors that can handle arguments of type @see TArgs .
     */
    GetProcessors(): IProcessor[] {
        return this.GetProcessorsOfType();
    }

    /**
     * Retrieves all processors that can handle arguments of type @see TArgs .
     * @returns  
     * Enumerable instance of @see SafeTypeProcessor{TArgs} 
     * intended to handle the arguments of type @see TArgs .
     */
    public abstract GetProcessorsOfType(): SafeTypeProcessor<TArgs>[];
}