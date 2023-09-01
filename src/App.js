import { ChakraProvider } from "@chakra-ui/react";

import Recipes from "./components/Recipes/Recipes";

import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Recipes />
      </div>
    </ChakraProvider>
  );
}

export default App;
