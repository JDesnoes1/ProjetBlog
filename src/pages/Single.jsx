import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img src="http://fakeimg.pl/300/" alt="" />
        <div className="user">
          <img src="http://fakeimg.pl/300/" alt="" />
          <div className="info">
            <span>Jhon</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eum.
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
          nihil quod commodi neque. Ab culpa molestias fugit veritatis
          voluptates in odio recusandae ipsam perspiciatis.
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut sapiente
          hic, soluta mollitia qui voluptatem expedita provident debitis natus
          optio cumque ea, eveniet perspiciatis voluptates.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam
          facere pariatur nihil saepe molestiae perspiciatis! Molestias numquam
          sequi repellendus magnam, culpa deserunt commodi. Repellendus.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          error nulla porro animi a, totam cumque quibusdam expedita eos
          deserunt accusamus modi! Omnis dolor, eum porro consequuntur vero
          blanditiis tenetur quia fugiat quam sequi corporis minima recusandae
          nesciunt nostrum consequatur possimus quaerat, aperiam temporibus qui
          reiciendis dolorem dignissimos! Accusamus, ullam?
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;
