import NextLink from 'next/link'
import { Container, Box, Heading, useColorMode, useColorModeValue, Link, Button, Image } from "@chakra-ui/react"
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
                    Hello, I'm a frontend developer based in Ann Arbor Michigan!
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="200px" display="inline-block" borderRadius="full" src="/images/profile.jpg" alt="Profile Image" />
                </Box>
                <Box display ={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Chris McGowen
                        </Heading>
                        <p>A loving Cat Dad / Self-Taught Developer / Everyday Learner</p>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>I'm a self-taught Front End Developer looking for a break into the industry.
                        Every day I spend learning to further improve my skills. Dev life has become
                        a huge part of my life - some would call it a hobby or job. Yet for me it
                        seems to have become a passion.
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
                        <BioYear>2015<ArrowRightIcon ml={2} w=".5em" h=".5em" /></BioYear>
                        Began working in Automotive Design - Discovered my liking for Computers
                    </BioSection>
                    <BioSection>
                        <BioYear>2018<ArrowRightIcon ml={2} w=".5em" h=".5em" /></BioYear>
                        Worked with Robot Programming - Discovered love for programming
                    </BioSection>
                    <BioSection>
                        <BioYear>2020<ArrowRightIcon ml={2} w=".5em" h=".5em" /></BioYear>
                        Built automation programs for HMS Engineering
                    </BioSection>
                    <BioSection>
                        <BioYear>2021 to present<ArrowRightIcon ml={2} w=".5em" h=".5em" /></BioYear>
                        Pursuing a career in Front End Development
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