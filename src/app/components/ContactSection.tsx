'use client';

import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Icon from '@/components/ui/AppIcon';
import { portfolioData } from '@/data/portfolioData';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // ==========================================
  // EMAILJS CONFIGURATION
  // ==========================================
  const SERVICE_ID = 'service_uer0v97';
  const TEMPLATE_ID = 'template_lwylss6';
  const PUBLIC_KEY = 'GPFbQUe8SbPO4ueEc';

  // ==========================================
  // Scroll Animation
  // ==========================================
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.reveal-on-scroll')
              .forEach((el, i) => {
                setTimeout(() => {
                  el.classList.add('revealed');
                }, i * 100);
              });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ==========================================
  // Validation
  // ==========================================
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email.trim() || !emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ==========================================
  // Input Change
  // ==========================================
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // ==========================================
  // SEND MESSAGE USING EMAILJS
  // ==========================================
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) {
    return;
  }

  setSubmitting(true);

  try {
    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
    };

    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    setSubmitted(true);

    setForm({
      name: '',
      email: '',
      message: '',
    });

    setErrors({});
  } catch (error) {
    console.error('EmailJS Error:', error);

    alert('Message could not be sent. Please try again.');
  } finally {
    setSubmitting(false);
  }
};

  const { personal } = portfolioData;

  const contactInfo = [
    {
      icon: 'EnvelopeIcon',
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: 'PhoneIcon',
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
    },
    {
      icon: 'MapPinIcon',
      label: 'Location',
      value: personal.location,
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 relative"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="reveal-on-scroll mb-16 text-center">
          <p className="section-label mb-3">Get In Touch</p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Contact{' '}
            <span className="text-gradient-green">
              Me
            </span>
          </h2>

          <div className="mt-4 w-16 h-1 bg-primary rounded-full mx-auto" />

          <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            Have a project idea, an internship offer, or just want to connect?
            I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* LEFT SIDE */}
          <div className="reveal-on-scroll stagger-1 space-y-6">

            {/* Intro Card */}
            <div className="glass-card rounded-2xl p-7 border border-primary/10">
              <div className="flex items-center gap-3 mb-4">

                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon
                    name="ChatBubbleLeftRightIcon"
                    size={20}
                    className="text-primary"
                  />
                </div>

                <h3 className="text-xl font-bold text-foreground">
                  Let&apos;s Talk
                </h3>

              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                I&apos;m currently open to internship opportunities,
                freelance projects, and collaborations. Whether you&apos;re
                a company looking for a junior developer or a fellow student
                wanting to build something together — reach out!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`glass-card glass-card-hover flex items-center gap-4 p-5 rounded-2xl no-underline ${
                    item.href === '#' ? 'pointer-events-none' : ''
                  }`}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={item.icon as 'EnvelopeIcon'}
                      size={20}
                      className="text-primary"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>

                    <p className="text-sm font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-6">

              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                Find me on
              </p>

              <div className="flex gap-3">

                <a
                  href={personal.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600/10 border border-blue-600/20 text-blue-400 hover:bg-blue-600/20 transition-colors text-sm font-semibold min-h-[44px]"
                >
                  <Icon name="LinkIcon" size={16} />
                  LinkedIn
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-border text-foreground hover:bg-white/10 transition-colors text-sm font-semibold min-h-[44px]"
                >
                  <Icon name="CodeBracketIcon" size={16} />
                  GitHub
                </a>

                <a
                  href={personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-pink-600/10 border border-pink-600/20 text-pink-400 hover:bg-pink-600/20 transition-colors text-sm font-semibold min-h-[44px]"
                >
                  <Icon name="CameraIcon" size={16} />
                  Instagram
                </a>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="reveal-on-scroll stagger-2">

            <div className="glass-card rounded-2xl p-7 sm:p-9 border border-border">

              {/* SUCCESS MESSAGE */}
              {submitted ? (

                <div className="flex flex-col items-center justify-center py-16 text-center gap-5">

                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow">
                    <Icon
                      name="CheckCircleIcon"
                      size={40}
                      className="text-primary"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">
                    Message Sent!
                  </h3>

                  <p className="text-muted-foreground max-w-xs">
                    Thanks for reaching out. I&apos;ll get back to you as
                    soon as possible.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline-primary px-6 py-2.5 rounded-xl text-sm font-bold"
                  >
                    Send Another
                  </button>

                </div>

              ) : (

                /* CONTACT FORM */
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >

                  {/* NAME */}
                  <div>

                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Full Name{' '}
                      <span className="text-primary">*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`form-input ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : ''
                      }`}
                      aria-describedby={
                        errors.name ? 'name-error' : undefined
                      }
                      aria-invalid={!!errors.name}
                    />

                    {errors.name && (
                      <p
                        id="name-error"
                        className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                      >
                        <Icon
                          name="ExclamationCircleIcon"
                          size={12}
                        />
                        {errors.name}
                      </p>
                    )}

                  </div>

                  {/* EMAIL */}
                  <div>

                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Email Address{' '}
                      <span className="text-primary">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`form-input ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : ''
                      }`}
                      aria-describedby={
                        errors.email ? 'email-error' : undefined
                      }
                      aria-invalid={!!errors.email}
                    />

                    {errors.email && (
                      <p
                        id="email-error"
                        className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                      >
                        <Icon
                          name="ExclamationCircleIcon"
                          size={12}
                        />
                        {errors.email}
                      </p>
                    )}

                  </div>

                  {/* MESSAGE */}
                  <div>

                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Message{' '}
                      <span className="text-primary">*</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      className={`form-input resize-none ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500'
                          : ''
                      }`}
                      aria-describedby={
                        errors.message
                          ? 'message-error'
                          : undefined
                      }
                      aria-invalid={!!errors.message}
                    />

                    {errors.message && (
                      <p
                        id="message-error"
                        className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                      >
                        <Icon
                          name="ExclamationCircleIcon"
                          size={12}
                        />
                        {errors.message}
                      </p>
                    )}

                  </div>

                  {/* SEND BUTTON */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 min-h-[52px] disabled:opacity-70 disabled:cursor-not-allowed"
                  >

                    {submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Icon
                          name="PaperAirplaneIcon"
                          size={18}
                        />
                        Send Message
                      </>
                    )}

                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    Your message will be sent directly to my email.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}