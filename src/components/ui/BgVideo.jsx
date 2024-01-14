import React from "react";

function BgVideo() {
  return (
    <div>
      <div>
        <video
          src="../../assets/BgVideo.mp4"
          autoPlay
          loop
          muted
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}

export default BgVideo;
