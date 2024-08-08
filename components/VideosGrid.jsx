import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Video from "./Video";
import { useContext } from "react";
import { ControlsContext } from "@/app/page";

const VideosGrid = () => {
  const { videoTab, setVideoTab, videoDate } = useContext(ControlsContext);

  return (
    <div>
      <Tabs value={videoTab} onValueChange={setVideoTab} className="w-[400px]">
        <TabsList>
          <TabsTrigger value="egocentric">Egocentric</TabsTrigger>
          <TabsTrigger value="level-1">Level 1</TabsTrigger>
          <TabsTrigger value="level-2">Level 2</TabsTrigger>
        </TabsList>
        <TabsContent value="egocentric" className="w-[600px]">
          {/* <Videos /> */}
          <Video src={`videos/${videoDate}/middle_section.mp4`} />
        </TabsContent>
        <TabsContent value="level-1" className="w-[600px]">
          {/* <Videos /> */}
          <Video src={`videos/${videoDate}/bottom_section.mp4`} />
        </TabsContent>
        <TabsContent value="level-2" className="w-[600px]">
          {/* <Videos /> */}
          <Video src={`videos/${videoDate}/top_section.mp4`} />
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

const videoPaths = [];

export default VideosGrid;
