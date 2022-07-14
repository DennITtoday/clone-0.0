import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import NextLink from "next/link"
import { ColorModeSwitcher } from "./ColorModeSwitcher";



const NavBar = () => {
    return (
        <Flex>
            <Flex
                pos="fixed"
                top="1rem"
                right="1rem">
                <NextLink href='/' passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        aria-label="home"
                        my={5}
                        w="100%">
                        Home
                    </Button></NextLink>

                <NextLink href='/videos' passHref>
                    <Button as="a"
                        variant="ghost"
                        aria-label="Video list"
                        my={5}
                        w="100%"
                        padding={5}>
                        VideoList
                    </Button></NextLink>
                   <ColorModeSwitcher />
            </Flex>
        </Flex>
    )
}

export default NavBar;