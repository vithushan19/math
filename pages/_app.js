import "../styles/globals.css";

import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ModalProvider } from "react-simple-hook-modal";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <DndProvider backend={TouchBackend}>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </DndProvider>
    </Provider>
  );
}

export default MyApp;
