
import { Box, SimpleGrid } from "@chakra-ui/react";
import ComplexTable from "./components/ComplexTable";
import {
  columnsDataComplex,
} from "./variables/columnsData";
import React from "react";

const tableDataComplex = [
  {
    name: "Konest",
    status: "Boshlanmagan",
    fanlar: ['Matematika', 'Fizika'],
    participants: 20,
    date: "24.Jan.2021"
  },
  {
    name: "Konest",
    status: "Tugagan",
    fanlar: ['Matematika', 'Fizika'],
    participants: 20,
    date: "30.Dec.2021"
  },
  {
    name: "Konest",
    status: "Boshlanmagan",
    fanlar: ['Matematika', 'Fizika'],
    participants: 20,
    date: "20.May.2021"
  },
  {
    name: "Konest",
    status: "Tugagan",
    fanlar: ['Matematika', 'Fizika'],
    participants: 20,
    date: "12.Jul.2021"
  }
]



export default function Contests() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
        {/* <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        />
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        /> */}
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid>
    </Box>
  );
}
