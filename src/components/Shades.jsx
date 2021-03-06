import React, { useState, useEffect } from "react";
import Values from "values.js";
import isColor from "is-color";
import Shade from "./Shade";
import toast, { Toaster } from "react-hot-toast";

const Shades = ({ color }) => {
  const [shades, setShades] = useState([]);
  useEffect(() => {
    if (isColor(color)) {
      const shades = new Values(color).shades(1);
      setShades(shades);
    }
  }, [color]);

  const onCopy = () => {
    toast("Color Copied !!", {
      icon: "👏",
    });
  };

  return (
    <div className="shade">
      <Toaster position="top-right" reverseOrder={false} />
      {shades.map((shade, key) => (
        <Shade className="color" shade={shade} onCopy={onCopy}></Shade>
      ))}
    </div>
  );
};
export default Shades;
