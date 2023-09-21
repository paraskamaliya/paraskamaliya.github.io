import { Box, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"
import ProfilePic from "../Photos/profilepic.png"
const Intro = () => {
    return <Box color={"white"} m={"auto"} w={"90%"} >
        <Stack display={"flex"} m={"auto"} justifyContent={"center"} flexDirection={["column", "column", "row", "row", "row"]} alignItems={"center"} w={"100%"}>
            <Box textAlign={"left"} padding={"1rem"} fontSize={"2rem"} m={"auto"} >
                <Text textAlign={"left"} fontWeight={200} fontSize={"2rem"}>Hello👋, </Text>
                <Heading textAlign={"left"} fontSize={"4rem"}>I'm <span style={{ color: "yellow" }} className="user-details-name">Paras</span></Heading>
                <Heading textAlign={"left"} fontSize={"3.5rem"} >Full Stack Web Developer</Heading>
                <Text textAlign={"left"} fontSize={"1.2rem"} noOfLines={2} fontWeight={300} className="user-detail-intro">Skilled Full stack Web developer and experienced <br /> in creating User freindly Interface websites.</Text>
            </Box>
            <Box w={"50%"} m={"auto"}>
                <Image src={ProfilePic} m={"auto"} objectFit={"cover"} className="home-img"/>
            </Box>
        </Stack>
        <Divider />
    </Box >
}
export default Intro;