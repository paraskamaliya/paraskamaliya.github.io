import { Box, Heading, Stack, HStack, Image } from "@chakra-ui/react"
import { useState } from "react";
const Projects = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleVideo = () => {
        setIsPlaying(!isPlaying);
        const video = document.getElementById('video');
        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }
    };
    return <Box color={"white"} w={"90%"} m={"auto"} pt={"1rem"}>
        <Heading textAlign={"center"}>Projects</Heading>
        <Stack>

        </Stack>
    </Box>
}
export default Projects;