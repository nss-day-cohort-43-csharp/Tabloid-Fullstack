import React, { useEffect, useState } from "react";
import PostList from "../components/PostList";

const Explore = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/post")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export default Explore;
