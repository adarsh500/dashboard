/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import Person from "../../components/Person";
import type { NextPage } from "next";
import { User } from "../../types";

const Users: NextPage<{ users: User[] }> = ({ users }: any) => {
  const [input, setInput] = useState("");
  const [displayList, setDisplayList] = useState([]);
  const [topUserList, setTopUserList] = useState([]);

  const blockUser = (id: number) => {
    const now = new Date();
    const obj = {
      id: id,
      expiry: now.setSeconds(now.getSeconds() + 30),
    };
    const temp: any = displayList;
    {
      temp.map((t: any) => {
        if (t.id === id) {
          return;
        }
      });
    }
    temp.push(obj);
    localStorage.setItem("blockedUsers", JSON.stringify(temp));
    setDisplayList(temp);
  };

  const unblockUser = (id: number) => {
    const temp = displayList;
    temp.filter((obj: any) => {
      return obj.id != id;
    });
    const newArr = temp.filter((obj: any) => obj.id != id);
    localStorage.setItem("blockedUsers", JSON.stringify(newArr));
    setDisplayList(newArr);
  };

  const starUser = (obj: object): void => {
    //adds the user to Top Users page
    const temp: any = topUserList;
    if (temp.includes(obj)) {
      return;
    }
    temp.push(obj);
    localStorage.setItem("topUser", JSON.stringify(temp));
    setTopUserList(temp);
  };

  const unStarUser = (obj: object): void => {
    //removes the user from Top Users page
    const temp = topUserList;
    const isFound = (element: any) => {
      element == obj;
    };
    const index = temp.findIndex(isFound);
    temp.splice(index, 1);
    localStorage.setItem("topUser", JSON.stringify(temp));
    setTopUserList(temp);
  };

  //this unblocks users after a set period of time. 
  //it code works, but due to some bug it gives uncaughtException.

  // const clearBlocked = () => {
  //   const now = new Date();
  //   console.log("hello", now.getMinutes() + " " + now.getSeconds());
  //   console.log(now);
  //   const newArr = displayList.filter((obj: any) => {
  //     obj.expiry > now;
  //   });
  //   localStorage.setItem("blockedUsers", JSON.stringify(newArr));
  //   setDisplayList(newArr);
  // };

  // setInterval(clearBlocked, 10000)

  return (
    <div className="user">
      <h1>User List</h1>
      <input
        className="search"
        placeholder="search names or emails"
        onChange={(event) => setInput(event.target.value)}
      />
      <div className="userList">
        {users
          .filter((user: User) => {
            if (input === "") {
              return user;
            } else {
              if (user.name.toLowerCase().includes(input.toLowerCase())) {
                return user.name.toLowerCase().includes(input.toLowerCase());
              }
              return user.email.toLowerCase().includes(input.toLowerCase());
            }
          })
          .map((user: User) => {
            return (
              <Person
                key={user.id}
                blockUser={blockUser}
                unblockUser={unblockUser}
                starUser={starUser}
                unStarUser={unStarUser}
                // clearBlocked={clearBlocked}
                {...user}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Users;

//enables SSR
export async function getServerSideProps() {
  //fetches data from server side and sends props to users page
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  return { props: { users: data } };
}
