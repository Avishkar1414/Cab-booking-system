import { Review } from "@/lib/types";

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Ananya Rao",
    location: "Bengaluru",
    rating: 5,
    text: "Driver was waiting at arrivals before I'd even cleared customs. Smoothest airport pickup I've had in years.",
    tripType: "Airport Transfer",
  },
  {
    id: "r2",
    name: "Vikram Sehgal",
    location: "Delhi",
    rating: 5,
    text: "Booked a round trip to Agra for the family. Clean SUV, careful driver, and the fare matched exactly what I was quoted.",
    tripType: "Outstation",
  },
  {
    id: "r3",
    name: "Priya Nair",
    location: "Mumbai",
    rating: 5,
    text: "Use them for every client pickup now. Always on time, always presentable, never an awkward moment.",
    tripType: "Corporate Travel",
  },
  {
    id: "r4",
    name: "Rohit Malhotra",
    location: "Chandigarh",
    rating: 4,
    text: "Local full-day package was great value for wedding shopping runs across the city. Would book again.",
    tripType: "Local",
  },
  {
    id: "r5",
    name: "Sneha Iyer",
    location: "Pune",
    rating: 5,
    text: "No app, no signup, just a WhatsApp message and the cab showed up. Exactly the kind of simple I wanted.",
    tripType: "One Way",
  },
];
