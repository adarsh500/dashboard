import { useState, useEffect } from "react";
import TopPerson from "../../components/TopPerson";

const Top = () => {
  const [input, setInput] = useState("");
  const [topUserList, setTopUserList] = useState([]);
  const [blocked, setBlockedList] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("topUser");
    if (localData) {
      let obj = JSON.parse(localData);
      setTopUserList(obj);
    }
  }, []);

  useEffect(() => {
    const localData = localStorage.getItem("blockedUsers");
    if (localData) {
      let obj = JSON.parse(localData);
      setBlockedList(obj);
    }
  }, []);

  const unStarUser = (obj: any) => {
    let temp = topUserList;
    const index = temp.findIndex((x: any) => x.id == obj.id);
    temp.splice(index, 1);
    localStorage.setItem("topUser", JSON.stringify(temp));
    setTopUserList(temp);
    window.location.reload();
  };

  return (
    <div className="user">
      <h1>Top User List</h1>
      <input
        className="search"
        placeholder="search users"
        onChange={(event) => setInput(event.target.value)}
      />
      <div className="userList">
        {topUserList
          .filter((user: any) => {
            if (!blocked.includes(user.id)) {
              return user;
            }
          })
          .filter((user: any) => {
            if (input === "") {
              return user;
            } else {
              if (user.name.toLowerCase().includes(input.toLowerCase())) {
                return user.name.toLowerCase().includes(input.toLowerCase());
              }
              return user.email.toLowerCase().includes(input.toLowerCase());
            }
          })
          .map((user: any) => {
            return (
              <TopPerson key={user.id} unStarUser={unStarUser} {...user} />
            );
          })}
      </div>
    </div>
  );
};

export default Top;
