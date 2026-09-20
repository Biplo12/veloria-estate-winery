import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";
import { ESTATE } from "@/data/estate";

import { ContactDetails } from "./_components/contact-details";
import { EstateGate } from "./_components/estate-gate";

export const metadata: Metadata = {
  title: "Contacts",
  description:
    "How to reach Tenuta Veloria: an address to write to, a telephone, and where the estate stands.",
};

export default function ContactsPage() {
  return (
    <main className="bg-paper">
      <PageIntro
        eyebrow="Contacts"
        title="How to reach the estate."
        lead={`${ESTATE.openTo} Write or telephone and one of the people who works here will answer, there is nothing automatic at this end.`}
      />

      <EstateGate />
      <ContactDetails />
    </main>
  );
}
