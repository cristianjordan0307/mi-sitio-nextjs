//version2 
"use client";
// components/ContactForm.tsx — Client component con useActionState
//arreglo

import { useActionState } from "react";
import { handleContactForm } from "@/app/actions/contact";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(handleContactForm, null);

  return (
    <form action={formAction} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      
      <div>
        <label className="block text-sm font-medium">Nombre</label>
        <input name="name" type="text" className="w-full border rounded p-2" required />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input name="email" type="email" className="w-full border rounded p-2" required />
      </div>

      <div>
        <label className="block text-sm font-medium">Asunto</label>
        <input name="subject" type="text" className="w-full border rounded p-2" required />
      </div>

      <div>
        <label className="block text-sm font-medium">Mensaje</label>
        <textarea name="message" className="w-full border rounded p-2" rows={4} required></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isPending}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 flex justify-center items-center"
      >
        {isPending ? (
          <span className="animate-spin border-2 border-white border-t-transparent rounded-full h-5 w-5 mr-2"></span>
        ) : null}
        {isPending ? "Enviando..." : "Enviar Mensaje"}
      </button>

      {state?.error && <p className="text-red-500 text-sm mt-2">{state.error}</p>}
      {state?.success && <p className="text-green-500 text-sm mt-2">{state.success}</p>}
    </form>
  );
}