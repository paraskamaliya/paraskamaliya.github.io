import { Box, Heading, Stack, HStack, Image, Text, Link, Button } from "@chakra-ui/react"
import EPlant from "../Project Component/EPlant";
import Connect from "../Project Component/Connect";
import PaintKu from "../Project Component/PaintKu";
import { useSelector } from "react-redux";



const Projects = () => {
    const theme = useSelector(store => store.theme);
    return <Box w={"100%"} backgroundColor={theme == "dark" ? "black" : "white"} color={theme == "dark" ? "white" : "black"}>
        <Box w={"90%"} m={"auto"} pt={"1rem"} id="projects">
            <Heading textAlign={"center"}>Projects</Heading>
            <EPlant />
            <Connect />
            <PaintKu />
        </Box>
    </Box>
}
export default Projects;