import { Box, Image, HStack, Button, Spacer } from "@chakra-ui/react";
import PK from "../assets/pk.png"
import { Link } from "react-scroll";
import { ExternalLinkIcon } from "@chakra-ui/icons"
const Navbar = () => {
    return <Box display={"flex"} w={"90%"} border={"1px solid white"} m={"auto"} color={"white"} justifyContent={"center"} alignItems={"center"} id="nav-menu">
        <Image src={PK} alt="LOGO" objectFit={"cover"} boxSize={"150px"} />
        <Spacer />
        <HStack>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Skills</Link>
            <Link>Projects</Link>
            <Link>Contact</Link>
        </HStack>
        <Spacer />
        <Button rightIcon={<ExternalLinkIcon />}>Resume</Button>
    </Box>
}
export default Navbar;