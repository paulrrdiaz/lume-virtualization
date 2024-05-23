"use client";

import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import { Box, Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";

import { ArrowDownIcon } from "@/lib/icons";
import { DataSetItem } from "@/lib/types";

import VirtualizedListItem from "./VirtualizedListItem";

type VirtualizedListProps = {
  data: DataSetItem[];
};

const VirtualizedList = (props: VirtualizedListProps) => {
  const { data } = props;

  return (
    <>
      <Grid
        templateColumns="repeat(12, 1fr)"
        gap={6}
        py={4}
        px={6}
        color="gray.600"
      >
        <GridItem as={Flex} alignItems="center" colSpan={3}>
          <Text>Name</Text> <Icon as={ArrowDownIcon} />
        </GridItem>
        <GridItem as={Flex} alignItems="center" colSpan={4}>
          <Text>Email</Text>
          <Icon as={ArrowDownIcon} />
        </GridItem>
        <GridItem as={Flex} alignItems="center" colSpan={2}>
          <Text>Phone</Text>
          <Icon as={ArrowDownIcon} />
        </GridItem>
        <GridItem as={Flex} alignItems="center" colSpan={2}>
          <Text>Gender</Text>
          <Icon as={ArrowDownIcon} />
        </GridItem>
        <GridItem colSpan={1}></GridItem>
      </Grid>

      <Box flex={1}>
        <AutoSizer>
          {({ height, width }) => {
            return (
              <FixedSizeList
                height={height}
                itemCount={data?.length}
                itemData={data}
                itemSize={68}
                width={width}
              >
                {VirtualizedListItem}
              </FixedSizeList>
            );
          }}
        </AutoSizer>
      </Box>
    </>
  );
};

export default VirtualizedList;
