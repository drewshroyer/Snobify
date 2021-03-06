import { connect } from "react-redux"
import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mSTP = ({errors}) => {
return {
  errors: errors.session,
  formType: "LOG IN",
  navLink: <Link to="/signup">sign up instead</Link>,
};
}

const mDTP = (dispatch) => {
    return {
      login: (user) => dispatch(login(user)),
      processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mSTP, mDTP)(LoginForm);