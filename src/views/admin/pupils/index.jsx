

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
    avatar: "AVA",
    firstname: 'Ali',
    lastname: 'Aliyev',
    username: 'alialiyev',
    email: 'aliali@gmail.com',
    phonenumber: '+998931231177',
    region: 'Chilonzor',
    creator: 'Admin',
    date: '12.03.2023',
  },
  {
    avatar: "AVA",
    firstname: 'Ali',
    lastname: 'Aliyev',
    username: 'alialiyev',
    email: 'aliali@gmail.com',
    phonenumber: '+998931231177',
    region: 'Chilonzor',
    creator: 'Admin',
    date: '12.03.2023',
  },
  {
    avatar: "AVA",
    firstname: 'Ali',
    lastname: 'Aliyev',
    username: 'alialiyev',
    email: 'aliali@gmail.com',
    phonenumber: '+998931231177',
    region: 'Chilonzor',
    creator: 'Admin',
    date: '12.03.2023',
  },
  {
    avatar: "AVA",
    firstname: 'Ali',
    lastname: 'Aliyev',
    username: 'alialiyev',
    email: 'aliali@gmail.com',
    phonenumber: '+998931231177',
    region: 'Chilonzor',
    creator: 'Admin',
    date: '12.03.2023',
  },
]

export default function Pupils() {
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
