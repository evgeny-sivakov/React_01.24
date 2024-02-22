const SelectInput = ({ inputID, options, label }) => {
  return (
    <select name={inputID} id={inputID} aria-label={label}>
      <option value={label}>{label}</option>
      {options.map((opt) => {
        if (typeof opt === 'object') {
          return (
            <option id={opt.id} key={opt.id} value={opt.name}>
              {opt.name}
            </option>
          )
        }
        return (
          <option key={opt} value={opt}>
            {opt}
          </option>
        )
      })}
    </select>
  )
}

export default SelectInput
