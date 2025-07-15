import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Timer, Users, Lightbulb, Gamepad } from "lucide-react";

export default function StudentTipsPage() {
  const tips = [
    {
      title: "Establece Límites de Tiempo",
      description: "Define horarios específicos para jugar y respétalos. Usa alarmas o temporizadores para no excederte y asegurar tiempo para estudios y descanso.",
      icon: <Timer className="w-6 h-6 text-accent" />,
      imageHint: "timer clock schedule",
      altText: "Reloj y calendario para gestionar tiempo de juego"
    },
    {
      title: "Prioriza Tareas y Estudios",
      description: "Completa tus responsabilidades académicas antes de jugar. Considera los videojuegos como una recompensa por tu esfuerzo.",
      icon: <Gamepad className="w-6 h-6 text-accent" />,
      imageHint: "student homework books",
      altText: "Estudiante con libros y tareas"
    },
    {
      title: "Comunica y Socializa Fuera del Juego",
      description: "Mantén un balance entre tus amigos en línea y tus relaciones presenciales. Participa en actividades sociales diversas.",
      icon: <Users className="w-6 h-6 text-accent" />,
      imageHint: "friends talking park",
      altText: "Amigos conversando en un parque"
    },
    {
      title: "Reconoce Señales de Alerta",
      description: "Presta atención si el juego interfiere con tu sueño, humor, o responsabilidades. Busca ayuda si sientes que pierdes el control.",
      icon: <Lightbulb className="w-6 h-6 text-accent" />,
      imageHint: "person thinking concern",
      altText: "Persona reflexionando con preocupación"
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
          <Gamepad className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Consejos para Jugadores Jóvenes</h1>
        <p className="mt-2 text-lg text-foreground/80 max-w-2xl mx-auto">
          Disfruta de los videojuegos de forma saludable y equilibrada, sin descuidar tus estudios y bienestar.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        {tips.map((tip, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <span className="mt-1">{tip.icon}</span>
                <div>
                  <CardTitle className="text-xl">{tip.title}</CardTitle>
                  <CardDescription className="mt-1">{tip.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Image 
                src={`https://placehold.co/600x350.png`} 
                alt={tip.altText}
                width={600} 
                height={350} 
                className="rounded-md object-cover aspect-video"
                data-ai-hint={tip.imageHint} 
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-accent/10 border-accent">
        <CardHeader>
          <CardTitle>Recuerda: El Equilibrio es Clave</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/90">
            Los videojuegos pueden ser una gran fuente de diversión y aprendizaje. La clave está en gestionarlos de manera que complementen tu vida, no que la dominen. ¡Explora, diviértete y cuida de ti!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
