import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const bgColor = useColorModeValue('gray.900', 'gray.900')
  const textColor = useColorModeValue('green.400', 'green.400')

  return (
    <Box bg={bgColor} color={textColor} minH="100vh">
      <Navbar />
      <Container maxW="container.xl" py={8}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default App 