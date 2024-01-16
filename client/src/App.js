import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import Register from './pages/Register';
import { Box } from '@mui/material';

import Compose from './pages/Compose';

import Error from './components/Error';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Recovery from './pages/Recovery';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Toaster />
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} errorElement={<Error />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/compose" element={<Compose />}></Route>
          <Route path="/recovery" element={<Recovery />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        {/* <Footer /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
