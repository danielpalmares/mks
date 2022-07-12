import { ApplicationRoutes } from '../ui/routes';
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <ApplicationRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
