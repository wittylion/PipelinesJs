module Pipelines {
    export class PipelineContext {
        public IsAborted: boolean;
        protected Messages: PipelineMessage[];
        public GetMessages(filter: MessageFilter): PipelineMessage[] {
            if (this.Messages && this.Messages.length > 0) {
                if (filter == MessageFilter.All) {
                    return this.Messages;
                }
                return this.Messages.filter(message => (<number>message.MessageType & <number>filter) > 0);
            }
            return new Array(0);
        }
        public AbortPipeline(): void {
            this.IsAborted = true;
        }
        public AddMessageObject(message: PipelineMessage): void {
            this.Messages.push(message);
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
}