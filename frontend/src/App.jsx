import {Button} from "@/components/ui/button.jsx";
import {Routes, Route} from "react-router-dom";
import {Box} from "@chakra-ui/react"
import Navbar from "./components/Navbar.jsx"
import HomePage from "./pages/HomePage.jsx"
import CreatePage from "./pages/CreatePage.jsx";
import {useColorModeValue} from "@/components/ui/color-mode.jsx";
import { Toaster, toaster } from "@/components/ui/toaster"



function App() {
  return (
      <Box minH={"100vh"}  bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar />
          <Toaster />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path={"/create"} element={<CreatePage/>} />
        </Routes>

      </Box>
  )
}

export default App
