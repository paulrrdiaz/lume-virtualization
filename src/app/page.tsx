import { Box } from "@chakra-ui/react";

import DataList from "@/components/DataList";
import dataset from "@/data/test_dataset.json";
import { DataSetItem } from "@/lib/types";

export default function Home() {
  return (
    <Box h="100vh" bgColor="#F7F7F8" px={8}>
      <DataList data={dataset as DataSetItem[]} />
    </Box>
  );
}
