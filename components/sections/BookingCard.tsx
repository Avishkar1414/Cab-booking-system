"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Calendar, Clock, Phone, MessageSquare, Send, ChevronDown } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { FieldWrapper, TextInput, SelectInput, TextareaInput } from "@/components/ui/FormFields";
import { vehicles, tripOptions } from "@/data/vehicles";
import { BookingFormData, TripType, VehicleId } from "@/lib/types";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { useToast } from "@/hooks/useToast";
import { useTilt } from "@/hooks/useTilt";

const initialState: BookingFormData = {
  pickup: "",
  drop: "",
  date: "",
  time: "",
  tripType: "one-way",
  vehicle: "sedan",
  passengers: 1,
  phone: "",
  notes: "",
};

type Errors = Partial<Record<keyof BookingFormData, string>>;

export default function BookingCard() {
  const [form, setForm] = useState<BookingFormData>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const { showToast } = useToast();
  const tilt = useTilt(4);

  function update<K extends keyof BookingFormData>(key: K, value: BookingFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Errors = {};
    if (!form.pickup.trim()) next.pickup = "Pickup location is required";
    if (!form.drop.trim() && form.tripType !== "local") next.drop = "Drop location is required";
    if (!form.date) next.date = "Pick a date";
    if (!form.time) next.time = "Pick a time";
    if (!form.phone.trim()) {
      next.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{8,15}$/.test(form.phone.trim())) {
      next.phone = "Enter a valid phone number";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) {
      showToast("Please fix the highlighted fields", "error");
      return;
    }
    const url = buildWhatsAppUrl(form);
    showToast("Opening WhatsApp to confirm your booking…", "success");
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={{ transformStyle: "preserve-3d", ...tilt.style }}
      className="w-full max-w-md transition-transform duration-200 ease-out"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
    >
      <div className="glow-border rounded-3xl">
        <GlassCard strong glow="purple" className="p-6 sm:p-7">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="font-display text-lg font-semibold text-ink">Book Your Ride</h3>
            <span className="font-mono text-[11px] text-neon-cyan uppercase tracking-wider">
              Live Rates
            </span>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <FieldWrapper label="Pickup Location" icon={<MapPin size={16} />} error={errors.pickup} htmlFor="pickup">
              <TextInput
                id="pickup"
                hasIcon
                placeholder="Enter pickup address"
                value={form.pickup}
                onChange={(e) => update("pickup", e.target.value)}
              />
            </FieldWrapper>

            <FieldWrapper label="Drop Location" icon={<Navigation size={16} />} error={errors.drop} htmlFor="drop">
              <TextInput
                id="drop"
                hasIcon
                placeholder="Enter drop address"
                value={form.drop}
                onChange={(e) => update("drop", e.target.value)}
              />
            </FieldWrapper>

            <div className="grid grid-cols-2 gap-3">
              <FieldWrapper label="Pickup Date" icon={<Calendar size={16} />} error={errors.date} htmlFor="date">
                <TextInput
                  id="date"
                  type="date"
                  hasIcon
                  min={today}
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                />
              </FieldWrapper>
              <FieldWrapper label="Pickup Time" icon={<Clock size={16} />} error={errors.time} htmlFor="time">
                <TextInput
                  id="time"
                  type="time"
                  hasIcon
                  value={form.time}
                  onChange={(e) => update("time", e.target.value)}
                />
              </FieldWrapper>
            </div>

            <FieldWrapper label="Trip Type" htmlFor="tripType">
              <div className="relative">
                <SelectInput
                  id="tripType"
                  value={form.tripType}
                  onChange={(e) => update("tripType", e.target.value as TripType)}
                >
                  {tripOptions.map((opt) => (
                    <option key={opt.id} value={opt.id} className="bg-base-surface">
                      {opt.label}
                    </option>
                  ))}
                </SelectInput>
                <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-faint pointer-events-none" />
              </div>
            </FieldWrapper>

            <div className="grid grid-cols-2 gap-3">
              <FieldWrapper label="Vehicle Type" htmlFor="vehicle">
                <div className="relative">
                  <SelectInput
                    id="vehicle"
                    value={form.vehicle}
                    onChange={(e) => update("vehicle", e.target.value as VehicleId)}
                  >
                    {vehicles.map((v) => (
                      <option key={v.id} value={v.id} className="bg-base-surface">
                        {v.name}
                      </option>
                    ))}
                  </SelectInput>
                  <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-faint pointer-events-none" />
                </div>
              </FieldWrapper>
              <FieldWrapper label="Passengers" htmlFor="passengers">
                <div className="relative">
                  <SelectInput
                    id="passengers"
                    value={form.passengers}
                    onChange={(e) => update("passengers", Number(e.target.value))}
                  >
                    {Array.from({ length: 7 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n} className="bg-base-surface">
                        {n} {n === 1 ? "passenger" : "passengers"}
                      </option>
                    ))}
                  </SelectInput>
                  <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-faint pointer-events-none" />
                </div>
              </FieldWrapper>
            </div>

            <FieldWrapper label="Phone Number" icon={<Phone size={16} />} error={errors.phone} htmlFor="phone">
              <TextInput
                id="phone"
                type="tel"
                hasIcon
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </FieldWrapper>

            <FieldWrapper label="Special Instructions" icon={<MessageSquare size={16} />} htmlFor="notes">
              <TextareaInput
                id="notes"
                rows={2}
                placeholder="Child seat, extra luggage, etc. (optional)"
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
              />
            </FieldWrapper>

            <Button type="submit" size="lg" className="mt-1 w-full">
              <Send size={18} />
              Book Cab on WhatsApp
            </Button>
            <p className="text-center text-[11px] text-ink-faint">
              No login needed. We confirm directly over WhatsApp.
            </p>
          </form>
        </GlassCard>
      </div>
    </motion.div>
  );
}
