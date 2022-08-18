import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbSocial from '../public/images/works/thumbSocial.png'
import thumbEtch from '../public/images/works/thumbEtch.png'
import thumbShare from '../public/images/thumbShare.png'
import thumbSpace from '../public/images/thumbSpace.png'
import thumbStat from '../public/images/thumbStat.png'
import thumbShiny from '../public/images/thumbShiny.png'
import thumbWallington from '../public/images/thumbWallington.png'
import Layout from '../components/layouts/article'

const Works = () => {
    return (
        <Layout>
            <Container w="100%">
                <Heading as="h3" fontSize={20} mb={4}>
                    My Work
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.1}>
                        <WorkGridItem id="wallington" title="WallingtonWeb" thumbnail={thumbWallington}>
                                Customer
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="shinydex" title="ShinyDex" thumbnail={thumbShiny}>
                                Application
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="natstat" title="NatStat" thumbnail={thumbStat}>
                                Application
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="spacetour" title="Space Tours" thumbnail={thumbSpace}>
                                Web Page
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="sharethought" title="ShareThought" thumbnail={thumbShare}>
                                Application
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem id="social" title="Social Connect" thumbnail={thumbSocial}>
                            Web Page
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="etch" title="Etch-a-Sketch" thumbnail={thumbEtch}>
                            Application
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works