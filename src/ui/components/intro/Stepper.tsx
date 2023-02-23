type StepperProps = {
  step: number;
};

export default function Stepper(props: StepperProps) {
  const { step } = props;

  return <div>{step}</div>;
}
