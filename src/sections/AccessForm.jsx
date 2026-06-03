import { motion } from 'framer-motion'
import { startTransition, useState } from 'react'
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
  interest: 'Quero ser convidado para a Sanctuary',
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
              title="Lista privada"
              description="Preencha sua solicitação. Caso aprovado, nossa equipe entrará em contato."
            />

            <div className="glass-gold space-y-5 p-6 sm:p-7">
              <p className="max-w-xl text-base leading-relaxed text-[#e9ddc7]/64 sm:text-lg">
                A próxima edição será limitada a 80 convidados.
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="form-label">Formato</p>
                  <p className="mt-3 text-lg text-platinum">Lista privada</p>
                </div>
                <div>
                  <p className="form-label">Capacidade</p>
                  <p className="mt-3 text-lg text-platinum">80 convidados</p>
                </div>
                <div>
                  <p className="form-label">Local</p>
                  <p className="mt-3 text-lg text-platinum">São José dos Pinhais</p>
                </div>
                <div>
                  <p className="form-label">Contato</p>
                  <p className="mt-3 text-lg text-platinum">Caso aprovado, nossa equipe entrará em contato</p>
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
                <FormField label="Convite">
                  <div className="form-input flex min-h-[3.7rem] items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[rgba(200,164,93,0.42)] bg-[rgba(200,164,93,0.08)]">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#e0c17a]" />
                    </div>
                    <span className="text-sm text-[#e9ddc7]/82">
                      Quero ser convidado para a Sanctuary
                    </span>
                  </div>
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
                  A curadoria Sanctuary analisa cada solicitação para preservar a atmosfera da noite.
                </p>
                <button type="submit" className="action-button shrink-0">
                  Solicitar convite
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
                  Sua solicitação foi recebida. Caso aprovada, entraremos em contato.
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
