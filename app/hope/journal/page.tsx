import { redirect } from "next/navigation";

/** The journal lives on /hope; this keeps /hope/journal from 404ing. */
export default function JournalIndex() {
  redirect("/hope#journal");
}
