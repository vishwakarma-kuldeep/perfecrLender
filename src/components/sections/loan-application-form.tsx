"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { contactContent } from "@/constants/contact";
import { whatsappContent } from "@/constants/whatsapp";
import { Card, CardContent } from "@/components/ui/card";

export function LoanApplicationForm() {
  const { form } = contactContent;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "",
    loanAmount: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = [
      `Hello Perfect Lender,`,
      ``,
      `My name is ${formData.name}.`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      formData.loanType ? `Loan Type: ${formData.loanType}` : '',
      formData.loanAmount ? `Loan Amount: ₹${formData.loanAmount}` : '',
      formData.message ? `\nMessage: ${formData.message}` : '',
      ``,
      `I would like to discuss my loan requirement.`,
    ].filter(Boolean).join('\n');
  
    window.open(
      `https://wa.me/${whatsappContent.phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-muted/30 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-4xl"
        >
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <div className="mb-8 max-w-2xl">
                <span className="text-sm font-medium text-primary">
                  {form.eyebrow}
                </span>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {form.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                  {form.description}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      {form.fields.name.label}
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={form.fields.name.placeholder}
                      className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      {form.fields.email.label}
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={form.fields.email.placeholder}
                      className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      {form.fields.phone.label}
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={form.fields.phone.placeholder}
                      className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="loanType"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      {form.fields.loanType.label}
                    </label>

                    <select
                      id="loanType"
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    >
                      <option value="" disabled>
                        {form.fields.loanType.placeholder}
                      </option>

                      {form.fields.loanType.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="loanAmount"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {form.fields.loanAmount.label}
                  </label>

                  <input
                    id="loanAmount"
                    name="loanAmount"
                    type="number"
                    min="0"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    placeholder={form.fields.loanAmount.placeholder}
                    className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {form.fields.message.label}
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={form.fields.message.placeholder}
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
                >
                  {form.submitLabel}

                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
