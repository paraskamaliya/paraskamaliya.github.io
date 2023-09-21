import { Box, Divider, Grid, GridItem, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
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
const Skills = () => {
    return <Box color={"white"} w={"90%"} m={"auto"} pt={"1rem"}>
        <Heading textAlign={"center"} textDecoration={"underline"} color={"yellow"} textDecorationColor={"yellow"}>Skills</Heading>
        <Box w={"100%"} direction={"row"} justifyContent={"center"} >
            <Heading textAlign={"center"} fontSize={"3xl"} mt={5} >Tech Stacks</Heading>

            <Grid templateRows={"repeat(2,1fr)"} templateColumns={"repeat(5,1fr)"} fontSize={"2xl"} textAlign={"center"} gap={"7"} border={"1px solid white"} borderRadius={10}>
                <GridItem justifyContent={"center"} justifyItems={"center"} >
                    <Image src={html} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} />
                    HTML
                </GridItem>
                <GridItem>
                    <Image src={css} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} />
                    CSS
                </GridItem>
                <GridItem  >
                    <Image src={js} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} />
                    JavaScript
                </GridItem>
                <GridItem >
                    <Image src={react} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} />
                    React
                </GridItem>
                <GridItem >
                    <Image src={redux} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} />
                    Redux
                </GridItem>
                <GridItem >
                    <Image src={ts} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} />
                    TypeScript
                </GridItem>
                <GridItem >
                    <Image src={chakra} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} />
                    Chakra UI
                </GridItem>
                <GridItem >
                    <Image src={express} bg={"white"} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} />
                    Express
                </GridItem>
                <GridItem >
                    <Image src={mongo} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} />
                    MongoDB
                </GridItem>
                <GridItem >
                    <Image src={node} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} />
                    Node.js
                </GridItem>
            </Grid>

            <Divider />

            <Heading textAlign={"center"} fontSize={"3xl"} mt={10}>Other Skill</Heading>

            <Stack w={"100%"} mt={5} border={"1px solid white"} borderRadius={10} m={"auto"} fontSize={"2xl"}>

                <Box m={"auto"} textAlign={"center"}>
                    <Heading fontSize={"3xl"} fontWeight={400} mt={"7px"} mb={"5px"}>Mindsets</Heading>
                    <Box w={"100%"}>
                        <Grid templateColumns={"repeat(6,1fr)"} templateRows={"repeat(1,1fr)"} m={"auto"} textAlign={"center"} w={"100%"} columnGap={"80px"}>
                            <GridItem>
                                <Image src={teamwork} h={"75px"} w={"75px"} objectFit={"cover"} m={"auto"} />
                                Team Work
                            </GridItem>
                            <GridItem>
                                <Image src={creative} h={"75px"} w={"75px"} objectFit={"cover"} m={"auto"} />
                                Creative
                            </GridItem>
                            <GridItem>
                                <Image src={adaptabilty} h={"75px"} w={"75px"} objectFit={"cover"} m={"auto"} />
                                Adaptability
                            </GridItem>
                            <GridItem>
                                <Image src={self} h={"75px"} w={"75px"} objectFit={"cover"} m={"auto"} />
                                Self Learn
                            </GridItem>
                            <GridItem>
                                <Image src={growth} h={"75px"} w={"75px"} objectFit={"cover"} m={"auto"} />
                                Growth
                            </GridItem>
                            <GridItem>
                                <Image src={ownership} h={"75px"} w={"75px"} objectFit={"cover"} m={"auto"} />
                                Ownership
                            </GridItem>
                        </Grid>
                    </Box>

                    <Heading fontSize={"3xl"} fontWeight={400} mt={"7px"} mb={"5px"}>Toolsets</Heading>
                    <Box w={"100%"}>
                        <Grid templateColumns={"repeat(5,1fr)"} templateRows={"repeat(1,1fr)"} m={"auto"} textAlign={"center"} w={"100%"} >
                            <GridItem>
                                <Image src={github} h={"75px"} w={"75px"} objectFit={"cover"} m={"auto"} />
                                GitHub
                            </GridItem>
                            <GridItem>
                                <Image src={netlify} h={"75px"} w={"75px"} objectFit={"cover"} m={"auto"} />
                                Netlify
                            </GridItem>
                            <GridItem justifyContent={"center"}>
                                <Image src={vercel} h={"75px"} w={"105px"} objectFit={"cover"} m={"auto"} bg={"white"} />
                                Vercel
                            </GridItem>
                            <GridItem>
                                <Image src={jest} h={"75px"} w={"75px"} objectFit={"cover"} m={"auto"} />
                                Jest Testing
                            </GridItem>
                            <GridItem>
                                <Image src={cypress} h={"75px"} w={"100px"} m={"auto"} bg={"white"} />
                                Cypress Testing
                            </GridItem>
                        </Grid>
                    </Box>
                </Box>
            </Stack >
        </Box >
    </Box >
}
export default Skills;