import { useEffect, useState } from "react";
import homePage from "../Project Photo/E-Plant/Home Page.png"
import ProductPage from "../Project Photo/E-Plant/Product Page.png"
import SingleProductPage from "../Project Photo/E-Plant/Single Product Page.png"
import Login from "../Project Photo/E-Plant/Login Page.png"
import Cart from "../Project Photo/E-Plant/Cart Page.png"
import Payment from "../Project Photo/E-Plant/Payment Page.png"
import { Box, Button, Heading, Image, Link, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

const EPlant = () => {
    const [Ephotos] = useState([homePage, ProductPage, SingleProductPage, Login, Cart, Payment]);
    const [currPhoto, setCurrPhoto] = useState(0);
    const handleInc = () => {
        if (currPhoto === Ephotos.length - 1) {
            setCurrPhoto(0);
        } else {
            setCurrPhoto(currPhoto + 1);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleInc();
        }, 2000);
        return () => {
            clearInterval(interval);
        };
    }, [currPhoto])
    return <Stack display={"flex"} flexDirection={"row"} gap={"20px"} padding={"10px"}>
        <Box w={"50%"} justifyContent={"center"} justifyItems={"center"}>
            <Image src={Ephotos[currPhoto]} width={"100%"} height={"400px"} />
            <RadioGroup value={currPhoto} position={"absolute"} bottom={5} right={1200}>
                <Stack direction='row'>
                    <Radio value='0' colorScheme="black" checked={currPhoto == 0} onChange={(e) => setCurrPhoto(+e.target.value)} ></Radio>
                    <Radio value='1' checked={currPhoto == 1} onChange={(e) => setCurrPhoto(+e.target.value)} ></Radio>
                    <Radio value='2' checked={currPhoto == 2} onChange={(e) => setCurrPhoto(+e.target.value)} ></Radio>
                    <Radio value='3' checked={currPhoto == 3} onChange={(e) => setCurrPhoto(+e.target.value)} ></Radio>
                    <Radio value='4' checked={currPhoto == 4} onChange={(e) => setCurrPhoto(+e.target.value)} ></Radio>
                    <Radio value='5' checked={currPhoto == 5} onChange={(e) => setCurrPhoto(+e.target.value)} ></Radio>
                </Stack>
            </RadioGroup>
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
}
export default EPlant;