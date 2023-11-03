import dark from "../dark.webp";
import light from "../light.webp"
import { Box, Image, HStack, Button, Spacer, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons"
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE } from "../Redux/actionType";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useRef } from "react";
import resume from "../assets/ParasKamaliya_Resume.pdf";
const Navbar = () => {
    const theme = useSelector(store => store.theme)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const dispatch = useDispatch();
    return <Box w={"100%"} backgroundColor={theme === "dark" ? "#2c2c2c" : "#efefef"} color={theme === "dark" ? "white" : "black"} id="nav-menu" position={"sticky"} top={"0"} zIndex={"100"}>
        <Box display={"flex"} flexDirection={["row"]} w={"90%"} m={"auto"} color={"white"} justifyContent={"center"} alignItems={"center"} borderBottom={"1px"} borderBottomColor={theme === "dark" ? "white" : "black"}>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-115} duration={500} style={{ color: theme === "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }}>
                <Image src={theme === "dark" ? light : dark} alt="LOGO" objectFit={"cover"} transition={"opacity 0.5s ease"} boxSize={["70px", "70px", "100px", "100px", "100px"]} id="homeimg" m={"10px"} />
            </Link>
            <Spacer />
            <HStack display={{ base: 'none', md: 'flex' }}>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-115} duration={500} className="nav-link home" style={{
                    color: theme === "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer", transition: "color 0.3s"
                }} onMouseEnter={(e) => (e.target.style.color = "#4A90E2")} onMouseLeave={(e) => (e.target.style.color = theme === "dark" ? "white" : "black")
                }>Home</Link>

                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-115} duration={500} className="nav-link about" style={{ color: theme === "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer", transition: "color 0.3s" }} onMouseEnter={(e) => (e.target.style.color = "#4A90E2")}
                    onMouseLeave={(e) =>
                        (e.target.style.color = theme === "dark" ? "white" : "black")
                    }>About</Link>

                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-120} duration={500} className="nav-link skills" style={{ color: theme === "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer", transition: "color 0.3s" }} onMouseEnter={(e) => (e.target.style.color = "#4A90E2")}
                    onMouseLeave={(e) =>
                        (e.target.style.color = theme === "dark" ? "white" : "black")
                    }>Skills</Link>

                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-120} duration={500} className="nav-link projects" style={{ color: theme === "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer", transition: "color 0.3s" }} onMouseEnter={(e) => (e.target.style.color = "#4A90E2")}
                    onMouseLeave={(e) =>
                        (e.target.style.color = theme === "dark" ? "white" : "black")
                    }>Projects</Link>

                <Link activeClass="active" className="nav-link contact" to="contact" style={{ color: theme === "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer", transition: "color 0.3s" }} spy={true} smooth={true} offset={-120} duration={500} onMouseEnter={(e) => (e.target.style.color = "#4A90E2")}
                    onMouseLeave={(e) =>
                        (e.target.style.color = theme === "dark" ? "white" : "black")
                    }>Contact</Link>
            </HStack>
            <Spacer />
            <IconButton mr={"10px"} icon={theme === "dark" ? <SunIcon color={"black"} /> : <MoonIcon color={"white"} />} fontSize={"2xl"} w={"40px"} h={"40px"} onClick={() => dispatch({ type: TOGGLE })} brightness={100} alt="theme" bg={theme === "dark" ? "white" : "black"} _hover={{ color: "none" }} aria-label="darkmode" />

            <ChakraLink
                className="nav-link resume"
                href={resume}
                download={"ParasKamaliya_Resume.pdf"}
                style={{
                    textDecoration: "none",
                }}
                target="_blank"
                textAlign="center"
                onClick={() => {
                    window.open(
                        "https://drive.google.com/file/d/1a79_bKFSag1TB4vbKTZw7LUTLniwanox/view?usp=sharing",
                        "_blank",
                        "noreferrer"
                    );
                }}
            >
                <Button display={{ base: 'none', md: 'flex' }} id="resume-button-1" rightIcon={<ExternalLinkIcon />} bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"} _hover={{ color: "none" }} >RESUME</Button>
            </ChakraLink>
            <IconButton
                display={{ base: 'inline-flex', md: 'none' }}
                ref={btnRef}
                aria-label="Open menu"
                icon={<HamburgerIcon />}
                color={theme === "dark" ? "black" : "white"}
                bg={theme === "dark" ? "white" : "black"}
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
            <DrawerContent bg={theme === "dark" ? "#2c2c2c" : "#efefef"}>
                <DrawerCloseButton color={theme === "dark" ? "white" : "black"} />
                <DrawerHeader color={theme === "dark" ? "white" : "black"} borderBottomWidth="1px" borderBottomColor={theme === "dark" ? "white" : "black"}>Menu</DrawerHeader>
                <DrawerBody>
                    <VStack direction="column" spacing={4} onClick={onClose}>
                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-115} duration={500} className="nav-link home" style={{ color: theme === "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }} onClick={onClose}>Home</Link>

                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-115} duration={500} className="nav-link about" style={{ color: theme === "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }} onClick={onClose}>About</Link>

                        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-120} duration={500} className="nav-link skills" style={{ color: theme === "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }} onClick={onClose}>Skills</Link>

                        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-120} duration={500} className="nav-link projects" style={{ color: theme === "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }} onClick={onClose}>Projects</Link>

                        <Link activeClass="active" className="nav-link contact" to="contact" style={{ color: theme === "dark" ? "white" : "black", fontSize: "20px", cursor: "pointer" }} spy={true} smooth={true} offset={-120} duration={500} onClick={onClose}>Contact</Link>

                        <ChakraLink
                            href={resume}
                            download={"ParasKamaliya_Resume.pdf"}
                            style={{
                                textDecoration: "none",
                            }}
                            target="_blank"
                            id="resume-link-1"
                            textAlign="center"
                            onClick={() => {
                                window.open(
                                    "https://drive.google.com/file/d/1a79_bKFSag1TB4vbKTZw7LUTLniwanox/view?usp=sharing",
                                    "_blank",
                                    "noreferrer"
                                );
                            }}
                        >
                            <Button display={{ base: 'none', md: 'flex' }} id="resume-button-1" rightIcon={<ExternalLinkIcon />} bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"} _hover={{ color: "none" }} >RESUME</Button>
                        </ChakraLink>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </Box >
}
export default Navbar;