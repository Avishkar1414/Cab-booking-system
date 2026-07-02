import { Vehicle, TripOption } from "@/lib/types";

export const vehicles: Vehicle[] = [
  {
    id: "hatchback",
    name: "Hatchback",
    tagline: "Light, quick, easy on the wallet",
    capacity: 4,
    luggage: 2,
    ac: true,
    baseRatePerKm: 12,
    icon: "hatchback",
    rates: {
      oneWay: 12,
      roundTrip: 11,
      local: 1800,
      airport: 1000,
      sharing: 8,
    },
  },
  {
    id: "sedan",
    name: "Sedan",
    tagline: "Comfortable mid-size for everyday rides",
    capacity: 4,
    luggage: 3,
    ac: true,
    baseRatePerKm: 14,
    icon: "sedan",
    rates: {
      oneWay: 14,
      roundTrip: 13,
      local: 2200,
      airport: 1200,
      sharing: 10,
    },
  },
  {
    id: "prime-sedan",
    name: "Prime Sedan",
    tagline: "Upgraded interiors, top-rated drivers",
    capacity: 4,
    luggage: 3,
    ac: true,
    baseRatePerKm: 17,
    icon: "sedan",
    rates: {
      oneWay: 17,
      roundTrip: 16,
      local: 2600,
      airport: 1500,
      sharing: 12,
    },
  },
  {
    id: "suv",
    name: "SUV",
    tagline: "Extra room for groups and luggage",
    capacity: 6,
    luggage: 4,
    ac: true,
    baseRatePerKm: 18,
    icon: "suv",
    rates: {
      oneWay: 18,
      roundTrip: 17,
      local: 3200,
      airport: 1800,
      sharing: 14,
    },
  },
  {
    id: "prime-suv",
    name: "Prime SUV",
    tagline: "Premium 7-seater for family & corporate trips",
    capacity: 7,
    luggage: 5,
    ac: true,
    baseRatePerKm: 22,
    icon: "suv",
    rates: {
      oneWay: 22,
      roundTrip: 21,
      local: 4000,
      airport: 2200,
      sharing: 16,
    },
  },
  {
    id: "luxury",
    name: "Luxury",
    tagline: "First-class travel for the moments that matter",
    capacity: 4,
    luggage: 3,
    ac: true,
    baseRatePerKm: 35,
    icon: "luxury",
    rates: {
      oneWay: 35,
      roundTrip: 33,
      local: 7000,
      airport: 4000,
      sharing: null,
    },
  },
];

export const tripOptions: TripOption[] = [
  { id: "one-way", label: "One Way", description: "Single drop, point to point" },
  { id: "round-trip", label: "Round Trip", description: "We wait, you return with us" },
  { id: "local", label: "Local", description: "Full-day city use" },
  { id: "airport", label: "Airport Transfer", description: "Flat-rate airport pickup/drop" },
  { id: "sharing", label: "Sharing Ride", description: "Split the ride, split the cost" },
];

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((v) => v.id === id);
}
