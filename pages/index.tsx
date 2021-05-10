
import { Grid, Heading, Text, Flex, Image, Input, Textarea, Link, Button, } from '@chakra-ui/core'

export default function Home() {
  return (
    <Grid
    as="main"
    height="100vh"
    templateColumns="1fr 480px 480px 1fr"
    templateRows="1fr 480px 1fr"
    templateAreas="
    '. . . .'
    '. logo form .'
    '. . . .'
    "
    justifyContent="center"
    alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="">
         <Image                 
         objectFit="cover"
         src="/w.png" 
         alt="Taitai" 
         width="220px"
         height="150px"
         />

         <Heading size="xl" lineHeight="shorter" marginTop={12}>
          Pedido mais moderno é na taitai! Realize ele agora!
        </Heading>
      </Flex>

      <Flex 
        gridArea="form"
        height="100%"
        backgroundColor="purple.500"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={12}
      >
       <Input
        height="50px"
        backgroundColor="gray.700"
        focusBorderColor="purple.100"
        borderRadius="sm"
        placeholder="Nome"
       />
       <Textarea
        height="200px"
        backgroundColor="gray.700"
        focusBorderColor="purple.100"
        borderRadius="sm"
        placeholder="Oi soler..."
        marginTop={4}
       />
        <Link 
          href="https://taitaisorvetes.goomer.app/" isExternal
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="gray.550"
          fontWeight="bold"
          _hover={{ color: 'gray.700' }}
        >
          No conforto da casa?: peça delivery!
        </Link>

        <Button
          backgroundColor="gray.700"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'gray.900' }}
        >
          ENTRAR
        </Button>

        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.300"
          marginTop={6}
        >
          Compartilha o seu sorvete com a gente no {" "}
          <Link
            href="https://www.instagram.com/taitaibelem/?hl=pt-br" isExternal
            color="gray.550"
            fontWeight="bold"
            _hover={{ color: 'purple.700' }}
          >
            Instagram!
            
          </Link>
        </Text>
      </Flex>
    </Grid>
  )
}
