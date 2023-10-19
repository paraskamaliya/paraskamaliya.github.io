import { Box, Heading, Image, Stack } from "@chakra-ui/react"
import EPlant from "../Project Component/EPlant";
import Connect from "../Project Component/Connect";
import PaintKu from "../Project Component/PaintKu";
import { useSelector } from "react-redux";
import TechSchool from "../Project Component/TechSchool";

const Projects = () => {
    const theme = useSelector(store => store.theme);
    return <Box w={"100%"} backgroundColor={theme === "dark" ? "black" : "white"} color={theme === "dark" ? "white" : "black"} id="projects" >
        <Box w={"90%"} borderBottom={"1px"} borderBottomColor={theme == "dark" ? "white" : "black"} pb={"1rem"} m={"auto"}>
            <Box w={"100%"} m={"auto"} pt={"1rem"} >
                <Heading textAlign={"center"} color={"#4A90E2"} textDecoration={"underline"} textDecorationColor={"#4A90E2"}>Projects</Heading>
                <EPlant />
                <Connect />
                <PaintKu />
                <TechSchool />
            </Box>
            <Box border={"1px"} w={"100%"} m={"auto"} borderRadius={"10"} p={"0.5rem"} >
                <Heading textAlign={"center"} color={"#4A90E2"} >Github Stats</Heading>
                <Box w={"70%"} m={"auto"}>
                    {theme == "dark" ? <Image id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=paraskamaliya&layout=donut&langs_count=8&theme=dark" alt="GitHub stats" m={"auto"} /> : <Image id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=paraskamaliya&layout=donut&langs_count=8&theme=white" alt="GitHub stats" m={"auto"} />}
                </Box>
                <Stack direction={["column", "column", "column", "column", "row"]} w={"70%"} m={"auto"} mt={"5px"} justifyContent={"center"}>
                    <Image id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=paraskamaliya&show_icons=true&theme=transparent" alt="GitHub stats" />
                    <Image id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=paraskamaliya&theme=transparent" alt="GitHub Streak" style={{ maxWidth: "100%" }} />
                </Stack>
                <Box w={"80%"} m={"auto"} className="react-activity-calendar">
                    <Image src="https://ghchart.rshah.org/006AFF/paraskamaliya" alt="Github Contribution" m={"auto"} />
                </Box>
            </Box>
        </Box>
    </Box >
}
export default Projects;