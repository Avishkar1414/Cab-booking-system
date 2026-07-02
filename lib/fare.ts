import { TripType, Vehicle } from "@/lib/types";

export interface FareResult {
  available: boolean;
  amount: number | null;
  unit: "trip" | "day" | "flat";
  breakdown: string;
}

/**
 * Calculates the fare for a given vehicle, trip type, and distance.
 * Local and Airport are flat/package rates and ignore distance for the
 * headline number (matching the brief's pricing model), but we still
 * surface distance where it's meaningful (one-way, round-trip, sharing).
 */
export function calculateFare(
  vehicle: Vehicle,
  tripType: TripType,
  distanceKm: number
): FareResult {
  const safeDistance = Number.isFinite(distanceKm) && distanceKm > 0 ? distanceKm : 0;

  switch (tripType) {
    case "one-way": {
      const rate = vehicle.rates.oneWay;
      if (rate == null) return unavailable();
      return {
        available: true,
        amount: Math.round(rate * safeDistance),
        unit: "trip",
        breakdown: `₹${rate}/km × ${safeDistance} km`,
      };
    }
    case "round-trip": {
      const rate = vehicle.rates.roundTrip;
      if (rate == null) return unavailable();
      return {
        available: true,
        amount: Math.round(rate * safeDistance),
        unit: "trip",
        breakdown: `₹${rate}/km × ${safeDistance} km`,
      };
    }
    case "local": {
      const rate = vehicle.rates.local;
      if (rate == null) return unavailable();
      return {
        available: true,
        amount: rate,
        unit: "day",
        breakdown: `Flat package rate, per day`,
      };
    }
    case "airport": {
      const rate = vehicle.rates.airport;
      if (rate == null) return unavailable();
      return {
        available: true,
        amount: rate,
        unit: "flat",
        breakdown: `Flat airport transfer rate`,
      };
    }
    case "sharing": {
      const rate = vehicle.rates.sharing;
      if (rate == null) return unavailable();
      return {
        available: true,
        amount: Math.round(rate * safeDistance),
        unit: "trip",
        breakdown: `₹${rate}/km × ${safeDistance} km (per seat)`,
      };
    }
    default:
      return unavailable();
  }
}

function unavailable(): FareResult {
  return { available: false, amount: null, unit: "trip", breakdown: "Not available for this vehicle" };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
