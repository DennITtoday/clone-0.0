import { Box } from "@chakra-ui/layout";
import { NextPage } from "next";
import React, { ReactNode } from "react";
import NavBar from "./Navbar";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout: NextPage<IMainLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Box>{children}</Box>

    </>
  );
};

export default MainLayout;