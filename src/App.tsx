/* tools */
import { Route, Routes } from "react-router-dom";

/* components */
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

/* data */
import { data } from "./data/data";

/*  style */
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header data={data} />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
