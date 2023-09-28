import { Box, Image, HStack, Button, Spacer } from "@chakra-ui/react";
import PK from "../assets/pk.png"
import { Link } from "react-scroll";
import { ExternalLinkIcon } from "@chakra-ui/icons"
const Navbar = () => {
    return <Box display={"flex"} w={"90%"} m={"auto"} color={"white"} justifyContent={"center"} alignItems={"center"} id="nav-menu">
        <Image src={PK} alt="LOGO" objectFit={"cover"} boxSize={"150px"} id="home" />
        <Spacer />
        <HStack>
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={0} duration={500} className="nav-link home">Home</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} className="nav-link about">About</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={500} className="nav-link skills">Skills</Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500} className="nav-link projects">Projects</Link>
            <Link className="nav-link contact">Contact</Link>
        </HStack>
        <Spacer />
        <Button rightIcon={<ExternalLinkIcon />}>Resume</Button>
    </Box>
}
export default Navbar;