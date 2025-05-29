import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AppointmentSection = () => {
  useEffect(() => {
    // Vérifie si le script Calendly est déjà chargé pour éviter les doublons
    if (!document.getElementById("calendly-widget-script")) {
      const script = document.createElement("script");
      script.id = "calendly-widget-script";
      script.type = "text/javascript";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="appointment" className="py-16 md:py-24 bg-white dark:bg-gray-800">
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
            {/* Calendly inline widget begin */}
            <div
              className="calendly-inline-widget w-full"
              data-url="https://calendly.com/isno2001/30min?hide_event_type_details=1"
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
            {/* Calendly inline widget end */}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};