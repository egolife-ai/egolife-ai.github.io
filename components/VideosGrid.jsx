import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VideosGrid = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
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
  );
};

function Videos() {
  return (
    <div className="grid grid-cols-2">
      {[...Array(6).keys()].map((i) => (
        <>
          <div>
            <video muted autoPlay className="h-full w-full object-cover">
              <source src={"videos/camera_1.mov"} type="video/mp4" />
            </video>
          </div>
        </>
      ))}
    </div>
  );
}

export default VideosGrid;
