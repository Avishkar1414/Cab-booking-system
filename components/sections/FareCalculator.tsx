"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Gauge, IndianRupee } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import VehicleIcon from "@/components/ui/VehicleIcon";
import { SelectInput, TextInput, FieldWrapper } from "@/components/ui/FormFields";
import { vehicles, tripOptions, getVehicleById } from "@/data/vehicles";
import { calculateFare, formatCurrency } from "@/lib/fare";
import { TripType, VehicleId } from "@/lib/types";

export default function FareCalculator() {
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [distance, setDistance] = useState<number>(20);
  const [vehicleId, setVehicleId] = useState<VehicleId>("sedan");

  const vehicle = getVehicleById(vehicleId)!;
  const result = useMemo(
    () => calculateFare(vehicle, tripType, distance),
    [vehicle, tripType, distance]
  );

  const distanceDisabled = tripType === "local" || tripType === "airport";

  return (
    <section id="fares" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Know before you go"
          title="Live Fare Calculator"
          description="Pick your trip type, distance, and vehicle to see an instant, transparent estimate."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FieldWrapper label="Trip Type" htmlFor="calc-trip">
                  <div className="relative">
                    <SelectInput
                      id="calc-trip"
                      value={tripType}
                      onChange={(e) => setTripType(e.target.value as TripType)}
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

                <FieldWrapper label="Vehicle" htmlFor="calc-vehicle">
                  <div className="relative">
                    <SelectInput
                      id="calc-vehicle"
                      value={vehicleId}
                      onChange={(e) => setVehicleId(e.target.value as VehicleId)}
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

                <FieldWrapper
                  label={distanceDisabled ? "Distance (not used for this trip type)" : "Distance (KM)"}
                  icon={<Gauge size={16} />}
                  htmlFor="calc-distance"
                >
                  <TextInput
                    id="calc-distance"
                    type="number"
                    min={0}
                    hasIcon
                    disabled={distanceDisabled}
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    className={distanceDisabled ? "opacity-50" : ""}
                  />
                </FieldWrapper>

                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-ink-muted">Capacity</span>
                  <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3 px-3.5 text-sm text-ink">
                    <VehicleIcon type={vehicle.icon} className="h-5 w-12" />
                    Up to {vehicle.capacity} passengers
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glow-border rounded-3xl">
              <GlassCard strong glow="cyan" className="p-8 text-center">
                <p className="font-mono text-xs uppercase tracking-widest text-neon-cyan">
                  Estimated Fare
                </p>
                {result.available ? (
                  <>
                    <div className="mt-4 flex items-center justify-center gap-1 font-display text-4xl sm:text-5xl font-semibold text-ink">
                      <IndianRupee size={28} className="text-neon-bluelight" />
                      {result.amount?.toLocaleString("en-IN")}
                    </div>
                    <p className="mt-2 text-sm text-ink-muted">
                      {result.unit === "day"
                        ? "per day package"
                        : result.unit === "flat"
                        ? "flat rate"
                        : "for this trip"}
                    </p>
                    <p className="mt-4 font-mono text-xs text-ink-faint">{result.breakdown}</p>
                  </>
                ) : (
                  <p className="mt-6 text-ink-muted">
                    Sharing isn&apos;t available for {vehicle.name}. Try another vehicle type.
                  </p>
                )}

                <div className="mt-8 h-px w-full bg-white/10" />
                <button
                  onClick={() => document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-6 inline-flex items-center gap-2 rounded-full btn-gradient px-6 py-3 text-sm font-medium text-white shadow-glow-purple"
                >
                  Book this ride
                </button>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
