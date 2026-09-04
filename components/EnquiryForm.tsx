"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, LockKeyhole, MessageCircle, Send } from "lucide-react";

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hello RMS Textile Mills, I would like to discuss a knitting requirement.",
      `Name: ${form.get("name")}`,
      `Phone: ${form.get("phone")}`,
      form.get("company") ? `Company: ${form.get("company")}` : "",
      `Fabric: ${form.get("fabric")}`,
      form.get("quantity") ? `Quantity: ${form.get("quantity")}` : "",
      `Requirement: ${form.get("requirement")}`,
    ].filter(Boolean).join("\n");

    setSent(true);
    window.open(`https://wa.me/919843419599?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  const fieldClass = "mt-2 w-full border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10";

  return (
    <form className="overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-950/[.04]" onSubmit={submit}>
      <div className="flex items-start justify-between border-b border-slate-200 bg-slate-50 p-6 sm:p-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-teal-700">Production enquiry</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Tell us what you need.</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">Complete the details below to create a ready-to-send WhatsApp message.</p>
        </div>
        <div className="hidden size-14 shrink-0 place-items-center bg-teal-700 text-white sm:grid"><MessageCircle size={24} /></div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-bold text-slate-700">Your name <span className="text-teal-700">*</span><input required name="name" autoComplete="name" className={fieldClass} placeholder="Full name" /></label>
          <label className="text-sm font-bold text-slate-700">Phone number <span className="text-teal-700">*</span><input required name="phone" type="tel" autoComplete="tel" inputMode="tel" className={fieldClass} placeholder="+91 00000 00000" /></label>
          <label className="text-sm font-bold text-slate-700">Company<input name="company" autoComplete="organization" className={fieldClass} placeholder="Company name (optional)" /></label>
          <label className="text-sm font-bold text-slate-700">Fabric type <span className="text-teal-700">*</span><select required name="fabric" className={fieldClass} defaultValue=""><option value="" disabled>Select a fabric</option><option>Single Jersey</option><option>Pattinai</option><option>Air Tex</option><option>Honey Comb</option><option>Two Thread Fleece</option><option>Lycra Jersey</option><option>Other / Development</option></select></label>
          <label className="text-sm font-bold text-slate-700 sm:col-span-2">Approximate quantity<input name="quantity" className={fieldClass} placeholder="Sample development or production quantity" /></label>
          <label className="text-sm font-bold text-slate-700 sm:col-span-2">Fabric requirement <span className="text-teal-700">*</span><textarea required name="requirement" className={`${fieldClass} min-h-40 resize-y`} placeholder="Include yarn, GSM, diameter, stretch, colour and expected delivery details where available." /></label>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-xs leading-5 text-slate-400"><LockKeyhole size={15} className="shrink-0" /> Your details are not stored on this website.</p>
          <button type="submit" className="inline-flex items-center justify-center gap-2 bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-teal-700">Continue to WhatsApp <Send size={16} /></button>
        </div>

        {sent && <p className="mt-5 flex items-center gap-2 border border-teal-200 bg-teal-50 p-4 text-sm font-semibold text-teal-900" role="status"><CheckCircle2 size={18} /> Your WhatsApp message is ready to send.</p>}
      </div>
    </form>
  );
}
