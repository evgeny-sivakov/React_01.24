export const SelectInput = ({ id, options, label }) => {
  return (
    <select name={id} id={id} aria-label={label}>
      <option value="">{label}</option>
      {options.map((opt) => {
        return (
          <option key={opt} value={opt}>
            {opt}
          </option>
        )
      })}
    </select>
  )
}
