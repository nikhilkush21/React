import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts/1')
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10)))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="container">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}><strong>{post.title}</strong><p>{post.body}</p></li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
