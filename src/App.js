import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import CardsDetails from "./components/CardsDetails";
import Cards from "./components/Cards";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div style={{ backgroundColor: "#eee", height: "100vh" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/cart/:id" element={<CardsDetails />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
