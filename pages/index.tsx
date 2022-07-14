import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react"
import Navbar from "../components/navbar"

function HomePage() {
    const { toggleColorMode } = useColorMode()

    const bg = useColorModeValue('red.500', 'red.200')
    const color = useColorModeValue('white', 'gray.800')
    return (
    
    <>
    <Navbar /><Box >
        This box's style will change based on the color mode.
      </Box>
      
      </>
    )
  }
  
  export default HomePage