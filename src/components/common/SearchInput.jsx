import { Input } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { LuSearch } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleClear = () => setSearchValue("");
  return (
    <InputGroup
      flex='1'
      startElement={<LuSearch />}
      endElement={searchValue && <IoCloseOutline onClick={handleClear} />}
    >
      <Input
        placeholder='검색어를 입력해주세요'
        variant='subtle'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
