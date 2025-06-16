import { Box, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useEffect, useState, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*'
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#0F0'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)
    return () => clearInterval(interval)
  }, [])

  return <canvas ref={canvasRef} className="matrix-bg" />
}

const Home = () => {
  const [text, setText] = useState('')
  const fullText = 'Welcome!'
  const textColor = useColorModeValue('green.400', 'green.400')

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <Box position="relative" minH="100vh" pt={20}>
      <MatrixBackground />
      <VStack
        spacing={8}
        align="start"
        maxW="container.md"
        mx="auto"
        px={4}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text
            fontFamily="mono"
            fontSize="2xl"
            color={textColor}
            className="terminal-text"
          >
            {text}
            <span className="terminal-cursor" />
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <Text fontFamily="mono" fontSize="lg">
            $ whoami
          </Text>
          <Text fontFamily="mono" fontSize="lg" mt={2}>
            2nd-year Computer Science Student @ De La Salle University
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          <Text fontFamily="mono" fontSize="lg">
            $ skills
          </Text>
          <Text fontFamily="mono" fontSize="lg" mt={2}>
            • Network Monitoring
            <br />
            • Programming (C, Java, Python)
            <br />
            • Cryptography
            <br />
            • Security Analysis
          </Text>
        </motion.div>
      </VStack>
    </Box>
  )
}

export default Home 
