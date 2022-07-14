import { Box, ChakraProps, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";

interface ILogoProps {
  props: ChakraProps
}

const Logo = () => {
  return (
    <Box >
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  );
};

export default Logo;
