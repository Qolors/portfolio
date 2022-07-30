import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="ShareThought">
            <Container>
                <Title>
                    Learn About Space Tours <Badge>2022</Badge>
                </Title>
                <P>
                    Written in React & tied to Firebase as the backend
                    to retrieve section information. An enjoyable project due to my
                    interest and love for space. Hopefully Space Travel is a thing
                    in my lifetime.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://social-clone-pearl.vercel.app/">Live Demo</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Code</Meta>
                        <Link href="https://github.com/Qolors/social_clone">Github</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Firebase, Styled Components, Framer</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/space1.png" alt="Space Tours" />
                <WorkImage src="/images/space2.png" alt="Space Tours" />
            </Container>
        </Layout>
    )
}

export default Work