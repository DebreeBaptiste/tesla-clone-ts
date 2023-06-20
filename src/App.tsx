/* tools */
import { Route, Routes } from "react-router-dom";
import { ColorProvider } from "./Hooks/ColorContext";
import { ModalProvider } from "./Hooks/ModalContext";
import { MobileProvider } from "./Hooks/mobileContext";

/* components */
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ModelDetails } from "./pages/ModelDetails";
import { NotFound } from "./pages/NotFound";
import { Modal } from "./components/Modal/Modal";

/* data */
import { data } from "./data/data";

/*  style */
import "./App.scss";

function App() {
  return (
    <>
      <MobileProvider>
        <ModalProvider>
          <ColorProvider>
            <Header data={data} />
            <Routes>
              <Route path="/" element={<Home data={data} />} />
              {data.items.map((item: any) => (
                <Route
                  key={item.id}
                  path={item.slug}
                  element={<ModelDetails model={item} />}
                />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Modal data={data} />
          </ColorProvider>
        </ModalProvider>
      </MobileProvider>
    </>
  );
}

export default App;
