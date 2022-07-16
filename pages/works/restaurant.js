import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Restaurant Page">
            <Container>
                <Title>
                    Restaurant Page <Badge>2022</Badge>
                </Title>
                <P>
                    A website mocked for a restaurant that is rendered completely with vanilla JS.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://qolors.github.io/restaurant_menu/">Live Demo</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Code</Meta>
                        <Link href="https://github.com/Qolors/restaurant_menu">Github</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, Javascript</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/rest_01.png" alt="Restaurant Page" />
                <WorkImage src="/images/works/rest_02.png" alt="Restaurant Page" />
            </Container>
        </Layout>
    )
}

export default Work