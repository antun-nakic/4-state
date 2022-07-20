import React from "react";

const FormatedTime = (props) => {
  return <span>{props.time.toLocaleTimeString()}</span>;
};

export default FormatedTime;
