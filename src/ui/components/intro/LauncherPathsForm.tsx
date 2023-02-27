import Button from "../Button";
import Input from "../Input";

export default function LauncherPathsForm() {
  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold text-primary-11">
        Launcher paths
      </h1>
      <div className="flex flex-col gap-4">
        <div className="">
          <Input label="Steam" id="steam" />
          <Button color="primary" outline>
            Select
          </Button>
          {/* TODO: fix button position inline with button */}
        </div>
        <Input label="Epic Games" id="epic" />
        <Input label="EA app" id="ea" />
        <Input label="Ubisoft Connect" id="ubisoft" />
      </div>
      <button onClick={() => console.log(window.dialog.openDirPicker())}>
        awfeewfe
      </button>
    </div>
  );
}
