import { MessageType } from "./MessageType";
import { PipelineMessage } from "./PipelineMessage";
import { MessageFilter } from "./MessageFilter";
import { PipelineMessageCollection } from "./PipelineMessageCollection";

export class ContextProperty {
    constructor(
        public name: string,
        public value: any,
    ) {

    }
}

/**
 * Introduces possibility to keep context information
 * about the flow of the pipeline, like:
 * messages and whether pipeline was aborted.
 */
export class PipelineContext {
    public IsAborted: boolean = false;

    protected Properties: ContextProperty[] = [];
    protected Messages: PipelineMessage[] = new PipelineMessageCollection();

    public GetPropertyValueOrUndefined<T>(name: string): T {
        return this.GetPropertyValueOrDefault<T>(name, undefined);
    }

    public GetPropertyValueOrDefault<T>(name: string, defaultValue: T): T {
        let property = this.Properties.find(x => x.name == name);

        if (property)
        {
            if (property.value as T) {
                return <T>property.value;
            }
        }

        return defaultValue;
    }

    public AddOrSkipPropertyIfExists<T>(name: string, value: T) {
        let property = this.Properties.find(x => x.name == name);

        if (property)
            return;

        return this.Properties.push(new ContextProperty(name, value));
    }

    public SetOrAddProperty<T>(name: string, value: T) {
        this.UpdateOrAddProperty(name, value);
    }

    public UpdateOrAddProperty<T>(name: string, value: T) {
        let property = this.Properties.find(x => x.name == name);

        if (property)
            property.value = value;

        return this.Properties.push(new ContextProperty(name, value));
    }

    public GetMessages(filter: MessageFilter): PipelineMessage[] {
        if (this.Messages && this.Messages.length > 0) {
            if (filter == MessageFilter.All) {
                return this.Messages;
            }
            return this.Messages.filter(message => (<number>message.MessageType & <number>filter) > 0);
        }
        return new Array(0);
    }

    public GetAllMessages(): PipelineMessage[] {
        return this.GetMessages(MessageFilter.All);
    }

    public GetInformationsAndWarnings(): PipelineMessage[] {
        return this.GetMessages(MessageFilter.Informations | MessageFilter.Warnings);
    }

    public GetWarningsAndErrors(): PipelineMessage[] {
        return this.GetMessages(MessageFilter.Warnings | MessageFilter.Errors);
    }

    public GetInformationMessages(): PipelineMessage[] {
        return this.GetMessages(MessageFilter.Informations);
    }

    public GetWarningMessages(): PipelineMessage[] {
        return this.GetMessages(MessageFilter.Warnings);
    }

    public GetErrorMessages(): PipelineMessage[] {
        return this.GetMessages(MessageFilter.Errors);
    }

    public AbortPipeline(): void {
        this.IsAborted = true;
    }

    public AddMessageObject(message: PipelineMessage): void {
        this.Messages.push(message);
    }

    public AddMessageObjects(messages: PipelineMessage[]): void {
        this.Messages.concat(messages);
    }

    public AddMessage(message: string, messageType: MessageType = MessageType.Information): void {
        this.AddMessageObject(new PipelineMessage(message, messageType));
    }

    public AbortPipelineWithMessage(message: string): void {
        this.AbortPipeline();
        this.AddMessage(message);
    }

    public AbortPipelineWithTypedMessage(message: string, type: MessageType): void {
        this.AbortPipeline();
        this.AddMessage(message, type);
    }

    public AbortPipelineWithErrorMessage(message: string): void {
        this.AbortPipelineWithTypedMessage(message, MessageType.Error);
    }

    public AbortPipelineWithWarningMessage(message: string): void {
        this.AbortPipelineWithTypedMessage(message, MessageType.Warning);
    }

    public AbortPipelineWithInformationMessage(message: string): void {
        this.AbortPipelineWithTypedMessage(message, MessageType.Information);
    }

    public AddInformation(message: string): void {
        this.AddMessage(message, MessageType.Information);
    }

    public AddWarning(message: string): void {
        this.AddMessage(message, MessageType.Warning);
    }

    public AddError(message: string): void {
        this.AddMessage(message, MessageType.Error);
    }
}
