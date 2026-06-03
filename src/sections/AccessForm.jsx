import { motion } from 'framer-motion'
import { startTransition, useState } from 'react'
import {
  COMPANIONSHIP_OPTIONS,
  GENDER_OPTIONS,
  INTEREST_OPTIONS,
} from '../config/adminConfig'
import { createAccessRequest } from '../lib/storage'
import FormField from '../components/ui/FormField'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'

const initialFormState = {
  fullName: '',
  whatsapp: '',
  instagram: '',
  age: '',
  city: '',
  gender: '',
  referredBy: '',
  attendanceType: '',
  guestNames: '',
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
    <section id="access" className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-8">
            <SectionHeading
              eyebrow="Solicitação de acesso"
              title="Entre para a lista de espera da próxima edição."
              description="Compartilhe seu perfil e interesse. Nossa curadoria analisa cada solicitação individualmente antes de liberar qualquer acesso."
            />

            <div className="surface space-y-4 p-6">
              <p className="form-label">Importante</p>
              <p className="subtle-copy">
                O envio da solicitação não garante aprovação imediata. O retorno acontece apenas quando houver alinhamento com a proposta da edição exclusiva.
              </p>
            </div>
          </Reveal>

          <Reveal className="surface p-6 sm:p-8">
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

                <FormField label="Gênero">
                  <select
                    required
                    name="gender"
                    value={formState.gender}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Selecione</option>
                    {GENDER_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
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

                <FormField label="Deseja ir sozinho ou acompanhado?">
                  <select
                    required
                    name="attendanceType"
                    value={formState.attendanceType}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Selecione</option>
                    {COMPANIONSHIP_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>

              <FormField label="Nome dos acompanhantes" hint="Preencha apenas se for acompanhado.">
                <input
                  type="text"
                  name="guestNames"
                  value={formState.guestNames}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Nome(s) do(s) acompanhante(s)"
                />
              </FormField>

              <div className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr]">
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
                    rows="4"
                    name="notes"
                    value={formState.notes}
                    onChange={handleChange}
                    className="form-input min-h-[7.25rem] resize-none"
                    placeholder="Compartilhe referências, ocasião ou contexto relevante."
                  />
                </FormField>
              </div>

              <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-relaxed text-white/46">
                  As informações ficam registradas localmente nesta fase inicial e podem ser conectadas a uma API futuramente sem alterar o fluxo.
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
                className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-lg text-platinum">
                  Sua solicitação foi recebida. Nossa curadoria entrará em contato caso seu acesso seja aprovado.
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.22em] text-white/44">
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

