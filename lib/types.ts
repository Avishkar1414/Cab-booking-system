export type VehicleId =
  | "hatchback"
  | "sedan"
  | "prime-sedan"
  | "suv"
  | "prime-suv"
  | "luxury";

export type TripType = "one-way" | "round-trip" | "local" | "airport" | "sharing";

export interface FareRates {
  oneWay: number | null; // per km
  roundTrip: number | null; // per km
  local: number | null; // per day (8hr/80km style package)
  airport: number | null; // flat
  sharing: number | null; // per km, null = not available
}

export interface Vehicle {
  id: VehicleId;
  name: string;
  tagline: string;
  capacity: number;
  luggage: number;
  ac: boolean;
  baseRatePerKm: number; // headline rate shown on fleet card (one-way)
  rates: FareRates;
  icon: "hatchback" | "sedan" | "suv" | "luxury";
}

export interface TripOption {
  id: TripType;
  label: string;
  description: string;
}

export interface BookingFormData {
  pickup: string;
  drop: string;
  date: string;
  time: string;
  tripType: TripType;
  vehicle: VehicleId;
  passengers: number;
  phone: string;
  notes: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  tripType: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}
