import { useRef } from "react";
import emailjs from '@emailjs/browser'
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Box, Heading, Input, Textarea, Text, Icon, Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Contact = () => {
    const theme = useSelector(store => store.theme);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_iku25nd', 'template_txilc1e', form.current, '5Y69d0Q5j2uOZ72t-')
            .then((result) => {
                e.target.reset();
                alert("Email sent successfully")
            }, (error) => {
                console.log(error.text);
                alert("Something went wrong, Please try again after some time.")
            });
    };
    return <Box w={"100%"} backgroundColor={theme === "dark" ? "#262626" : "#eaeaea"} color={theme === "dark" ? "white" : "black"} id="contact">
        <Box w={"90%"} m={"auto"} p={"1rem"} borderBottom={"1px"} borderBottomColor={theme === "dark" ? "white" : "black"} data-aos="zoom-in-up">
            <Heading textAlign={"center"} textDecoration={"underline"} color={"#4A90E2"} textDecorationColor={"#4A90E2"} mb={"20px"}>Contact Me</Heading>
            <Text textAlign={"center"}>Please fill out the form below to discuss any work opportunities.</Text>
            <Box w={["100%", "100%", "60%", "60%", "60%"]} m={"auto"} textAlign={"center"}>
                <form ref={form} onSubmit={sendEmail} >
                    <Input name="user_name" type="text" placeholder="Enter Name" mb={"5px"} required focusBorderColor="#4A90E2" borderColor={theme === "dark" ? "white" : "black"} />
                    <Input name="user_email" type="email" placeholder="Enter Email" mb={"5px"} required focusBorderColor="#4A90E2" borderColor={theme === "dark" ? "white" : "black"} />
                    <Textarea name="message" type="text" placeholder="Enter Message" mb={"5px"} required focusBorderColor="#4A90E2" borderColor={theme === "dark" ? "white" : "black"} />
                    <Input type="submit" w={"fit-content"} m={"auto"} bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"} />
                </form>
            </Box>
            <Grid w={["100%", "100%", "60%", "60%", "60%"]} m={"auto"} templateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(2,1fr)", "repeat(2,1fr)"]} mt={"10px"} rowGap={"10px"}>
                <GridItem display={"flex"} alignItems={"center"} m={"auto"} gap={"5px"}>
                    <Icon as={EmailIcon} fontSize={"1.5rem"} />
                    <a href="mailto:paraskamaliya5@gmail.com" target="_blank" rel="noreferrer noopener" id="contact-email">paraskamaliya5@gmail.com</a>
                </GridItem>
                <GridItem display={"flex"} alignItems={"center"} m={"auto"} gap={"5px"}>
                    <Icon as={AiFillLinkedin} fontSize={"1.5rem"} id="contact-linkedin" />
                    <a href="https://www.linkedin.com/in/paraskamaliya/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
                </GridItem>
                <GridItem display={"flex"} alignItems={"center"} m={"auto"} gap={"5px"}>
                    <Icon as={PhoneIcon} fontSize={"1.5rem"} />
                    <a id="contact-phone" href="tel:+919376464040">+91 9376464040</a>
                </GridItem>
                <GridItem display={"flex"} alignItems={"center"} m={"auto"} gap={"5px"}>
                    <Icon as={AiFillGithub} fontSize={"1.5rem"} id="contact-github" />
                    <a href="https://github.com/paraskamaliya" target="_blank" rel="noreferrer noopener">GitHub</a>
                </GridItem>
            </Grid>
        </Box>
        <Text textAlign={"center"} mt={"5px"}>Created & Designed by <a href="https://github.com/paraskamaliya" target="_blank" rel="noreferrer noopener" style={{ color: "#4A90E2" }}>Paras Kamaliya</a></Text>
    </Box >
}
export default Contact;