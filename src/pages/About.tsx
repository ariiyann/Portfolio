import { Box, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const About = () => {
  const textColor = useColorModeValue('green.400', 'green.400')

  return (
    <Box pt={20}>
      <VStack spacing={8} align="start" maxW="container.md" mx="auto" px={4}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text fontFamily="mono" fontSize="2xl" color={textColor}>
            $ cat about.txt
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Text fontFamily="mono" fontSize="lg" whiteSpace="pre-line">
            {`Hi! I'm Arianne, a computer science student from De La Salle University with a passion for cybersecurity. I am currently in
            my 2nd year, majoring in network and information security.

Currently, I am interested in:
• Network Security
• Threat Intelligence
• Malware Analysis
• Digital Forensics
• Incident Response

I strive to contribute to a safer digital future by applying my knowledge and learning from experts in the cybersecurity community.`}
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Text fontFamily="mono" fontSize="2xl" color={textColor} mt={8}>
            $ ls certifications/
          </Text>
          <Text fontFamily="mono" fontSize="lg" mt={2}>
            • ISC2 Certified in Cybersecurity (CC)
            <br />
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Text fontFamily="mono" fontSize="2xl" color={textColor} mt={8}>
            $ ls leadership experience/
          </Text>
          <Text fontFamily="mono" fontSize="lg" mt={2}>
            • Junior Officer, La Salle Computer Society
            <br />
          </Text>
          <Text fontFamily="mono" fontSize="lg" mt={2}>
            • Marketing Executive, DLSU Hackercup 2025
            <br />
          </Text>
        </motion.div>
      </VStack>
    </Box>
  )
}

export default About 