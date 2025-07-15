
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const recommendations = [
  {
    id: 1,
    title: "Establece Horarios Claros",
    description: "Define tiempos específicos para jugar y para estudiar. Usa un calendario o alarmas para ayudarte a cumplir tus horarios y evitar que el juego interfiera con tus responsabilidades académicas.",
    imageHint: "calendar schedule planner",
    altText: "Calendario con horarios definidos"
  },
  {
    id: 2,
    title: "Prioriza Tus Tareas Escolares",
    description: "Completa tus deberes y estudia para tus exámenes antes de empezar a jugar. Considera los videojuegos como una recompensa después de haber cumplido con tus obligaciones.",
    imageHint: "student homework priority",
    altText: "Estudiante priorizando tareas escolares"
  },
  {
    id: 3,
    title: "Descansos Activos y Sociales",
    description: "Alterna el tiempo de juego con otras actividades. Sal a caminar, practica algún deporte, o pasa tiempo con amigos y familia. Esto ayuda a tu bienestar físico y mental.",
    imageHint: "friends outdoors activity",
    altText: "Jóvenes realizando actividad al aire libre"
  },
  {
    id: 4,
    title: "Comunica Tus Límites",
    description: "Habla con tus amigos y familiares sobre tus horarios de estudio y juego. Pídeles que respeten tus tiempos y evita jugar cuando tengas compromisos importantes.",
    imageHint: "person talking communication",
    altText: "Persona comunicando sus límites"
  },
  {
    id: 5,
    title: "Autoevalúa Tu Estado Emocional",
    description: "Presta atención a cómo te sientes antes, durante y después de jugar. Si notas que te sientes más irritable, ansioso o descuidas otras áreas, podría ser momento de reajustar tus hábitos.",
    imageHint: "person thinking reflection",
    altText: "Persona reflexionando sobre sus emociones"
  }
];

export function RecommendationsVideojuegos() {
  return (
    <div className="space-y-6">
      {recommendations.map((rec) => (
        <Card key={rec.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
              <CardTitle className="text-lg font-semibold">{rec.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4 items-center">
            <p className="md:col-span-2 text-foreground/90">{rec.description}</p>
            <div className="md:col-span-1">
              <Image
                src={`https://placehold.co/300x200.png`}
                alt={rec.altText}
                width={300}
                height={200}
                className="rounded-md object-cover aspect-video w-full"
                data-ai-hint={rec.imageHint}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
