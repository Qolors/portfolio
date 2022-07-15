import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Rock Paper Scissors">
            <Container>
                <Title>
                    Rock Paper Scissors! <Badge>2022</Badge>
                </Title>
                <P>
                   Rock Paper Scissors - Programmed in Javascript! This was a project that
                   made me work on my fundamentals of HTML, Javascript & CSS.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://qolors.github.io/rock_paper_scissor/">Live Demo</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Code</Meta>
                        <Link href="https://github.com/Qolors/rock_paper_scissor">Github</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, Javascript</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/rps_01.png" alt="RPS" />
                <WorkImage src="/images/works/rps_02.png" alt="RPS" />
            </Container>
        </Layout>
    )
}

export default Work