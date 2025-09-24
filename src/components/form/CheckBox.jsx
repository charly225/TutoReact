/**
 * @param {boolean} checked 
 * @param {string} label
 * @param {string} id
 * @param {(b: boolean) => void} onChange
 */
export function CheckBox({ checked, onChange, label, id }) {
  return (
    <div className="form-check">
      <input
        id={id}
        type="checkbox"
        className="form-check-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
  );
}
