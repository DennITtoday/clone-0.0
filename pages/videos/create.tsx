import { Input, Button, Box, FormControl, FormLabel, Stack, Checkbox, Link, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

import MainLayout from "../../components/MainLayout";
import { IVideo } from "../../types/video";

const Create = () => {
    const router = useRouter()
    const videos: IVideo[] = [
        { _id: '1', tittle: 'Fuck off', description: 'something....', preview: '/client/img/roflanebalo.jpg/', video: 'https://www.youtube.com/watch?v=A0CfYSVzAZI&t=3945s' }
    ]
    return (
        <Flex minHeight='90vh' width='full' align='center' justifyContent='center'>
            <Box borderWidth={3}
                borderRadius={10}
                p={6}
                width='full'
                maxWidth='600px'>
                <form>
                    <FormControl >
                        <FormLabel>
                            Choose your preview picture!
                            <Input type='file' p='1' accept="image/*" />
                        </FormLabel>
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            Choose your video!
                            <Input type='file' p='1' />
                        </FormLabel>
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            Choose your video tittle!
                            <Input placeholder='Choose video name' p='1' />
                        </FormLabel>
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            Choose your video description!
                            <Input placeholder='Choose video description' p='1' />
                        </FormLabel>
                    </FormControl>
                    <Box alignItems='center'>
                        <Button width='full' mt={4} > Upload</Button>
                    </Box>
                </form>
            </Box>
        </Flex>

    );
};

export default Create;