import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="ShareThought">
            <Container>
                <Title>
                    A Free Post Social Hub <Badge>2022</Badge>
                </Title>
                <P>
                    ThoughtShare is an open social platform to post
                    your thoughts. Made in inspiration from sites like Dev.to.
                    <br />

                    Current Features:
                    <br />
                        - Google Account Authorization
                    <br />
                        - "Heart React" counter feature
                    <br />
                        - Live post feed
                    <br />
                        - Post History & Editing


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
                        <span>Nextjs, Firebase, TailwindCSS, Vercel/Github</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/auth.png" alt="ShareThought" />
                <WorkImage src="/images/livefeed.png" alt="ShareThought" />
                <WorkImage src="/images/userprofile.png" alt="ShareThought" />
                <WorkImage src="/images/manageposts.png" alt="ShareThought" />
                <WorkImage src="/images/postfeature.png" alt="ShareThought" />
    
            </Container>
        </Layout>
    )
}

export default Work