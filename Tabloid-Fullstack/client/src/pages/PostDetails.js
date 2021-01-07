import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Jumbotron } from 'reactstrap';
import formatDate from '../utils/dateFormatter'

const PostDetails = () => {

  const { postId } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    fetch(`/api/post/${postId}`)
      .then((res) => {
        if (res.status === 404) {
          toast.error("This isn't the post you're looking for")
          return;
        }
        return res.json()
      })
      .then((post) => {
        setPost(post);
      });
  }, []);

  if (!post) return null;

  return (
    <div>
      <Jumbotron style={{ backgroundImage: `url('${post.imageLocation}')` }}>
      </Jumbotron>
      <div>
        {post.title}
      </div>
      <div>
        {post.content}
      </div>
      <div>
        {formatDate(post.publishDateTime)}
      </div>
      <div>
        {post.category.name}
      </div>
      <div>
        {post.userProfile.displayName}
      </div>



    </div>
  );
};

export default PostDetails;