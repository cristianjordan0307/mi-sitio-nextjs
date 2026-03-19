"use client";
import { useActionState } from "react";
import { handleContactForm } from "@/app/actions/contact";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(handleContactForm, null);

  const inputStyle = {
    width: "100%",
    backgroundColor: "#ffffff",
    color: "#111827",
    border: "none",
    borderRadius: "6px",
    padding: "10px 12px",
    fontSize: "14px",
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    color: "#d1d5db",
    fontSize: "13px",
    marginBottom: "4px",
  };

  return (
    <div style={{ backgroundColor: "#1f2937", padding: "40px 20px" }}>
      <form
        action={formAction}
        style={{
          maxWidth: "420px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column" as const,
          gap: "16px",
        }}
      >
        <h2
          style={{
            color: "#ffffff",
            fontSize: "22px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          Contacto
        </h2>

        <div>
          <label style={labelStyle}>Nombre:</label>
          <input name="name" type="text" required style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>Asunto:</label>
          <input name="subject" type="text" required style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>Email:</label>
          <input name="email" type="email" required style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>Mensaje:</label>
          <textarea
            name="message"
            rows={4}
            required
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          style={{
            backgroundColor: "#2563eb",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            padding: "10px 28px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: isPending ? "not-allowed" : "pointer",
            width: "fit-content",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {isPending && (
            <span
              style={{
                width: "14px",
                height: "14px",
                border: "2px solid #fff",
                borderTopColor: "transparent",
                borderRadius: "50%",
                display: "inline-block",
                animation: "spin 0.8s linear infinite",
              }}
            />
          )}
          {isPending ? "Enviando..." : "Enviar"}
        </button>

        {state?.error && (
          <p style={{ color: "#f87171", fontSize: "13px", textAlign: "center" }}>
            {state.error}
          </p>
        )}
        {state?.success && (
          <p style={{ color: "#4ade80", fontSize: "13px", textAlign: "center" }}>
            {state.success}
          </p>
        )}
      </form>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}