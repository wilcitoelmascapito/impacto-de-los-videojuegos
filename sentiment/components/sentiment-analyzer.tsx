"use client";

import { useState, useTransition } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { handleAnalyzeSentiment } from '../actions';
import { Loader2, MessageSquareText } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function SentimentAnalyzer() {
  const [inputText, setInputText] = useState('');
  const [sentimentSummary, setSentimentSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async () => {
    setError(null);
    setSentimentSummary(null);

    if (!inputText.trim()) {
      setError("Por favor, ingresa algún texto para analizar.");
      return;
    }

    startTransition(async () => {
      try {
        const result = await handleAnalyzeSentiment(inputText);
        if (result.error) {
          setError(result.error);
        } else {
          setSentimentSummary(result.sentimentSummary);
        }
      } catch (e) {
        setError("Ocurrió un error inesperado. Por favor, inténtalo de nuevo.");
        console.error(e);
      }
    });
  };

  return (
    <div className="space-y-6">
      <Textarea
        placeholder="Pega texto (ej., reseñas de usuarios, artículos) aquí para analizar su sentimiento..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={10}
        className="w-full p-3 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
        disabled={isPending}
      />
      <Button onClick={handleSubmit} disabled={isPending || !inputText.trim()} className="w-full md:w-auto">
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Analizando Sentimiento...
          </>
        ) : (
          <>
            <MessageSquareText className="mr-2 h-4 w-4" />
            Analizar Sentimiento
          </>
        )}
      </Button>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {sentimentSummary && (
        <Card className="bg-accent/20 border-accent">
          <CardHeader>
            <CardTitle className="text-accent-foreground">Resumen de Sentimiento</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground whitespace-pre-wrap">{sentimentSummary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
