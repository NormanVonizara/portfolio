import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion"
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const navItems = [
      { name: 'Accueil', href: '#home' },
      { name: 'À propos', href: '#about' },
      { name: 'Compétences', href: '#skills' },
      { name: 'Projets', href: '#projects' },
      { name: 'Expérience', href: '#experience' },
      { name: 'Contact', href: '#contact' },
];

export default function Navbar () {
      const [isScrolled, setIsScrolled] = useState(false);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

      useEffect(() => {
            const handleScroll = () => {
                  setIsScrolled(window.scrollY > 50);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      return (
            <motion.nav
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent")}
            >
                  <NavbarContent
                        isMobileMenuOpen={isMobileMenuOpen}
                        setIsMobileMenuOpen={setIsMobileMenuOpen}
                  />
            </motion.nav>
      )
}

export interface Props {
      isMobileMenuOpen: boolean
      setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>
}

function NavbarContent ({ isMobileMenuOpen, setIsMobileMenuOpen }: Props) {
      return (
            <div className="container mx-auto px-4 md:px-6">
                  <div className="flex items-center justify-between h-16 md:h-20">
                        <a href="#home" className="text-2xl font-bold">
                              <span className="text-gradient">
                                    NL
                              </span>
                        </a>

                        <div className="hidden md:flex items-center gap-8">
                              {navItems.map((item, index) => (
                                    <a
                                          key={index}
                                          href={item.href}
                                          className="text-foreground/80 hover:text-primary transition-colors duration-200 relative group"
                                    >
                                          {item.name}
                                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                    </a>
                              ))}
                              <Button 
                                    size="sm" 
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                                    asChild
                              >
                                    <a href="#contact">Contact</a>
                              </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                  </div>

                  {isMobileMenuOpen && (
                        <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="md:hidden border-t border-border"
                        >
                              <div className="py-4 space-y-4">
                                    {navItems.map((item, index) => (
                                          <a
                                                key={index}
                                                href={item.href}
                                                className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                          >
                                                {item.name}
                                          </a>
                                    ))}
                              </div>
                        </motion.div>
                  )}
            </div>
      )
}