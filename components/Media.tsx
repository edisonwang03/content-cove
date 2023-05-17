import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

const Media = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src="../images/thumbnail.jpg" alt="Thumbnail" /></figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Media;
