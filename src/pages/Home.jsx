import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const posts = [
    {
      id: 1,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, vero!",
      img: "http://fakeimg.pl/300/",
    },
    {
      id: 2,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, vero!",
      img: "http://fakeimg.pl/300/",
    },
    {
      id: 3,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, vero!",
      img: "http://fakeimg.pl/300/",
    },
    {
      id: 4,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, vero!",
      img: "http://fakeimg.pl/300/",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
