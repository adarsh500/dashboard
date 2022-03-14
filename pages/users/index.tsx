/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import Person from "../../components/Person";
import type { NextPage } from "next";
import { User } from "../../types";


const Users: NextPage<{users: User[]}> = ({users}: any) => {
  console.log(users);
  const [input, setInput] =  useState("");
  const [displayList, setDisplayList] = useState([]);
  const [topUserList, setTopUserList] = useState([]);


  const blockUser = (id: number): void => {
    //adds the user's id to blockedUsers list in localStorage
    const temp = displayList;
    // @ts-ignore
    if (temp.includes(id)) {
      return;
    }
    // @ts-ignore
    temp.push(id);
    localStorage.setItem("blockedUsers",JSON.stringify(temp));
    setDisplayList(temp);
  };

  const unblockUser = (id: number): void => {
    //removes the user's id in blockedUsers list in localStorage
    const temp = displayList;
    const isFound = (element: number) => {
      element == id;
    };
    const index =temp.findIndex(isFound);
    temp.splice(index, 1);
    localStorage.setItem("blockedUsers", JSON.stringify(temp));
    setDisplayList(temp);
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
    const index =
      temp.findIndex(isFound);
    temp.splice(index, 1);
    localStorage.setItem("topUser",JSON.stringify(temp));
    setTopUserList(temp);
  };

  return (
    <div className="user">
      <h1>User List</h1>
      <input
        className="search"
        placeholder="search users"
        onChange={(event) =>
          setInput(event.target.value)
        }
      />
      <div className="userList">
        {users
          .filter((user: User) => {
            if (input === "") {
              return user;
            } else {
              if (
                user.name
                  .toLowerCase()
                  .includes(
                    input.toLowerCase()
                  )
              ) {
                return user.name
                  .toLowerCase()
                  .includes(
                    input.toLowerCase()
                  );
              }
              return user.email
                .toLowerCase()
                .includes(
                  input.toLowerCase()
                );
            }
          })
          .map((user: User) => {
            return (
              <Person
                key={user.id}
                blockUser={blockUser}
                unblockUser={
                  unblockUser
                }
                starUser={starUser}
                unStarUser={unStarUser}
                {...user}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Users

//enables SSR
export async function getServerSideProps() {
  //fetches data from server side and sends props to users page
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users`
  );
  const data = await res.json();

  return { props: { users: data } };
}
