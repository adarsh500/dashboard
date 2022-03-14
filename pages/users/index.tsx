import { useState } from "react";
import Person from "../../components/Person";

export default function Users({ users }: any) {
  const [input, setInput] = useState("");
  const [displayList, setDisplayList] = useState([]);
  const [topUserList, setTopUserList] = useState([]);
  const [block, setBlock] = useState("block");

  const blockUser = (id: number): void => {
    let temp: any = displayList;
    if (temp.includes(id)) {
      return;
    }
    temp.push(id);
    localStorage.setItem("blockedUsers", JSON.stringify(temp));
    setDisplayList(temp);
  };

  const unblockUser = (id: number): void => {
    let temp = displayList;
    const isFound = (element: any) => {
      element == id;
    };
    const index = temp.findIndex(isFound);
    temp.splice(index, 1);
    localStorage.setItem("blockedUsers", JSON.stringify(temp));
    setDisplayList(temp);
  };

  const starUser = (obj: object): void => {
    let temp: any = topUserList;
    if (temp.includes(obj)) {
      return;
    }
    temp.push(obj);
    localStorage.setItem("topUser", JSON.stringify(temp));
    setTopUserList(temp);
  };

  const unStarUser = (obj: object): void => {
    let temp = topUserList;
    const isFound = (element: any) => {
      element == obj;
    };
    const index = temp.findIndex(isFound);
    temp.splice(index, 1);
    localStorage.setItem("topUser", JSON.stringify(temp));
    setTopUserList(temp);
  };

  return (
    <div className="user">
      <h1>User List</h1>
      <input
        className="search"
        placeholder="search users"
        onChange={(event) => setInput(event.target.value)}
      />
      <div className="userList">
        {users
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
              <Person
                key={user.id}
                blockUser={blockUser}
                unblockUser={unblockUser}
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

//enables SSR
export async function getServerSideProps() {
  //fetches data from server side and sends props to users page
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  return { props: { users: data } };
}
