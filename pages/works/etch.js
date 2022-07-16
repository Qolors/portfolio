import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Etch-a-Sketch">
            <Container>
                <Title>
                    Javascript Etch-a-Sketch <Badge>2022</Badge>
                </Title>
                <P>
                    An Etch-a-Sketch application completed in Javascript. Scaleable pixels
                    and optional color mode.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://qolors.github.io/etch-a-sketch/">Live Demo</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Code</Meta>
                        <Link href="https://github.com/Qolors/etch-a-sketch">Github</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, Javascript</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/etch_01.png" alt="Etch" />
                <WorkImage src="/images/works/etch_02.png" alt="Etch" />
            </Container>
        </Layout>
    )
}

export default Work