import { Container, VStack, Heading, Text, Button, HStack, Box, Image, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">
          The Rocking Band
        </Heading>
        <Text fontSize="lg">Join us on our epic tour across the country. Experience the thrill of live music like never before!</Text>
        <Box boxSize="sm">
          <Image src="https://images.unsplash.com/photo-1477704080907-b04e4e2d3282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBlcmZvcm1pbmclMjBsaXZlfGVufDB8fHx8MTcxNjI0MjYwMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="The Rocking Band performing live" borderRadius="md" />
        </Box>
        <Box boxSize="sm">
          <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMGNvbmNlcnR8ZW58MHx8fHwxNzE2MjQyNjAwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="The Rocking Band concert" borderRadius="md" />
        </Box>
        <HStack spacing={4}>
          <Button colorScheme="teal" size="lg">
            Buy Tickets
          </Button>
          <Button colorScheme="teal" variant="outline" size="lg">
            Learn More
          </Button>
        </HStack>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
