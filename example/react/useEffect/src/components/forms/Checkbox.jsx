export function Checkbox ({checked, onChange, label}) {
  const randomId = Math.random().toString(36).substring(7);

  return <div className="form-check">
      <input 
        type="checkbox"
        className="form-check-input"
        checked={checked}
        id={randomId}
        onChange={e => {
          onChange(e.target.checked);
        }}/>
      <label className="form-check-label" htmlFor={randomId}>{label}</label>
    </div>
}