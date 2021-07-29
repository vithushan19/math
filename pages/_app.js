import "../styles/globals.css";

import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ModalProvider } from "react-simple-hook-modal";
import { Provider } from "next-auth/client";
import initializeApollo from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";
import { signIn, useSession } from "next-auth/client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const client = initializeApollo();

  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < 600;
  }

  return (
    <ApolloProvider client={client}>
      <Provider session={pageProps.session}>
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
          <ModalProvider>
            <ReduxProvider store={store}>
              <ThemeProvider root>
                <UserContext.Provider value={[user, setUser]}>
                  <Component {...pageProps} />
                </UserContext.Provider>
              </ThemeProvider>
            </ReduxProvider>
          </ModalProvider>
        </DndProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
