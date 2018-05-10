import { MessageType } from "./MessageType";
import { HasNoValue } from "./ObjectExtensions";

export class PipelineMessage {
    public static MessageIsNotSetError: string = "String representing a message text should be specified.";
    public Message: string;
    public MessageType: MessageType;
    constructor(message: string, messageType: MessageType) {
        if (HasNoValue(message)) {
            throw new Error(PipelineMessage.MessageIsNotSetError);
        }
        this.Message = message;
        this.MessageType = messageType;
    }
}