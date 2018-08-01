import { SafeTypeProcessor } from "../../SafeTypeProcessor";

export abstract class ConditionalProcessorConcept<TArgs> extends SafeTypeProcessor<TArgs> {

    constructor(protected condition: (TArgs) => boolean) {
        super();
    }

    public async SafeExecute(args: TArgs): Promise<void> {
        if (this.condition(args)) {
            await this.CustomExecute(args);
        }
    }

    public abstract CustomExecute(args: TArgs): Promise<void>;
}