import { MessageType } from "./MessageType";
import { ObjectExtensionMethods } from "../ExtensionMethods/ObjectExtensions";

export class PipelineMessage {
    public static MessageIsNotSetError: string = "String representing a message text should be specified.";
    public Message: string;
    public MessageType: MessageType;
    constructor(message: string, messageType: MessageType) {
        if (ObjectExtensionMethods.HasNoValue(message)) {
            throw new Error(PipelineMessage.MessageIsNotSetError);
        }
        this.Message = message;
        this.MessageType = messageType;
    }
}