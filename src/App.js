import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar"
import Contents from './Contents';

function App() {
  return (
    <div className="App">
      {/*Header */}
      <Header />

      {/*Sidebar */}
      <div className="body">
        <Sidebar />
        <Contents />
      </div>



    </div>
  );
}

export default App;
