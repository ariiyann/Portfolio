import { Box, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const textColor = useColorModeValue('green.400', 'green.400')

  const contactInfo = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/ariiyann',
      link: 'https://github.com/ariiyann'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ayaartus',
      link: 'https://www.linkedin.com/in/ayaartus/'
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'arianne.artus@gmail.com',
      link: 'mailto:arianne.artus@gmail.com'
    }
  ]

  return (
    <Box pt={20}>
      <VStack spacing={8} align="start" maxW="container.md" mx="auto" px={4}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text fontFamily="mono" fontSize="2xl" color={textColor}>
            $ cat contact.txt
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Text fontFamily="mono" fontSize="lg" whiteSpace="pre-line">
            {`Feel free to reach out to me for:
• Collaboration opportunities
• Research projects
• Internship opportunities
• General inquiries`}
          </Text>
        </motion.div>

        {contactInfo.map((info, index) => (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
          >
            <Box
              p={4}
              border="1px"
              borderColor={textColor}
              borderRadius="md"
              _hover={{ transform: 'translateX(10px)' }}
              transition="transform 0.2s"
            >
              <Text fontFamily="mono" fontSize="lg" display="flex" alignItems="center" gap={2}>
                {info.icon}
                <Text as="span" color={textColor}>
                  {info.label}:
                </Text>
                <Text as="a" href={info.link} _hover={{ color: 'green.300' }}>
                  {info.value}
                </Text>
              </Text>
            </Box>
          </motion.div>
        ))}
      </VStack>
    </Box>
  )
}

export default Contact 