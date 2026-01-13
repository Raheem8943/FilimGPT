import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="text-[15px] py-6 w-1/4 text-white">{overview}</p>
      <div className="flex items-center pt-4">
        <button className="py-2 px-8 bg-white text-lg text-black rounded-sm font-bold flex items-center gap-2 hover:bg-white/50 mr-4">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <polygon points="5 3 19 12 5 21" />
          </svg>
          Play
        </button>
        <button className="py-2 px-8 bg-gray-500/50 text-lg text-white rounded-sm font-bold hover:bg-gray-600/50">
          More Info ⓘ
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
