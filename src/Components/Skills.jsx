import { Box, Divider, Grid, GridItem, Heading, Image, Stack } from "@chakra-ui/react";
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
    return <Box w={"100%"} backgroundColor={theme === "dark" ? "black" : "white"} color={theme === "dark" ? "white" : "black"} id="skills">
        <Box w={"90%"} m={"auto"} pt={"1rem"} >
            <Heading textAlign={"center"} textDecoration={"underline"} color={"yellow"} textDecorationColor={"yellow"}>Skills</Heading>
            <Box w={"100%"} direction={"row"} justifyContent={"center"} >
                <Heading textAlign={"center"} fontSize={"3xl"} mt={5} >Tech Stacks</Heading>

                <Grid templateColumns={["repeat(2,1fr)", "repeat(2,1fr)", "repeat(3,1fr)", "repeat(3,1fr)", "repeat(5,1fr)"]} fontSize={"2xl"} textAlign={"center"} gap={"7"} border={theme === "dark" ? "1px solid white" : "1px solid black"} borderRadius={10}>
                    <GridItem justifyContent={"center"} justifyItems={"center"} className="skills-card-name">
                        <Image src={html} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} alt="html" className="skills-card-img" />
                        HTML
                    </GridItem>
                    <GridItem className="skills-card-name">
                        <Image src={css} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} alt="css" className="skills-card-img" />
                        CSS
                    </GridItem>
                    <GridItem className="skills-card-name">
                        <Image src={js} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} alt="js" className="skills-card-img" />
                        JavaScript
                    </GridItem>
                    <GridItem className="skills-card-name">
                        <Image src={react} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} alt="react" className="skills-card-img" />
                        React
                    </GridItem>
                    <GridItem className="skills-card-name">
                        <Image src={redux} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} alt="redux" className="skills-card-img" />
                        Redux
                    </GridItem>
                    <GridItem className="skills-card-name">
                        <Image src={ts} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} alt="ts" className="skills-card-img" />
                        TypeScript
                    </GridItem>
                    <GridItem className="skills-card-name">
                        <Image src={chakra} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} alt="chakraui" className="skills-card-img" />
                        Chakra UI
                    </GridItem>
                    <GridItem className="skills-card-name">
                        <Image src={express} bg={"white"} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} alt="express" className="skills-card-img" />
                        Express
                    </GridItem>
                    <GridItem className="skills-card-name">
                        <Image src={mongo} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} alt="mongodb" className="skills-card-img" />
                        MongoDB
                    </GridItem>
                    <GridItem className="skills-card-name">
                        <Image src={node} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} alt="nodejs" className="skills-card-img" />
                        Node.js
                    </GridItem>
                </Grid>
                <Heading textAlign={"center"} fontSize={"3xl"} mt={10}>Other Skill</Heading>

                <Stack w={"100%"} mt={5} border={theme === "dark" ? "1px solid white" : "1px solid black"} borderRadius={10} m={"auto"} fontSize={"2xl"}>

                    <Box m={"auto"} textAlign={"center"}>
                        <Heading fontSize={"3xl"} fontWeight={400} mt={"7px"} mb={"5px"}>Mindsets</Heading>
                        <Box w={"100%"}>
                            <Grid templateColumns={["repeat(2,1fr)", "repeat(2,1fr)", "repeat(3,1fr)", "repeat(4,1fr)", "repeat(6,1fr)"]} m={"auto"} textAlign={"center"} w={"100%"} columnGap={"80px"}>
                                <GridItem className="skills-card-name">
                                    <Image src={teamwork} h="75px" w={"75px"} objectFit={"cover"} m={"auto"} alt="teamwork" className="skills-card-img" />
                                    Team Work
                                </GridItem>
                                <GridItem className="skills-card-name">
                                    <Image src={creative} h="75px" w={"75px"} objectFit={"cover"} m={"auto"} alt="creative" className="skills-card-img" />
                                    Creative
                                </GridItem>
                                <GridItem className="skills-card-name">
                                    <Image src={adaptabilty} className="skills-card-name" h={"75px"} w={"75px"} objectFit={"cover"} m={"auto"} alt="adaptablity" />
                                    Adaptability
                                </GridItem>
                                <GridItem className="skills-card-name">
                                    <Image src={self} h={"75x"} w={"75px"} objectFit={"cover"} m={"auto"} alt="selflearn" className="skills-card-img" />
                                    Self Learn
                                </GridItem>
                                <GridItem className="skills-card-name">
                                    <Image src={growth} h={"75px"} w={"75px"} objectFit={"cover"} m={"auto"} alt="growth" className="skills-card-img" />
                                    Growth
                                </GridItem>
                                <GridItem className="skills-card-name">
                                    <Image src={ownership} h={"75px"} w={"75px"} objectFit={"cover"} m={"auto"} alt="ownership" className="skills-card-img" />
                                    Ownership
                                </GridItem>
                            </Grid>
                        </Box>

                        <Heading fontSize={"3xl"} fontWeight={400} mt={"7px"} mb={"5px"}>Toolsets</Heading>
                        <Box w={"100%"}>
                            <Grid templateColumns={["repeat(2,1fr)", "repeat(2,1fr)", "repeat(3,1fr)", "repeat(4,1fr)", "repeat(5,1fr)"]} m={"auto"} textAlign={"center"} w={"100%"} >
                                <GridItem className="skills-card-name">
                                    <Image src={github} h={"75px"} w={"75px"} objectFit={"cover"} m={"auto"} alt="githhub" className="skills-card-img" />
                                    GitHub
                                </GridItem>
                                <GridItem className="skills-card-name">
                                    <Image src={netlify} h={"75px"} w={"75px"} objectFit={"cover"} m={"auto"} alt="netlify" className="skills-card-img" />
                                    Netlify
                                </GridItem>
                                <GridItem justifyContent={"center"} className="skills-card-name">
                                    <Image src={vercel} h={"75px"} w={"105px"} objectFit={"cover"} m={"auto"} bg={"white"} alt="vercel" className="skills-card-img" />
                                    Vercel
                                </GridItem>
                                <GridItem className="skills-card-name">
                                    <Image src={jest} h={"75px"} w={"75px"} objectFit={"cover"} m={"auto"} alt="jest" className="skills-card-img" />
                                    Jest Testing
                                </GridItem>
                                <GridItem className="skills-card-name">
                                    <Image src={cypress} h={"75px"} w={"100px"} m={"auto"} bg={"white"} alt="cypress" className="skills-card-img" />
                                    Cypress Testing
                                </GridItem>
                            </Grid>
                        </Box>
                    </Box>
                </Stack >
            </Box >
        </Box >
    </Box>
}
export default Skills;