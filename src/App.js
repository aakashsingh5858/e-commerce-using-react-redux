import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import CardsDetails from "./components/CardsDetails";
import Cards from "./components/Cards";

function App() {
  return (
    <div style={{backgroundColor:'#eee', height:'100vh'}}>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart" element={<CardsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
