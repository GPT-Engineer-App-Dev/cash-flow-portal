import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">
            Financial News
          </Heading>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
            <Link as={RouterLink} to="/markets" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
            <Link as={RouterLink} to="/economy" _hover={{ textDecoration: "none", color: "gray.400" }}>Economy</Link>
            <Link as={RouterLink} to="/companies" _hover={{ textDecoration: "none", color: "gray.400" }}>Companies</Link>
            <Link as={RouterLink} to="/tech" _hover={{ textDecoration: "none", color: "gray.400" }}>Tech</Link>
            <Link as={RouterLink} to="/opinion" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.xl">
          <Heading as="h2" size="xl" mb={4}>
            Latest Headline News
          </Heading>
          <Text fontSize="lg">
            Breaking news headline goes here. This is a brief summary of the latest news.
          </Text>
        </Container>
      </Box>

      {/* News Sections */}
      <Container maxW="container.xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {/* Markets Section */}
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Markets
            </Heading>
            <VStack align="start" spacing={4}>
              <Text>Article 1: Brief summary of the article.</Text>
              <Text>Article 2: Brief summary of the article.</Text>
              <Text>Article 3: Brief summary of the article.</Text>
            </VStack>
          </Box>

          {/* Economy Section */}
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Economy
            </Heading>
            <VStack align="start" spacing={4}>
              <Text>Article 1: Brief summary of the article.</Text>
              <Text>Article 2: Brief summary of the article.</Text>
              <Text>Article 3: Brief summary of the article.</Text>
            </VStack>
          </Box>

          {/* Companies Section */}
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Companies
            </Heading>
            <VStack align="start" spacing={4}>
              <Text>Article 1: Brief summary of the article.</Text>
              <Text>Article 2: Brief summary of the article.</Text>
              <Text>Article 3: Brief summary of the article.</Text>
            </VStack>
          </Box>

          {/* Tech Section */}
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Tech
            </Heading>
            <VStack align="start" spacing={4}>
              <Text>Article 1: Brief summary of the article.</Text>
              <Text>Article 2: Brief summary of the article.</Text>
              <Text>Article 3: Brief summary of the article.</Text>
            </VStack>
          </Box>

          {/* Opinion Section */}
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Opinion
            </Heading>
            <VStack align="start" spacing={4}>
              <Text>Article 1: Brief summary of the article.</Text>
              <Text>Article 2: Brief summary of the article.</Text>
              <Text>Article 3: Brief summary of the article.</Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <HStack spacing={8}>
              <Link as={RouterLink} to="/about" _hover={{ textDecoration: "none", color: "gray.400" }}>About</Link>
              <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
              <Link as={RouterLink} to="/privacy-policy" _hover={{ textDecoration: "none", color: "gray.400" }}>Privacy Policy</Link>
              <Link as={RouterLink} to="/terms-of-service" _hover={{ textDecoration: "none", color: "gray.400" }}>Terms of Service</Link>
            </HStack>
            <Text>&copy; {new Date().getFullYear()} Financial News. All rights reserved.</Text>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;