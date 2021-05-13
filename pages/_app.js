import '../styles/globals.css';
import { Provider } from 'react-redux';

import { AuthProvider } from './../contexts/AuthContext';
import store from './../store/index';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
