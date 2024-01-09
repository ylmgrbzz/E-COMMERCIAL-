import React from "react";
import Video from "../../assets/Video-card.jpg";

function VideoComponent() {
  return (
    <div className="flex justify-center py-28 px-8 sm:px-0">
      <img src={Video} alt="Video Card" />
    </div>
  );
}

export default VideoComponent;
