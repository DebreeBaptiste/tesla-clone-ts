/* tools */
import { Route, Routes } from "react-router-dom";
import { ColorProvider } from "./Hooks/ColorContext";
import { ModalProvider } from "./Hooks/ModalContext";
import { MobileProvider } from "./Hooks/mobileContext";

/* components */
import { Header } from "./components/Header";
import { Modal } from "./components/Modal/Modal";

/* pages */
import { Home } from "./pages/Home/Home";
import { ModelDetails } from "./pages/ModelDetails/ModelDetails";
import { Exchange } from "./pages/Exchange/Exchange";
import { NotFound } from "./pages/NotFound/NotFound";

/* data */
import { data } from "./data/data";

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
              <Route path="/exchange" element={<Exchange />} />
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
