import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="NatStat">
            <Container>
                <Title>
                    Live Natural Events Viewer <Badge>2022</Badge>
                </Title>
                <P>
                    A live tracker of real world Natural Events currently
                    happening. This mobile friendly application lets you
                    view and read up on all current Wildfires, Volcanoes,
                    and Severe Storms happening around the globe.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Application</Meta>
                        <Link href="https://natstat.vercel.app/">Live Demo</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Code</Meta>
                        <Link href="https://github.com/Qolors/wildfire">Github</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Styled Components, Framer, Google & NASA API</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/map1.png" alt="NatStat" />
                <WorkImage src="/images/map2.png" alt="NatStat" />
            </Container>
        </Layout>
    )
}

export default Work