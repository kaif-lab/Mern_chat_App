import {
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Show,
    VStack,
  } from "@chakra-ui/react";
  import React, { useState } from "react";

const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState();
    const [password, setpassword] = useState();

    const handleClick = () => setShow(!show);
  
  const postDetails = () =>{}
  
  const submitHandler = ()=>{}
  
    return (
      <VStack spacing="5px" color="black">

        <FormControl id="email" isRequired>
          <FormLabel>Email ID</FormLabel>
          <Input
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter Your Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
  
        <Button colorScheme="blue"
        width="100%"
        color ="white"
        style={{marginTop : 15}}
        onClick={submitHandler}
        
        >
          Login
  
        </Button>
        <Button colorScheme="red"
        width="100%"
        // color ="white"
        style={{marginTop : 15}}
        onClick={submitHandler}
        
        >
          Login
  
        </Button>
      </VStack>
  )
}

export default Login