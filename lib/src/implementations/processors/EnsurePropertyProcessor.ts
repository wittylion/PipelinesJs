import { EnsurePropertyProcessorConcept } from "./EnsurePropertyProcessorConcept";

export class EnsurePropertyProcessor<TValue> extends EnsurePropertyProcessorConcept<TValue> {

    constructor(private readonly name: string, private readonly value: TValue) {
        super();
    }

    public GetName(): string {
        return this.name;
    }

    public GetValue(): TValue {
        return this.value;
    }
}