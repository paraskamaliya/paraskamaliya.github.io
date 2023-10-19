import { Box, Image, HStack, Button, Spacer, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack } from "@chakra-ui/react";
import blackImg from "../Photos/3.webp"
import whiteImg from "../Photos/2.webp"
import { Link } from "react-scroll";
import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons"
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE } from "../Redux/actionType";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useRef } from "react";
const Navbar = () => {
    const theme = useSelector(store => store.theme)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const dispatch = useDispatch();
    return <Box w={"100%"} backgroundColor={theme === "dark" ? "black" : "white"} color={theme === "dark" ? "white" : "black"} id="nav-menu" position={"sticky"} top={"0"} zIndex={"100"}>
        <Box display={"flex"} flexDirection={["row"]} w={"90%"} m={"auto"} color={"white"} justifyContent={"center"} alignItems={"center"} borderBottom={"1px"} borderBottomColor={theme === "dark" ? "white" : "black"}>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-115} duration={500} style={{ color: theme === "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }}>
                <Image src={theme === "dark" ? blackImg : whiteImg} alt="LOGO" objectFit={"cover"} boxSize={"100px"} id="homeimg" m={"10px"} />
            </Link>
            <Spacer />
            <HStack display={{ base: 'none', md: 'flex' }}>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-115} duration={500} className="nav-link home" style={{ color: theme === "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }}>Home</Link>

                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-115} duration={500} className="nav-link about" style={{ color: theme === "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }}>About</Link>

                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-120} duration={500} className="nav-link skills" style={{ color: theme === "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }}>Skills</Link>

                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-120} duration={500} className="nav-link projects" style={{ color: theme === "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }}>Projects</Link>

                <Link activeClass="active" className="nav-link contact" to="contact" style={{ color: theme === "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }} spy={true} smooth={true} offset={-120} duration={500}>Contact</Link>
            </HStack>
            <Spacer />
            <IconButton mr={"10px"} icon={theme == "dark" ? <SunIcon color={"black"} /> : <MoonIcon color={"white"} />} fontSize={"2xl"} w={"40px"} h={"40px"} onClick={() => dispatch({ type: TOGGLE })} brightness={100} alt="theme" bg={theme === "dark" ? "white" : "black"} _hover={{ color: "none" }} aria-label="darkmode" />

            <a href={"./ParasKamaliya_Resume.pdf"} id="resume-link-1" download>
                <Button display={{ base: 'none', md: 'flex' }} rightIcon={<ExternalLinkIcon />} bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"} _hover={{ color: "none" }} className="nav-link resume" id="resume-button-1">Resume</Button>
            </a>

            <IconButton
                display={{ base: 'inline-flex', md: 'none' }}
                ref={btnRef}
                aria-label="Open menu"
                icon={<HamburgerIcon />}
                color={theme == "dark" ? "black" : "white"}
                bg={theme == "dark" ? "white" : "black"}
                onClick={onOpen}
                variant="ghost"
                _hover={{ color: "none" }}
                _active={{ color: "none" }}
            />
        </Box>
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size={"xs"}
            variant={"outline"}
        >
            <DrawerOverlay />
            <DrawerContent bg={theme == "dark" ? "black" : "white"}>
                <DrawerCloseButton color={theme == "dark" ? "white" : "black"} />
                <DrawerHeader color={theme == "dark" ? "white" : "black"} borderBottomWidth="1px" borderBottomColor={theme == "dark" ? "white" : "black"}>Menu</DrawerHeader>
                <DrawerBody>
                    <VStack direction="column" spacing={4} onClick={onClose}>
                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-115} duration={500} className="nav-link home" style={{ color: theme == "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }} onClick={onClose}>Home</Link>

                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-115} duration={500} className="nav-link about" style={{ color: theme == "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }} onClick={onClose}>About</Link>

                        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-120} duration={500} className="nav-link skills" style={{ color: theme == "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }} onClick={onClose}>Skills</Link>

                        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-120} duration={500} className="nav-link projects" style={{ color: theme == "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }} onClick={onClose}>Projects</Link>

                        <Link activeClass="active" className="nav-link contact" to="contact" style={{ color: theme == "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }} spy={true} smooth={true} offset={-120} duration={500} onClick={onClose}>Contact</Link>

                        <a href={"./ParasKamaliya_Resume.pdf"} id="resume-link-1" download>
                            <Button rightIcon={<ExternalLinkIcon />} bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"} _hover={{ color: "none" }} className="nav-link resume" id="resume-button-1">Resume</Button>
                        </a>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </Box >
}
export default Navbar;