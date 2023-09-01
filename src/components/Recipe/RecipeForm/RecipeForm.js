import { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

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
    <div className="recipeForm">
      <Input borderRadius={"none"} value={search} onChange={updateSearch} />
      <Button borderRadius={"none"} onClick={getSearch}>
        Search
      </Button>
    </div>
  );
}
