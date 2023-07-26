/* eslint-disable */
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
// Chakra imports
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuth from "layouts/register/Default";
// Assets
import illustration from "assets/img/auth/auth.png";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import axios from "axios";

function SignUp() {
    // Chakra color mode
    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
    const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
    const textColorBrand = useColorModeValue("brand.500", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);




    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const phoneNumber = useRef()
    const password = useRef()
    const confirimationCode = useRef()

    const [isSMS, setIsSMS] = useState(false)
    const [smsResponse, setSmsResponse] = useState({})

    const sendUserData = async (data) => {
        await axios.post('httpUrl', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
            setSmsResponse(res.data)
        }).catch(err => console.log(err))
    }

    const handleRegister = e => {
        e.preventDefault()
        console.log({
            first_name: firstName.current.value,
            last_name: lastName.current.value,
            username: username.current.value,
            phone_number: phoneNumber.current.value,
            password: password.current.value,
        })
        // sendUserData({
        //     first_name: firstName.current.value,
        //     last_name: lastName.current.value,
        //     username: username.current.value,
        //     phone_number: phoneNumber.current.value,
        //     password: password.current.value,
        // })
        setIsSMS(true)
    }

    const sendSms = async (sms) => {
        localStorage.setItem('token', 'ahcsbakjcaics')
        localStorage.setItem('role', 3)
        localStorage.setItem('user', JSON.stringify({ username: 'username', password: 'password' }))
        location.replace('/')
        // if (sms === smsResponse) {
        //     await axios.post('httpUrl', { code: sms }, {
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     }).then(res => {
        //         localStorage.setItem('token', 'ahcsbakjcaics')
        //         localStorage.setItem('role', 3)
        //         localStorage.setItem('user', JSON.stringify({ username: username.current.value, password: password.current.value }))
        //         location.replace('/')
        //     }).catch(err => console.log(err))
        // }
    }

    const handleRegisterConfirm = (e) => {
        e.preventDefault()
        sendSms(Number(confirimationCode.current.value))
    }



    return (
        <DefaultAuth illustrationBackground={illustration} image={illustration}>
            <Flex
                maxW={{ base: "100%", md: "max-content" }}
                w='100%'
                mx={{ base: "auto", lg: "0px" }}
                me='auto'
                h='100%'
                alignItems='start'
                justifyContent='center'
                mb={{ base: "30px", md: "10px" }}
                px={{ base: "25px", md: "0px" }}
                mt={{ base: "20px", md: "10vh" }}
                flexDirection='column'>
                <Box me='auto'>
                    <Heading color={textColor} fontSize='36px' mb='10px' style={{ maxWidth: 500 }}>
                        {
                            isSMS ? "Raqamingizga yuborilgan sms kodni kiriting" : "Ro'yxatdan o'tish"
                        }
                    </Heading>
                </Box>
                <Flex
                    zIndex='2'
                    direction='column'
                    w={{ base: "100%", md: "420px" }}
                    maxW='100%'
                    background='transparent'
                    borderRadius='15px'
                    mx={{ base: "auto", lg: "unset" }}
                    me='auto'
                    mb={{ base: "20px", md: "auto" }}>
                    <FormControl>
                        {
                            isSMS ? (
                                <form onSubmit={handleRegisterConfirm}>
                                    <FormLabel
                                        display='flex'
                                        ms='4px'
                                        fontSize='sm'
                                        fontWeight='500'
                                        color={textColor}
                                        mb='8px'>
                                        Tasdiqlash kodi<Text color={brandStars}>*</Text>
                                    </FormLabel>
                                    <Input
                                        isRequired={true}
                                        variant='auth'
                                        fontSize='sm'
                                        ms={{ base: "0px", md: "0px" }}
                                        type='number'
                                        placeholder='Tasdiqlash kodi'
                                        mb='24px'
                                        fontWeight='500'
                                        size='lg'
                                        ref={confirimationCode}
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
                                        Tasdiqlash
                                    </Button>
                                </form>
                            ) : (
                                <form onSubmit={handleRegister}>
                                    <FormLabel
                                        display='flex'
                                        ms='4px'
                                        fontSize='sm'
                                        fontWeight='500'
                                        color={textColor}
                                        mb='8px'>
                                        Ism<Text color={brandStars}>*</Text>
                                    </FormLabel>
                                    <Input
                                        isRequired={true}
                                        variant='auth'
                                        fontSize='sm'
                                        ms={{ base: "0px", md: "0px" }}
                                        type='text'
                                        placeholder='Ismingiz'
                                        mb='24px'
                                        fontWeight='500'
                                        size='lg'
                                        ref={firstName}
                                    />

                                    <FormLabel
                                        display='flex'
                                        ms='4px'
                                        fontSize='sm'
                                        fontWeight='500'
                                        color={textColor}
                                        mb='8px'>
                                        Familiya<Text color={brandStars}>*</Text>
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
                                        ref={lastName}
                                    />

                                    <FormLabel
                                        display='flex'
                                        ms='4px'
                                        fontSize='sm'
                                        fontWeight='500'
                                        color={textColor}
                                        mb='8px'>
                                        Username<Text color={brandStars}>*</Text>
                                    </FormLabel>
                                    <Input
                                        isRequired={true}
                                        variant='auth'
                                        fontSize='sm'
                                        ms={{ base: "0px", md: "0px" }}
                                        type='text'
                                        placeholder='@doniyorcoder'
                                        mb='24px'
                                        fontWeight='500'
                                        size='lg'
                                        ref={username}
                                    />

                                    <FormLabel
                                        display='flex'
                                        ms='4px'
                                        fontSize='sm'
                                        fontWeight='500'
                                        color={textColor}
                                        mb='8px'>
                                        Telefon raqam<Text color={brandStars}>*</Text>
                                    </FormLabel>
                                    <Input
                                        isRequired={true}
                                        variant='auth'
                                        fontSize='sm'
                                        ms={{ base: "0px", md: "0px" }}
                                        type='tel'
                                        placeholder='Telefon raqam'
                                        mb='24px'
                                        fontWeight='500'
                                        size='lg'
                                        ref={phoneNumber}
                                    />


                                    <FormLabel
                                        ms='4px'
                                        fontSize='sm'
                                        fontWeight='500'
                                        color={textColor}
                                        display='flex'>
                                        Password<Text color={brandStars}>*</Text>
                                    </FormLabel>
                                    <InputGroup size='md'>
                                        <Input
                                            isRequired={true}
                                            fontSize='sm'
                                            placeholder='Min. 8 characters'
                                            mb='24px'
                                            size='lg'
                                            type={show ? "text" : "password"}
                                            variant='auth'
                                            ref={password}
                                        />
                                        <InputRightElement display='flex' alignItems='center' mt='4px'>
                                            <Icon
                                                color={textColorSecondary}
                                                _hover={{ cursor: "pointer" }}
                                                as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                                                onClick={handleClick}
                                            />
                                        </InputRightElement>
                                    </InputGroup>
                                    <Button
                                        fontSize='sm'
                                        variant='brand'
                                        fontWeight='500'
                                        w='100%'
                                        h='50'
                                        mb='24px'
                                        type="submit"
                                    >
                                        Ro'yxatdan o'tish
                                    </Button>
                                </form>
                            )
                        }
                    </FormControl>
                    <Flex
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='start'
                        maxW='100%'
                        mt='0px'>
                        <Text color={textColorDetails} fontWeight='400' fontSize='14px'>
                            Hisobingiz bormi?
                            <NavLink to='/auth/sign-in'>
                                <Text
                                    color={textColorBrand}
                                    as='span'
                                    ms='5px'
                                    fontWeight='500'>
                                    Hisobingizga kiring
                                </Text>
                            </NavLink>
                        </Text>
                    </Flex>
                </Flex >
            </Flex >
        </DefaultAuth >
    );
}

export default SignUp;
