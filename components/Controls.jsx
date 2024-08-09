import { ControlsContext } from "@/app/page";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { BrickWall, Cctv, Home, Pointer, X } from "lucide-react";
import { useContext } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Slider } from "@/components/ui/slider";
import { motion, MotionConfig } from "framer-motion";
import { cn } from "@/lib/utils";
import DatePicker from "./DatePicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Controls = () => {
  const {
    homeView,
    setHomeView,
    showSights,
    setShowSights,
    showWalls,
    setShowWalls,
    allowControl,
    setAllowControl,
    showDemo,
    setShowDemo,
    videoDate,
    setVideoDate,
    showAllVideos,
    setShowAllVideos,
  } = useContext(ControlsContext);

  return (
    <div className="flex items-center gap-7 rounded-lg border bg-yellow-50/80 p-3 shadow-xl backdrop-blur">
      {/* <div className="flex flex-col gap-2"> */}
      {/* Toggle Walls / Roof */}

      {/* <MotionDiv show={showToggleWalls}> */}
      {/* <InputGroup label="Show Walls / Roof">
          <Toggle
            variant="outline"
            pressed={showWalls}
            onPressedChange={setShowWalls}
            className="px-2"
          >
            <BrickWall className="size-4" />
          </Toggle>
        </InputGroup> */}
      {/* </MotionDiv> */}

      {/* <InputGroup label="Show Demo">
          <Toggle
            variant="outline"
            pressed={showDemo}
            onPressedChange={setShowDemo}
            className="px-2"
          >
            <Cctv className="size-4" />
          </Toggle>
        </InputGroup> */}

      {/* Toggle Sights */}
      {/* <MotionDiv show={showToggleSights}> */}
      {/* <InputGroup label="Show All Videos">
          <Toggle
            variant="outline"
            pressed={showSights}
            onPressedChange={setShowSights}
            className="px-2"
          >
            <Cctv className="size-4" />
          </Toggle>
        </InputGroup> */}
      {/* </MotionDiv> */}
      {/* </div> */}

      <div className="flex flex-col items-center gap-4">
        <InputGroup label="Show Walls / Roof">
          <Toggle
            variant="outline"
            pressed={showWalls}
            onPressedChange={setShowWalls}
            className="px-2"
          >
            <BrickWall className="size-4" />
          </Toggle>
        </InputGroup>
        <RadioGroup
          defaultValue="all"
          value={homeView}
          onValueChange={setHomeView}
          className="mx-2 mt-[0px]"
          id="radio-view"
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
      </div>

      <div className="flex flex-col justify-between gap-2">
        {/* <Select defaultValue="demo1_blur" className="mb-auto"> */}
        <Select
          value={videoDate}
          onValueChange={setVideoDate}
          className="mb-auto"
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select Date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="demo1_blur">Day 1, 11:22</SelectItem>
            <SelectItem value="demo2_blur">Day 1, 13:20</SelectItem>
          </SelectContent>
        </Select>

        <InputGroup label="Show Videos">
          <Toggle
            variant="outline"
            pressed={showAllVideos}
            onPressedChange={setShowAllVideos}
            className="px-2"
          >
            <Cctv className="size-4" />
          </Toggle>
        </InputGroup>

        {/* <DatePicker value={videoDate} onChange={setVideoDate} /> */}
        {/* <RadioGroup
          // defaultValue="all"
          // value={homeView}
          // onValueChange={setHomeView}
          className=""
          id="radio-view"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all">11:30</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="level-1" id="level-1" />
            <Label htmlFor="level-1">17:30</Label>
          </div>
        </RadioGroup> */}
      </div>

      <div className="animate-bounce">
        <motion.button
          id="button-control"
          className={cn(
            "animate-pulse rounded-full border bg-yellow-50 p-2 shadow",
            !allowControl ? "animate-pulse" : "",
          )}
          onClick={() => {
            setAllowControl(!allowControl);
          }}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0)" }}
          exit={{ opacity: 0, filter: "blur(4px)" }}
        >
          {allowControl ? (
            <X className="size-10" />
          ) : (
            <div className="flex items-center gap-2 px-2 text-sm font-bold">
              <Pointer className="size-5" />
              <div className="leading-tight text-teal-600">
                Allow zoom <br /> and panning
              </div>
            </div>
          )}
        </motion.button>
      </div>
    </div>
  );
};

function InputGroup({ label, children }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {children}
      <div>{label}</div>
    </div>
  );
}

function MotionDiv({ show, children }) {
  return (
    <motion.div
      variants={variants}
      initial="hide"
      animate={show ? "show" : "hide"}
    >
      {children}
    </motion.div>
  );
}

const variants = {
  hide: {
    opacity: 0,
    visibility: "hidden",
  },
  show: {
    opacity: 1,
    visibility: "visible",
  },
};

export default Controls;
