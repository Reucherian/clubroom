import React from "react";
import { useInput } from "./../utils/forms";
import { Auth } from "aws-amplify";
import { TextField, styled, Button, CircularProgress } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

const Field = styled(TextField)({
  margin: "10px 0",
});

const DLink = styled(Link)({
  margin: "15px 0",
  textAlign: "right",
});

const Login = () => {
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const { value: email, bind: bindEmail } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await Auth.signIn(email, password);
      alert('success')
      navigate("/rooms");
    } catch (error) {
      console.log(error)
      alert('error')
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
      onSubmit={handleSubmit}
    >
      <h1 style={{ fontSize: "22px", fontWeight: 800 }}>
        {" "}
        Sign in to an existing account
      </h1>
      <Field label="Email" {...bindEmail} type="text" />
      <Field label="Password" type="password" {...bindPassword} />
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        disabled={loading}
      >
        {loading && <CircularProgress size={20} style={{ marginRight: 20 }} />}
        Login to Your Account
      </Button>
      <DLink to="/signup">make a new account &rarr;</DLink>
    </form>
  );
};

export default Login;