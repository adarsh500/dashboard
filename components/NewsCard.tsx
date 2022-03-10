import React from "react";

export default function NewsCard(props: any) {
  const { userId, title, body } = props;
  return (
    <div className="newsCard">
      <h3>{title}</h3>
      <p>{body}</p>
      <br />
    </div>
  );
}
