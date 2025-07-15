import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArticleSummarizer } from "./components/article-summarizer";
import Image from "next/image";
import { Lightbulb, BookCheck, ShieldCheck, Users2 } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Investigación sobre Videojuegos y Jóvenes</h1>
        <p className="mt-2 text-lg text-foreground/80 max-w-2xl mx-auto">
          Explora hallazgos y análisis sobre cómo los videojuegos impactan el desarrollo cognitivo, social y emocional de los jóvenes.
        </p>
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Lightbulb className="w-8 h-8 text-accent" />
            <CardTitle className="text-2xl">Resumidor de Artículos Potenciado por IA</CardTitle>
          </div>
          <CardDescription>
            ¿Tienes un artículo de investigación extenso sobre el impacto de los videojuegos? Pega el texto a continuación para obtener un resumen conciso.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ArticleSummarizer />
        </CardContent>
      </Card>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Áreas Clave de Investigación</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Beneficios Cognitivos</CardTitle>
              <CardDescription>Estudios sugieren que ciertos géneros de videojuegos pueden mejorar la atención, memoria de trabajo y habilidades de resolución de problemas.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image 
                src="https://placehold.co/600x300.png" 
                alt="Beneficios Cognitivos de los Videojuegos" 
                width={600} 
                height={300} 
                className="rounded-md object-cover aspect-video"
                data-ai-hint="brain lightbulb puzzle" 
              />
              <p className="mt-4 text-sm text-muted-foreground">
                Juegos de estrategia, puzzles y algunos de acción rápida han mostrado correlaciones positivas con mejoras en funciones ejecutivas.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Impacto en la Salud Mental</CardTitle>
              <CardDescription>Análisis sobre la relación entre el tiempo de juego, el tipo de juego y el bienestar emocional, incluyendo riesgos como ansiedad o depresión.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image 
                src="https://placehold.co/600x300.png" 
                alt="Videojuegos y Salud Mental" 
                width={600} 
                height={300} 
                className="rounded-md object-cover aspect-video"
                data-ai-hint="mental health brain" 
              />
              <p className="mt-4 text-sm text-muted-foreground">
                Es crucial investigar el balance y los factores de protección para mitigar posibles efectos negativos y potenciar los positivos.
              </p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>Socialización y Videojuegos</CardTitle>
              <CardDescription>Investigaciones sobre cómo los videojuegos multijugador y las comunidades en línea afectan las habilidades sociales y las relaciones.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image 
                src="https://placehold.co/600x300.png" 
                alt="Socialización en Videojuegos" 
                width={600} 
                height={300} 
                className="rounded-md object-cover aspect-video"
                data-ai-hint="friends gaming connection" 
              />
              <p className="mt-4 text-sm text-muted-foreground">
                Los videojuegos pueden ofrecer espacios para la cooperación y la amistad, pero también pueden surgir dinámicas sociales complejas.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
