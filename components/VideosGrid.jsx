import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Video from "./Video";
import { useContext } from "react";
import { ControlsContext } from "@/app/page";

const VideosGrid = () => {
  const { videoTab, setVideoTab } = useContext(ControlsContext);

  return (
    <div>
      <Tabs value={videoTab} onValueChange={setVideoTab} className="w-[400px]">
        <TabsList>
          <TabsTrigger value="egocentric">Egocentric</TabsTrigger>
          <TabsTrigger value="level-1">Level 1</TabsTrigger>
          <TabsTrigger value="level-2">Level 2</TabsTrigger>
        </TabsList>
        <TabsContent value="egocentric">
          <Videos />
        </TabsContent>
        <TabsContent value="level-1">
          <Videos />
        </TabsContent>
        <TabsContent value="level-2">
          <Videos />
        </TabsContent>
      </Tabs>
    </div>
  );
};

function Videos() {
  return (
    <div className="grid w-[500px] grid-cols-2">
      {[...Array(6).keys()].map((i) => (
        <>
          <div>
            <Video src={"videos/camera_1.mov"} title={`Camera ${i + 1}`} />
          </div>
        </>
      ))}
    </div>
  );
}

export default VideosGrid;
