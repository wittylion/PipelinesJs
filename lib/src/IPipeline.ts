import { IProcessor } from "./IProcessor";

/**
 * Binds together logical processors and itself
 * represents a complete action instruction,
 * which defines how processors must be executed.
 */
export interface IPipeline {
    /**
     * Returns processors in preferable order of execution.
     */
    GetProcessors(): IProcessor[];
}