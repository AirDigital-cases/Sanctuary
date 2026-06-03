export default function FormField({ label, hint, children }) {
  return (
    <label className="block space-y-3">
      <div className="space-y-1">
        <p className="form-label">{label}</p>
        {hint ? <p className="text-sm text-white/42">{hint}</p> : null}
      </div>
      {children}
    </label>
  )
}

