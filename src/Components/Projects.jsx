import { Box, Heading, Stack, HStack, Image, Text, Link, Button } from "@chakra-ui/react"
import { useState } from "react";
import homePage from "../Project Photo/E-Plant/Home Page.png"
import ProductPage from "../Project Photo/E-Plant/Product Page.png"
import SingleProductPage from "../Project Photo/E-Plant/Single Product Page.png"
import Login from "../Project Photo/E-Plant/Login Page.png"
import Cart from "../Project Photo/E-Plant/Cart Page.png"
import Payment from "../Project Photo/E-Plant/Payment Page.png"


const Projects = () => {
    const [e_plant] = useState([homePage, ProductPage, SingleProductPage, Login, Cart, Payment]);
    const [e_plantCurr, setE_plantCurr] = useState(0);

    const handleImageHover = () => {
        let val = e_plantCurr == e_plant.length - 1 ? 0 : e_plantCurr + 1
        setE_plantCurr(val);
    };
    return <Box color={"white"} w={"90%"} m={"auto"} pt={"1rem"}>
        <Heading textAlign={"center"}>Projects</Heading>
        <Stack display={"flex"} flexDirection={"row"} gap={"20px"} padding={"10px"}>
            <Box w={"50%"}>
                <Image src={e_plant[e_plantCurr]} onMouseEnter={handleImageHover} width={"100%"} height={"400px"} />
            </Box>
            <Box w={"50%"}>
                <Heading color={"white"}>E-Plant</Heading>
                <Text>E-Plant: Your go-to for premium plants. Find a diverse selection of indoor and outdoor greenery. Elevate your living spaces with nature's beauty!</Text>
                <Button disabled colorScheme="red" color={"black"}>HTML</Button>
                <Button disabled colorScheme="blue" color={"black"}>CSS</Button>
                <Button disabled colorScheme="yellow" color={"black"}>JS</Button>
                <Button disabled bg="#65B0BA">React.Js</Button>
                <Button disabled bg={"#4DB6AC"}>Chakra UI</Button>
                <br />
                <Link href='https://e-plant.vercel.app/' isExternal>
                    <Button>Live Demo</Button>
                </Link>
            </Box>
        </Stack>
    </Box>
}
export default Projects;