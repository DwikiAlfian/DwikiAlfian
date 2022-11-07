import React from "react";

export default function List({ title, array, headNumber }) {
  return (
    <>
      <div className="flex-column gap-15">
        <span className="span-text" style={{ fontStyle: "italic" }}>
          {title}
        </span>
        {array &&
          array.map((arr, index) => {
            return (
              <>
                <div className="flex-inline flex-align-start gap-20">
                  <span className="span-sub" style={{ fontSize: "0.86rem" }}>
                    {headNumber}
                    {index + 1}
                  </span>
                  <div className="flex-column">
                    <span className="span-text">{arr?.title}</span>
                    <span className="span-sub">{arr?.sub}</span>
                    {(arr?.download || arr?.github) && (
                      <div className="flex-inline gap-10 m-t-20">
                        {arr?.download && (
                          <a
                            className="span-link"
                            href={arr?.download}
                            target={"_blank"}
                          >
                            Download
                          </a>
                        )}
                        {arr?.github && (
                          <a
                            className="span-link"
                            href={arr?.github}
                            target={"_blank"}
                          >
                            GitHub Repo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}
