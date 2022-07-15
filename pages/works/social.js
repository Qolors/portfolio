import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Social Connect">
            <Container>
                <Title>
                    Social Connect <Badge>2022</Badge>
                </Title>
                <P>
                    A Social Connect Platform. The entire was project was built by me
                    (excluding the music..) - Videography - Editing - Web Design.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://qolors.github.io/social_connect/">Live Demo</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Code</Meta>
                        <Link href="https://github.com/Qolors/social_connect">Github</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, Javascript</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/social_01.png" alt="Social Connect" />
            </Container>
        </Layout>
    )
}

export default Work