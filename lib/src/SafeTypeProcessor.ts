import { IProcessor } from "./IProcessor";

export abstract class SafeTypeProcessor<T> implements IProcessor {
    public abstract SafeExecute(args: T): Promise<void>;
    public SafeCondition(args: T): boolean {
        return true;
    }
    public Execute(args: Object): Promise<void> {
        if (!(args as T)) {
            return;
        }

        if (!this.SafeCondition(<T>args)) {
            return;
        }

        return this.SafeExecute(<T>args);
    }
}