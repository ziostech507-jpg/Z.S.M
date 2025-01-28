import React,{Fragment} from 'react';
import './App.css';
import Routes from './routes/Routes';
import BackToTop from './components/BackToTopButton/BackToTopButton';

function App() {
  return (
    <Fragment>
      <Routes/>
      <BackToTop/>
    </Fragment>
  );
}

export default App;
