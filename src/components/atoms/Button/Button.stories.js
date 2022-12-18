import Button from "./index";

export default {
  title: "atoms/button",
  component: Button,
  argTypes: {
    description: "The element(s) that should be rendered within the button",
    default: "undefined",
  },
  onClick: {
    description: "The action that is fired when the button is pressed",
  },
};
