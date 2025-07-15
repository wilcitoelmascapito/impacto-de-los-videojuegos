
"use client";

import { useState, useTransition } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { handleAnalyzeVideoGameImpact } from '../actions';
import { Loader2, Sparkles, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function AnalysisVideojuegos() {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const generateAnalysis = () => {
    setError(null);
    setAnalysis(null);

    // Datos hipotéticos para enviar al flujo de IA
    const hypotheticalData = `
      Observaciones comunes en estudiantes de bachillerato:
      - Tiempo de juego: Un grupo dedica entre 5-10 horas semanales, otro entre 15-25 horas.
      - Rendimiento académico: Quienes juegan más de 15 horas tienden a reportar una leve disminución en calificaciones y mayor dificultad para concentrarse en los estudios. Aquellos con juego moderado (5-10h) no reportan impacto negativo significativo, y algunos mencionan que les ayuda a relajarse.
      - Emociones: Después de jugar, algunos se sienten relajados y contentos, especialmente tras sesiones cortas. Otros, tras sesiones largas o derrotas, reportan frustración, cansancio o ansiedad por seguir jugando.
      - Equilibrio: La mayoría encuentra desafiante equilibrar videojuegos con responsabilidades académicas y sociales.
      - Motivación y relaciones: El exceso de juego a veces reduce la motivación para actividades escolares y puede tensar relaciones con familiares por el tiempo dedicado. Sin embargo, para algunos, los juegos multijugador fortalecen lazos con amigos.
    `;

    startTransition(async () => {
      try {
        const result = await handleAnalyzeVideoGameImpact(hypotheticalData);
        if (result.error) {
          setError(result.error);
        } else {
          setAnalysis(result.analysisText ?? "No se pudo generar el análisis.");
        }
      } catch (e) {
        setError("Ocurrió un error inesperado al generar el análisis. Por favor, inténtalo de nuevo.");
        console.error(e);
      }
    });
  };

  return (
    <div className="space-y-4">
      <Button onClick={generateAnalysis} disabled={isPending} className="w-full md:w-auto">
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generando Análisis...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" />
            Generar Análisis con IA
          </>
        )}
      </Button>

      {error && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error en el Análisis</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {analysis && (
        <Card className="bg-secondary/30 border-secondary">
          <CardHeader>
            <CardTitle className="text-secondary-foreground">Perspectiva del Análisis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground whitespace-pre-wrap">{analysis}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
