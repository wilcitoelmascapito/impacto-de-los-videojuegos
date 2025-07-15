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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const surveyFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "Por favor, ingresa un correo electrónico válido." }).optional().or(z.literal('')),
  experience: z.enum(["very_satisfied", "satisfied", "neutral", "dissatisfied", "very_dissatisfied"], {
    required_error: "Por favor, califica tu experiencia.",
  }),
  features: z.string().min(10, { message: "Por favor, cuéntanos sobre las características que te gustan o no (mínimo 10 caracteres)." }),
  suggestions: z.string().optional(),
});

type SurveyFormValues = z.infer<typeof surveyFormSchema>;

export default function SurveysPage() {
  const { toast } = useToast();

  const form = useForm<SurveyFormValues>({
    resolver: zodResolver(surveyFormSchema),
    defaultValues: {
      name: "",
      email: "",
      features: "",
      suggestions: "",
    },
  });

  function onSubmit(data: SurveyFormValues) {
    // In a real app, you would send this data to a server.
    console.log(data);
    toast({
      title: "¡Encuesta Enviada!",
      description: "Gracias por tus valiosos comentarios.",
      variant: "default",
    });
    form.reset(); // Reset form after submission
  }

  return (
    <div className="space-y-8">
      <section className="text-center">
         <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
          <ClipboardList className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Comparte Tus Comentarios</h1>
        <p className="mt-2 text-lg text-foreground/80 max-w-2xl mx-auto">
          Ayúdanos a mejorar nuestra plataforma compartiendo tus experiencias y sugerencias. ¡Tu opinión es valiosa para nosotros!
        </p>
      </section>

      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle>Encuesta de Usuarios</CardTitle>
          <CardDescription>Por favor, tómate unos momentos para completar esta encuesta.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo Electrónico (Opcional)</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="tu.correo@ejemplo.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>¿Cómo calificarías tu experiencia general con nuestra plataforma?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        {[
                          { value: "very_satisfied", label: "Muy Satisfecho/a" },
                          { value: "satisfied", label: "Satisfecho/a" },
                          { value: "neutral", label: "Neutral" },
                          { value: "dissatisfied", label: "Insatisfecho/a" },
                          { value: "very_dissatisfied", label: "Muy Insatisfecho/a" },
                        ].map(option => (
                           <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value={option.value} />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {option.label}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="features"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>¿Qué características de nuestra plataforma encuentras más útiles o menos útiles? ¿Por qué?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Cuéntanos sobre las características..."
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="suggestions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>¿Tienes alguna sugerencia para mejorar nuestra plataforma?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tus sugerencias..."
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full md:w-auto" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (
                  <Send className="mr-2 h-4 w-4 animate-pulse" />
                ) : (
                  <Send className="mr-2 h-4 w-4" />
                )}
                Enviar Encuesta
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
