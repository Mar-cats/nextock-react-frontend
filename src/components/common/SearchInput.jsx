import { Input } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { LuSearch } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useSearchStore } from "@/store/search";
import { ROUTES_PATH_SEARCH } from "@/constants/routes";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const { addSearch } = useSearchStore();
  const navigate = useNavigate();
  const handleClear = () => setSearchValue("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.code !== "Enter") return;
    addSearch(e.target.value);
    navigate(`${ROUTES_PATH_SEARCH}?q=${e.target.value}`);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("q");
    setSearchValue(query);
  }, []);
  return (
    <InputGroup
      flex='1'
      startElement={<LuSearch color='var(--color-gray-800)' />}
      endElement={
        searchValue && (
          <IoCloseOutline onClick={handleClear} color='var(--color-gray-800)' />
        )
      }
    >
      <Input
        placeholder='검색어를 입력해주세요'
        variant='subtle'
        color={"var(--color-color-black)"}
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </InputGroup>
  );
};

export default SearchInput;
