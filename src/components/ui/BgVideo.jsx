import React from "react";

function BgVideo() {
  return (
    <div>
      <div>
        <video
          src="src/assets/BackgroundVideo/BgVideos.mp4"
          autoPlay
          loop
          muted
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
}

export default BgVideo;
