import { Box, Image, HStack, Button, Spacer, Divider, IconButton, Tooltip } from "@chakra-ui/react";
import blackImg from "../Photos/3.webp"
import whiteImg from "../Photos/2.webp"
import { Link } from "react-scroll";
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE } from "../Redux/actionType";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
const Navbar = () => {
    const theme = useSelector(store => store.theme)
    const dispatch = useDispatch();
    return <Box w={"100%"} backgroundColor={theme == "dark" ? "black" : "white"} color={theme == "dark" ? "white" : "black"} id="nav-menu" position={"sticky"} top={"0"} zIndex={"100"}>
        <Box display={"flex"} flexDirection={["row"]} w={"90%"} m={"auto"} color={"white"} justifyContent={"center"} alignItems={"center"} borderBottom={"1px"} borderBottomColor={theme == "dark" ? "white" : "black"}>
            <Image src={theme == "dark" ? blackImg : whiteImg} alt="LOGO" objectFit={"cover"} boxSize={"100px"} id="home" m={"10px"} />
            <Spacer />
            <HStack>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-115} duration={500} className="nav-link home" style={{ color: theme == "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }} _hove={{}}>Home</Link>

                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-115} duration={500} className="nav-link about" style={{ color: theme == "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }}>About</Link>

                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-120} duration={500} className="nav-link skills" style={{ color: theme == "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }}>Skills</Link>

                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-120} duration={500} className="nav-link projects" style={{ color: theme == "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }}>Projects</Link>

                <Link className="nav-link contact" to="contact" style={{ color: theme == "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }}>Contact</Link>
            </HStack>
            <Spacer />
            <HStack>
                <IconButton icon={theme == "dark" ? <SunIcon color={"black"} /> : <MoonIcon color={"white"} />} fontSize={"2xl"} w={"40px"} h={"40px"} onClick={() => dispatch({ type: TOGGLE })} brightness={100} alt="theme" bg={theme == "dark" ? "white" : "black"} _hover={{ color: "none" }} />
                <Button rightIcon={<ExternalLinkIcon />} bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"} _hover={{ color: "none" }} className="nav-link resume">Resume</Button>
            </HStack>
        </Box>
    </Box >
}
export default Navbar;