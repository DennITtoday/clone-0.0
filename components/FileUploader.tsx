import { Box, Input } from "@chakra-ui/react";
import React, { useRef } from "react";

interface FileUploadProps {
    setFile: Function;
    accept: string;
    children: any;
}

const FileUploader: React.FC<FileUploadProps> = ({ setFile, accept, children }) => {


    const ref = useRef<HTMLInputElement>()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFile(e.target.files[0])
    }
    return (
        <Box onClick={() => ref.current?.click()}>
            <Input
                type="file"
                accept={accept}
                style={{ display: "none" }}
                ref={ref}
                onChange={onChange}

            />
            {children}
        </Box>
    );

}








export default FileUploader;