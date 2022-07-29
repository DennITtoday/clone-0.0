import { LinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text, Link, FormControl, FormLabel, Input, Stack, Checkbox, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Authorization = () => {
    const router = useRouter()
    return (
        <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
            <Box
                borderWidth={3}
                borderRadius={10}
                p={6}
                width='full'
                maxWidth='600px'
            >
                <LoginHeader />
                <LoginForm />
            </Box>
        </Flex>


    );
};
const LoginHeader = () => {
    return (
        <Box textAlign='center'>
            <Heading>Log in to your account</Heading>
            <Text>
                Or Create a new one!
            </Text>
        </Box>
    )
}

const LoginForm = () => {
    const router = useRouter()
    return (
        <Box >
            <form>
                <FormControl>
                    <FormLabel>
                        Email Address
                        <Input type='email' placeholder="Enter your email address" />
                    </FormLabel>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        Add password
                        <Input type='password' placeholder="Enter your password" />
                    </FormLabel>
                </FormControl>
                <Stack isInline justifyContent='space-between'>
                    <Box>
                        <Checkbox>Remember me </Checkbox>
                    </Box>
                    <Box onClick={() => router.push('/auth/register')}>
                        <Link color='#008080'>Create new account</Link>
                    </Box>
                </Stack>
                <Button width='full' mt={4} >Sign in</Button>
            </form>
        </Box>
    )
}
export default Authorization;