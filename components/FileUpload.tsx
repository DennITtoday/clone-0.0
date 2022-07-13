import React, { ChangeEvent, FC, ReactNode, useRef } from "react";

interface IFileUploadProps {
  setFile: Function;
  accept: string;
  children: ReactNode;
}

const FileUpload: FC<IFileUploadProps> = ({ setFile, accept, children }) => {
  const inputRef = useRef<HTMLInputElement>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };
  // Непонятно зачем скрывать инпут и делать див инпутом)
  // если можно просто кастомизировать инпут а не див

  return (
    <div onClick={() => inputRef.current.click()}>
      <input
        accept={accept}
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        onChange={handleChange}
        multiple={false}
      />
      {children}
    </div>
  );
};

export default FileUpload;
