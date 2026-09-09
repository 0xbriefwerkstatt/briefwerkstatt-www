"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Mail, MapPin, User, Home, Building2 } from "lucide-react";
import { useState } from "react";

interface SamplePackageModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SamplePackageModal({ open, onOpenChange }: SamplePackageModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    street: "",
    zipCode: "",
    city: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuliere API-Call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset nach 2 Sekunden
    setTimeout(() => {
      setIsSuccess(false);
      onOpenChange(false);
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        street: "",
        zipCode: "",
        city: "",
        email: "",
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl mb-2">Vielen Dank!</h3>
            <p className="text-muted-foreground">
              Ihr Musterpaket ist auf dem Weg zu Ihnen. Sie werden in den nächsten 2-3 Werktagen einen handgeschriebenen Brief von uns erhalten.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Kostenloses Musterpaket anfordern</DialogTitle>
          <DialogDescription>
            Erleben Sie selbst die Qualität unserer handgeschriebenen Briefe. Wir senden Ihnen einen Beispielbrief, 
            geschrieben von unseren Robotern, direkt an Ihre Adresse.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Vorname *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Max"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Nachname *</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Mustermann"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-primary" />
              Firma (optional)
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Muster GmbH"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="street" className="flex items-center gap-2">
              <Home className="w-4 h-4 text-primary" />
              Straße und Hausnummer *
            </Label>
            <Input
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="Musterstraße 123"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="zipCode" className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                PLZ *
              </Label>
              <Input
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="12345"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">Stadt *</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="München"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              E-Mail-Adresse *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="max@mustermann.de"
              required
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="text-sm font-medium mb-2">Was erwartet Sie?</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Ein handgeschriebener Brief mit echtem Füller</li>
              <li>✓ Premium-Papier und hochwertiges Kuvert</li>
              <li>✓ Zustellung in 2-3 Werktagen</li>
              <li>✓ Absolut kostenlos und unverbindlich</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              type="submit" 
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Wird versendet..." : "Jetzt kostenlos anfordern"}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Abbrechen
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Mit dem Absenden stimmen Sie unserer{" "}
            <a href="/datenschutz" className="text-primary hover:underline">
              Datenschutzerklärung
            </a>{" "}
            zu.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
