export function formatDateTime(dateValue) {
  if (!dateValue) {
    return '-'
  }

  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(dateValue))
}

export function formatStatusBadge(status) {
  const variants = {
    Aprovado: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
    VIP: 'border-amber-300/30 bg-amber-300/10 text-amber-100',
    'Mesa confirmada': 'border-sky-300/30 bg-sky-300/10 text-sky-100',
    'Check-in realizado': 'border-violet-300/30 bg-violet-300/10 text-violet-100',
    Recusado: 'border-rose-300/25 bg-rose-300/10 text-rose-100',
  }

  return variants[status] ?? 'border-white/10 bg-white/[0.05] text-white/70'
}

