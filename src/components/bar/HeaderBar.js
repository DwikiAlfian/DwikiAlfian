import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaDiscord,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function HeaderBar() {
  const [localTheme, setLocalTheme] = useLocalStorage("theme");
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    setTheme(localTheme);
  }, []);

  const toggleMode = () => {
    if (!theme) {
      document.body.classList.add("dark-layout");
    } else if (theme) {
      document.body.classList.remove("dark-layout");
    }
  };

  useEffect(() => {
    toggleMode();
    setLocalTheme(theme);
  }, [theme]);

  return (
    <>
      <div className="header-bar flex-inline flex-justify-between p-25">
        <div className="flex-inline gap-25">
          <FaInstagram className="icon" size={24} />
          <FaDiscord className="icon" size={24} />
          <FaGithub className="icon" size={24} />
          <FaEnvelope className="icon" size={24} />
        </div>
        <div>
          <button
            className="switch"
            onClick={() => {
              setTheme((prevState) => !prevState);
            }}
          >
            {theme && <FaMoon size={18} />}
            {!theme && <FaSun size={18} />}
          </button>
        </div>
      </div>
    </>
  );
}
