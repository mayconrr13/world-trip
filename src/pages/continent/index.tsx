import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { useRouter } from "next/dist/client/router";

export default function Continent() {
  const router = useRouter()
  return (
    <Box>
      <Flex 
        as="header"
        h={[50, 50, 75, 100]} 
        >
        <Flex
          width="100%"
          maxW="1160px"
          align="center" 
          justify="center"
          position="relative"
          mx="auto"
        >
          <Box as="button" position="absolute" left="0" ml="4" onClick={() => router.back()}>
            <ChevronLeftIcon width={["16px" , "24px", "24px", "32px"]} h="auto"/>
          </Box>
          <Image 
            src="/Logo.svg" 
            alt="logo" 
            h={["5", "5", "8", "10"]} 
          />     
        </Flex>   
      </Flex>

      <Box 
        backgroundImage="url('/images/europe.jpg')" 
        backgroundPosition="center"  
        w="100vw" h={[150, 150, 300, 500]} 
        mb="6"
      >
        <Flex
          align="center"
          justify="center"
          height="100%"
        >
          <Heading
            fontSize={["28px", "28px", "36px", "48px"]}
            fontWeight="semibold"
            color="gray.50"
            mb="2"
          >
            Europa
          </Heading>
        </Flex>
      </Box>

      <Flex direction="column" px="4" >
        <Text textAlign="justify" >
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Flex width="100%" align="center" justify="space-between" mt="4">
          <Flex direction="column" align="flex-start" >
            <Text textAlign="start" fontWeight="semibold" fontSize="24" color="yellow.500" >
              50
            </Text>
            <Text textAlign="start" fontSize="18" >
              países
            </Text>
          </Flex>
          <Flex direction="column" align="flex-start" >
            <Text textAlign="start" fontWeight="semibold" fontSize="24" color="yellow.500" >
              60
            </Text>
            <Text textAlign="start" fontSize="18" >
              línguas
            </Text>
          </Flex>
          <Flex direction="column" align="flex-start" >
            <Text textAlign="start" fontWeight="semibold" fontSize="24" color="yellow.500" >
              24
            </Text>
            <Flex align="baseline">
              <Text textAlign="start" fontSize="18" >cidades +100</Text>
              <InfoOutlineIcon color="gray.300" w="3" h="auto" ml="2" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex align="center" justify="center" direction="column" width="100vw" px="4" my="8">
        <Heading as="h3" fontWeight="medium" mr="auto">
          Cidades +100
        </Heading>
        <Flex>
          <Flex align="center" direction="column" bg="white" mt="5">
            <Image src="/images/europe.jpg" alt="country" w="64" h="44" objectFit="cover" borderTopRadius="md" />
            <Flex align="center" justify="space-between" direction="row" p="5" w="100%" borderBottomRadius="md" border="solid" borderColor="yellow.500" borderTopColor="transparent" borderWidth="1px" >
              <Flex align="flex-start"  direction="column">
                <Text mb="3" fontWeight="semibold" color="gray.800">Londres</Text>
                <Text fontWeight="medium" color="gray.500">Reino Unido</Text>
              </Flex>
              <Image src="/images/europe.jpg" alt="flag" w="30px" h="30px" objectFit="cover" borderRadius="full" />
            </Flex>
          </Flex>
        </Flex>
        
        <Flex>
          <Flex align="center" direction="column" bg="white" mt="5">
            <Image src="/images/europe.jpg" alt="country" w="64" h="44" objectFit="cover" borderTopRadius="md" />
            <Flex align="center" justify="space-between" direction="row" p="5" w="100%" borderBottomRadius="md" border="solid" borderColor="yellow.500" borderTopColor="transparent" borderWidth="1px" >
              <Flex align="flex-start"  direction="column">
                <Text mb="3" fontWeight="semibold" color="gray.800">Londres</Text>
                <Text fontWeight="medium" color="gray.500">Reino Unido</Text>
              </Flex>
              <Image src="/images/europe.jpg" alt="flag" w="30px" h="30px" objectFit="cover" borderRadius="full" />
            </Flex>
          </Flex>
        </Flex>

        <Flex>
          <Flex align="center" direction="column" bg="white" mt="5">
            <Image src="/images/europe.jpg" alt="country" w="64" h="44" objectFit="cover" borderTopRadius="md" />
            <Flex align="center" justify="space-between" direction="row" p="5" w="100%" borderBottomRadius="md" border="solid" borderColor="yellow.500" borderTopColor="transparent" borderWidth="1px" >
              <Flex align="flex-start"  direction="column">
                <Text mb="3" fontWeight="semibold" color="gray.800">Londres</Text>
                <Text fontWeight="medium" color="gray.500">Reino Unido</Text>
              </Flex>
              <Image src="/images/europe.jpg" alt="flag" w="30px" h="30px" objectFit="cover" borderRadius="full" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}