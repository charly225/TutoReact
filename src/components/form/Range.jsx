export function Range({ min, max, value, onChange, label, id }) {


  const valueStyle = {
    marginLeft: "1em",
    fontWeight: "bold"
  };
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
        <span style={valueStyle}>
          {value > 0 ? `$${value}` : "Tous les prix"}
        </span>
      </label>
      <input
        id={id}
        type="range"
        className="form-range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}
