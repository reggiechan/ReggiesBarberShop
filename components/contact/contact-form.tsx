"use client";

import { useState } from "react";
import { Check, Loader2, Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="mt-6 font-serif text-xl font-semibold">
          Message Sent!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-serif text-2xl font-bold">Send Us a Message</h2>
      <p className="mt-2 text-muted-foreground">
        Fill out the form below and we&apos;ll get back to you as soon as possible.
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

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone Number{" "}
              <span className="text-muted-foreground">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="(123) 456-7890"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">
              Subject
            </label>
            <select
              id="subject"
              required
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="appointment">Appointment Question</option>
              <option value="products">Product Inquiry</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="mt-2 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            placeholder="How can we help you?"
          />
        </div>

        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
