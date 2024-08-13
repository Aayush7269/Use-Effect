import React from "react";
import { useEffect } from "react";

const Service = () => {
  useEffect(() => {
    console.log("Running effect");
    return () => {
      console.log("deleting component");
    };
  });
  return <div>service</div>;
};

export default Service;
