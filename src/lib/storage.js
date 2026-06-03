import { STORAGE_KEY } from '../config/adminConfig'

function createUniqueId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }

  return `sanctuary-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

function createAccessCode() {
  const stamp = Date.now().toString(36).slice(-4).toUpperCase()
  const random = Math.random().toString(36).slice(2, 7).toUpperCase()
  return `SANC-${stamp}${random}`
}

export function getStoredRequests() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function persistRequests(requests) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(requests))
}

export function createAccessRequest(formData) {
  const request = {
    id: createUniqueId(),
    accessCode: createAccessCode(),
    status: 'Em análise',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...formData,
  }

  const requests = [request, ...getStoredRequests()]
  persistRequests(requests)
  return request
}

export function updateRequestStatus(requestId, status) {
  const updatedRequests = getStoredRequests().map((request) =>
    request.id === requestId
      ? {
          ...request,
          status,
          updatedAt: new Date().toISOString(),
        }
      : request,
  )

  persistRequests(updatedRequests)
  return updatedRequests
}

function escapeCsvValue(value) {
  const normalized = value == null ? '' : String(value)
  return `"${normalized.replaceAll('"', '""')}"`
}

export function createRequestsCsv(requests) {
  const headers = [
    'id',
    'createdAt',
    'updatedAt',
    'status',
    'accessCode',
    'fullName',
    'whatsapp',
    'instagram',
    'age',
    'city',
    'gender',
    'referredBy',
    'attendanceType',
    'guestNames',
    'interest',
    'notes',
  ]

  const rows = requests.map((request) =>
    [
      request.id,
      request.createdAt,
      request.updatedAt,
      request.status,
      request.accessCode,
      request.fullName,
      request.whatsapp,
      request.instagram,
      request.age,
      request.city,
      request.gender,
      request.referredBy,
      request.attendanceType,
      request.guestNames,
      request.interest,
      request.notes,
    ].map(escapeCsvValue),
  )

  return [headers.join(','), ...rows.map((row) => row.join(','))].join('\n')
}

