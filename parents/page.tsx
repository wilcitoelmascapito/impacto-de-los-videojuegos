import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Users, MessageCircle, ShieldCheck, Eye } from "lucide-react";

export default function ParentResourcesPage() {
  const resources = [
    {
      title: "Entiende los Sistemas de Clasificación",
      description: "Familiarízate con clasificaciones como PEGI o ESRB para elegir juegos apropiados para la edad y madurez de tus hijos.",
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      imageHint: "game rating PEGI ESRB",
      altText: "Logos de sistemas de clasificación de videojuegos"
    },
    {
      title: "Fomenta la Comunicación Abierta",
      description: "Habla con tus hijos sobre los juegos que disfrutan, sus experiencias en línea y cualquier preocupación que puedan tener.",
      icon: <MessageCircle className="w-6 h-6 text-accent" />,
      imageHint: "parent child talking communication",
      altText: "Padre e hijo conversando"
    },
    {
      title: "Establece Reglas y Límites Claros",
      description: "Define horarios de juego, lugares permitidos y normas sobre interacciones en línea. Sé consistente con las reglas.",
      icon: <Eye className="w-6 h-6 text-accent" />, // Icon for supervision/rules
      imageHint: "family rules schedule",
      altText: "Familia estableciendo reglas y horarios"
    },
    {
      title: "Participa y Juega con Ellos",
      description: "Jugar videojuegos con tus hijos puede ser una forma de conectar, entender sus intereses y modelar un comportamiento de juego saludable.",
      icon: <Users className="w-6 h-6 text-accent" />,
      imageHint: "family playing videogames",
      altText: "Familia jugando videojuegos juntos"
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
          <Users className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Guía para Padres sobre Videojuegos</h1>
        <p className="mt-2 text-lg text-foreground/80 max-w-2xl mx-auto">
          Recursos y consejos para acompañar a tus hijos en el mundo de los videojuegos de manera positiva y segura.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <span className="mt-1">{resource.icon}</span>
                <div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription className="mt-1">{resource.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Image 
                src={`https://placehold.co/600x350.png`} 
                alt={resource.altText}
                width={600} 
                height={350} 
                className="rounded-md object-cover aspect-video"
                data-ai-hint={resource.imageHint} 
              />
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="bg-secondary/50 border-secondary">
        <CardHeader>
          <CardTitle>Importante: Modela Hábitos Saludables</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/90">
            Tus propios hábitos con la tecnología y el tiempo de pantalla influyen en tus hijos. Sé un ejemplo de equilibrio y uso consciente de los dispositivos digitales, incluyendo los videojuegos.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
