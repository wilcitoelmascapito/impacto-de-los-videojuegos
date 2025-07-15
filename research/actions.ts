"use server";

import { summarizeResearchArticle } from "@/ai/flows/summarize-research-article";
import type { SummarizeResearchArticleOutput } from "@/ai/flows/summarize-research-article";

interface ActionResult {
  summary?: string | null;
  error?: string | null;
}

export async function handleSummarizeArticle(articleText: string): Promise<ActionResult> {
  if (!articleText || articleText.trim().length < 50) { 
    return { error: "El texto del artículo es demasiado corto para resumir. Por favor, proporciona más contenido." };
  }

  try {
    const result: SummarizeResearchArticleOutput = await summarizeResearchArticle({ articleText });
    if (result.summary) {
      return { summary: result.summary };
    } else {
      return { error: "No se pudo generar el resumen. Es posible que el modelo de IA no haya devuelto contenido." };
    }
  } catch (error) {
    console.error("Error summarizing article:", error);
    if (error instanceof Error) {
        return { error: `Ocurrió un error durante el resumen: ${error.message}` };
    }
    return { error: "Ocurrió un error inesperado durante el resumen." };
  }
}
