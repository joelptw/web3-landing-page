import React from 'react';
//import store from './globalStore/store';
import { Provider } from 'react-redux'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import GlobalRoutes from './router/GlobalRoutes'

function App() {
  return (
    <>
      <Header />
        <GlobalRoutes />
      <Footer />
    </>
  );
}

export default App;
