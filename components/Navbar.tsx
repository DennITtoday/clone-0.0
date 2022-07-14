import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Link,
  VStack,
  chakra,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useScroll } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import Logo from "./Logo";
import { ArrowUpIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const mobileNav = useDisclosure();

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const bg = useColorModeValue("white", "gray.800");
  const ref = useRef<HTMLDivElement | null>(null);
  const [y, setY] = useState(0);
  const height = ref.current ? ref.current.getBoundingClientRect() : 0;

  const { scrollY } = useScroll();
  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  const NavLinks = [
    {
      href: "/",
      icon: <AiFillHome />,
      text: "Home",
    },
    {
      href: "/videos",
      icon: <BsFillCameraVideoFill />,
      text: "Videos",
    },
  ];

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      {NavLinks.map((NavLink, index) => (
        <Button key={index} variant="ghost" w="full" leftIcon={NavLink.icon}>
          {NavLink.text}
        </Button>
      ))}
    </VStack>
  );

  const DesktopNavcontent = (
    <HStack
      display={{ base: "none", md: "flex" }}
      p={2}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      {NavLinks.map((NavLink, index) => (
        <Button key={index} variant="ghost" w="full" leftIcon={NavLink.icon}>
          {NavLink.text}
        </Button>
      ))}
    </HStack>
  );
  return (
    <Box pos="relative">
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <Link href="/">
                <HStack>
                  <Logo />
                </HStack>
              </Link>
              {DesktopNavcontent}
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              color="gray.400"
            >
              <HStack
                spacing="5"
                display={{ base: "none", md: "flex" }}
              ></HStack>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>

      {/* Сделать нормально) */}

      {y > 100 && (
        <Link href="/#top">
          <Box
            position="fixed"
            bottom="20px"
            right={["16px", "84px"]}
            zIndex={1}
          >
            <ArrowUpIcon />
          </Box>
        </Link>
      )}
    </Box>
  );
}
