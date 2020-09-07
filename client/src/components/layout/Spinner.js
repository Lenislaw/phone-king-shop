import React from "react";
import Loader from "../../imgs/crown.jpg";

const Spinner = () => {
  return (
    <div className="spinner">
      <img className="spinner-image" src={Loader} alt="spiner" />
    </div>
  );
};

export default Spinner;
