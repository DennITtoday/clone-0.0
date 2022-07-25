import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Text, Input, Link, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

const accCreate = () => {

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


    )
};
const LoginHeader = () => {
    return (
        <Box textAlign='center'>
            <Heading>Create new account...</Heading>
            <Text>
                And you are welcome!
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
                       Come up with Nickname
                        <Input type='email' placeholder="Enter your Nickname" />
                    </FormLabel>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        Put your email Address
                        <Input type='email' placeholder="Enter your email address" />
                    </FormLabel>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        Create a password
                        <Input type='password' placeholder="Enter your password" />
                    </FormLabel>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        Confirm a password
                        <Input type='password' placeholder="Confirm" />
                    </FormLabel>
                </FormControl>
                <Stack isInline justifyContent='space-between'>
                </Stack>
                <Button width='full' mt={4}>Create</Button>
            </form>
        </Box>
    )
}
export default accCreate;