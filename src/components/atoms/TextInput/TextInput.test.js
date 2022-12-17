import React from "react";
import { screen, render } from "@testing-library/react";

import TextInput from "./TextInput";

describe("TextInput", () => {
  it("should show container", () => {
    const { container } = render(<TextInput />);
    expect(container).toMatchSnapshot();
  });
});
