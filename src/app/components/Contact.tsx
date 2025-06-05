"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { api } from "@/trpc/react";

import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const { mutate: sendEmail, isPending: isLoading } =
    api.post.createContact.useMutation();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (formData.name.length < 2) {
      newErrors.name = "Il nome deve contenere almeno 2 caratteri.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Inserisci un indirizzo email valido.";
    }

    if (formData.message.length < 10) {
      newErrors.message = "Il messaggio deve contenere almeno 10 caratteri.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    sendEmail({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "info@elevenhats.it",
      link: "mailto:info@elevenhats.it",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telefono",
      value: "+39 324 530 5977",
      link: "tel:+393245305977",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Indirizzo",
      value: "Via Vittorio Veneto 22, Bresso (MI), Italia",
      link: "https://www.google.com/maps/dir//20091+Bresso+MI/",
    },
  ];

  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <div className="w-full py-12">
        <h1
          className={`text-center text-4xl leading-tight font-semibold text-white md:text-5xl lg:text-6xl ${poppins.className}`}
        >
          Contattaci
        </h1>
      </div>

      <div className="mx-auto grid gap-8 px-4 md:grid-cols-2">
        <div>
          <div className="h-full w-full rounded-2xl border border-white">
            <div className="border-b border-white/20 px-8 py-6">
              <h2
                className={`text-xl font-semibold text-white ${poppins.className}`}
              >
                Inviaci un messaggio
              </h2>
              <p className="mt-2 text-white/80">
                Compila il form e ti risponderemo al più presto.
              </p>
            </div>
            <div className="px-8 py-6">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-white/80"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Il tuo nome"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full border-0 border-b-2 bg-transparent px-0 py-3 text-white/80 placeholder-white/80 transition-colors focus:border-white focus:ring-0 focus:outline-none ${
                      errors.name ? "border-red-500" : "border-white/20"
                    }`}
                    required
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-white/80"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="La tua email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border-0 border-b-2 bg-transparent px-0 py-3 text-white/80 placeholder-white/80 transition-colors focus:border-white focus:ring-0 focus:outline-none ${
                      errors.email ? "border-red-500" : "border-white/20"
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-white/80"
                  >
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Il tuo messaggio"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full resize-none border-0 border-b-2 bg-transparent px-0 py-3 text-white/80 placeholder-white/80 transition-colors focus:border-white focus:ring-0 focus:outline-none ${
                      errors.message ? "border-red-500" : "border-white/20"
                    }`}
                    required
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  type="submit"
                  size={"wide"}
                  variant={"outline"}
                  className={`hover:bg-accent/20 w-full rounded-full border border-white/20 bg-transparent font-light text-white hover:cursor-pointer hover:text-white ${poppins.className}`}
                  disabled={isLoading}
                >
                  {isLoading ? "Invio in corso..." : "Invia Messaggio"}
                  <motion.div
                    animate={{ rotate: isHovered ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight
                      viewBox="4 4 16 16"
                      strokeWidth={1}
                      className="transition-colors duration-300"
                    />
                  </motion.div>
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl border border-white">
          <div>
            <div className="border-b border-white/20 px-8 py-6 md:px-12">
              <h2
                className={`text-xl font-semibold text-white ${poppins.className}`}
              >
                Informazioni di contatto
              </h2>
              <p className="mt-2 text-white/80">
                Puoi contattarci anche direttamente.
              </p>
            </div>
            <div className="border-b border-white/20">
              <div>
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="group relative flex items-start overflow-hidden p-4 text-white/80 transition-colors hover:text-black"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-in-out group-hover:translate-x-0"></div>

                    <div className="relative z-10 mr-4 rounded-full p-3 text-white transition-colors group-hover:text-black">
                      {item.icon}
                    </div>

                    <div className="relative z-10">
                      <h3 className="font-medium text-white transition-colors group-hover:text-black">
                        {item.title}
                      </h3>
                      <p className="text-white/80 transition-colors group-hover:text-black/80">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-grow rounded text-white">
            <div className="px-8 py-6 md:px-12">
              <h3
                className={`mb-4 text-xl font-semibold ${poppins.className} `}
              >
                Orari di apertura
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 text-lg font-semibold">
                    Area funzionale
                  </h4>
                  <div className="flex justify-start gap-4">
                    <span>Lunedì - Sabato:</span>
                    <span>9:00 - 18:00</span>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold">SLA supporto</h4>
                  <div className="flex justify-start gap-4">
                    <span>Lunedì - Domenica:</span>
                    <span>24h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
