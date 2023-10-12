import homePage from "../Project Photo/Connect/Dashboard Page.png"
import { BsGithub } from "react-icons/bs";
import { Box, Button, HStack, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { useSelector } from "react-redux";

const Connect = () => {
    const theme = useSelector(store => store.theme)
    return <Stack display={"flex"} flexDirection={["column", "column", "row", "row", "row"]} gap={"20px"} padding={"20px"} alignContent={"center"} alignItems={"center"} className="project-card">
        <Box w={["80%", "80%", "50%", "50%", "50%"]} justifyContent={"center"} justifyItems={"center"}>
            <Image src={homePage} width={"100%"} height={"400px"} border={"1px solid black"} cursor={"pointer"} alt="connect" />
        </Box>
        <Box w={["80%", "80%", "50%", "50%", "50%"]}>
            <Heading fontSize={"5xl"} className="project-title">Connect</Heading>
            <Text mt={"15px"} mb={"15px"} className="project-description">Step into the future of efficient management with 'Connect.' This dynamic website unites students, managers, and administrators, empowering them with tailored interfaces for seamless collaboration. Immerse yourself in a sleek, user-friendly environment with the added charm of a customizable dark mode. Engage in vibrant discussions and stay informed with the latest announcements. 'Connect' - where functionality meets elegance, making management an absolute pleasure.</Text>
            <HStack className="project-tech-stack" gap={"15px"}>
                <Button disabled colorScheme="red" color={"black"} className="project-tech-stack">HTML</Button>
                <Button disabled colorScheme="blue" color={"black"} >CSS</Button>
                <Button disabled colorScheme="yellow" color={"black"} >JS</Button>
                <Button disabled colorScheme="cyan" color={"black"} >SmtpJS</Button>
            </HStack>
            <Link href='https://github.com/paraskamaliya/adorable-crown-8253' isExternal className="project-github-link">
                <Button mt={"15px"} mr={"15px"} leftIcon={<BsGithub />} bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"} border={"1px solid black"}>Github</Button>
            </Link>
            <Link href='https://connect-lms01.netlify.app/' isExternal className="project-deployed-link">
                <Button mt={"15px"} backgroundColor="#F6FFEE" color={"black"} rightIcon={<ExternalLinkIcon />} border={"1px solid black"}>Live Demo</Button>
            </Link>
        </Box>
    </Stack >
}
export default Connect;