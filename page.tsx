import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gamepad2, Users, BookOpen, ShieldAlert, Brain, MessageSquare } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-br from-primary/10 via-background to-background rounded-xl shadow-sm">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Impacto de los Videojuegos en Jóvenes
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Explora cómo los videojuegos influyen en el desarrollo, el rendimiento académico y el bienestar emocional de los jóvenes. Encuentra recursos, investigaciones y consejos para un enfoque equilibrado.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/videojuegos-estudios">Análisis y Consejos <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/research">Ver Investigación</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center text-foreground">Temas Clave</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Brain className="w-8 h-8 text-accent" />
                <CardTitle className="text-2xl">Desarrollo Cognitivo</CardTitle>
              </div>
              <CardDescription>Cómo ciertos videojuegos pueden potenciar habilidades como la resolución de problemas, la estrategia y la atención.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Desarrollo Cognitivo y Videojuegos" 
                width={600} 
                height={400} 
                className="rounded-md object-cover aspect-video"
                data-ai-hint="brain puzzle game" 
              />
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <ShieldAlert className="w-8 h-8 text-accent" />
                <CardTitle className="text-2xl">Bienestar y Riesgos</CardTitle>
              </div>
              <CardDescription>Identifica los posibles riesgos como el sedentarismo, problemas de sueño o el potencial de adicción. Aprende a fomentar hábitos saludables.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Bienestar y Riesgos de los Videojuegos" 
                width={600} 
                height={400} 
                className="rounded-md object-cover aspect-video"
                data-ai-hint="warning health screen" 
              />
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="w-8 h-8 text-accent" />
                <CardTitle className="text-2xl">Impacto Social y Emocional</CardTitle>
              </div>
              <CardDescription>Explora cómo los videojuegos afectan las relaciones sociales, la comunicación y el manejo de emociones como la frustración o la competitividad.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Impacto Social de los Videojuegos" 
                width={600} 
                height={400} 
                className="rounded-md object-cover aspect-video"
                data-ai-hint="friends gaming social" 
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card className="bg-secondary/50 border-secondary shadow-md">
          <CardHeader>
            <CardTitle className="text-xl text-secondary-foreground">Para Jugadores Jóvenes</CardTitle>
            <CardDescription className="text-secondary-foreground/80">Encuentra consejos para equilibrar los videojuegos con tus estudios y otras actividades.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="link" className="text-primary p-0">
              <Link href="/students">Consejos para Jugadores <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="bg-secondary/50 border-secondary shadow-md">
          <CardHeader>
            <CardTitle className="text-xl text-secondary-foreground">Para Padres y Educadores</CardTitle>
            <CardDescription className="text-secondary-foreground/80">Recursos para entender y guiar a los jóvenes en su relación con los videojuegos.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="link" className="text-primary p-0">
              <Link href="/parents">Guía para Padres <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
