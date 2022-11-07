import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Download from "./components/sub-components/Download"
import Upload from "./components/sub-components/Upload"
import ErrorPage from './components/ErrorPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <>
      <Router>
        <Header title="Local File Sharing"></Header>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>} >
            <Route path='/AboutUs' element={<AboutUs/>}></Route>
          </Route>
          <Route path='/sub-components/Download' errorElement={<ErrorPage/>}  element={<Download/>}></Route>
          <Route path='/sub-components/Upload'  element={<Upload/>}></Route>
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
