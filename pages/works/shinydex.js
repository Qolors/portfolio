import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="ShinyDex">
            <Container>
                <Title>
                    Shiny Capture Helper <Badge>2022</Badge>
                </Title>
                <P>
                    ShinyDex is an app built for PokemonGo to let users
                    quickly reference and see what methods are available when catching
                    Shiny Pokemon. This app was built to be simplistic and fast.
                    A custom recommended search is provided with a carousel style feed,
                    as well as quick tips on transitioning loads.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Application</Meta>
                        <Link href="https://shinydex-three.vercel.app/">Live Demo</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Code</Meta>
                        <Link href="https://github.com/Qolors/shinydex">Github</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Styled Components, Framer, PoGo API</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/shiny1.png" alt="Main Screen" />
                <WorkImage src="/images/shiny2.png" alt="Custom Recommended Search" />
                <WorkImage src="/images/shiny3.png" alt="Loading Tips" />
                <WorkImage src="/images/shiny4.png" alt="Shiny Results" />
            </Container>
        </Layout>
    )
}

export default Work