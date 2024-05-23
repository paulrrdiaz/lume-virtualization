import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tag,
  Text,
} from "@chakra-ui/react";

import { capitalize } from "@/lib/helpers";
import { MoreHorizontalIcon } from "@/lib/icons";
import { DataSetItem } from "@/lib/types";

type VirtualizedListItemProps = {
  index: number;
  style: React.CSSProperties;
  data: DataSetItem[];
};

const VirtualizedListItem = (props: VirtualizedListItemProps) => {
  const { data, index, style } = props;
  const item = data[index] as DataSetItem;
  const isMale = item.gender === "male";

  return (
    <Box style={style}>
      <Grid
        backgroundColor="white"
        templateColumns="repeat(12, 1fr)"
        gap={6}
        px={6}
        py={4}
        rounded="lg"
      >
        <GridItem colSpan={3}>
          <Text noOfLines={1}>{item.name}</Text>
        </GridItem>
        <GridItem colSpan={4}>
          <Text noOfLines={1}>{item.email}</Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text noOfLines={1}>{item.phone}</Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Tag
            size="md"
            rounded="full"
            backgroundColor={isMale ? "#EFF4FF" : "#FFF4F0"}
            color={isMale ? "#8FB4FF" : "#FFC0AC"}
            px={4}
          >
            {capitalize(item.gender)}
          </Tag>
        </GridItem>
        <GridItem colSpan={1}>
          <Flex justifyContent="flex-end" alignItems="center">
            <Menu>
              <MenuButton>
                <Icon as={MoreHorizontalIcon} />
              </MenuButton>
              <MenuList>
                <MenuItem>Edit</MenuItem>
                <MenuItem>Delete</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default VirtualizedListItem;
