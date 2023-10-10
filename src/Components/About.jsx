import { EmailIcon } from "@chakra-ui/icons";
import { Box, Card, CardHeader, CardBody, Divider, Text, Icon, Grid, GridItem, Heading } from "@chakra-ui/react";
import { TiLocation } from "react-icons/ti"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useSelector } from "react-redux";
const About = () => {
    const theme = useSelector(store => store.theme);
    return <Box w={"100%"} backgroundColor={theme == "dark" ? "black" : "white"} color={theme == "dark" ? "white" : "black"}>
        <Box w={"90%"} m={"auto"} padding={"1rem"} id="about" className="about section">
            <Card m={"auto"} bg={theme == "dark" ? "black" : "white"} color={theme == "dark" ? "white" : "black"} borderBottom={"1px"} borderBottomColor={theme == "dark" ? "white" : "black"}>
                <Heading color={"yellow"} textAlign={"center"} textDecoration={"underline"} textDecorationColor={"yellow"}>About Me</Heading>
                <CardBody >
                    <Text fontSize={"1.5rem"} w={"80%"} m={"auto"}>Hello, I'm <span style={{ color: "yellow" }}>Paras Kamaliya</span>, an aspiring <span style={{ color: "yellow" }}>Full Stack Web Developer</span> with a deep curiosity for exploring industry-standard tech stacks. Proficient in the <span style={{ color: "yellow" }}>MERN stack</span>, I'm eager to kickstart my career with an organization that offers opportunities for skill enhancement and personal growth, aligning with the organization's objectives.</Text>
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
                            <a href="https://www.linkedin.com/in/paras-kamaliya-83a761192/" target="_blank">LinkedIn</a>
                        </GridItem>
                    </Grid>
                </CardBody>
            </Card>
        </Box>
    </Box>
}
export default About;