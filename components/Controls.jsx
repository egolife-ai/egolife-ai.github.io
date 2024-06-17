import { ControlsContext } from "@/app/page";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Cctv, Home } from "lucide-react";
import { useContext } from "react";
import { Toggle } from "@/components/ui/toggle";

const Controls = () => {
  const { homeView, setHomeView, showSights, setShowSights } =
    useContext(ControlsContext);

  return (
    <div className="flex gap-5 bg-yellow-50/50 p-5 backdrop-blur rounded-lg">
      <RadioGroup
        defaultValue="all"
        value={homeView}
        onValueChange={setHomeView}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="all" id="all" />
          <Label htmlFor="all">
            <Home className="size-5" />
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="level-1" id="level-1" />
          <Label htmlFor="level-1">Level 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="level-2" id="level-2" />
          <Label htmlFor="level-2">Level 2</Label>
        </div>
      </RadioGroup>

      <Toggle
        variant="outline"
        pressed={showSights}
        onPressedChange={setShowSights}
      >
        <Cctv className="size-5" />
      </Toggle>
    </div>
  );
};

export default Controls;
