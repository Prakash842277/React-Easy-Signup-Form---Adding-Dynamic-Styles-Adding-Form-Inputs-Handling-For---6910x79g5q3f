import React, { useReducer, useState } from "react";
import "../styles/App.css";
import { signUpFormValidation } from "../utils/validation";

const signUpFormReducer = (state, action) => {
  switch (action.type) {
    case "input":
      return {
        ...state,
        input: {
          ...state.input,
          [action.payload.field]: action.payload.value
        }
      };
    case "error":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.field]: action.payload.value
        }
      };
    case "resetError":
      const errors = {};
      for (const t in state.errors) {
        errors[t] = "";
      }
      return {
        ...state,
        errors
      };
    case "toggleConsent":
      return {
        ...state,
        consent: !state.consent
      };
    default:
      break;
  }
};

const initialFormState = {
  input: {
    name: "",
    email: "",
    password: "",
    consent: false
  },
  errors: {
    name: "",
    email: "",
    password: ""
  }
};

const App = () => {
  const [formState, dispatch] = useReducer();

  return <></>;
};

export default App;
