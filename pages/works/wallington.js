import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="NatStat">
            <Container>
                <Title>
                    Wallington Web Services <Badge>2022</Badge>
                </Title>
                <P>
                    A JAMStack Build for Wallington Web Services. Assets and
                    color palette provided by them, and code source requested to
                    be privatized.
                </P>
                <P>
                    This site includes: functional emailing, Headless CMS for
                    blog posting, content editing, and SSR for on demand
                    dynamic page creation.
                </P>
                <P>
                    The current development build can be viewed by customers
                    approval, seeing it is nearly set for production.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://wallingtonweb-dev.vercel.app/">Live Demo</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Code</Meta>
                        <Meta>Private</Meta>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Nextjs, TailwindCSS, Sanity Headless CMS</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/wallington1.png" alt="WallingtonWeb" />
                <WorkImage src="/images/wallington2.png" alt="WallingtonWeb" />
                <WorkImage src="/images/wallington3.png" alt="WallingtonWeb" />
            </Container>
        </Layout>
    )
}

export default Work