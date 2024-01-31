import homePage from "../Project Photo/E-Plant/Home Page.png"
import { BsGithub } from "react-icons/bs";
import { Box, Button, Grid, GridItem, HStack, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { useSelector } from "react-redux";

const EPlant = () => {
    const theme = useSelector(store => store.theme)
    return <Stack display={"flex"} flexDirection={["column", "column", "row", "row", "row"]} gap={"20px"} padding={"20px"} alignContent={"center"} alignItems={"center"} className="project-card" boxShadow={"lg"} borderRadius={"15px"} m={2}>
        <Box w={["100%", "100%", "50%", "50%", "50%"]} justifyContent={"center"} justifyItems={"center"} data-aos="fade-right" data-aos-duration="1500">
            <Image src={homePage} border={"1px solid black"} cursor={"pointer"} alt="eplant" />
        </Box>
        <Box w={["100%", "100%", "50%", "50%", "50%"]} data-aos="fade-left" data-aos-duration="1500">
            <Heading fontSize={"5xl"} className="project-title">E-Plant</Heading>
            <Text mt={"15px"} mb={"15px"} className="project-description">E-Plant is an innovative e-commerce platform dedicated to the beauty of nature, offering a wide variety of plants. With both <span style={{ color: "#4A90E2" }}>user and admin interfaces</span>, it seamlessly blends functionality with an <span style={{ color: "#4A90E2" }}>appealing UI</span>. Explore the world of greenery while keeping track of your <span style={{ color: "#4A90E2" }}>recent visits</span> to your favorite plants.</Text>
            <Grid className="project-tech-stack" templateColumns={["repeat(2,1fr)", "repeat(3,1fr)", "repeat(3,1fr)", "repeat(4,1fr)", "repeat(5,1fr)"]} gap={"10px"}>
                <GridItem> <Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled colorScheme="red" w={"100%"} className="project-tech-stack">HTML</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled colorScheme="blue" w={"100%"}>CSS</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled colorScheme="yellow" color={"black"} w={"100%"}>JavaScript</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled bg="#65B0BA" w={"100%"}>React.Js</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled bg={"#4DB6AC"} w={"100%"}>Chakra UI</Button></GridItem>
            </Grid>
            <Stack direction={"row"} justifyContent={["center", "center", "left", "left", "left"]}>
                <Link href='https://github.com/paraskamaliya/phobic-lumber-7659' isExternal className="project-github-link">
                    <Button mt={"15px"} mr={"15px"} leftIcon={<BsGithub />} w={"100%"} bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"} border={"1px solid black"} _hover={{ colorScheme: theme === "dark" ? "white" : "black" }} _active={{
                        bg: theme === "dark" ? "white" : "black", transform: 'scale(0.90)', borderColor: '#000000'
                    }}>Github</Button>
                </Link>
                <Link href='https://e-plant.vercel.app/' isExternal className="project-deployed-link">
                    <Button mt={"15px"} backgroundColor="#426800" color={"white"} w={"100%"} _hover={{ colorScheme: "#426800" }} rightIcon={<ExternalLinkIcon />} border={"1px solid black"} _active={{
                        bg: '#426800', transform: 'scale(0.90)', borderColor: '#000000'
                    }}>Live Demo</Button>
                </Link>
            </Stack>
        </Box >
    </Stack >
}
export default EPlant;