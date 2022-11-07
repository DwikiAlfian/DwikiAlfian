import React from "react";

export default function Header({ name, nameSplit }) {
  return (
    <>
      <div className="flex-inline gap-10">
        <h1>{name}</h1>
        <span className="span-sub" style={{ fontSize: "0.86rem" }}>
          {nameSplit}
        </span>
      </div>
    </>
  );
}
