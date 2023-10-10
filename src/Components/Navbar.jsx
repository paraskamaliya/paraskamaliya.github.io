import { Box, Image, HStack, Button, Spacer, Divider } from "@chakra-ui/react";
import black from "../3.png"
import white from "../2.png"
import { Link } from "react-scroll";
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { useDispatch, useSelector } from "react-redux";
import Moon from "../assets/moon.png";
import Sun from "../assets/sun.png";
import { TOGGLE } from "../Redux/actionType";
const Navbar = () => {
    const theme = useSelector(store => store.theme)
    const dispatch = useDispatch();
    return <Box w={"100%"} backgroundColor={theme == "dark" ? "black" : "white"} color={theme == "dark" ? "white" : "black"}>
        <Box display={"flex"} w={"90%"} m={"auto"} color={"white"} justifyContent={"center"} alignItems={"center"} id="nav-menu" borderBottom={"1px"} borderBottomColor={theme == "dark" ? "white" : "black"}>
            <Image src={theme == "dark" ? black : white} alt="LOGO" objectFit={"cover"} boxSize={"150px"} id="home" />
            <Spacer />
            <HStack>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={0} duration={500} className="nav-link home" style={{ color: theme == "dark" ? "white" : "black", fontSize: "20px" }} >Home</Link>

                <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} className="nav-link about" style={{ color: theme == "dark" ? "white" : "black", fontSize: "20px" }}>About</Link>

                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={500} className="nav-link skills" style={{ color: theme == "dark" ? "white" : "black", fontSize: "20px" }}>Skills</Link>

                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500} className="nav-link projects" style={{ color: theme == "dark" ? "white" : "black", fontSize: "20px" }}>Projects</Link>

                <Link className="nav-link contact" to="contact" style={{ color: theme == "dark" ? "white" : "black", fontSize: "20px" }}>Contact</Link>
            </HStack>
            <Spacer />
            <HStack>
                <Image src={theme == "dark" ? Sun : Moon} w={"40px"} h={"40px"} onClick={() => dispatch({ type: TOGGLE })} brightness={100} alt="theme" />
                <Button rightIcon={<ExternalLinkIcon />} bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"}>Resume</Button>
            </HStack>
        </Box>
    </Box >
}
export default Navbar;