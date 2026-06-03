import { motion } from 'framer-motion'
import { startTransition, useState } from 'react'
import { INTEREST_OPTIONS } from '../config/adminConfig'
import FormField from '../components/ui/FormField'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { createAccessRequest } from '../lib/storage'

const initialFormState = {
  fullName: '',
  whatsapp: '',
  instagram: '',
  age: '',
  city: '',
  referredBy: '',
  interest: '',
  notes: '',
}

export default function AccessForm() {
  const [formState, setFormState] = useState(initialFormState)
  const [submittedRequest, setSubmittedRequest] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target
    setFormState((current) => ({
      ...current,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    // Future API integration can replace localStorage persistence while preserving this payload shape.
    const request = createAccessRequest(formState)

    startTransition(() => {
      setSubmittedRequest(request)
      setFormState(initialFormState)
    })
  }

  return (
    <section id="access" className="py-24 sm:py-28 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-8 xl:grid-cols-[0.78fr_1.22fr]">
          <Reveal className="space-y-8">
            <SectionHeading
              eyebrow="Lista privada"
              title="Solicite seu acesso"
              description="A curadoria Sanctuary analisa cada solicitação para preservar a atmosfera da experiência."
            />

            <div className="glass-gold space-y-5 p-6 sm:p-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="form-label">Formato</p>
                  <p className="mt-3 text-lg text-platinum">Solicitação privada</p>
                </div>
                <div>
                  <p className="form-label">Capacidade</p>
                  <p className="mt-3 text-lg text-platinum">80 acessos por edição</p>
                </div>
                <div>
                  <p className="form-label">Local</p>
                  <p className="mt-3 text-lg text-platinum">São José dos Pinhais</p>
                </div>
                <div>
                  <p className="form-label">Revelação</p>
                  <p className="mt-3 text-lg text-platinum">Endereço enviado aos aprovados</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="glass-gold p-6 sm:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Nome completo">
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={formState.fullName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Seu nome completo"
                  />
                </FormField>

                <FormField label="WhatsApp">
                  <input
                    required
                    type="tel"
                    name="whatsapp"
                    value={formState.whatsapp}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+55 11 99999-9999"
                  />
                </FormField>

                <FormField label="Instagram">
                  <input
                    required
                    type="text"
                    name="instagram"
                    value={formState.instagram}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="@seuuser"
                  />
                </FormField>

                <FormField label="Idade">
                  <input
                    required
                    type="number"
                    min="18"
                    name="age"
                    value={formState.age}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="18+"
                  />
                </FormField>

                <FormField label="Cidade">
                  <input
                    required
                    type="text"
                    name="city"
                    value={formState.city}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Sua cidade"
                  />
                </FormField>

                <FormField label="Quem indicou?">
                  <input
                    type="text"
                    name="referredBy"
                    value={formState.referredBy}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Nome, grupo ou referência"
                  />
                </FormField>
              </div>

              <div className="grid gap-5 sm:grid-cols-[0.92fr_1.08fr]">
                <FormField label="Interesse">
                  <select
                    required
                    name="interest"
                    value={formState.interest}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Selecione</option>
                    {INTEREST_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField label="Observação">
                  <textarea
                    rows="5"
                    name="notes"
                    value={formState.notes}
                    onChange={handleChange}
                    className="form-input min-h-[8.2rem] resize-none"
                    placeholder="Compartilhe referências, intenção ou contexto relevante."
                  />
                </FormField>
              </div>

              <div className="flex flex-col gap-4 border-t border-[rgba(200,164,93,0.16)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-relaxed text-[#e9ddc7]/46">
                  Os dados seguem em `localStorage` nesta fase inicial e podem ser conectados a uma API
                  depois, sem quebrar o fluxo atual.
                </p>
                <button type="submit" className="action-button shrink-0">
                  Enviar solicitação
                </button>
              </div>
            </form>

            {submittedRequest ? (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-[28px] border border-[rgba(200,164,93,0.18)] bg-[rgba(200,164,93,0.05)] p-5"
              >
                <p className="text-lg text-platinum">
                  Sua solicitação foi recebida. Caso aprovada, nossa curadoria entrará em contato com
                  seu acesso.
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-[#c8a45d]">
                  Código de solicitação: {submittedRequest.accessCode}
                </p>
              </motion.div>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
