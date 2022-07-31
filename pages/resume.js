import { Container, Image } from "@chakra-ui/react"
import Layout from '../components/layouts/article'

const Resume = () => {
    return (
        <Layout>
            <Container w="100%">
                <Image src="/images/resume.jpg" alt="Resume" backgroundColor="white" />
            </Container>
        </Layout>
    )
}

export default Resume