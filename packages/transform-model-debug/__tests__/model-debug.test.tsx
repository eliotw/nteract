import { mount } from "enzyme";
import React from "react";

import ModelDebug from "../src";

describe("ModelDebug", () => {
  it("renders all models when no modelID set", () => {
    const modelDebugWrapper = mount(
      <ModelDebug data={"hey"} models={{ 1: { fun: true } }} />
    );

    const instance = modelDebugWrapper.instance();
    if (instance.shouldComponentUpdate !== undefined) {
      expect(instance.shouldComponentUpdate({}, {}, {})).toBeTruthy();
    }

    expect(
      modelDebugWrapper.contains(
        <pre>{JSON.stringify({ 1: { fun: true } }, null, 2)}</pre>
      )
    ).toEqual(true);
  });
});
