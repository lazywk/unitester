

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import ColumnsTable from "./components/ColumnsTable";
import {
  columnsDataColumns
} from "./variables/columnsData";
// import tableDataColumns from "./variables/tableDataColumns.json";
import React from "react";

const tableDataColumns = [
  {
    name: "Ali Aliyev",
    fanlar: ['Fizika', 'Matematika']
  },
  {
    name: "Ali Aliyev",
    fanlar: ['Fizika', 'Matematika']
  },
  {
    name: "Ali Aliyev",
    fanlar: ['Fizika', 'Matematika']
  },
  {
    name: "Ali Aliyev",
    fanlar: ['Fizika', 'Matematika']
  }
]

export default function Teachers() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />
      </SimpleGrid>
    </Box>
  );
}
