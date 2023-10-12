import homePage from "../Project Photo/Connect/Dashboard Page.png"
import { BsGithub } from "react-icons/bs";
import { Button, Box, Grid, GridItem, HStack, Heading, Image, Link, Stack, Text, Flex } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { useSelector } from "react-redux";

const Connect = () => {
    const theme = useSelector(store => store.theme)
    return <Stack display={"flex"} flexDirection={["column", "column", "row", "row", "row"]} gap={"20px"} padding={"20px"} alignContent={"center"} alignItems={"center"} className="project-card">
        <Box w={["80%", "80%", "50%", "50%", "50%"]} justifyContent={"center"} justifyItems={"center"}>
            <Image src={homePage} border={"1px solid black"} cursor={"pointer"} alt="connect" />
        </Box>
        <Box w={["80%", "80%", "50%", "50%", "50%"]}>
            <Heading fontSize={"5xl"} className="project-title">Connect</Heading>
            <Text mt={"15px"} mb={"15px"} className="project-description">Step into the future of efficient management with 'Connect.' This dynamic website unites students, managers, and administrators, empowering them with tailored interfaces for seamless collaboration. Immerse yourself in a sleek, user-friendly environment with the added charm of a customizable dark mode. Engage in vibrant discussions and stay informed with the latest announcements. 'Connect' - where functionality meets elegance, making management an absolute pleasure.</Text>
            <Grid templateColumns={["repeat(2,1fr)", "repeat(3,1fr)", "repeat(3,1fr)", "repeat(4,1fr)", "repeat(4,1fr)"]} gap={"10px"} className="project-tech-stack" >
                <GridItem><Button colorScheme="red" color={"black"} w={"100%"}>HTML</Button></GridItem>
                <GridItem><Button colorScheme="blue" color={"black"} w={"100%"} >CSS</Button></GridItem>
                <GridItem><Button colorScheme="yellow" color={"black"} w={"100%"} >JavaScript</Button></GridItem>
                <GridItem><Button colorScheme="cyan" color={"black"} w={"100%"}>SmtpJs</Button></GridItem>
            </Grid>
            <Stack direction={["column", "row", "row"]}>
                <Link href='https://github.com/paraskamaliya/adorable-crown-8253' isExternal className="project-github-link">
                    <Button mt={"15px"} mr={"15px"} leftIcon={<BsGithub />} bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"} border={"1px solid black"}>Github</Button>
                </Link>
                <Link href='https://connect-lms01.netlify.app/' isExternal className="project-deployed-link">
                    <Button mt={"15px"} backgroundColor="#F6FFEE" color={"black"} rightIcon={<ExternalLinkIcon />} border={"1px solid black"}>Live Demo</Button>
                </Link>
            </Stack>
        </Box>
    </Stack >
}
export default Connect;