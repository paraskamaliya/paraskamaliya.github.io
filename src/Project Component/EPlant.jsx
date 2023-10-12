import homePage from "../Project Photo/E-Plant/Home Page.png"
import { BsGithub } from "react-icons/bs";
import { Box, Button, HStack, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { useSelector } from "react-redux";

const EPlant = () => {
    const theme = useSelector(store => store.theme)
    return <Stack display={"flex"} flexDirection={["column", "column", "row", "row", "row"]} gap={"20px"} padding={"20px"} alignContent={"center"} alignItems={"center"} className="project-card">
        <Box w={["80%", "80%", "50%", "50%", "50%"]} justifyContent={"center"} justifyItems={"center"}>
            <Image src={homePage} width={"100%"} height={"400px"} border={"1px solid black"} cursor={"pointer"} alt="eplant" />
        </Box>
        <Box w={["80%", "80%", "50%", "50%", "50%"]}>
            <Heading fontSize={"5xl"} className="project-title">E-Plant</Heading>
            <Text mt={"15px"} mb={"15px"} className="project-description">E-Plant is an innovative e-commerce platform dedicated to the beauty of nature, offering a wide variety of plants. With both user and admin interfaces, it seamlessly blends functionality with an appealing UI. Explore the world of greenery while keeping track of your recent visits to your favorite plants.</Text>
            <HStack className="project-tech-stack" gap={"15px"}>
                <Button disabled colorScheme="red" color={"black"} className="project-tech-stack">HTML</Button>
                <Button disabled colorScheme="blue" color={"black"} >CSS</Button>
                <Button disabled colorScheme="yellow" color={"black"} >JS</Button>
                <Button disabled bg="#65B0BA" >React.Js</Button>
                <Button disabled bg={"#4DB6AC"} >Chakra UI</Button>
            </HStack>
            <Link href='https://github.com/paraskamaliya/phobic-lumber-7659' isExternal className="project-github-link">
                <Button mt={"15px"} mr={"15px"} leftIcon={<BsGithub />} bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"} border={"1px solid black"}>Github</Button>
            </Link>
            <Link href='https://e-plant.vercel.app/' isExternal className="project-deployed-link">
                <Button mt={"15px"} backgroundColor="#426800" color={"white"} rightIcon={<ExternalLinkIcon />} border={"1px solid black"}>Live Demo</Button>
            </Link>
        </Box>
    </Stack >
}
export default EPlant;