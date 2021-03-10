import React, { useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import "./Loader.css";

const loader = () => {
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 3000);
  //   }, []);

  return (
    <div className="loader">
      {<SyncLoader color={"#4A90E2"} loading={true} size={30} />}
    </div>
  );
};

export default loader;
