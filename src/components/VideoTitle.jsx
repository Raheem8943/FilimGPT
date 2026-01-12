import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-xl py-6 w-1/4">{overview}</p>
      <div className="flex">
        <button className="p-4 px-16 bg-gray-500/50 text-xl mx-3 text-white rounded-sm font-bold flex items-center gap-2">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <polygon points="5 3 19 12 5 21" />
          </svg>
          Play
        </button>
        <button className="p-4 px-16 bg-gray-500/50 text-xl mx-3 text-white rounded-sm font-bold">
          More Info ⓘ
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
