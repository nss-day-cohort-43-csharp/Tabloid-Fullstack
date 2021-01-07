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
    <div className="row">
      <div className="col-2"></div>
      <div className="col-10">
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default Explore;
