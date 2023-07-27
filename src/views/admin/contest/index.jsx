
import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import CheckTable from "views/admin/dataTables/components/CheckTable";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "./variables/columnsData";
import tableDataDevelopment from "views/admin/dataTables/variables/tableDataDevelopment.json";
import tableDataCheck from "views/admin/dataTables/variables/tableDataCheck.json";
import tableDataColumns from "views/admin/dataTables/variables/tableDataColumns.json";
import React from "react";

const tableDataComplex = [
  {
    name: "Konest",
    status: "Boshlanmagan",
    fanlar: ['Matematika', 'Fizika'],
    date: "24.Jan.2021"
  },
  {
    name: "Konest",
    status: "Tugagan",
    fanlar: ['Matematika', 'Fizika'],
    date: "30.Dec.2021"
  },
  {
    name: "Konest",
    status: "Boshlanmagan",
    fanlar: ['Matematika', 'Fizika'],
    date: "20.May.2021"
  },
  {
    name: "Konest",
    status: "Tugagan",
    fanlar: ['Matematika', 'Fizika'],
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
