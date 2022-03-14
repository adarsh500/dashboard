/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useEffect } from "react";
import TopPerson from "../../components/TopPerson";

//This is the top users page
const Top = () => {
  const [input, setInput] = useState("");
  const [topUserList, setTopUserList] = useState([]);
  const [blocked, setBlockedList] = useState([]);

  useEffect(() => {
    //updates all the starred users from users page
    const localData = localStorage.getItem("topUser");
    if (localData) {
      const obj = JSON.parse(localData);
      setTopUserList(obj);
    }
  }, []);

  useEffect(() => {
    //fetches data of blocked users from local storage
    const localData = localStorage.getItem("blockedUsers");
    if (localData) {
      const obj = JSON.parse(localData);
      setBlockedList(obj);
      
    }
  }, []);

  const unStarUser = (obj: any) => {
    //function that removes top user
    const temp = topUserList;
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
        placeholder="search users or emails"
        onChange={(event) => setInput(event.target.value)}
      />
      <div className="userList">
        {topUserList
          //this filters out blocked users and display only unblocked users
          .filter((user: any) => {
            // @ts-ignore
            if (!blocked.find(({id}) => user.id == id)) {return user}
            // if (!blocked.includes(user.id)) {
            //   return user;
            // }

          })
          //this implements search functionality
          //if search bar is empty, we display all the top users
          //else it will match name/email of users
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
