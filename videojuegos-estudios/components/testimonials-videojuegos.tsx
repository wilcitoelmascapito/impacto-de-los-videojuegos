
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { MessageSquare } from "lucide-react";

const testimonials = [
  {
    quote: "Antes jugaba hasta tarde y al día siguiente no me podía concentrar en clase. Tuve que aprender a poner límites para que mis notas no bajaran más.",
    author: "Laura G., Estudiante de Bachillerato",
    imageHint: "student tired desk",
    altText: "Estudiante cansada en su escritorio"
  },
  {
    quote: "Los videojuegos me ayudan a relajarme después de estudiar mucho, pero a veces se me pasan las horas. Encontrar ese equilibrio es clave.",
    author: "Carlos M., Estudiante de Bachillerato",
    imageHint: "student gaming relax",
    altText: "Estudiante relajándose con videojuegos"
  },
  {
    quote: "Algunos juegos de estrategia me han ayudado a pensar más rápido, pero si no controlo el tiempo, descuido mis tareas y mis relaciones con amigos que no juegan.",
    author: "Sofía P., Estudiante de Bachillerato",
    imageHint: "friends talking school",
    altText: "Amigos conversando en la escuela"
  },
];

export function TestimonialsVideojuegos() {
  return (
    <div className="space-y-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <CardTitle className="text-lg font-semibold">{testimonial.author}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4 items-center">
            <p className="md:col-span-2 text-foreground/90 italic">"{testimonial.quote}"</p>
            <div className="md:col-span-1">
              <Image
                src={`https://placehold.co/300x200.png`}
                alt={testimonial.altText}
                width={300}
                height={200}
                className="rounded-md object-cover aspect-video w-full"
                data-ai-hint={testimonial.imageHint}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
