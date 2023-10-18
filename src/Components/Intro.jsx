import { Box, Button, Divider, Heading, Image, Link, Stack, Text } from "@chakra-ui/react"
import ProfilePic from "../Photos/profilepic.png"
import { useSelector } from "react-redux";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import resume from "../assets/ParasKamaliya_Resume.pdf"
const Intro = () => {
    const theme = useSelector(store => store.theme)
    return <Box bg={theme == "dark" ? "black" : "white"} color={theme == "dark" ? "white" : "black"} w={"100%"} id="intro" >
        <Box m={"auto"} w={"90%"} >
            <Stack display={"flex"} m={"auto"} justifyContent={"center"} flexDirection={["column", "column", "row", "row", "row"]} alignItems={"center"} w={"100%"} borderBottom={"1px"} borderBottomColor={theme == "dark" ? "white" : "black"}>
                <Box textAlign={"left"} padding={"1rem"} fontSize={"2rem"} m={"auto"} w={["100%", "85%", "70%", "50%", "50%"]}>
                    <Text textAlign={"left"} fontWeight={200} fontSize={"2rem"}>Hello👋, </Text>
                    <Heading textAlign={"left"} fontSize={"4rem"}>I'm <span style={{ color: "#4A90E2" }} id="user-detail-name">Paras</span></Heading>
                    <Heading textAlign={"left"} fontSize={"3.5rem"} >Full Stack Web Developer</Heading>
                    <Text textAlign={"left"} fontSize={"1.2rem"} noOfLines={2} fontWeight={300} >Skilled Full stack Web developer and experienced <br /> in creating User freindly Interface websites.</Text>
                    <a href={resume} isExternal download={resume} id="resume-link-2">
                        <Button rightIcon={<ExternalLinkIcon />} bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"} _hover={{ color: "none" }} id="resume-button-1">Resume</Button>
                    </a>
                </Box>
                <Box w={["100%", "85%", "70%", "50%", "50%"]} m={"auto"} position={"sticky"} h={"100%"} alignItems={"flex-end"}>
                    <Image src={ProfilePic} m={"auto"} objectFit={"cover"} className="home-img" alt="profilepic" flex={1} />
                </Box>
            </Stack>
        </Box >
    </Box >
}
export default Intro;