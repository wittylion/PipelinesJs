/**
 * Represents a unit which can process some information.
 * You can think of this interface like about actions
 * in command pattern. It defines and responsible only
 * for a single @function Execute, which means that
 * whatever information is passed, it will be somehow processed.
 */
export interface IProcessor {

    /**
     * Main method of the processor, which can execute any single action,
     * that is represented by the name of the processor.
     * @param args Data that may be processed by this processor.
     */
    Execute(args: Object): Promise<void>;
}