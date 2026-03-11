"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Calendar, Check, ChevronLeft, ChevronRight, Clock, User } from "lucide-react";

const services = [
  { id: "haircut", name: "Classic Haircut", duration: "45 min", price: 30 },
  { id: "beard", name: "Beard Grooming", duration: "30 min", price: 25 },
  { id: "package", name: "Complete Package", duration: "75 min", price: 55 },
  { id: "shave", name: "Hot Towel Shave", duration: "30 min", price: 30 },
  { id: "kids", name: "Kids Haircut", duration: "30 min", price: 25 },
];

const barbers = [
  {
    id: "james",
    name: "James Wilson",
    role: "Master Barber",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "marcus",
    name: "Marcus Chen",
    role: "Senior Barber",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "david",
    name: "David Thompson",
    role: "Barber",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  },
];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
];

type Step = 1 | 2 | 3 | 4;

export function BookingForm() {
  const [step, setStep] = useState<Step>(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    return { daysInMonth, startingDay };
  };

  const { daysInMonth, startingDay } = getDaysInMonth(currentMonth);

  const isDateDisabled = (day: number) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // Disable past dates and Sundays
    return date < today || date.getDay() === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSuccess(true);
    setIsSubmitting(false);
  };

  const goToNextStep = () => {
    if (step < 4) setStep((step + 1) as Step);
  };

  const goToPrevStep = () => {
    if (step > 1) setStep((step - 1) as Step);
  };

  if (isSuccess) {
    return (
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Check className="h-8 w-8" />
          </div>
          <h2 className="mt-6 font-serif text-2xl font-bold sm:text-3xl">
            Appointment Confirmed!
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Thank you for booking with us. We&apos;ve sent a confirmation email to{" "}
            <span className="font-medium text-foreground">{formData.email}</span>.
          </p>
          <div className="mt-8 rounded-lg border border-border bg-card p-6 text-left">
            <h3 className="font-semibold">Appointment Details</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Service</dt>
                <dd className="font-medium">
                  {services.find((s) => s.id === selectedService)?.name}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Barber</dt>
                <dd className="font-medium">
                  {barbers.find((b) => b.id === selectedBarber)?.name}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Date</dt>
                <dd className="font-medium">
                  {selectedDate?.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Time</dt>
                <dd className="font-medium">{selectedTime}</dd>
              </div>
            </dl>
          </div>
          <button
            onClick={() => {
              setIsSuccess(false);
              setStep(1);
              setSelectedService(null);
              setSelectedBarber(null);
              setSelectedDate(null);
              setSelectedTime(null);
              setFormData({ name: "", email: "", phone: "", notes: "" });
            }}
            className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book Another Appointment
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors",
                    step >= s
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  {step > s ? <Check className="h-5 w-5" /> : s}
                </div>
                {s < 4 && (
                  <div
                    className={cn(
                      "hidden sm:block h-0.5 w-16 md:w-24 lg:w-32 mx-2 transition-colors",
                      step > s ? "bg-primary" : "bg-border"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-xs sm:text-sm">
            <span className={step >= 1 ? "text-foreground" : "text-muted-foreground"}>
              Service
            </span>
            <span className={step >= 2 ? "text-foreground" : "text-muted-foreground"}>
              Barber
            </span>
            <span className={step >= 3 ? "text-foreground" : "text-muted-foreground"}>
              Date & Time
            </span>
            <span className={step >= 4 ? "text-foreground" : "text-muted-foreground"}>
              Details
            </span>
          </div>
        </div>

        {/* Step 1: Select Service */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="font-serif text-2xl font-bold">Select a Service</h2>
            <p className="mt-2 text-muted-foreground">
              Choose the service that best fits your needs.
            </p>
            <div className="mt-8 grid gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={cn(
                    "flex items-center justify-between rounded-lg border p-4 text-left transition-all",
                    selectedService === service.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  )}
                >
                  <div>
                    <p className="font-medium">{service.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {service.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold">${service.price}</span>
                    <div
                      className={cn(
                        "flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
                        selectedService === service.id
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border"
                      )}
                    >
                      {selectedService === service.id && (
                        <Check className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Select Barber */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="font-serif text-2xl font-bold">Choose Your Barber</h2>
            <p className="mt-2 text-muted-foreground">
              Select your preferred barber or choose any available.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {barbers.map((barber) => (
                <button
                  key={barber.id}
                  onClick={() => setSelectedBarber(barber.id)}
                  className={cn(
                    "relative rounded-lg border p-4 text-center transition-all",
                    selectedBarber === barber.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  )}
                >
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <Image
                      src={barber.image}
                      alt={barber.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 font-medium">{barber.name}</p>
                  <p className="text-sm text-muted-foreground">{barber.role}</p>
                  {selectedBarber === barber.id && (
                    <div className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Select Date & Time */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="font-serif text-2xl font-bold">Pick a Date & Time</h2>
            <p className="mt-2 text-muted-foreground">
              Select your preferred appointment date and time.
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {/* Calendar */}
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() =>
                      setCurrentMonth(
                        new Date(
                          currentMonth.getFullYear(),
                          currentMonth.getMonth() - 1
                        )
                      )
                    }
                    className="p-2 hover:bg-secondary rounded-md transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <h3 className="font-medium">
                    {currentMonth.toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </h3>
                  <button
                    onClick={() =>
                      setCurrentMonth(
                        new Date(
                          currentMonth.getFullYear(),
                          currentMonth.getMonth() + 1
                        )
                      )
                    }
                    className="p-2 hover:bg-secondary rounded-md transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="py-2 text-xs font-medium text-muted-foreground"
                      >
                        {day}
                      </div>
                    )
                  )}
                  {Array.from({ length: startingDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isSelected =
                      selectedDate?.getDate() === day &&
                      selectedDate?.getMonth() === currentMonth.getMonth() &&
                      selectedDate?.getFullYear() === currentMonth.getFullYear();
                    const disabled = isDateDisabled(day);
                    return (
                      <button
                        key={day}
                        disabled={disabled}
                        onClick={() =>
                          setSelectedDate(
                            new Date(
                              currentMonth.getFullYear(),
                              currentMonth.getMonth(),
                              day
                            )
                          )
                        }
                        className={cn(
                          "py-2 rounded-md text-sm transition-colors",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : disabled
                            ? "text-muted-foreground/30 cursor-not-allowed"
                            : "hover:bg-secondary"
                        )}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-medium">Available Times</h3>
                </div>
                {selectedDate ? (
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "rounded-md border py-2 text-sm transition-colors",
                          selectedTime === time
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-primary/30"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm">
                    Please select a date first.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Contact Details */}
        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="font-serif text-2xl font-bold">Your Details</h2>
            <p className="mt-2 text-muted-foreground">
              Please provide your contact information.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium">
                  Additional Notes{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Any special requests or preferences..."
                />
              </div>

              {/* Summary */}
              <div className="rounded-lg border border-border bg-secondary/50 p-4">
                <h3 className="font-medium">Booking Summary</h3>
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Service</dt>
                    <dd className="font-medium">
                      {services.find((s) => s.id === selectedService)?.name}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Barber</dt>
                    <dd className="font-medium">
                      {barbers.find((b) => b.id === selectedBarber)?.name}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Date</dt>
                    <dd className="font-medium">
                      {selectedDate?.toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Time</dt>
                    <dd className="font-medium">{selectedTime}</dd>
                  </div>
                  <div className="flex justify-between border-t border-border pt-2 mt-2">
                    <dt className="font-medium">Total</dt>
                    <dd className="font-bold">
                      ${services.find((s) => s.id === selectedService)?.price}
                    </dd>
                  </div>
                </dl>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Confirming..." : "Confirm Booking"}
              </button>
            </form>
          </div>
        )}

        {/* Navigation Buttons */}
        {!isSuccess && (
          <div className="mt-8 flex justify-between">
            <button
              onClick={goToPrevStep}
              disabled={step === 1}
              className={cn(
                "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                step === 1
                  ? "text-muted-foreground cursor-not-allowed"
                  : "text-foreground hover:bg-secondary"
              )}
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>
            {step < 4 && (
              <button
                onClick={goToNextStep}
                disabled={
                  (step === 1 && !selectedService) ||
                  (step === 2 && !selectedBarber) ||
                  (step === 3 && (!selectedDate || !selectedTime))
                }
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
