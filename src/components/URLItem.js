import React, { useState } from "react";

const URLItem = ({ link }) => {
  const [copyUrl, setCopyUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyText = (text) => {
    if (text !== "") {
      setCopyUrl(text);
      setCopied(true);
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <div className="url-item-container">
      <div className="original-link">
        <h3>{link.originalLink}</h3>
      </div>
      <div className="short-link">
        <h3>{link.linkShort}</h3>
        <button
          onClick={() => handleCopyText(link.linkShort)}
          className={copied ? "bg-copied" : ""}
        >
          {copyUrl !== "" ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default URLItem;
