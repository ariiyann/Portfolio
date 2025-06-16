import { Box, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Projects = () => {
  const textColor = useColorModeValue('green.400', 'green.400')

  const projects = [
    {
      name: 'Network Scanner with Credential Detector',
      description: 'A Python-based tool for network scanning and traffic analysis that logs cleartext credentials sent through HTTP and FTP.',
      tech: ['Python', 'Scapy', 'Nmap', 'Wireshark'],
      link: 'https://github.com/ariiyann'
    },
    {
      name: 'Password Strength Analyzer with Entropy Estimation',
      description: 'A Python-based Tkinter application that integrates the zxcvbn library for advanced password strength analysis',
      tech: ['Python', 'Tkinter', 'Cryptography'],
      link: 'https://github.com/ariiyann'
    },
    {
      name: 'Cloud-based Honeypot',
      description: 'A tpotce honeypot deployed on AWS and monitored through its dashboard',
      tech: ['AWS', 'tpotce'],
      link: 'https://github.com/ariiyann'
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
            $ ls projects/
          </Text>
        </motion.div>

        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Box
              p={4}
              border="1px"
              borderColor={textColor}
              borderRadius="md"
              _hover={{ transform: 'translateX(10px)' }}
              transition="transform 0.2s"
            >
              <Text fontFamily="mono" fontSize="xl" color={textColor}>
                {project.name}
              </Text>
              <Text fontFamily="mono" fontSize="md" mt={2}>
                {project.description}
              </Text>
              <Text fontFamily="mono" fontSize="sm" mt={2} color="gray.400">
                Tech Stack: {project.tech.join(' | ')}
              </Text>
            </Box>
          </motion.div>
        ))}
      </VStack>
    </Box>
  )
}

export default Projects 