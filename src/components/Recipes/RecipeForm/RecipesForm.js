import { useState } from "react";
import { Input, Button, Flex } from "@chakra-ui/react";

export default function RecipeForm({ setQuery }) {
  const [search, setSearch] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = () => {
    setQuery(search);
    setSearch("");
  };

  return (
    <Flex w="50%" m="0 auto 20px">
      <Input borderRadius={"none"} value={search} onChange={updateSearch} />
      <Button
        borderRadius="0"
        bg="linear-gradient(to right, #be86af, #f2d70b)"
        transition="all 0.3s ease"
        _hover={{ bg: "linear-gradient(to right, #f2d70b, #be86af)" }}
        className="FormBtn"
        onClick={getSearch}
      >
        Search
      </Button>
    </Flex>
  );
}
