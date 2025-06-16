import { Box, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaTerminal } from 'react-icons/fa'

const Navbar = () => {
  const borderColor = useColorModeValue('green.400', 'green.400')
  const hoverColor = useColorModeValue('green.300', 'green.300')

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg="gray.900"
      borderBottom="2px"
      borderColor={borderColor}
      zIndex={1000}
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px={4}
        py={3}
        align="center"
        justify="space-between"
      >
        <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
          <Flex align="center" gap={2}>
            <FaTerminal size="1.5em" />
            <Text
              fontFamily="mono"
              fontSize="xl"
              fontWeight="bold"
              _hover={{ color: hoverColor }}
            >
              root@arianne:~#
            </Text>
          </Flex>
        </Link>

        <Flex gap={6}>
          {['about', 'projects', 'contact'].map((item) => (
            <Link
              key={item}
              as={RouterLink}
              to={`/${item}`}
              fontFamily="mono"
              fontSize="md"
              _hover={{ color: hoverColor }}
            >
              {`/${item}`}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 