import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';


const Links = ['All Videos'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'/'}>
    {children}

  </Link>

);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Stack spacing={4} width={'600px'} p={2}>
            <InputGroup>
              <InputLeftElement
                //может как то можно по-другому пофиксить но я хз как
                // eslint-disable-next-line react/no-children-prop
                children={<SearchIcon color={'gray.300'} />}
              />
              <Input placeholder={"Search video"}></Input>
            </InputGroup>
          </Stack>
          <Flex>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
              </MenuButton>
              <Stack spacing={4} direction='row' align='center'>
                <Link px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }} href='/auth/login'> Authorization </Link>
                <Link px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }} href='/videos/create'> Upload </Link>
              </Stack>
              <ColorModeSwitcher />
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}

      </Box>
    </>
  );
}