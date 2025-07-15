
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";
import React from "react";

const emocionesOptions = [
  { id: "energizado", label: "Energizado/a" },
  { id: "cansado", label: "Cansado/a" },
  { id: "estresado", label: "Estresado/a" },
  { id: "relajado", label: "Relajado/a" },
  { id: "frustrado", label: "Frustrado/a" },
  { id: "contento", label: "Contento/a" },
  { id: "ansioso", label: "Ansioso/a por seguir jugando" },
  { id: "culpable", label: "Culpable por el tiempo invertido" },
];

const videojuegoSurveySchema = z.object({
  nombre: z.string().optional(),
  horasVideojuegos: z.string({ required_error: "Por favor, selecciona un rango de horas." }),
  impactoAcademico: z.enum(["positivo", "negativo", "neutral", "no_seguro"], {
    required_error: "Por favor, selecciona el impacto percibido.",
  }),
  emocionesDespuesJugar: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Debes seleccionar al menos una emoción.",
  }),
  equilibrioJuegoEstudio: z.enum(["facil", "moderado", "dificil", "muy_dificil"], {
    required_error: "Por favor, selecciona la dificultad para equilibrar.",
  }),
  comentariosAdicionales: z.string().optional(),
});

type VideojuegoSurveyFormValues = z.infer<typeof videojuegoSurveySchema>;

export function SurveyFormVideojuegos() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<VideojuegoSurveyFormValues>({
    resolver: zodResolver(videojuegoSurveySchema),
    defaultValues: {
      nombre: "",
      horasVideojuegos: undefined,
      impactoAcademico: undefined,
      emocionesDespuesJugar: [],
      equilibrioJuegoEstudio: undefined,
      comentariosAdicionales: "",
    },
  });

  async function onSubmit(data: VideojuegoSurveyFormValues) {
    setIsSubmitting(true);
    console.log("Datos de la encuesta sobre videojuegos:", data);
    // Simular envío de datos
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "¡Encuesta Enviada!",
      description: "Gracias por tus respuestas. Tu participación es valiosa.",
      variant: "default",
    });
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre (Opcional)</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="horasVideojuegos"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿Cuántas horas a la semana dedicas a los videojuegos aproximadamente?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un rango de horas" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="0-5">0-5 horas</SelectItem>
                  <SelectItem value="6-10">6-10 horas</SelectItem>
                  <SelectItem value="11-15">11-15 horas</SelectItem>
                  <SelectItem value="16-20">16-20 horas</SelectItem>
                  <SelectItem value="20+">Más de 20 horas</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="impactoAcademico"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>¿Cómo consideras que los videojuegos impactan tu rendimiento académico?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl><RadioGroupItem value="positivo" /></FormControl>
                    <FormLabel className="font-normal">Positivo</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl><RadioGroupItem value="negativo" /></FormControl>
                    <FormLabel className="font-normal">Negativo</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl><RadioGroupItem value="neutral" /></FormControl>
                    <FormLabel className="font-normal">Neutral</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl><RadioGroupItem value="no_seguro" /></FormControl>
                    <FormLabel className="font-normal">No estoy seguro/a</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="emocionesDespuesJugar"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel>¿Cómo te sientes usualmente después de una sesión de videojuegos? (Selecciona todas las que apliquen)</FormLabel>
                <FormDescription>
                  Esto nos ayuda a entender el impacto emocional.
                </FormDescription>
              </div>
              {emocionesOptions.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="emocionesDespuesJugar"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...(field.value || []), item.id])
                                : field.onChange(
                                    (field.value || []).filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="equilibrioJuegoEstudio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿Qué tan difícil te resulta equilibrar el tiempo entre videojuegos y estudios?</FormLabel>
               <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="facil">Fácil, lo manejo bien</SelectItem>
                  <SelectItem value="moderado">Moderadamente difícil, a veces me cuesta</SelectItem>
                  <SelectItem value="dificil">Difícil, suelo priorizar uno sobre otro</SelectItem>
                  <SelectItem value="muy_dificil">Muy difícil, es un gran desafío</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="comentariosAdicionales"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Si tienes algún comentario adicional sobre tu experiencia con los videojuegos y tus estudios, por favor compártelo aquí (Opcional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tus comentarios..."
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <p className="text-sm text-muted-foreground">
          Nota: Tus respuestas son confidenciales y se utilizarán de forma anónima para fines de análisis y generación de recomendaciones generales.
        </p>

        <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Send className="mr-2 h-4 w-4" />
          )}
          Enviar Encuesta
        </Button>
      </form>
    </Form>
  );
}
