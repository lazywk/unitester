

// Chakra imports
import { Box, Button, Flex, FormControl, FormLabel, Icon, Input, InputGroup, InputRightElement, SimpleGrid, Text } from "@chakra-ui/react";
import CheckTable from "./components/CheckTable";
import {
  columnsDataCheck
} from "./variables/columnsData";
// import tableDataCheck from "./variables/tableDataCheck.json";
import React from "react";

export default function AddTeacher() {


  const tableDataCheck = [
    {
      name: ["Matematika", false]
    },
    {
      name: ["Matematika", true]
    },
    {
      name: ["Matematika", true]
    },
    {
      name: ["Matematika", true]
    },
    {
      name: ["Matematika", false]
    },
    {
      name: ["Matematika", false]
    },
    {
      name: ["Matematika", false]
    },
    {
      name: ["Matematika", false]
    },
    {
      name: ["Matematika", false]
    },
    {
      name: ["Matematika", false]
    },
    {
      name: ["Matematika", false],
    },
    {
      name: ["Matematika", false],
    },
    {
      name: ["Matematika", false],
    }
  ]



  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 3 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <FormControl px='40px'>
          <form>
            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              mb='8px'
              >
              Ism
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='text'
              placeholder='Ism'
              mb='24px'
              fontWeight='500'
              size='lg'
            />

            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              mb='8px'>
              Familiya
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='text'
              placeholder='Familiya'
              mb='24px'
              fontWeight='500'
              size='lg'
            />

            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              mb='8px'>
              Username
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='text'
              placeholder='Username'
              mb='24px'
              fontWeight='500'
              size='lg'
            />

            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              mb='8px'>
              Parol
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='text'
              placeholder='Parol'
              mb='24px'
              fontWeight='500'
              size='lg'
            />
            <Button
              fontSize='sm'
              variant='brand'
              fontWeight='500'
              w='100%'
              h='50'
              mb='24px'
              type="submit"
            >
              Qo'shish
            </Button>
          </form>
        </FormControl>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
      </SimpleGrid>
    </Box>
  );
}
