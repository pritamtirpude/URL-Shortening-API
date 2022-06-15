import React, { useContext, useState, useRef } from "react";
import URLContext from "../context/URLContext";
import URLItem from "./URLItem";
import AdvancedStatistics from "./AdvancedStatistics";
import { motion, AnimatePresence } from "framer-motion";
import { css } from "@emotion/react";
import { GridLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
`;

const UrlSection = () => {
  const [urlLink, setUrlLink] = useState("");
  const [loading, setLoading] = useState(false);
  const { fetchUrl, shortLink } = useContext(URLContext);

  const inputRef = useRef();
  const paraRef = useRef();

  const getShortUrl = async () => {
    if (inputRef.current.value === "") {
      inputRef.current.classList.add("error");
      paraRef.current.innerText = "Please add a link";
    } else {
      try {
        setLoading(true);
        await fetchUrl(urlLink);
        setUrlLink("");
        inputRef.current.classList.remove("error");
        paraRef.current.innerText = "";
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    setUrlLink(e.target.value);
  };

  return (
    <section className="url-section-container">
      <div className="url-box">
        <div className="url-input">
          <input
            type="text"
            value={urlLink}
            onChange={handleChange}
            placeholder="Shorten a link here..."
            name="url"
            ref={inputRef}
          />
          <p ref={paraRef} className="error-text"></p>
          <button onClick={getShortUrl}>Shorten it!</button>
        </div>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <GridLoader
          color={"hsl(180, 66%, 49%)"}
          css={override}
          loading={loading}
          size={15}
        />
      </div>
      <AnimatePresence exitBeforeEnter initial={false}>
        {shortLink.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <URLItem link={link} key={index} />
          </motion.div>
        ))}
      </AnimatePresence>
      <AdvancedStatistics />
    </section>
  );
};

export default UrlSection;
