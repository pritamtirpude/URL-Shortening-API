import React from "react";
import { motion } from "framer-motion";

const MobileNavigation = () => {
  const animateForm = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <nav className="mobile-navigation">
      <ul className="mobile-nav-links">
        <motion.li
          initial={animateForm}
          animate={animateTo}
          transition={{ delay: 0.05 }}
        >
          <a href="/">Features</a>
        </motion.li>
        <motion.li
          initial={animateForm}
          animate={animateTo}
          transition={{ delay: 0.1 }}
        >
          <a href="/">Pricing</a>
        </motion.li>
        <motion.li
          initial={animateForm}
          animate={animateTo}
          transition={{ delay: 0.2 }}
        >
          <a href="/">Resources</a>
        </motion.li>
      </ul>
      <motion.div
        className="line"
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.3 }}
      ></motion.div>
      <div className="mobile-login-signup">
        <motion.a
          initial={animateForm}
          animate={animateTo}
          transition={{ delay: 0.4 }}
          href="#login"
        >
          Login
        </motion.a>
        <motion.button
          initial={animateForm}
          animate={animateTo}
          transition={{ delay: 0.5 }}
        >
          Sign Up
        </motion.button>
      </div>
    </nav>
  );
};

export default MobileNavigation;
