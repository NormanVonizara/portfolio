import { motion, useInView } from "framer-motion";
import { Camera, Code, Cpu, Network } from "lucide-react";
import { useRef } from "react";
import { Card } from "../ui/card";

const features = [
      {
            icon: Code,
            title: 'Développement Frontend',
            description: 'Expertise en React.js, Next.js et Tailwind CSS pour créer des interfaces modernes et réactives.',
      },
      {
            icon: Cpu,
            title: 'Électronique & Arduino',
            description: 'Passionné par l\'IoT et les systèmes embarqués, avec une expérience pratique en prototypage.',
      },
      {
            icon: Network,
            title: 'Réseaux & Infrastructure',
            description: 'Connaissances en configuration réseau, routage et dépannage des systèmes.',
      },
      {
            icon: Camera,
            title: 'Audio-Visuel',
            description: 'Compétences en montage vidéo (Premiere Pro) et retouche d\'images (Photoshop).',
      },
];

function BackgroundDecoration () {
      return (
            <div className="absolute inset-0 -z-10">
                  <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>
      )
}

function AboutTitle ({ isInView, description }: { isInView: boolean,description: string }) {
      return (
            <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
            >
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        À Propos de <span className="text-gradient">Moi</span>
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {description}
                  </p>
            </motion.div>
      )
}

function AboutLeftSection ({ isInView }: { isInView: boolean }) {
      return (
            <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
            >
                  <Card className="p-8 card-gradient border-border/50">
                        <h3 className="text-2xl font-bold mb-4 text-gradient">Mon Parcours</h3>
                        <div className="space-y-4 text-muted-foreground">
                              <p>
                                    Actuellement en <span className="text-foreground font-semibold">Licence de Génie Électrique et Technologie</span> à l'École Supérieure Polytechnique d'Antsiranana, je me spécialise en électronique tout en développant une forte expertise en développement web.
                              </p>
                              <p>
                                    Ma passion pour la technologie m'a mené à explorer le développement full-stack, avec un focus particulier sur le frontend. J'aime créer des interfaces intuitives et performantes qui offrent une excellente expérience utilisateur.
                              </p>
                              <p>
                                    Récemment, j'ai participé au <span className="text-foreground font-semibold">Hackathon Redshalk</span> où notre équipe a obtenu la <span className="text-accent font-semibold">2ème place</span> en développant une plateforme pour le secteur touristique.
                              </p>
                        </div>
                  </Card>

                  <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="grid grid-cols-2 gap-4"
                  >
                  {[
                        { value: '3+', label: 'Années d\'études' },
                        { value: '10+', label: 'Projets réalisés' },
                        { value: '2ème', label: 'Place Hackathon' },
                        { value: '100%', label: 'Passion' },
                  ].map((stat, index) => (
                        <Card key={stat.label} className="p-6 text-center card-gradient border-border/50">
                              <motion.div
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1, type: "spring" }}
                              >
                                    <p className="text-4xl font-bold text-gradient mb-2">
                                          {stat.value}
                                    </p>
                                    <p className="text-muted-foreground text-sm">
                                          {stat.label}
                                    </p>
                              </motion.div>
                        </Card>
                  ))}
                  </motion.div>
            </motion.div>
      )
}

function AboutRightSection ({ isInView }: { isInView: boolean }) {
      return (
            <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid gap-6"
            >
                  {features.map((feature, index) => (
                        <motion.div
                              key={feature.title}
                              initial={{ opacity: 0, y: 30 }}
                              animate={isInView ? { opacity: 1, y: 0 } : {}}
                              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        >
                              <Card className="p-6 card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group">
                                    <div className="flex items-start gap-4">
                                          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                <feature.icon className="w-6 h-6 text-primary" />
                                          </div>
                                          <div className="flex-1">
                                                <h4 className="font-semibold text-lg mb-2">
                                                      {feature.title}
                                                </h4>
                                                <p className="text-muted-foreground">
                                                      {feature.description}
                                                </p>
                                          </div>
                                    </div>
                              </Card>
                        </motion.div>
                  ))}
            </motion.div>
      )
}

export default function About () {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true, margin: "-100px" });
      return (
            <section id="about" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
                  <BackgroundDecoration />

                  <div className="container px-4 md:px-6">
                        <AboutTitle
                              isInView={isInView}
                              description="Développeur passionné avec une approche créative du développement web et de l'électronique"
                        />
                        <div className="grid lg:grid-cols-2 gap-12 mb-16">
                              <AboutLeftSection 
                                    isInView={isInView}
                              />
                              <AboutRightSection
                                    isInView={isInView}
                              />
                        </div>
                  </div>
            </section>
      )
}