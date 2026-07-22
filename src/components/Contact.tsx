"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { margemSul, margemNorte } from "./Location";

const SERVICE_OPTIONS = [
  "Sofás",
  "Colchões e Cabeceiras",
  "Cadeiras / Poltronas",
  "Assentos auto",
  "Tapetes e Alcatifas",
  "Impermeabilização",
];

const MAX_TOTAL_MB = 3;

type ServiceRow = {
  id: number;
  service: string;
  m2: string;
};

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function compressImage(file: File, maxWidth = 1600, quality = 0.75): Promise<File> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = (e) => {
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(
          (blob) => {
            if (!blob) return reject(new Error("Falha ao comprimir imagem"));
            resolve(new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), { type: "image/jpeg" }));
          },
          "image/jpeg",
          quality
        );
      };
      img.onerror = reject;
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [rows, setRows] = useState<ServiceRow[]>([{ id: 0, service: "", m2: "" }]);
  const [nextId, setNextId] = useState(1);
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoError, setPhotoError] = useState("");
  const [isProcessingPhoto, setIsProcessingPhoto] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const chosenServices = rows.map((r) => r.service).filter(Boolean);

  const updateRow = (id: number, field: "service" | "m2", value: string) => {
    setRows(rows.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  };

  const addRow = () => {
    setRows([...rows, { id: nextId, service: "", m2: "" }]);
    setNextId(nextId + 1);
  };

  const removeRow = (id: number) => {
    setRows(rows.filter((r) => r.id !== id));
  };

  const handlePhotos = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    if (newFiles.length === 0) return;

    const remainingSlots = 3 - photos.length;
    if (remainingSlots <= 0) {
      setPhotoError("Já tens 3 fotos anexadas — remove uma para adicionar outra.");
      e.target.value = "";
      return;
    }

    if (newFiles.length > remainingSlots) {
      setPhotoError(
        `Só podes adicionar mais ${remainingSlots} foto${remainingSlots > 1 ? "s" : ""} (máximo 3 no total).`
      );
      e.target.value = "";
      return;
    }

    setPhotoError("");
    setIsProcessingPhoto(true);

    try {
      const compressed = await Promise.all(newFiles.map((f) => compressImage(f)));
      const combined = [...photos, ...compressed];
      const totalMB = combined.reduce((sum, f) => sum + f.size, 0) / (1024 * 1024);
      if (totalMB > MAX_TOTAL_MB) {
        setPhotoError(`As fotos, mesmo comprimidas, ultrapassam ${MAX_TOTAL_MB}MB no total. Tenta menos fotos.`);
        return;
      }
      setPhotos(combined);
    } catch {
      setPhotoError("Não foi possível processar as imagens. Tenta outra vez.");
    } finally {
      setIsProcessingPhoto(false);
      e.target.value = ""; // limpa o valor do input, permitindo voltar a escolher (inclusive a mesma foto) depois
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (photoError) return;
    setStatus("sending");
    setErrorMsg("");

    try {
      const photoData = await Promise.all(
        photos.map(async (file) => ({
          name: file.name,
          content: await fileToBase64(file),
        }))
      );

      const services = rows
        .filter((r) => r.service)
        .map((r) => ({ service: r.service, m2: r.m2 || null }));

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, location, message, services, photos: photoData }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Falha ao enviar. Tente novamente.");
      }

      setStatus("success");

      // Avisa o GTM que o formulário foi enviado com sucesso (necessário
      // porque o envio é feito via fetch, não via submissão nativa de <form>,
      // por isso o acionador "Envio de formulários" do GTM não deteta isto sozinho).
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "orcamento_enviado",
          form_location: location || "não especificado",
        });
      }

      setName("");
      setPhone("");
      setEmail("");
      setLocation("");
      setMessage("");
      setRows([{ id: 0, service: "", m2: "" }]);
      setPhotos([]);
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Falha ao enviar. Tente novamente.");
    }
  };

  return (
    <section id="contactos" className="py-24 bg-dark-2 overflow-hidden border-t border-teal/20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-dark/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-8 md:p-16 text-[#F2EDE4] shadow-2xl shadow-dark/30"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">
              Orçamento <span className="text-teal">Grátis</span>
            </h2>
            <p className="text-light italic font-light text-lg">
              "Respondemos em menos de 24 horas."
            </p>
          </div>

          {status === "success" ? (
            <div className="text-center py-10">
              <p className="text-teal text-2xl font-black mb-2">Pedido enviado!</p>
              <p className="text-light/70">Entraremos em contacto em menos de 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-light ml-2">Nome/Empresa</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome"
                    className="w-full px-6 py-4 rounded-2xl bg-dark/5 border border-white/10 text-[#F2EDE4] placeholder:text-light/40 focus:border-teal focus:bg-dark/10 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-light ml-2">Telemóvel</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="912 345 678"
                    className="w-full px-6 py-4 rounded-2xl bg-dark/5 border border-white/10 text-[#F2EDE4] placeholder:text-light/40 focus:border-teal focus:bg-dark/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-light ml-2">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="joao.silva@email.com"
                    className="w-full px-6 py-4 rounded-2xl bg-dark/5 border border-white/10 text-[#F2EDE4] placeholder:text-light/40 focus:border-teal focus:bg-dark/10 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-light ml-2">Localidade</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-dark/5 border border-white/10 text-[#F2EDE4] outline-none focus:border-teal focus:bg-dark/10 transition-all"
                  >
                    <option value="" className="bg-dark-2 text-white">Escolha a sua localidade</option>
                    <optgroup label="Margem Sul" className="bg-dark-2 text-white">
                      {margemSul.map((zona) => (
                        <option key={zona} value={zona} className="bg-dark-2 text-white">{zona}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Margem Norte (Periferia)" className="bg-dark-2 text-white">
                      {margemNorte.map((zona) => (
                        <option key={zona} value={zona} className="bg-dark-2 text-white">{zona}</option>
                      ))}
                    </optgroup>
                    <option value="Outra" className="bg-dark-2 text-white">Outra zona</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-light ml-2">Serviço(s) pretendido(s)</label>
                {rows.map((row) => {
                  const availableOptions = SERVICE_OPTIONS.filter(
                    (opt) => opt === row.service || !chosenServices.includes(opt)
                  );
                  return (
                    <div key={row.id} className="bg-dark/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-3">
                      <div className="flex gap-3 items-center">
                        <select
                          value={row.service}
                          onChange={(e) => updateRow(row.id, "service", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-dark/10 border border-white/10 text-[#F2EDE4] outline-none focus:border-teal transition-all"
                        >
                          <option value="" className="bg-dark-2 text-white">Escolha o serviço</option>
                          {availableOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-dark-2 text-white">{opt}</option>
                          ))}
                        </select>
                        {rows.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeRow(row.id)}
                            aria-label="Remover serviço"
                            className="text-light/40 hover:text-light/70 transition-colors flex-shrink-0"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                      {row.service === "Tapetes e Alcatifas" && (
                        <input
                          type="number"
                          placeholder="Área aproximada (m²)"
                          value={row.m2}
                          onChange={(e) => updateRow(row.id, "m2", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-dark/10 border border-white/10 text-[#F2EDE4] placeholder:text-light/40 outline-none focus:border-teal transition-all"
                        />
                      )}
                    </div>
                  );
                })}
                {chosenServices.length < SERVICE_OPTIONS.length && (
                  <button
                    type="button"
                    onClick={addRow}
                    className="self-start text-teal text-sm font-bold border border-teal/40 border-dashed rounded-full px-4 py-2 hover:bg-teal/10 transition-colors"
                  >
                    + Adicionar outro serviço
                  </button>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-light ml-2">Como podemos ajudar?</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={2000}
                  placeholder="Descreva brevemente o serviço..."
                  className="w-full px-6 py-4 rounded-2xl bg-dark/5 border border-white/10 text-[#F2EDE4] placeholder:text-light/40 focus:border-teal focus:bg-dark/10 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-light ml-2">
                  Fotos (opcional, máx. 3 fotos, comprimidas automaticamente)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotos}
                  disabled={isProcessingPhoto}
                  className="w-full px-6 py-4 rounded-2xl bg-dark/5 border border-white/10 text-[#F2EDE4] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-teal/20 file:text-teal file:font-bold outline-none focus:border-teal transition-all disabled:opacity-60"
                />
                {isProcessingPhoto && (
                  <p className="text-light/70 text-sm ml-2 animate-pulse">A processar imagens...</p>
                )}
                {photoError && <p className="text-red-400 text-sm ml-2">{photoError}</p>}
                {photos.length > 0 && !photoError && !isProcessingPhoto && (
                  <div className="flex flex-col gap-2 mt-2">
                    {photos.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-dark/5 border border-white/10 rounded-xl px-4 py-2">
                        <span className="text-sm text-light truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => setPhotos(photos.filter((_, i) => i !== idx))}
                          className="text-red-400 hover:text-red-300 font-bold ml-3"
                          aria-label="Remover foto"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative w-full overflow-hidden bg-dark py-5 rounded-2xl font-black text-primary shadow-xl transition-all active:scale-95 disabled:opacity-60"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-light to-transparent animate-shimmer" />
                <span className="relative z-10 flex items-center justify-center gap-2 text-primary-dark text-lg">
                  {status === "sending" ? "A enviar..." : "Enviar Pedido de Orçamento"}
                </span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
