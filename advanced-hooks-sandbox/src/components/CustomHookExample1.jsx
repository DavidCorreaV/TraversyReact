import React from "react";
import useFetch from "../hooks/useFetch";
const CustomHookExample1 = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );
  console.log(data);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
};

export default CustomHookExample1;
