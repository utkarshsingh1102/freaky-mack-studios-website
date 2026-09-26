"use client";

import { useState } from "react";
import { CONTACT } from "@/shared/config";
import s from "../option-d.module.css";
import { ClientGrid } from "./ClientGrid";
import { ClientsTable } from "./ClientsTable";
import { CtaBrackets } from "./CtaBrackets";
import { FeatureWordmark } from "./FeatureWordmark";
import { Footer } from "./Footer";
import { FromTheStudio } from "./FromTheStudio";
import { HeroGrid } from "./HeroGrid";
import { NumbersStaircase } from "./NumbersStaircase";
import { Process } from "./Process";
import { ProjectBands } from "./ProjectBands";
import { SelectedWorks } from "./SelectedWorks";
import { ServiceRows } from "./ServiceRows";
import { Testimonial } from "./Testimonial";

/** Option D · Production squad. Black with white sections; follows references/reference-2-production-squad.jpg. */
export function OptionD() {
  // The footer's "What are we making?" format feeds the enquiry form and the CTA email subject.
  const [format, setFormat] = useState("");
  const mailto = `mailto:${CONTACT.email}${format ? `?subject=${encodeURIComponent(`Enquiry — ${format}`)}` : ""}`;
  return (
    <div className={`${s.root} min-h-screen overflow-x-clip`}>
      <div className="relative mx-auto flex max-w-[1440px] flex-col">
        <HeroGrid />
        <ClientGrid />
        <FeatureWordmark />
        <ProjectBands />
        <NumbersStaircase />
        <SelectedWorks />
        <ServiceRows />
        <ClientsTable />
        <Testimonial />
        <Process />
        <FromTheStudio />
        <CtaBrackets mailto={mailto} />
        <Footer format={format} onFormat={setFormat} />
      </div>
    </div>
  );
}
