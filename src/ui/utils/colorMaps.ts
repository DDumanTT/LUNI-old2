type ColorsMapRecord = Record<ComponentColors, string>;

const bgColors: ColorsMapRecord = {
  primary: "bg-primary-3 hover:bg-primary-4 active:bg-primary-5",
  secondary: "bg-secondary-3 hover:bg-secondary-4 active:bg-secondary-5",
  success: "bg-success-3 hover:bg-success-4 active:bg-success-5",
  info: "bg-info-3 hover:bg-info-4 active:bg-info-5",
  warning: "bg-warning-3 hover:bg-warning-4 active:bg-warning-5",
  error: "bg-error-3 hover:bg-error-4 active:bg-error-5",
};

const importantBgColors: ColorsMapRecord = {
  primary: "bg-primary-6 hover:bg-primary-7 active:bg-primary-8",
  secondary: "bg-secondary-6 hover:bg-secondary-7 active:bg-secondary-8",
  success: "bg-success-6 hover:bg-success-7 active:bg-success-8",
  info: "bg-info-6 hover:bg-info-7 active:bg-info-8",
  warning: "bg-warning-6 hover:bg-warning-7 active:bg-warning-8",
  error: "bg-error-6 hover:bg-error-7 active:bg-error-8",
};

const borderColors: ColorsMapRecord = {
  primary: "border-primary-7 hover:border-primary-8 bg-primary-3",
  secondary: "border-secondary-7 hover:border-secondary-8 bg-secondary-3",
  success: "border-success-7 hover:border-success-8 bg-success-3",
  info: "border-info-7 hover:border-info-8 bg-info-3",
  warning: "border-warning-7 hover:border-warning-8 bg-warning-3",
  error: "border-error-7 hover:border-error-8 bg-error-3",
};

const textColors: ColorsMapRecord = {
  primary: "text-primary-12",
  secondary: "text-secondary-12",
  success: "text-success-12",
  info: "text-info-12",
  warning: "text-warning-12",
  error: "text-error-12",
};

export { textColors, borderColors, bgColors, importantBgColors };
