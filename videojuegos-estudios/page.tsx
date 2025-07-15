
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, MessageCircle, BarChart3, Lightbulb } from "lucide-react";
import { SurveyFormVideojuegos } from "./components/survey-form-videojuegos";
import { TestimonialsVideojuegos } from "./components/testimonials-videojuegos";
import { AnalysisVideojuegos } from "./components/analysis-videojuegos";
import { RecommendationsVideojuegos } from "./components/recommendations-videojuegos";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function VideojuegosEstudiosPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-background rounded-xl shadow-sm">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
          <Gamepad2 className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Impacto de los Videojuegos en los Estudios</h1>
        <p className="mt-3 text-lg text-foreground/80 max-w-3xl mx-auto">
          Entiende cómo los videojuegos pueden influir en tu rendimiento académico y bienestar emocional, y aprende a gestionar tu tiempo eficazmente.
        </p>
      </section>

      <Accordion type="single" collapsible className="w-full space-y-6">
        <AccordionItem value="item-1">
          <Card className="shadow-lg">
            <AccordionTrigger className="p-0">
              <CardHeader className="flex-row items-center justify-between w-full py-4">
                <div className="flex items-center gap-3">
                  <ClipboardList className="w-7 h-7 text-accent" />
                  <CardTitle className="text-2xl">Encuesta: Videojuegos y Hábitos de Estudio</CardTitle>
                </div>
              </CardHeader>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="pt-0">
                <CardDescription className="mb-4">
                  Completa esta encuesta para reflexionar sobre tu relación con los videojuegos y su posible impacto en tus estudios. Tus respuestas son confidenciales y nos ayudarán a ofrecer mejores recomendaciones.
                </CardDescription>
                <SurveyFormVideojuegos />
              </CardContent>
            </AccordionContent>
          </Card>
        </AccordionItem>

        <AccordionItem value="item-2">
          <Card className="shadow-lg">
             <AccordionTrigger className="p-0">
              <CardHeader className="flex-row items-center justify-between w-full py-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-7 h-7 text-accent" />
                  <CardTitle className="text-2xl">Testimonios de Compañeros</CardTitle>
                </div>
              </CardHeader>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="pt-0">
                <TestimonialsVideojuegos />
              </CardContent>
            </AccordionContent>
          </Card>
        </AccordionItem>

        <AccordionItem value="item-3">
          <Card className="shadow-lg">
             <AccordionTrigger className="p-0">
              <CardHeader className="flex-row items-center justify-between w-full py-4">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-7 h-7 text-accent" />
                  <CardTitle className="text-2xl">Análisis: Videojuegos, Rendimiento y Emociones</CardTitle>
                </div>
              </CardHeader>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="pt-0">
                 <CardDescription className="mb-4">
                  Explora un análisis sobre cómo el tiempo dedicado a los videojuegos puede correlacionarse con el rendimiento académico y el estado emocional, basado en patrones comunes observados en estudiantes.
                </CardDescription>
                <AnalysisVideojuegos />
              </CardContent>
            </AccordionContent>
          </Card>
        </AccordionItem>

        <AccordionItem value="item-4">
          <Card className="shadow-lg">
             <AccordionTrigger className="p-0">
              <CardHeader className="flex-row items-center justify-between w-full py-4">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-7 h-7 text-accent" />
                  <CardTitle className="text-2xl">Recomendaciones para un Uso Equilibrado</CardTitle>
                </div>
              </CardHeader>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="pt-0">
                <RecommendationsVideojuegos />
              </CardContent>
            </AccordionContent>
          </Card>
        </AccordionItem>
      </Accordion>

    </div>
  );
}

// Temporary ClipboardList icon if not available from lucide (it should be)
const ClipboardList = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M12 11h4" />
        <path d="M12 16h4" />
        <path d="M8 11h.01" />
        <path d="M8 16h.01" />
    </svg>
);
