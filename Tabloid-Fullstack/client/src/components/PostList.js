import React from "react";
import PostSummaryCard from "./PostSummaryCard";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostSummaryCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
