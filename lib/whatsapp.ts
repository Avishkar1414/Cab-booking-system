import { BookingFormData } from "@/lib/types";
import { vehicles, tripOptions } from "@/data/vehicles";

/**
 * Replace this with the real business WhatsApp number, in international
 * format with no leading +, spaces, or dashes. Example: "919876543210"
 */
export const WHATSAPP_NUMBER = "918010358049";

function labelForVehicle(id: string): string {
  return vehicles.find((v) => v.id === id)?.name ?? id;
}

function labelForTrip(id: string): string {
  return tripOptions.find((t) => t.id === id)?.label ?? id;
}

export function buildWhatsAppMessage(data: BookingFormData): string {
  const lines = [
    "Hello,",
    "",
    "I would like to book a cab.",
    "",
    "Pickup:",
    data.pickup || "-",
    "",
    "Drop:",
    data.drop || "-",
    "",
    "Date:",
    data.date || "-",
    "",
    "Time:",
    data.time || "-",
    "",
    "Trip:",
    labelForTrip(data.tripType),
    "",
    "Vehicle:",
    labelForVehicle(data.vehicle),
    "",
    "Passengers:",
    String(data.passengers || "-"),
    "",
    "Phone:",
    data.phone || "-",
    "",
    "Notes:",
    data.notes || "-",
    "",
    "Please confirm my booking.",
  ];
  return lines.join("\n");
}

export function buildWhatsAppUrl(data: BookingFormData, number: string = WHATSAPP_NUMBER): string {
  const message = buildWhatsAppMessage(data);
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
