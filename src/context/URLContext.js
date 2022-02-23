import { createContext, useState, useEffect } from "react";

import axios from "axios";

const URLContext = createContext();

const localData = JSON.parse(localStorage.getItem("urls") || "[]");

export const URLProvider = ({ children }) => {
  const [shortLink, setShortLink] = useState(localData);

  useEffect(() => {
    localStorage.setItem("urls", JSON.stringify(shortLink));
  }, [shortLink]);

  const fetchUrl = async (link) => {
    const response = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    );
    const data = response.data.result;

    setShortLink([
      ...shortLink,
      {
        originalLink: data.original_link,
        linkShort: data.full_short_link,
      },
    ]);
  };

  return (
    <URLContext.Provider value={{ fetchUrl, shortLink }}>
      {children}
    </URLContext.Provider>
  );
};

export default URLContext;
