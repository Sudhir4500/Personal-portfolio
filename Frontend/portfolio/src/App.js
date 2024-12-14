import React from 'react'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Bio from './components/Bio'
import Skills from './components/Skills'
import Services from './components/Services'
import ContactForm from './components/Contact'

const App = () => {
  return (
    <div className=" relative h-full overflow-y-auto antialiased">
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
        <div className=" relative z-10 flex-col items-center p-4 space-y-8 container mx-auto">
        <Introduction />
        <Navbar />
        <Bio />
        <Skills />
        <Projects />
        <Services />
        <ContactForm />
        
        </div>
      </div>
      
    
  )
}

export default App
