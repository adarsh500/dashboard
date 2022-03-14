import React,{ useState } from "react";
import ViewUser from "./ViewUser";

const Person = (props: any) => {
  const {
    blockUser,
    unblockUser,
    starUser,
    unStarUser,
    id,
    name,
    email,
  } = props;
  const [star, setStar] =
    useState("star");
  const [block, setBlock] =
    useState("block");
  const [modalShow, setModalShow] =
    useState(false);

  const handleBlock = (): void => {
    if (block === "block") {
      blockUser(id);
      setBlock("unblock");
    } else {
      setBlock("block");
      unblockUser(id);
    }
  };

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
