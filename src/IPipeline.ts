import { IProcessor } from "./IProcessor";

export interface IPipeline {
    GetProcessors(): IProcessor[];
}