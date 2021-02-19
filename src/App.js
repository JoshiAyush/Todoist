/**
 * @file src/app.js is the source file that holds or renders all of our created react components for our web app.
 * Component App() does that for us we further export this component to the entry file for react apps i.e., src/index.js
 * file that does the actual rendering job of the components as a whole. 
 */

/** Importing default export React. */
import React from "react";
/** Importing default export styled component. */
import styled from "styled-components/macro";
/** Importing named export Content react component. */
import { Content } from "./pages/index.js";

/**
 *  @var {Object} Container is a react styled component that creates a container for our App() component. 
 */
const Container = styled.div`
  color: black;
  background-color: white;
  font-family: 'Roboto', sans-serif;
`;

function AppContainer({ children, ...props }) {
  /**
   * @function AppContainer() is a react component that creates a custom react tag for our main App() container.
   * @argument {Object} children is the children nodes of this custom react tag.
   * @argument {Object} props is the properties (attributes) given to this custom react tag, we spread these properties
   * out over the custom <Container /> tag.
   */
  return (
    <Container {...props}>
      {children}
    </Container>
  );
}

function App() {
  /**
   * @function App() is a react component for our web application, it basically renders the provided components
   * on the browser screen or on the web application screen. We export this function to the src/index.js file that
   * further renders this react component on the screen.  
   */
  return (
    <AppContainer>

      <Content />

    </AppContainer>
  );
}

/** Export App() component to src/index.js file */
export default App;
