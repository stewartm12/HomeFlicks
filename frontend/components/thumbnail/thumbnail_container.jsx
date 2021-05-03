import { connect } from "react-redux";
// import React from "react";
// import { Link } from "react-router-dom";
// import { login } from "../../actions/session_actions";
import Thumbnail from "./thumbnail";

const mapStateToProps = (state) => {
  return {
    thumbnail: state.entities
  };
};


export default connect(mapStateToProps)(Thumbnail);
