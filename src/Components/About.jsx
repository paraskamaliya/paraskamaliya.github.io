import { EmailIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Card, CardHeader, CardBody, Divider, Text, Icon, Grid, GridItem, Heading, Link } from "@chakra-ui/react";
import { TiLocation } from "react-icons/ti"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useSelector } from "react-redux";
const About = () => {
    const theme = useSelector(store => store.theme);
    return <Box w={"100%"} backgroundColor={theme == "dark" ? "black" : "white"} color={theme == "dark" ? "white" : "black"} id="about" className="about section" >
        <Box w={"90%"} m={"auto"} padding={"1rem"} borderBottom={"1px"} borderBottomColor={theme == "dark" ? "white" : "black"}>
            <Card m={"auto"} bg={theme == "dark" ? "black" : "white"} color={theme == "dark" ? "white" : "black"} border={"none"}>
                <Heading color={"#4A90E2"} textAlign={"center"} textDecoration={"underline"} textDecorationColor={"#4A90E2"}>About Me</Heading>
                <CardBody >
                    <Text fontSize={"1.5rem"} w={"80%"} m={"auto"} id="user-detail-intro">Hello, I'm <span style={{ color: "#4A90E2" }}>Paras Kamaliya</span>, an aspiring <span style={{ color: "#4A90E2" }}>Full Stack Web Developer</span> with a deep curiosity for exploring industry-standard tech stacks. Proficient in the <span style={{ color: "#4A90E2" }}>MERN stack</span>, I'm eager to kickstart my career with an organization that offers opportunities for skill enhancement and <span style={{ color: "#4A90E2" }}>personal growth</span>, aligning with the organization's objectives.</Text>
                    <br />
                    <Grid w={"80%"} m={"auto"} display={"grid"} templateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(4,1fr)", "repeat(4,1fr)"]} templateRows={["repeat(4,1fr)", "repeat(4,1fr)", "repeat(2,1fr)", "repeat(1,1fr)", "repeat(1,1fr)"]}  >
                        <GridItem fontSize={"1.2rem"} m="auto" textAlign={"center"} >
                            <Icon as={TiLocation} fontSize={"1.2rem"} />{" "}
                            <a href="https://maps.app.goo.gl/EvkNWhR4jAuUGEY26" target="_blank">Surat,Gujarat</a>
                        </GridItem>
                        <GridItem fontSize={"1.2rem"} m="auto" textAlign={"center"} >
                            <Icon as={EmailIcon} fontSize={"1.2rem"} />{" "}
                            <a href="mailto:paraskamaliya5@gmail.com" target="_blank">paraskamaliya5<br />@gmail.com</a>
                        </GridItem>
                        <GridItem fontSize={"1.2rem"} m="auto" textAlign={"center"} >
                            <Icon as={AiFillGithub} fontSize={"1.2rem"} />{" "}
                            <a href="https://github.com/paraskamaliya" target="_blank">GitHub</a>
                        </GridItem>
                        <GridItem fontSize={"1.2rem"} m="auto" textAlign={"center"} >
                            <Icon as={AiFillLinkedin} fontSize={"1.2rem"} />{" "}
                            <a href="https://www.linkedin.com/in/paras-kamaliya/" target="_blank">LinkedIn</a>
                        </GridItem>
                    </Grid>
                </CardBody>
            </Card>
        </Box>
    </Box>
}
export default About;