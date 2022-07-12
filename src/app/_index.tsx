import { ApplicationRoutes } from '../ui/routes';
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from '../store';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ApplicationRoutes />
      <ToastContainer />
    </Provider>
  );
}

export default App;
