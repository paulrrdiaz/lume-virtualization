"use client";

import React, { useCallback, useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import fuzzysearch from "fuzzysearch";

import VirtualizedList from "@/components/DataList/VirtualizedList";
import { DataSetItem } from "@/lib/types";

import SearchBar from "./SearchBar";

type DataListProps = {
  data: DataSetItem[];
};

const DataList = (props: DataListProps) => {
  const { data } = props;
  const [filteredData, setFilteredData] = useState(data);

  const onFilter = useCallback(
    (value: string) => {
      if (!value) return setFilteredData(data);

      const filtered = data.filter((item) => {
        const search = value.toLowerCase();
        const name = item.name.toLowerCase();
        const email = item.email.toLowerCase();
        const phone = item.phone.toLowerCase();
        const gender = item.gender.toLowerCase();

        return (
          fuzzysearch(search, name) ||
          fuzzysearch(search, email) ||
          fuzzysearch(search, phone) ||
          fuzzysearch(search, gender)
        );
      });

      setFilteredData(filtered);
    },
    [data]
  );

  return (
    <Flex flexDirection="column" h="full">
      <Heading as="h1" size="xl" py={12}>
        Customer List
      </Heading>
      <SearchBar onFilter={onFilter} />
      <VirtualizedList data={filteredData} />
    </Flex>
  );
};

export default DataList;
