import React from "react";

//a card component used to display posts on news page
export default function NewsCard(props: any) {
  const { title, body } = props;
  return (
    <div className="newsCard">
      <h3>{title}</h3>
      <p>{body}</p>
      <br />
    </div>
  );
}
