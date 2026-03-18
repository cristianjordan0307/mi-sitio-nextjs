"use server";
// app/actions/contact.ts — Server Action con validación server-side

export async function handleContactForm(prevState: any, formData: FormData) {
  // Simulamos un retraso para ver el spinner
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Validación básica
  if (!name || !email || !subject || !message) {
    return { error: "Todos los campos son obligatorios." };
  }

  // Aquí iría la lógica para enviar un email o guardar en DB
  console.log("Datos recibidos:", { name, email, subject, message });

  return { success: "¡Mensaje enviado correctamente!" };
}
//sisas