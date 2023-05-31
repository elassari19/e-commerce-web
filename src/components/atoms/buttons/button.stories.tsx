import { Button } from "..";

export default {
  title: "button",
  component: Button,
};

export const Default = () => <Button />;

export const large = {
  args: {
    size: "large",
    value: "large",
    variant: "primary",
  },
};
