import { Box, Heading } from "@chakra-ui/react"
import EPlant from "../Project Component/EPlant";
import Connect from "../Project Component/Connect";
import PaintKu from "../Project Component/PaintKu";
import { useSelector } from "react-redux";
import TechSchool from "../Project Component/TechSchool";

const Projects = () => {
    const theme = useSelector(store => store.theme);
    return <Box w={"100%"} backgroundColor={theme === "dark" ? "black" : "white"} color={theme === "dark" ? "white" : "black"} id="projects">
        <Box w={"90%"} m={"auto"} pt={"1rem"} borderBottom={"1px"} borderBottomColor={theme == "dark" ? "white" : "black"}>
            <Heading textAlign={"center"} color={"#4A90E2"} textDecoration={"underline"} textDecorationColor={"#4A90E2"}>Projects</Heading>
            <EPlant />
            <Connect />
            <PaintKu />
            <TechSchool />
        </Box>
    </Box>
}
export default Projects;