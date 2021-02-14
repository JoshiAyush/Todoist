import React from "react";

import styled from "styled-components/macro";

import { Header } from "./components/index.js";

const Container = styled.div`
  color: black;
  font-family: 'Roboto', sans-serif;
  background-color: white;
`;

function AppContainer({ children, ...props }) {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
}

function App() {
  return (
    <AppContainer>

      <Header />

    </AppContainer>
  );
}

export default App;
