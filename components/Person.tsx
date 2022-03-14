import React,{ useState } from "react";
import { Person } from "../types";
import ViewUser from "./ViewUser";

//component that displays users on users page
const Person = (props: Person) => {
  const {
    blockUser,
    unblockUser,
    starUser,
    unStarUser,
    id,
    name,
    email,
  } = props;
  const [star, setStar] = useState("star");
  const [block, setBlock] = useState("block");
  const [modalShow, setModalShow] = useState(false);

  //a callback function that is triggered when block button
  //is clicked
  const handleBlock = (): void => {
    if (block === "block") {
      blockUser(id);
      setBlock("unblock");
    } else {
      setBlock("block");
      unblockUser(id);
    }
  };

  //a callback function that is triggered when star button
  //is clicked
  const handleStar = (): void => {
    if (star === "star") {
      setStar("unstar");
      starUser(props);
    } else {
      setStar("star");
      unStarUser(props);
    }
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
      <button
        className="options star"
        onClick={handleStar}
      >
        {star}
      </button>
      <button
        className="options block"
        onClick={handleBlock}
      >
        {block}
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
