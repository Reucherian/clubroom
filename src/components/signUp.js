import React from "react";
import { TextField, styled, Button, CircularProgress } from "@mui/material";
import { useInput } from "./../utils/forms";
import { Auth } from "aws-amplify";
import { Link, useNavigate } from "react-router-dom";

const Field = styled(TextField)({
  margin: "10px 0",
});

const DLink = styled(Link)({
  margin: "15px 0",
  textAlign: "right",
});

const Signup = () => {
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const { value: name, bind: bindName } = useInput("");
  const { value: email, bind: bindEmail } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");
  const { value: confirmPassword, bind: bindConfirmPassword } = useInput("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      alert(
        "Error!! Password and Confirm Password should be same danger"
      );
      return;
    }
    try {
      await Auth.signUp({
        username: email,
        password: confirmPassword,
        attributes: {
          email,
          name
        },
      });
      alert("Success!! Signup was successful success");
      navigate("/confirmation");
    } catch (error) {
      console.error(error);
      alert("Error!! error.message danger");
    }
    setLoading(false);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onSubmit={handleSignUp}
    >
      <h1 style={{ fontSize: "22px", fontWeight: 800 }}>
        {" "}
        New Account Registration
      </h1>
      <Field label="Name" {...bindName} />
      <Field label="Email" {...bindEmail} type="email" />
      <Field label="Password" type="password" {...bindPassword} />
      <Field
        label="Confirm Password"
        type="password"
        {...bindConfirmPassword}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        disabled={loading}
      >
        {loading && <CircularProgress size={20} style={{ marginRight: 20 }} />}
        Sign Up
      </Button>
      <DLink to="/signin">go to login &rarr;</DLink>
    </form>
  );
};

export default Signup;