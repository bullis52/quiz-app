import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import './globals.css';
import { AppProps } from 'next/app';
import Header from '@/components/Header';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}
