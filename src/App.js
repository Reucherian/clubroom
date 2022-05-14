import './App.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Rooms from './pages/rooms';
import Amplify from 'aws-amplify';
import { API } from 'aws-amplify';

// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3FD064',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    button: {
      fontFamily: 'Nunito:wght@900',
      textTransform: 'lowercase',
      fontSize: '1rem',
      fontWeight: 750,
    },
    fontWeightBold: 1000,
    fontWeightRegular: 200,
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Login />}>
            </Route>
            <Route path='/rooms' element={<Rooms/>}>
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
