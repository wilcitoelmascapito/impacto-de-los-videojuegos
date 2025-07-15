
"use server";

import { analizarImpactoVideojuegos } from "@/ai/flows/videojuegos-analisis-flow";
import type { VideojuegosAnalisisOutput } from "@/ai/flows/videojuegos-analisis-flow";

interface AnalisisActionResult {
  analysisText?: string | null;
  error?: string | null;
}

export async function handleAnalyzeVideoGameImpact(hypotheticalData: string): Promise<AnalisisActionResult> {
  if (!hypotheticalData || hypotheticalData.trim().length < 50) {
    return { error: "Los datos hipotéticos proporcionados son insuficientes para el análisis." };
  }

  try {
    const result: VideojuegosAnalisisOutput = await analizarImpactoVideojuegos({ hypotheticalSurveyData: hypotheticalData });
    if (result.analysisText) {
      return { analysisText: result.analysisText };
    } else {
      return { error: "No se pudo generar el análisis. El modelo de IA no devolvió contenido." };
    }
  } catch (error) {
    console.error("Error analizando impacto de videojuegos:", error);
    if (error instanceof Error) {
        return { error: `Ocurrió un error durante el análisis: ${error.message}` };
    }
    return { error: "Ocurrió un error inesperado durante el análisis." };
  }
}

// En un futuro, aquí podría ir la lógica para guardar los datos de la encuesta
// export async function handleVideoGameSurveySubmit(data: any): Promise<ActionResult> {
//   console.log("Survey data submitted:", data);
//   // Lógica para guardar en base de datos o procesar
//   return { success: "Encuesta recibida, ¡gracias!" };
// }
