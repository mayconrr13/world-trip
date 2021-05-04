import { Box, Image, UnorderedList, ListItem, Divider, Heading, Text, Flex } from "@chakra-ui/react";

import { homeTopics } from '../data/homeTopics'

export default function Index() {
  return (
    <Box overflowX="hidden">
      <Flex 
        h={[50, 50, 75, 100]} 
        align="center" 
        justify="center"
      >
        <Image 
          src="/Logo.svg" 
          alt="logo" 
          h={["5", "5", "8", "10"]} 
        />
      </Flex>

      <Box
        backgroundImage="url('/images/hero.png')"
        w="100vw"
        h={[160, 160,260,335]}
        mb={["9", "16", "16", "24"]}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Flex
          w="100%"
          maxW="1160px"
          h="100%"
          mx="auto"
          px="4"
          align="start"
          justify="center"
          direction="column"
          position="relative"
        >
         <Heading
            fontSize={["20px", "20px", "28px", "36px"]}
            fontWeight="medium"
            color="gray.50"
            mb="2"
          >
            5 continentes,<br/> infinitas possibilidades.
          </Heading>
          <Text
            fontSize={["14px", "14px", "16px", "20px"]}
            color="gray.300"
          >
            Chegou a hora de tirar do papel a viagem que<br/>  você sempre sonhou. 
          </Text>

          <Image 
            src="/images/Airplane.svg" 
            alt="airplane"
            width={[256, 256, 256, 420]}
            height="auto"
            display={["none", "none", "inherit"]}
            position="absolute"
            pr="4"
            right={0}
            bottom={-5}
          />
        </Flex>
      </Box>

      <UnorderedList
        w={["300px", "100%"]}
        maxW="1160px"
        px="4"
        mx="auto"
        mb="2"
        display="flex"
        flexDirection="row"
        justifyContent={["space-around","space-around","space-between"]}
        flexWrap="wrap"
      >
        {homeTopics.map(item => {
          return (
            <ListItem   
              listStyleType="none"
              display="flex"
              flexDir={["row", "column"]}
              alignItems="center"
              justifyContent="center"
              mb="7"
            >
              <Box
                w="2"
                h="2"
                borderRadius="full"
                bg="yellow.500"
                mr="2" 
                display={["inherit", "none"]}                
              />
              <Image 
                w={["50px", "50px", "60px", "85px"]}
                h={["50px", "50px", "60px", "85px"]}
                src={item.imagePath} 
                alt={item.text}
                mb="2"
                display={["none", "inherit"]}  
              />
              <Text 
                fontSize={[18, 18, 18, 24]} 
                fontWeight="medium"
              >
                {item.text}
              </Text>
            </ListItem>
          )
        })}
      </UnorderedList>

      <Box 
        mx="auto" 
        width={["60px", "60px", "75px", "90px"]}
      >
        <Divider 
          orientation="horizontal" 
          borderColor="gray.800" 
        />
      </Box>

      <Text
        fontWeight="medium"
        fontSize={["20", "20", "28", "36"]}
        mt={["6", "6", "8", "10"]}
        mb="5"
        mx="auto"
        textAlign="center"
      >
        Vamos nessa?<br/> Então escolha seu continente
      </Text>

      <Flex
        align="center"
        justify="center"
        w="100vw"
        maxW="calc(1160px - 2rem)"
        mx="auto"
        mb="8"
        px="4"
        h={["250px",
        "250px",
        "350px",
        "450px"]}
        backgroundImage="url('/images/europe.png')"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        objectFit="contain"
      >
        <Box>
          <Text
            textAlign="center"
            fontWeight="bold"
            color="gray.50"
            fontSize={["24", "24", "28"]}
            mb="3"
          >
            Europa
          </Text>
          <Text
            textAlign="center"
            fontWeight="bold"
            color="gray.300"
            fontSize={["14", "14", "16"]}
          >
            o continente mais antigo
          </Text>
        </Box>
      </Flex>
    </Box>

  )
}