import './App.css';
import Header from './components/Header';
function App() {
  let hrStyle ={
    "width" : "100%",
    "margin-top" : "0.5px",
  }
  return (
   <>
   <Header title="Local File Sharing"></Header>
   <hr style={hrStyle}/>
   </>
  );
}

export default App;
