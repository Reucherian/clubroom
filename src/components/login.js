import React from "react";
import { useInput } from "./../utils/forms";
import { Auth } from "aws-amplify";
import { TextField, styled, Button, CircularProgress, Container } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import ClubRoomHeader from '../components/clubRoomHeader';

const Field = styled(TextField)({
  margin: "10px 0",
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
    <Container>
      <ClubRoomHeader />
      <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onSubmit={handleSubmit}
    >
      <Field label="Email" {...bindEmail} type="text" />
      <Field label="Password" type="password" {...bindPassword} />
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        disabled={loading}
      >
        {loading && <CircularProgress size={20} style={{ marginRight: 20 }} />}
        Login
      </Button>
      <Button variant="contained" onClick={() => {navigate('/signup')}}>Register</Button>
      </form>
    </Container>
    
  );
};

export default Login;