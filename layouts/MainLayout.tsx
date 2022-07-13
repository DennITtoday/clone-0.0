import React, { FC, ReactNode } from "react";
import Navbar from "../components/Navbar";
import { Container } from "../node_modules/@mui/material/index";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;
