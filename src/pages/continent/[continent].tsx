import { GetServerSideProps } from 'next'
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { useRouter } from "next/dist/client/router";
import { continentData } from '../../data/continentsData';

interface CityProps {
  name: string;
  country: string;
  flag: string;
  path: string;
}

interface ContinentDataProps {
  id: string;
  name: string;
  path: string;
  about: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  numberOfCities: number;
  cities: CityProps[];
}

interface ContinentProps {
  continent: ContinentDataProps;
}

export default function Continent({ continent }: ContinentProps) {
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
        w="100vw" 
        h={[150, 150, 300, 500]} 
        mb="6"
        position="relative"
      >
        <Image 
          src={continent.path}
          alt={continent.name}
          objectFit="cover"
          w="100%"
          h="100%"
          zIndex={-1}
          position="absolute"
        />

        <Box  
          w="100%"
          h="100%"
          zIndex={-1}
          bg="#12121250"
          position="absolute"
        />

        <Flex
          align={["center", "center", "flex-end"]}
          justify={["center", "center", "flex-start"]}
          height="100%"
          width="100%"
          maxW="1160px"
          pb="8"
          mx="auto"
          zIndex={5}
        >
          <Heading
            fontSize={["28px", "28px", "36px", "48px"]}
            fontWeight="semibold"
            color="gray.50"
            mb="2"
          >
            {continent.name}
          </Heading>
        </Flex>
      </Box>

      <Flex 
        direction={["column", "column", "row"]} 
        px="4" 
        mx="auto"
        w="100%"
        maxW="1160px"
      >
        <Text textAlign="justify" w={["100%", "100%", "50%"]} fontSize={["14px", "14px", "16px", "24px"]}>
          {continent.about}
        </Text>

        <Flex flex="1" align="center" justify="space-between" mt={["4", "4", "0"]} ml={["0", "0", "8"]}>
          <Flex direction="column" align="flex-start" >
            <Text textAlign="start" fontWeight="semibold" fontSize={["24", "24", "36", "48"]} color="yellow.500" >
              {continent.numberOfCountries}
            </Text>
            <Text textAlign="start" fontSize={["18", "18", "20", "24"]} fontWeight="medium" >
              países
            </Text>
          </Flex>
          <Flex direction="column" align="flex-start" >
            <Text textAlign="start" fontWeight="semibold" fontSize={["24", "24", "36", "48"]} color="yellow.500" >
              {continent.numberOfLanguages}
            </Text>
            <Text textAlign="start" fontSize={["18", "18","20", "24"]} fontWeight="medium" >
              línguas
            </Text>
          </Flex>
          <Flex direction="column" align="flex-start" >
            <Text textAlign="start" fontWeight="semibold" fontSize={["24", "24", "36", "48"]} color="yellow.500" >
              {continent.numberOfCities}
            </Text>
            <Flex align="baseline">
              <Text textAlign="start" fontSize={["18", "18", "20", "24"]} fontWeight="medium" >cidades +100</Text>
              <InfoOutlineIcon color="gray.300" w="3" h="auto" ml="2" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex 
        align="center" 
        justify="center" 
        direction="column" 
        width="100vw" 
        px="4" 
        my="8" 
        mx="auto"
        w="100%"
        maxW="1160px"
      >
        <Heading as="h3" fontWeight="medium" mr="auto">
          Cidades +100
        </Heading>
        <Flex align="center" justify={["center", "center", "flex-start"]} direction={["column", "column", "row"]} wrap="wrap" w="100%">
          {continent.cities.map(city => {
            return (
              <Flex align="center" direction="column"  bg="white" mt="5" mr={["0", "0", "5"]} key={city.name} >
                <Image src={city.path} alt={city.name} w="64" h="44" objectFit="cover" borderTopRadius="md" />
                <Flex align="center" justify="space-between" direction="row" p="5" w="100%" borderBottomRadius="md" border="solid" borderColor="yellow.500" borderTopColor="transparent" borderWidth="1px" >
                  <Flex align="flex-start"  direction="column">
                    <Text mb="3" fontWeight="semibold" color="gray.800">{city.name}</Text>
                    <Text fontWeight="medium" color="gray.500">{city.country}</Text>
                  </Flex>
                  <Image src={city.flag} alt={city.country} w="30px" h="30px" objectFit="cover" borderRadius="full" border="solid 0.1px" borderColor="#eee" />
                </Flex>
              </Flex>
            )
          })}
        </Flex>
      </Flex>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const continentName = params && params.continent

  const selectedContinent = continentData.filter(continent => continent.id === continentName)

  const continent = {
    id: selectedContinent[0].id,
    name: selectedContinent[0].name,
    path: selectedContinent[0].path,
    about: selectedContinent[0].about,
    numberOfCountries: selectedContinent[0].numberOfCountries,
    numberOfLanguages: selectedContinent[0].numberOfLanguages,
    numberOfCities: selectedContinent[0].numberOfCities,
    cities: selectedContinent[0].cities.map(city => {
      return ({
        name: city.name,
        country: city.country,
        flag: city.flag,
        path: city.path
      })
    })
  }

  return {
    props: {
      continent
    },
  }
}