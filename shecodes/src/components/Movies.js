import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
//לשנות לfunctional component
import { useEffect } from "react";

const Movies = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);
  return <div>MOVIES</div>;
};

export default connect(null, { fetchData })(Movies);
