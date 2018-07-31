import { PipelineContext } from "../../lib";
import { expect } from "chai";

describe("Pipeline context can create a new context", () => {

    const PROPERTY_NAME = { TEST: "testProperty" };

    specify("The property of child context will be undefined by default", () => {
        let context: PipelineContext = new PipelineContext();

        expect(context.GetPropertyValueOrUndefined(PROPERTY_NAME.TEST)).to.be.undefined;
    });

    specify("Newly created property will have a value on setter", () => {
        let context: PipelineContext = new PipelineContext();
        let val = "expectation";
        context.SetOrAddProperty(PROPERTY_NAME.TEST, val);

        expect(context.GetPropertyValueOrUndefined(PROPERTY_NAME.TEST)).eq(val);
    });

    specify("Setting property with existing value will change the value", () => {
        let context: PipelineContext = new PipelineContext();
        let val = "expectation";
        context.SetOrAddProperty(PROPERTY_NAME.TEST, val);
        let newVal = "New value of expectation";
        context.SetOrAddProperty(PROPERTY_NAME.TEST, newVal);

        expect(context.GetPropertyValueOrUndefined(PROPERTY_NAME.TEST)).eq(newVal);
    });

    specify("[AddOrSkipIfExists] Addding property with existing key will not change the value", () => {
        let context: PipelineContext = new PipelineContext();
        let val = "expectation";
        context.SetOrAddProperty(PROPERTY_NAME.TEST, val);
        let newVal = "New value of expectation";
        context.AddOrSkipPropertyIfExists(PROPERTY_NAME.TEST, newVal);

        expect(context.GetPropertyValueOrUndefined(PROPERTY_NAME.TEST)).eq(val);
    });

    /*
    context.CreateChild<>();
    context.GetOption();
    */
});