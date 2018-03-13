export interface IProcessor {
    Execute(args: Object): Promise<void>;
}