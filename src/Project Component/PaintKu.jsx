import homePage from "../Project Photo/PaintKu/Home Page.png"
import { BsGithub } from "react-icons/bs";
import { Box, Button, HStack, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { useSelector } from "react-redux";

const PaintKu = () => {
    const theme = useSelector(store => store.theme);
    return <Stack display={"flex"} flexDirection={["column", "column", "row", "row", "row"]} gap={"20px"} padding={"20px"} alignContent={"center"} alignItems={"center"} className="project-card">
        <Box w={["80%", "80%", "50%", "50%", "50%"]} justifyContent={"center"} justifyItems={"center"}>
            <Image src={homePage} width={"100%"} height={"400px"} border={"1px solid black"} cursor={"pointer"} alt="paintku" />
        </Box>
        <Box w={["80%", "80%", "50%", "50%", "50%"]}>
            <Heading fontSize={"5xl"} className="project-title">PaintKu.</Heading>
            <Text mt={"15px"} mb={"15px"} className="project-description">PaintKu, where art finds its home. Discover a world of exquisite paintings through this innovative e-commerce platform. Browse, select, and acquire stunning artworks while enjoying the convenience of tracking your recent visits. Welcome to the gallery at your fingertips.</Text>
            <HStack className="project-tech-stack" gap={"15px"}>
                <Button disabled colorScheme="red" color={"black"} >HTML</Button>
                <Button disabled colorScheme="blue" color={"black"}>CSS</Button>
                <Button disabled colorScheme="yellow" color={"black"} >JS</Button>
                <Button disabled bg="#65B0BA" >React.Js</Button>
                <Button disabled colorScheme="purple" >React Redux</Button>
                <Button disabled bg={"#4DB6AC"} >Chakra UI</Button>
            </HStack>
            <Link href='https://github.com/paraskamaliya/loud-weight-1875' isExternal className="project-github-link">
                <Button mt={"15px"} mr={"15px"} leftIcon={<BsGithub />} bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"} border={"1px solid black"}>Github</Button>
            </Link>
            <Link href='https://paintku.vercel.app/' isExternal className="project-deployed-link">
                <Button mt={"15px"} backgroundColor="#48BB78" color={"black"} _hover={{ colorScheme: "#48BB78" }} rightIcon={<ExternalLinkIcon />} border={"1px solid black"}>Live Demo</Button>
            </Link>
        </Box>
    </Stack >
}
export default PaintKu;