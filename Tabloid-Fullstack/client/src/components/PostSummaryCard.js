import React from "react";
import { Card } from "reactstrap";
import formatDate from "../utils/dateFormatter";

const PostSummaryCard = ({ post }) => {
  return (
    <Card>
      <div class="row">
        <div className="col-3">
          <img
            width="300"
            height="200"
            src={post.imageLocation}
            alt={post.title}
          />
        </div>
        <div className="col-5">
          <div>
            <h2>{post.title}</h2>
            <strong>{post.category.name}</strong>
          </div>
          <p>{post.previewText}</p>
        </div>
        <div className="col-4 mt-2">
          <p>Published on {formatDate(post.publishDateTime)}</p>
        </div>
      </div>
    </Card>
  );
};

export default PostSummaryCard;
