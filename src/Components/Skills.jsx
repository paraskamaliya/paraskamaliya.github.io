import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import html from "../assets/html.png";
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import redux from "../assets/redux.png"
import chakra from "../assets/chakra ui.png"
import express from "../assets/express.png"
import mongo from "../assets/mongo.png"
import node from "../assets/node.png"
import ts from "../assets/Ts.png"
import teamwork from "../assets/team work.png"
import adaptabilty from "../assets/adaptabity.png"
import creative from "../assets/creative.png"
import growth from "../assets/growth.png"
import ownership from "../assets/ownership.png"
import self from "../assets/self learn.png"
import github from "../assets/github.png"
import cypress from "../assets/cypress.png"
import jest from "../assets/jest.png"
import netlify from "../assets/netlify.png"
import vercel from "../assets/Vercel.png"
import { useSelector } from "react-redux";
const Skills = () => {
    const theme = useSelector(store => store.theme);
    return <Box w={"100%"} backgroundColor={theme === "dark" ? "#2c2c2c" : "#efefef"} color={theme === "dark" ? "white" : "black"} id="skills" >
        <Box w={"90%"} m={"auto"} p={"1rem"} borderBottom={"1px"} borderBottomColor={theme === "dark" ? "white" : "black"}>
            <Heading textAlign={"center"} textDecoration={"underline"} color={"#4A90E2"} textDecorationColor={"#4A90E2"}>Skills</Heading>
            <Box w={"100%"} direction={"row"} justifyContent={"center"} >
                <Heading textAlign={"center"} fontSize={"3xl"} mt={5} >Tech Stacks</Heading>

                <Grid templateColumns={["repeat(2,1fr)", "repeat(2,1fr)", "repeat(3,1fr)", "repeat(3,1fr)", "repeat(5,1fr)"]} fontSize={["xl", "xl", "2xl", "2xl", "2xl"]} textAlign={"center"} gap={"7"} border={theme === "dark" ? "1px solid white" : "1px solid black"} borderRadius={10}>
                    <GridItem className="skills-card" >
                        <Image src={html} objectFit="cover" w={"50%"} m={"auto"} alt="html" className="skills-card-img" />
                        <Text className="skills-card-name">HTML</Text>
                    </GridItem>
                    <GridItem className="skills-card">
                        <Image src={css} objectFit="cover" w={"50%"} m={"auto"} alt="css" className="skills-card-img" />
                        <Text className="skills-card-name">CSS</Text>
                    </GridItem>
                    <GridItem className="skills-card">
                        <Image src={js} objectFit="cover" w={"50%"} m={"auto"} alt="js" className="skills-card-img" />
                        <Text className="skills-card-name" >JavaScript</Text>
                    </GridItem>
                    <GridItem className="skills-card">
                        <Image src={react} objectFit="cover" w={"50%"} m={"auto"} alt="react" className="skills-card-img" />
                        <Text className="skills-card-name">React</Text>
                    </GridItem>
                    <GridItem className="skills-card">
                        <Image src={redux} objectFit="cover" w={"50%"} m={"auto"} alt="redux" className="skills-card-img" />
                        <Text className="skills-card-name">Redux</Text>
                    </GridItem>
                    <GridItem className="skills-card">
                        <Image src={ts} objectFit="cover" w={"50%"} m={"auto"} alt="ts" className="skills-card-img" />
                        <Text className="skills-card-name">TypeScript</Text>
                    </GridItem>
                    <GridItem className="skills-card">
                        <Image src={chakra} objectFit="cover" w={"50%"} m={"auto"} alt="chakraui" className="skills-card-img" />
                        <Text className="skills-card-name">Chakra UI</Text>
                    </GridItem>
                    <GridItem className="skills-card">
                        <Image src={express} bg={"white"} objectFit="cover" w={"50%"} m={"auto"} alt="express" className="skills-card-img" />
                        <Text className="skills-card-name">Express</Text>
                    </GridItem>
                    <GridItem className="skills-card" w={"100%"}>
                        <Image src={mongo} objectFit="cover" w={"50%"} m={"auto"} alt="mongodb" className="skills-card-img" />
                        <Text className="skills-card-name">MongoDB</Text>
                    </GridItem>
                    <GridItem className="skills-card">
                        <Image src={node} objectFit="cover" w={"50%"} m={"auto"} alt="nodejs" className="skills-card-img" />
                        <Text className="skills-card-name">Node.js</Text>
                    </GridItem>
                </Grid>
                <Heading textAlign={"center"} fontSize={"3xl"} mt={10}>Other Skill</Heading>

                <Box m={"auto"} textAlign={"center"} border={"1px"} borderRadius={"10"} >
                    <Heading fontSize={"3xl"} fontWeight={400} m={"auto"} mt={"7px"} mb={"5px"} w={"90%"} borderBottom={"1px"}>Mindsets</Heading>
                    <Grid templateColumns={["repeat(2,1fr)", "repeat(2,1fr)", "repeat(3,1fr)", "repeat(4,1fr)", "repeat(6,1fr)"]} m={"auto"} templateRows={"auto"} textAlign={"center"} w={"100%"} mt={"5px"} fontSize={["xl", "xl", "2xl", "2xl", "2xl"]} gap={"7"}>
                        <GridItem className="skills-card" w={"100%"} m={"auto"} >
                            <Image src={teamwork} w={"50%"} objectFit={"cover"} m={"auto"} alt="teamwork" className="skills-card-img" />
                            <Text className="skills-card-name">Team Work</Text>
                        </GridItem>
                        <GridItem className="skills-card" w={"100%"} m={"auto"}>
                            <Image src={creative} w={"50%"} objectFit={"cover"} m={"auto"} alt="creative" className="skills-card-img" />
                            <Text className="skills-card-name">Creative</Text>
                        </GridItem>
                        <GridItem className="skills-card" w={"100%"} m={"auto"}>
                            <Image src={adaptabilty} className="skills-card-img" w={"50%"} objectFit={"cover"} m={"auto"} alt="adaptablity" />
                            <Text className="skills-card-name">Adaptability</Text>
                        </GridItem>
                        <GridItem className="skills-card" w={"100%"} m={"auto"}>
                            <Image src={self} w={"50%"} objectFit={"cover"} m={"auto"} alt="selflearn" className="skills-card-img" />
                            <Text className="skills-card-name">Self Learn</Text>
                        </GridItem>
                        <GridItem className="skills-card" w={"100%"} m={"auto"}>
                            <Image src={growth} w={"50%"} objectFit={"cover"} m={"auto"} alt="growth" className="skills-card-img" />
                            <Text className="skills-card-name">Growth</Text>
                        </GridItem>
                        <GridItem className="skills-card" w={"100%"} m={"auto"}>
                            <Image src={ownership} w={"50%"} objectFit={"cover"} m={"auto"} alt="ownership" className="skills-card-img" />
                            <Text className="skills-card-name">Ownership</Text>
                        </GridItem>
                    </Grid>
                </Box>
                <Box m={"auto"} textAlign={"center"} border={"1px"} borderRadius={"10"} mt={"15px"}>
                    <Heading fontSize={"3xl"} fontWeight={400} mt={"7px"} mb={"5px"} m={"auto"} w={"90%"} borderBottom={"1px"}>Toolsets</Heading>
                    <Grid templateColumns={["repeat(2,1fr)", "repeat(2,1fr)", "repeat(3,1fr)", "repeat(4,1fr)", "repeat(5,1fr)"]} m={"auto"} textAlign={"center"} templateRows={"auto"} w={"100%"} mt={"5px"} fontSize={["xl", "xl", "2xl", "2xl", "2xl"]} gap={"7"}>
                        <GridItem className="skills-card" w={"100%"} m={"auto"} >
                            <Image src={github} w={"50%"} objectFit={"cover"} m={"auto"} alt="githhub" className="skills-card-img" />
                            <Text className="skills-card-name">GitHub</Text>
                        </GridItem>
                        <GridItem className="skills-card" w={"100%"} m={"auto"}>
                            <Image src={netlify} w={"50%"} objectFit={"cover"} m={"auto"} alt="netlify" className="skills-card-img" />
                            <Text className="skills-card-name">Netlify</Text>
                        </GridItem>
                        <GridItem justifyContent={"center"} className="skills-card" w={"100%"} m={"auto"}>
                            <Image src={vercel} w={"50%"} objectFit={"cover"} m={"auto"} bg={"white"} alt="vercel" className="skills-card-img" />
                            <Text className="skills-card-name">Vercel</Text>
                        </GridItem>
                        <GridItem className="skills-card" w={"100%"} m={"auto"}>
                            <Image src={jest} w={"50%"} objectFit={"cover"} m={"auto"} alt="jest" className="skills-card-img" />
                            <Text className="skills-card-name">Jest Testing</Text>
                        </GridItem>
                        <GridItem className="skills-card" w={"100%"} m={"auto"}>
                            <Image src={cypress} w={"50%"} m={"auto"} bg={"white"} alt="cypress" className="skills-card-img" />
                            <Text className="skills-card-name">Cypress Testing</Text>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
        </Box >
    </Box >
}
export default Skills;