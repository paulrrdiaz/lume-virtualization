"use client";

import React, { useEffect, useState } from "react";
import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useDebounce } from "use-debounce";

import { SearchIcon, XIcon } from "@/lib/icons";

type SearchBarProps = {
  onFilter: (value: string) => void;
};

const SearchBar = (props: SearchBarProps) => {
  const { onFilter } = props;
  const [value, setValue] = useState("");
  const [debouncedValue] = useDebounce(value, 1000);

  const handleClear = () => {
    setValue("");
  };

  useEffect(() => {
    onFilter(debouncedValue);
  }, [debouncedValue, onFilter]);

  return (
    <Flex justifyContent="flex-end">
      <InputGroup maxW="sm">
        <InputLeftElement pointerEvents="none">
          <Icon as={SearchIcon} color="gray.300" />
        </InputLeftElement>

        <Input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          backgroundColor="white"
          placeholder="Search"
        />

        {value.length > 0 && (
          <InputRightElement onClick={handleClear}>
            <Icon as={XIcon} color="gray.300" />
          </InputRightElement>
        )}
      </InputGroup>
    </Flex>
  );
};

export default SearchBar;
