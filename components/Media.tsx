import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

const Media = () => {
  return (
    
    <div className="card card-compact w-96 bg-gray-900 shadow-xl">
      <figure><img src="../images/thumbnail.jpg" alt="Thumbnail" /></figure>
      <div className="card-body">
      <h2 className="card-title truncate overflow-hidden">
        <span className="inline-block max-w-full truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </h2>
        <p>Placeholder Channel</p>
        <p>10,000 Views/Viewers</p>
        <div className="card-actions justify-end">
          <div className="badge bg-purple-700 text-white font-bold">Twitch</div>
          <div className="badge bg-red-700 text-white font-bold">YouTube</div>
        </div>
      </div>
    </div>
  );
};

export default Media;
