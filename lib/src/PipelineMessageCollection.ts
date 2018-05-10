import { PipelineMessage } from "./PipelineMessage";
import { MessageType } from "./MessageType";
import { MessageFilter } from "./MessageFilter";

export class PipelineMessageCollection extends Array<PipelineMessage>
{
    constructor(items?: PipelineMessage[]) {
        super();
        items && this.AddMessageObjects(items);
    }
        
    public AddMessageObjects(messages: PipelineMessage[]): void
    {
        if (!messages) {
            return;
        }

        for (let message of messages)
        {
            this.push(message);
        }
    }

    public AddMessage(message: string, messageType: MessageType = MessageType.Information): void {
        this.push(new PipelineMessage(message, messageType));
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

    public GetMessages(filter: MessageFilter): PipelineMessage[] {
        if (filter == MessageFilter.All) {
            return this;
        }

        return this.filter(message => (<number>message.MessageType & <number>filter) > 0);
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
}