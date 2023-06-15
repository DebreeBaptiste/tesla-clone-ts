/* tools */
import { Route, Routes } from "react-router-dom";
import { ColorProvider } from "./Hooks/ColorContext";
import { ModalProvider } from "./Hooks/ModalContext";

/* components */
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

/* data */
import { data } from "./data/data";

/*  style */
import "./App.scss";
import { Modal } from "./components/Modal/Modal";

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <ColorProvider>
          <Header data={data} />
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Modal data={data} />
        </ColorProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
