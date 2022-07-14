import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbSocial from '../public/images/works/thumbSocial.png'
import Layout from '../components/layouts/article'

const Works = () => {
    return (
        <Layout>
            <Container w="100%">
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.1}>
                        <WorkGridItem id="social" title="Social Connect" thumbnail={thumbSocial}>
                            A Social Contact hub. This project was
                            made completely by me excluding the music(video, cinematography, page, design).
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem id="social" title="Social Connect" thumbnail={thumbSocial}>
                            A Social Contact hub. This project was
                            made completely by me excluding the music(video, cinematography, page, design).
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id="social" title="Social Connect" thumbnail={thumbSocial}>
                            A Social Contact hub. This project was
                            made completely by me excluding the music(video, cinematography, page, design).
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.4}>
                        <WorkGridItem id="social" title="Social Connect" thumbnail={thumbSocial}>
                            A Social Contact hub. This project was
                            made completely by me excluding the music(video, cinematography, page, design).
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works