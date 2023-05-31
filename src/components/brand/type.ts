export enum variant {
  default = "brand-default",
  primary = "brand-primary",
  secondary = "brand-secondary",
}

export enum size {
  xm = "text-xm",
  sm = "text-sm",
  md = "text-md",
  lg = "text-lg",
  xl = "text-xl",
  xxl = "text-2xl",
  xxxl = "text-3xl",
}

export type Props = {
  variant?: variant;
  size: size;
};
