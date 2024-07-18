import { useRef } from "react";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

const Video = ({ src, title }) => {
  const videoRef = useRef();

  return (
    // <video ref={videoRef} muted autoPlay className="h-full w-full object-cover">
    //   <source src={src} type="video/mp4" />
    // </video>
    <MediaPlayer title={title} src={src} playsInline autoPlay loop muted>
      <MediaProvider />
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  );
};

export default Video;
