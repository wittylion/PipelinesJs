import { ConditionalProcessorConcept } from "./ConditionalProcessorConcept";
import { IProcessor } from "../../IProcessor";

export class ConditionalProcessorWrapper<TArgs> extends ConditionalProcessorConcept<TArgs>
{

    public static readonly ProcessorMustBeSpecifiedInGeneric: string = "Creating a generic 'conditional' processor wrapper, that wraps another processor with if statement, you have to provide a processor to wrap.";

    public constructor(protected condition: (TArgs) => boolean, protected processor: IProcessor) {
        super(condition);
        if (!processor) {
            throw new ReferenceError(
                ConditionalProcessorWrapper.ProcessorMustBeSpecifiedInGeneric);
        }
    }

    public async CustomExecute(args: TArgs): Promise<void> {
        await this.processor.Execute(args);
    }
}