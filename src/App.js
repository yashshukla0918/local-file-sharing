import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Download from './components/sub-components/Download';
import Upload from './components/sub-components/Upload';
function App() {
  let hrStyle = {
    "width": "100%",
    "margin-top": "0.5px",
  }
  return (
    <>
      <Router>
        <Header title="Local File Sharing"></Header>
        <hr style={hrStyle} />
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/sub-components/Download/" element={<Download></Download>}></Route>
          <Route path="/sub-components/Upload" element={<Upload></Upload>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
