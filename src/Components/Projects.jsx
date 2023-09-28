import { Box, Heading, Stack, HStack, Image, Text, Link, Button } from "@chakra-ui/react"
import EPlant from "../Project Com/EPlant";



const Projects = () => {
    return <Box color={"white"} w={"90%"} m={"auto"} pt={"1rem"} id="projects">
        <Heading textAlign={"center"}>Projects</Heading>
        <EPlant />
    </Box>
}
export default Projects;