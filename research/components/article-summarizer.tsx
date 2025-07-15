"use client";

import { useState, useTransition } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { handleSummarizeArticle } from '../actions';
import { Loader2, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function ArticleSummarizer() {
  const [articleText, setArticleText] = useState('');
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async () => {
    setError(null);
    setSummary(null);

    if (!articleText.trim()) {
      setError("Por favor, ingresa algún texto para resumir.");
      return;
    }

    startTransition(async () => {
      try {
        const result = await handleSummarizeArticle(articleText);
        if (result.error) {
          setError(result.error);
        } else {
          setSummary(result.summary ?? "No se pudo generar el resumen.");
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
        placeholder="Pega el texto del artículo de investigación aquí (por ejemplo, sobre videojuegos, desarrollo juvenil, etc.)..."
        value={articleText}
        onChange={(e) => setArticleText(e.target.value)}
        rows={10}
        className="w-full p-3 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
        disabled={isPending}
      />
      <Button onClick={handleSubmit} disabled={isPending || !articleText.trim()} className="w-full md:w-auto">
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Resumiendo...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" />
            Resumir Artículo
          </>
        )}
      </Button>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {summary && (
        <Card className="bg-accent/20 border-accent">
          <CardHeader>
            <CardTitle className="text-accent-foreground">Resumen del Artículo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground whitespace-pre-wrap">{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
