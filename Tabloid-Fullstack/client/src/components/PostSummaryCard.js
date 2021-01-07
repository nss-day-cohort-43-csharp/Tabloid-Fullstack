import React from "react";
import { Card } from "reactstrap";
import formatDate from "../utils/dateFormatter";
import "./PostSummaryCard.css";

const PostSummaryCard = ({ post }) => {
  return (
    <Card>
      <div className="row">
        <div className="col-lg-3 col-sm-12">
          <div
            className="post-summary__img"
            style={{
              backgroundImage: `url(${post.imageLocation})`,
            }}
          ></div>
        </div>
        <div className="col-lg-5 col-sm-12 py-3">
          <div>
            <h2>{post.title}</h2>
            <strong>{post.category.name}</strong>
          </div>
          <p className="text-justify">{post.previewText}</p>
        </div>
        <div className="col-lg-4 col-sm-12 mt-2 py-3 text-left">
          <p className="ml-5">Written by {post.authorName}</p>
          <p className="ml-5">
            Published on {formatDate(post.publishDateTime)}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PostSummaryCard;
