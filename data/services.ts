import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "airport",
    title: "Airport Transfers",
    description: "Flight-tracked pickups and drops, timed so you're never left waiting at the curb.",
    icon: "Plane",
  },
  {
    id: "local",
    title: "Local Rides",
    description: "Hourly and full-day packages for running errands or seeing the city at your pace.",
    icon: "MapPin",
  },
  {
    id: "corporate",
    title: "Corporate Travel",
    description: "Billed, on-time transport for teams, clients, and executive schedules.",
    icon: "Briefcase",
  },
  {
    id: "wedding",
    title: "Wedding Cars",
    description: "Decorated, punctual fleets for the day you can't afford to leave to chance.",
    icon: "Sparkles",
  },
  {
    id: "outstation",
    title: "Outstation Trips",
    description: "One-way or round trip, long-distance journeys with a single trusted driver.",
    icon: "Route",
  },
  {
    id: "sharing",
    title: "Sharing Ride",
    description: "Split a seat, split the fare, same comfort and safety standard every time.",
    icon: "Users",
  },
];
