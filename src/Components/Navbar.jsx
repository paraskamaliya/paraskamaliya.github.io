import { Box, Image, HStack, Button, Spacer } from "@chakra-ui/react";
import PK from "../assets/pk.png"
import { Link } from "react-scroll";
import { ExternalLinkIcon } from "@chakra-ui/icons"
const Navbar = () => {
    return <Box display={"flex"} w={"90%"} m={"auto"} color={"white"} justifyContent={"center"} alignItems={"center"} id="nav-menu">
        <Image src={PK} alt="LOGO" objectFit={"cover"} boxSize={"150px"} />
        <Spacer />
        <HStack>
            <Link className="nav-link home">Home</Link>
            <Link className="nav-link about">About</Link>
            <Link className="nav-link skills">Skills</Link>
            <Link className="nav-link projects">Projects</Link>
            <Link className="nav-link contacts">Contact</Link>
        </HStack>
        <Spacer />
        <Button rightIcon={<ExternalLinkIcon />}>Resume</Button>
    </Box>
}
export default Navbar;