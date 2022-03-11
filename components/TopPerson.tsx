import { useState } from "react";
import ViewUser from "./ViewUser";

const Person = (props: any) => {
  const { blockUser, unblockUser, unStarUser, id, name, email } = props;
  const [star, setStar] = useState("unstar");
  const [modalShow, setModalShow] = useState(false);

  // const handleBlock = () => {
  //   if (block === "block") {
  //     blockUser(id);
  //     setBlock("unblock");
  //   } else {
  //     setBlock("block");
  //     unblockUser(id);
  //   }
  // };

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
