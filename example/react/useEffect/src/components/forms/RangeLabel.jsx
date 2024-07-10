export function RangeLabel ({min, max, value, onChange}) {
  return <div>
      <input 
        type="range" 
        className="form-range"
        min={min} 
        max={max}
        onChange={e => {
          onChange(e.target.value);
        }}/>
      <label>{value}</label>
    </div>
}