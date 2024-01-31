import homePage from "../Project Photo/AskQuestions/Homepage.png"
import { BsGithub } from "react-icons/bs";
import { Box, Button, Grid, GridItem, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { useSelector } from "react-redux";

const AskQuestions = () => {
    const theme = useSelector(store => store.theme)
    return <Stack display={"flex"} flexDirection={["column", "column", "row", "row", "row"]} gap={"20px"} padding={"20px"} alignContent={"center"} alignItems={"center"} className="project-card" boxShadow={"lg"} borderRadius={"15px"} m={2}>
        <Box w={["100%", "100%", "50%", "50%", "50%"]} justifyContent={"center"} justifyItems={"center"} data-aos="fade-right" data-aos-duration="1500">
            <Image src={homePage} border={"1px solid black"} cursor={"pointer"} alt="eplant" />
        </Box>
        <Box w={["100%", "100%", "50%", "50%", "50%"]} data-aos="fade-left" data-aos-duration="1500">
            <Heading fontSize={"5xl"} className="project-title">AskQuestions</Heading>
            <Text mt={"15px"} mb={"15px"} className="project-description">Explore AskQuestions, a dynamic knowledge hub for diverse <span style={{ color: "#4A90E2" }}>Q&A</span>. Engage with a <span style={{ color: "#4A90E2" }} >user-friendly platform</span> and join a vibrant community to unravel mysteries together. Dive into a world of knowledge — join AskQuestions now!</Text>
            <Grid className="project-tech-stack" templateColumns={["repeat(2,1fr)", "repeat(3,1fr)", "repeat(3,1fr)", "repeat(4,1fr)", "repeat(5,1fr)"]} gap={"10px"}>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled bg={"black"} w={"100%"} color={"white"}>Express JS</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled bg={"#3cff15"} w={"100%"} >MongoDB</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled bg={"#870000"} w={"100%"} color={"white"}>Mongoose</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled colorScheme="red" w={"100%"}>HTML</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled colorScheme="blue" w={"100%"}>CSS</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled colorScheme="yellow" color={"black"} w={"100%"}>JavaScript</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled bg="#65B0BA" w={"100%"}>React.Js</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled colorScheme="purple" w={"100%"}>Redux</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled bg={"#4DB6AC"} w={"100%"}>Chakra UI</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled bg={"black"} w={"100%"} color={"white"}>Framer Motion</Button></GridItem>
            </Grid>
            <Stack direction={"row"} justifyContent={["center", "center", "left", "left", "left"]}>
                <Link href='https://github.com/paraskamaliya/AskQuestions' isExternal className="project-github-link">
                    <Button mt={"15px"} mr={"15px"} leftIcon={<BsGithub />} w={"100%"} bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"} border={"1px solid black"} _hover={{ colorScheme: theme === "dark" ? "white" : "black" }} _active={{
                        bg: theme === "dark" ? "white" : "black", transform: 'scale(0.90)', borderColor: '#000000'
                    }}>Github</Button>
                </Link>
                <Link href='https://askquestions.vercel.app/' isExternal className="project-deployed-link">
                    <Button mt={"15px"} backgroundColor="black" color={"white"} w={"100%"} _hover={{ colorScheme: "#426800" }} rightIcon={<ExternalLinkIcon />} border={"1px solid white"} _active={{
                        transform: 'scale(0.90)', borderColor: '#000000'
                    }}>Live Demo</Button>
                </Link>
            </Stack>
        </Box >
    </Stack >
}
export default AskQuestions;