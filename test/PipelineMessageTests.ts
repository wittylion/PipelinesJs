import { PipelineMessage } from "../lib/src/PipelineMessage";
import { MessageType } from "../lib/src/MessageType";

'use strict';
import { expect } from "chai";

describe('PipelinesJS Pipeline Message', () => {
    context('Negative scenario', () => {
        it('Should throw an error when user tries to create a message with undefined text.', () => {
            let messageFactory = () => {
                return new PipelineMessage(undefined, MessageType.Error);
            }
            
            expect(messageFactory).throws(
                PipelineMessage.MessageIsNotSetError, 
                "When message text is undefined, an error must be thrown."
            );
        });

        it('Should throw an error when user tries to create a message with empty text.', () => {
            let messageFactory = () => {
                return new PipelineMessage("", MessageType.Error);
            }
            
            expect(messageFactory).throws(
                PipelineMessage.MessageIsNotSetError, 
                "When message text is empty, an error must be thrown."
            );
        });
    });
    
    context('Positive scenario', () => {
        it('Should not throw an error when user creates a message with text.', () => {
            let messageFactory = () => {
                return new PipelineMessage("Information message", MessageType.Information);
            }
            
            expect(messageFactory).does.not.throw(
                PipelineMessage.MessageIsNotSetError,
                "Pipeline message should be created with a text provided."
            );
        });
    });
});