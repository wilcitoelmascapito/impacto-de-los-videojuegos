"use server";

import { summarizeSentiment } from "@/ai/flows/sentiment-summarization";
import type { SentimentSummaryOutput } from "@/ai/flows/sentiment-summarization";

interface ActionResult {
  sentimentSummary?: string | null;
  error?: string | null;
}

export async function handleAnalyzeSentiment(text: string): Promise<ActionResult> {
  if (!text || text.trim().length < 20) { // Basic validation
    return { error: "El texto es demasiado corto para analizar el sentimiento. Por favor, proporciona más contenido." };
  }

  try {
    const result: SentimentSummaryOutput = await summarizeSentiment({ text });
    if (result.sentimentSummary) {
      return { sentimentSummary: result.sentimentSummary };
    } else {
      return { error: "No se pudo generar el resumen de sentimiento. Es posible que el modelo de IA no haya devuelto contenido." };
    }
  } catch (error) {
    console.error("Error analyzing sentiment:", error);
     if (error instanceof Error) {
        return { error: `Ocurrió un error durante el análisis de sentimiento: ${error.message}` };
    }
    return { error: "Ocurrió un error inesperado durante el análisis de sentimiento." };
  }
}
