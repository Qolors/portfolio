import NextLink from 'next/link'
import { Container, Box, Heading, useColorMode, useColorModeValue, Link, Button } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={3} mb={6} align='center'>
                Hello, I'm a frontend developer based in Ann Arbor Michigan!
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
        </Container>
        
    )
}

export default Page