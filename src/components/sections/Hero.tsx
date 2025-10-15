import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Scene3D from '../common/Scene3D';



export default function Hero() {
      return (
            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />

                  <div className="absolute inset-0 opacity-30">
                        <Scene3D />
                  </div>

                  <div className="container relative z-10 px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                              <HeroLeft />
                              <HeroRight />
                        </div>
                  </div>

                  <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                  >
                        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                              <span className="text-sm">Scroll</span>
                              <ArrowDown className="w-6 h-6 animate-bounce" />
                        </a>
                  </motion.div>
            </section>
      );
}

function HeroLeft () {
      return (
            <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="space-y-6"
            >
                  <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                  >
                        <p className="text-accent text-lg font-semibold mb-2">
                              Bonjour, je suis
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">
                              <span className="text-gradient">
                                    Norman Ludovic
                              </span>
                        </h1>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90 mb-4">
                              ANDRIAMAHAVITA Vonizara
                        </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground">
                              Développeur Front-End
                        </p>
                  </motion.div>

                  <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg text-muted-foreground max-w-xl"
                  >
                        Passionné par les interfaces utilisateurs modernes, l'électronique embarquée et les réseaux. 
                        Je crée des expériences web innovantes et performantes.
                  </motion.p>

                  <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-wrap gap-4"
                  >
                        <Button 
                              size="lg" 
                              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
                              asChild
                        >
                              <a href="#contact">Me Contacter</a>
                        </Button>
                        <Button 
                              size="lg" 
                              variant="outline" 
                              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                              asChild
                        >
                              <a href="#projects">Voir mes projets</a>
                        </Button>
                  </motion.div>

                  <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="flex gap-4 pt-4"
                  >
                        <a
                              href="https://github.com/NormanVonizara"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                        >
                              <Github className="w-6 h-6" />
                        </a>
                        <a
                              href="https://www.linkedin.com/in/norman-vonizara-07b96b36a/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                        >
                              <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                              href="mailto:normanvonizara@gmail.com"
                              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                        >
                              <Mail className="w-6 h-6" />
                        </a>
                  </motion.div>
            </motion.div>
      )
}

function HeroRight () {
      return (
            <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="hidden lg:block"
            >
                  <div className="relative w-full h-[600px] rounded-2xl overflow-hidden card-gradient border border-border/50">
                        <Scene3D />
                  </div>
            </motion.div>
      )
}
