import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { showSuccess, showError, showLoading, dismissToast } from "@/utils/toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }).max(500, {
    message: "Le message ne doit pas dépasser 500 caractères.",
  }),
});

export const ContactFormSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const toastId = showLoading("Envoi de votre message...");
    try {
      // REMPLACEZ 'YOUR_FORMSPREE_ENDPOINT' PAR L'URL DE VOTRE FORMULAIRE FORMSPREE
      // Exemple: https://formspree.io/f/yourformid
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        dismissToast(toastId);
        showSuccess("Votre message a été envoyé avec succès ! Nous vous recontacterons sous peu.");
        form.reset();
      } else {
        dismissToast(toastId);
        showError("Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.");
        console.error("Erreur Formspree:", response.status, await response.text());
      }
    } catch (error) {
      dismissToast(toastId);
      showError("Une erreur réseau est survenue. Veuillez vérifier votre connexion.");
      console.error("Erreur d'envoi du formulaire:", error);
    }
  }

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Contactez-nous
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-300">Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre nom" {...field} className="dark:bg-gray-700 dark:text-white dark:border-gray-600" />
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
                  <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Votre email" {...field} className="dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-300">Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Votre message..." {...field} rows={5} className="dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-md transition-colors duration-300">
              Envoyer le message
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};