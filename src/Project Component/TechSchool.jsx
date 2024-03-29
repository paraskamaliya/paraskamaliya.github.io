import homePage from "../Project Photo/Tech School/Tech School Home Page.png"
import { BsGithub } from "react-icons/bs";
import { Button, Box, Grid, GridItem, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { useSelector } from "react-redux";

const TechSchool = () => {
    const theme = useSelector(store => store.theme)
    return <Stack display={"flex"} flexDirection={["column", "column", "row", "row", "row"]} gap={"20px"} padding={"20px"} alignContent={"center"} alignItems={"center"} className="project-card" boxShadow={"lg"} borderRadius={"15px"} m={2}>
        <Box w={["100%", "100%", "50%", "50%", "50%"]} justifyContent={"center"} justifyItems={"center"} data-aos="fade-right" data-aos-duration="1500">
            <Image src={homePage} border={"1px solid black"} cursor={"pointer"} alt="techschool" />
        </Box>
        <Box w={["100%", "100%", "50%", "50%", "50%"]} data-aos="fade-left" data-aos-duration="1500">
            <Heading fontSize={"5xl"} className="project-title">Tech School</Heading>
            <Text mt={"15px"} mb={"15px"} className="project-description" >Tech School is my inaugural web development project, a basic website designed to showcase my foundational skills in web development. As a <span style={{ color: "#4A90E2" }}>beginner</span> in the world of coding and web design, I embarked on this project with a clear objective: to create a simple yet <span style={{ color: "#4A90E2" }}>informative website</span>.</Text>
            <Grid templateColumns={["repeat(2,1fr)", "repeat(3,1fr)", "repeat(3,1fr)", "repeat(3,1fr)", "repeat(3,1fr)"]} templateRows={"auto"} gap={"10px"} className="project-tech-stack" >
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} colorScheme="red" w={"100%"}>HTML</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} colorScheme="blue" w={"100%"} >CSS</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} colorScheme="yellow" w={"100%"} >JavaScript</Button></GridItem>
            </Grid>
            <Stack direction={"row"} justifyContent={["center", "center", "left", "left", "left"]}>
                <Link href='https://github.com/paraskamaliya/brawny-jam-9247' isExternal className="project-github-link">
                    <Button mt={"15px"} mr={"15px"} w={"100%"} leftIcon={<BsGithub />} bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"} border={"1px solid black"} _hover={{ colorScheme: theme === "dark" ? "white" : "black" }} _active={{
                        bg: theme === "dark" ? "white" : "black", transform: 'scale(0.90)', borderColor: '#000000'
                    }}>Github</Button>
                </Link>
                <Link href='https://brawny-jam-9247.netlify.app/' isExternal className="project-deployed-link">
                    <Button mt={"15px"} backgroundColor="#71BDD5" w={"100%"} color={"black"} _hover={{ colorScheme: "#F6FFEE" }} rightIcon={<ExternalLinkIcon />} border={"1px solid black"} _active={{
                        bg: '#71BDD5', transform: 'scale(0.90)', borderColor: '#000000'
                    }}>Live Demo</Button>
                </Link>
            </Stack>
        </Box>
    </Stack >
}
export default TechSchool;