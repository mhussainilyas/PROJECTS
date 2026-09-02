import React from "react";

export default function NewsCard({ newsDetail }) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          className="aspect-video object-cover w-full"
          src={newsDetail?.urlToImage}
          alt="loading_image..."
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-2">{newsDetail?.title}</h2>
        <p className="line-clamp-3">{newsDetail?.description}</p>
        <div className="card-actions justify-start mt-3">
          <button
            onClick={() => window.open(newsDetail.url)}
            className="btn btn-neutral"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
