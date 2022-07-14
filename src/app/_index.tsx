import { ApplicationRoutes } from '../ui/routes';
import { GlobalStyle } from './GlobalStyle';
import { Provider } from 'react-redux';
import { store } from '../store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ApplicationRoutes />
    </Provider>
  );
}

export default App;
