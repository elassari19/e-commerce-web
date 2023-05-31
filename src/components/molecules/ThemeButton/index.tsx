import { useTheme } from "next-themes";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const index = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      className="bg-slate4 mx-4 p-3"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default index;
