import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SentimentAnalyzer } from "./components/sentiment-analyzer";
import { Smile } from "lucide-react";

export default function SentimentAnalysisPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
          <Smile className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Análisis de Sentimiento</h1>
        <p className="mt-2 text-lg text-foreground/80 max-w-2xl mx-auto">
          Comprende el sentimiento general expresado en reseñas de usuarios, artículos o cualquier texto.
        </p>
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Resumidor de Sentimiento Potenciado por IA</CardTitle>
          <CardDescription>
            Pega contenido de texto (por ejemplo, reseñas de usuarios, artículos) a continuación para obtener un resumen generado por IA del sentimiento expresado.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SentimentAnalyzer />
        </CardContent>
      </Card>

      <Card className="bg-secondary/50 border-secondary">
        <CardHeader>
          <CardTitle>Cómo Funciona</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/90">
            Nuestro modelo de IA analiza el texto proporcionado para identificar opiniones, emociones y actitudes hacia el tema analizado. Luego genera un resumen conciso del sentimiento general. Esto puede ser útil para comprender las percepciones de los usuarios e identificar áreas de mejora.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
