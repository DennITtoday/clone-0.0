import { Input, Button, Box, FormControl, FormLabel, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useInput } from "../../hooks/useInput";
import FormData from 'form-data';
import FileUploader from "../../components/FileUploader";

const Create = () => {
    const [picture, setPicture] = useState(null)
    const [video, setVideo] = useState(null)
    const videoName = useInput('')
    const description = useInput('')
    const router = useRouter()
    const handleUpload = async () => {
        if (!picture) {
            alert("At first, select picture!")
            return;
        }
        if (!video) {
            alert("At first, select video!")
            return;
        }
        if(!videoName.value){
            alert("At first select video tittle!")
            return;
        }
        const formData = new FormData()
        formData.append('videoName', videoName.value);
        formData.append('description', description.value);
        formData.append('picture', picture);
        formData.append('video', video);
        axios.post('http://localhost:5000/videos', formData)
            .then(() => router.push('/'))
            .catch(e => console.log(e))
    }

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
                            <FileUploader setFile={setPicture} accept="image/*">
                                <Button width='full'>Choose your preview picture!</Button>
                            </FileUploader>
                        </FormLabel>
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            Choose your video!
                            <FileUploader setFile={setVideo} accept="video/*">
                                <Button width='full'>Choose your video!</Button>
                            </FileUploader>
                        </FormLabel>
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            Choose your video tittle!
                            <Input placeholder='Choose video name' p='1' {...videoName} />
                        </FormLabel>
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            Choose your video description!
                            <Input placeholder='Choose video description' p='1' {...description} />
                        </FormLabel>
                    </FormControl>
                    <Box alignItems='center'>
                        <Button width='full' mt={4} onClick={handleUpload}> Upload</Button>
                    </Box>
                </form>
            </Box>
        </Flex>


    );
};

export default Create;