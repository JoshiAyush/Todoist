import React from "react";

import styled from "styled-components/macro";

import { Content } from "./components/index.js";

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

      <Content />

    </AppContainer>
  );
}

export default App;
