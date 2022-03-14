import React,{ useState } from "react";
import { TopUser } from "../types";
import ViewUser from "./ViewUser";

//a component that displays top users
const Person = (props: TopUser) => {
  const { unStarUser, id, name, email } = props;
  const [star, setStar] = useState("unstar");
  const [modalShow, setModalShow] = useState(false);

  //a callback function to remove a top user
  const handleStar = () => {
    setStar("star");
    unStarUser(props);
  };

  return (
    <div key={id} className="person">
      <h2
        onClick={() => {
          setModalShow(!modalShow);
        }}
      >
        {name}
      </h2>
      <p>{email}</p>
      <button className="options star" onClick={handleStar}>
        {star}
      </button>
      <ViewUser
        show={modalShow}
        handleClose={() => {
          setModalShow(!modalShow);
        }}
        {...props}
      />
    </div>
  );
};

export default Person;
