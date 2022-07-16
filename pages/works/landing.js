import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Landing Page Mock">
            <Container>
                <Title>
                    Landing Page Mock <Badge>2022</Badge>
                </Title>
                <P>
                    A club page project that helped further solidify my HTML & CSS.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://qolors.github.io/Landing-Page-Project/">Live Demo</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Code</Meta>
                        <Link href="https://github.com/Qolors/Landing-Page-Project">Github</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, Javascript</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/land_01.png" alt="Landing Page" />
                <WorkImage src="/images/works/land_02.png" alt="Landing Page" />
            </Container>
        </Layout>
    )
}

export default Work