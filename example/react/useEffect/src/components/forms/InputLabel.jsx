import { useId } from "react"; 

/**
 * Input component
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange 
 */
export function InputLabel({placeholder, value, onChange, label, ...props}) {
  const randomId = useId()
  return <div>
      {label && <label className="form-label" htmlFor={randomId}>{label}</label>}
      <input
        id={randomId}
        type="text" 
        className="form-control"
        placeholder={placeholder} 
        value={value} 
        onChange={e => {
          onChange(e.target.value);
        }}
        {...props}
        />
    </div>
}