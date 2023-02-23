import { useAtom } from "jotai";
import { useState } from "react";

import { userConfig } from "../atoms";
import Button from "../components/Button";
import Splash from "../components/intro/Splash";
import Stepper from "../components/intro/Stepper";

const steps = [<Splash key="splash" />, <>xd</>];

export default function FirstStart() {
  const [step, setStep] = useState(0);
  const [config, setConfig] = useAtom(userConfig);

  const handleNextStep = () => {
    if (step < steps.length - 1) setStep((step) => ++step);
  };

  const handleBackStep = () => {
    setStep((step) => --step);
  };

  const handleEnd = () => {
    setConfig({ ...config, firstStart: false });
  };

  return (
    <div className="flex h-full flex-col items-center justify-center text-center text-xl">
      <div className="rounded-xl border-2 border-blue-600 bg-transparent p-16 shadow-2xl shadow-blue-600/30">
        {steps[step]}
        <div className="mt-8 flex items-center justify-between gap-4">
          {step === 0 ? (
            <Button type="secondary" onClick={handleEnd}>
              Skip
            </Button>
          ) : (
            <Button type="primary" onClick={handleBackStep}>
              Back
            </Button>
          )}
          <div className="flex-1">
            <Stepper step={step} />
          </div>
          <Button type="primary" onClick={handleNextStep}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
