import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbSocial from '../public/images/works/thumbSocial.png'
import thumbRPS from '../public/images/works/thumbRPS.png'
import thumbRest from '../public/images/works/thumbRest.png'
import thumbLand from '../public/images/works/thumbLand.png'
import thumbEtch from '../public/images/works/thumbEtch.png'
import thumbShare from '../public/images/thumbShare.png'
import Layout from '../components/layouts/article'

const Works = () => {
    return (
        <Layout>
            <Container w="100%">
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.1}>
                        <WorkGridItem id="sharethought" title="ShareThought" thumbnail={thumbShare}>
                                Application
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Heading as="h3" fontSize={20} mb={4}>
                    Course Work
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.1}>
                        <WorkGridItem id="etch" title="Etch-a-Sketch" thumbnail={thumbEtch}>
                            Application
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem id="social" title="Social Connect" thumbnail={thumbSocial}>
                            Web Page
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id="rps" title="RPS" thumbnail={thumbRPS}>
                            Application
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.4}>
                        <WorkGridItem id="restaurant" title="Krazy Kat's" thumbnail={thumbRest}>
                            Web Page
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.5}>
                        <WorkGridItem id="landing" title="Landing Page Design" thumbnail={thumbLand}>
                            Web Page
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works