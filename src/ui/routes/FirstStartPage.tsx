import { useAtom } from "jotai";
import { useState } from "react";

import { isFirstStartAtom, launcherPathsAtom } from "../atoms";
import Button from "../components/Button";
import GameSelection from "../components/intro/GameSelection";
import LauncherPathsForm from "../components/intro/LauncherPathsForm";
import Splash from "../components/intro/Splash";
import Stepper from "../components/intro/Stepper";

const steps = [
  <Splash key="splash" />,
  <LauncherPathsForm key="launcherPaths" />,
  <GameSelection key="gameSelect" />,
];

export default function FirstStartPage() {
  const [step, setStep] = useState(0);
  const [isFirstStart, setIsFirstStart] = useAtom(isFirstStartAtom);
  const [paths, setPaths] = useAtom(launcherPathsAtom);

  const handleNextStep = () => {
    if (step < steps.length - 1) setStep((step) => ++step);
  };

  const handleBackStep = () => {
    setStep((step) => --step);
  };

  const handleSkip = () => {
    setIsFirstStart(false);
  };

  const handleFinish = () => {
    setIsFirstStart(false);
  };

  return (
    <div className="flex h-full flex-col items-center justify-center text-center text-xl">
      <div className="relative max-h-[80%] rounded-xl border-4 border-primary-7 bg-primary-3 px-16 py-10 shadow-2xl">
        <div className="absolute -top-2 -left-2 -z-50 h-[calc(100%+1rem)] w-[calc(100%+1rem)] rounded-xl border-8 border-primary-7 blur-md"></div>
        <div className="flex h-full flex-col">
          {steps[step]}
          <div className="mt-8 flex items-center justify-between gap-4">
            {step <= 0 ? (
              <Button color="error" onClick={handleSkip}>
                Skip
              </Button>
            ) : (
              <Button color="primary" important onClick={handleBackStep}>
                Back
              </Button>
            )}
            <div className="flex-1">
              <Stepper step={step} />
            </div>
            {step >= steps.length - 1 ? (
              <Button color="primary" important onClick={handleFinish}>
                Finish
              </Button>
            ) : (
              <Button color="primary" important onClick={handleNextStep}>
                Continue
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
