import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { showSuccess } from "@/utils/toast";

export const AppointmentSection = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleBookAppointment = () => {
    if (date) {
      showSuccess(`Rendez-vous demandé pour le ${date.toLocaleDateString()} ! Nous vous contacterons pour confirmer.`);
      console.log("Rendez-vous demandé pour:", date);
      // Ici, vous intégreriez la logique d'envoi de la demande de rendez-vous
    } else {
      // This case should ideally not happen if date is initialized
      showSuccess("Veuillez sélectionner une date pour prendre rendez-vous.");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Prenez Rendez-vous
        </h2>
        <Card className="p-6 shadow-lg dark:bg-gray-700 dark:border-gray-600">
          <CardHeader className="text-center mb-6">
            <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
              Choisissez une date pour discuter de votre projet
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-6">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow dark:border-gray-600 dark:bg-gray-900 text-gray-900 dark:text-white"
              initialFocus
            />
            <Button
              onClick={handleBookAppointment}
              disabled={!date}
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-md transition-colors duration-300"
            >
              Confirmer le rendez-vous
            </Button>
            {date && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Date sélectionnée : <span className="font-semibold">{date.toLocaleDateString()}</span>
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};