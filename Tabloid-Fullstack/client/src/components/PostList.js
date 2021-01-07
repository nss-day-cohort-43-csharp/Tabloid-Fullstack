import React from "react";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.previewText}</p>
          <p>{post.imageLocation}</p>
          <p>{post.authorName}</p>
          <p>{post.publishDateTime}</p>
          <p>{post.category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
