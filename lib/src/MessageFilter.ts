/**
 * Represents an information, to be used to filter
 * a set of messages, which were added to a non-sorted
 * collection.
 */
export enum MessageFilter {
    /**
     * Represents a filter for information messages only.
     */
    Informations = 1,

    /**
     * Represents a filter for warning messages only.
     */
    Warnings = 2,

    /**
     * Represents a filter for error messages only.
     */
    Errors = 4,

    /**
     * Represents a filter for all possible messages,
     * including: Informations, Warnings and Errors.
     */
    All = 7
}