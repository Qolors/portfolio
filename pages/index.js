import NextLink from 'next/link'
import { Container, Box, Heading, useColorModeValue, Button, Image } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { ArrowRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bios'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={3} mb={6} align='center'>
                    A Digital Craftsman based in Ann Arbor Michigan
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image borderColor="whiteAlpha.800" maxWidth="250px" display="inline-block" borderRadius="full" src={useColorModeValue("./images/lightgif.gif", "./images/darkgif.gif")} alt="Profile Image" />
                </Box>
                <Box display ={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Chris McGowen
                        </Heading>
                        <p>Front End Developer</p>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>I am a self-taught Front End Developer.
                        I build dynamic, responsive and concise applications with a strong passion.
                    </Paragraph>
                    <Box align='center' my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('purple', 'orange')}>
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1995<ArrowRightIcon ml={2} w=".5em" h=".5em" /></BioYear>
                        Born in Oxford, Michigan
                    </BioSection>
                    <BioSection>
                        <BioYear>2018<ArrowRightIcon ml={2} w=".5em" h=".5em" /></BioYear>
                        Industrial Controls Progamming
                    </BioSection>
                    <BioSection>
                        <BioYear>2020<ArrowRightIcon ml={2} w=".5em" h=".5em" /></BioYear>
                        Automation Programming
                    </BioSection>
                    <BioSection>
                        <BioYear>Present<ArrowRightIcon ml={2} w=".5em" h=".5em" /></BioYear>
                        <strong>Front End Development</strong>
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Joys &#9829;
                    </Heading>
                    <Paragraph>
                        Gaming, Photography, Programming, Baseball, Electric Unicycling
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page