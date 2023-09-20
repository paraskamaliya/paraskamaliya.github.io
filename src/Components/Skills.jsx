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
const Skills = () => {
    return <Box color={"white"} w={"90%"} m={"auto"} pt={"1rem"}>
        <Heading textAlign={"center"} textDecoration={"underline"} textDecorationColor={"white"}>Skills</Heading>
        <Box w={"100%"} direction={"row"} justifyContent={"center"} >
            <Heading textAlign={"center"} fontSize={"3xl"} mt={5} >Tech Stacks</Heading>
            <Grid templateRows={"repeat(2,1fr)"} templateColumns={"repeat(5,1fr)"} fontSize={"2xl"} textAlign={"center"} gap={"7"}>
                <GridItem justifyContent={"center"} justifyItems={"center"} >
                    <Image src={html} objectFit="cover" h={"100px"} w={"100px"} m={"auto"} />
                    HTML
                </GridItem>
                <GridItem  >
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
            <Heading textAlign={"center"} fontSize={"3xl"} mt={5}>Soft Skill</Heading>
            <Stack display={"flex"} flexDirection={"row"} w={"100%"} mt={5}>
                <Box w="50%" m={"auto"} textAlign={"center"}>
                    <Heading fontSize={"3xl"}>Mindsets</Heading>
                </Box>
                <Box w={"50%"} m={"auto"} textAlign={"center"}>
                    <Heading fontSize={"3xl"}>Toolsets</Heading>
                    <svg width="50" height="50" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" /></svg>
                </Box>
            </Stack>
        </Box>
    </Box >
}
export default Skills;