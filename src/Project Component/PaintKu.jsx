import homePage from "../Project Photo/PaintKu/Home Page.png"
import { BsGithub } from "react-icons/bs";
import { Button, Box, Grid, GridItem, HStack, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { useSelector } from "react-redux";

const PaintKu = () => {
    const theme = useSelector(store => store.theme);
    return <Stack display={"flex"} flexDirection={["column", "column", "row", "row", "row"]} gap={"20px"} padding={"20px"} alignContent={"center"} alignItems={"center"} className="project-card" boxShadow={"lg"} borderRadius={"15px"} m={2}>
        <Box w={["100%", "100%", "50%", "50%", "50%"]} justifyContent={"center"} justifyItems={"center"} data-aos="fade-right" data-aos-duration="1500">
            <Image src={homePage} border={"1px solid black"} cursor={"pointer"} alt="paintku" />
        </Box>
        <Box w={["100%", "100%", "50%", "50%", "50%"]} data-aos="fade-left" data-aos-duration="1500">
            <Heading fontSize={"5xl"} className="project-title">PaintKu.</Heading>
            <Text mt={"15px"} mb={"15px"} className="project-description">PaintKu a Collaborative project, where art finds its home. Discover a world of exquisite paintings through this innovative e-commerce platform. Browse, select, and acquire stunning artworks while enjoying the convenience of tracking your <span style={{ color: "#4A90E2" }}>recent visits</span>. Welcome to the gallery at your fingertips.</Text>
            <Grid templateColumns={["repeat(2,2fr)", "repeat(3,1fr)", "repeat(3,1fr)", "repeat(4,1fr)", "repeat(6,1fr)"]} templateRows={"auto"} gap={"10px"} className="project-tech-stack">
                <GridItem ><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled colorScheme="red" w={"100%"}>HTML</Button></GridItem>
                <GridItem ><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled colorScheme="blue" w={"100%"}>CSS</Button></GridItem>
                <GridItem ><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled colorScheme="yellow" color={"black"} w={"100%"}>JavaScript</Button></GridItem>
                <GridItem ><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled bg="#65B0BA" w={"100%"}>React.Js</Button></GridItem>
                <GridItem ><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled colorScheme="purple" w={"100%"}>Redux</Button></GridItem>
                <GridItem ><Button _hover={{ color: "none" }} _active={{ color: "none" }} disabled bg={"#4DB6AC"} w={"fit-content"}>Chakra UI</Button></GridItem>
            </Grid>
            <Stack direction={"row"} justifyContent={["center", "center", "left", "left", "left"]}>
                <Link href='https://github.com/paraskamaliya/loud-weight-1875' isExternal className="project-github-link">
                    <Button mt={"15px"} mr={"15px"} leftIcon={<BsGithub />} w={"100%"} bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"} border={"1px solid black"} _hover={{ colorScheme: theme === "dark" ? "white" : "black" }} _active={{
                        bg: theme === "dark" ? "white" : "black", transform: 'scale(0.90)', borderColor: '#000000'
                    }}>Github</Button>
                </Link>
                <Link href="https://paintku.vercel.app/" isExternal className="project-deployed-link">
                    <Button mt={"15px"} backgroundColor="#48BB78" color={"black"} w={"100%"} _hover={{ colorScheme: "#48BB78" }} rightIcon={<ExternalLinkIcon />} border={"1px solid black"} _active={{
                        bg: '#48BB78', transform: 'scale(0.90)', borderColor: '#000000'
                    }}
                    >Live Demo</Button>
                </Link>
            </Stack>
        </Box>
    </Stack >
}
export default PaintKu;