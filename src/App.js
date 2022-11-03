import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
function App() {
  let hrStyle ={
    "width" : "100%",
    "margin-top" : "0.5px",
  }
  return (
   <>
   <Header title="Local File Sharing"></Header>
   <hr style={hrStyle}/>
   <MainPage></MainPage>
   <Footer></Footer>
   </>
  );
}

export default App;
