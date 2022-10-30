import './Form.css';

export function Form({ label, pattern, type, placeholder, value, onChange }) {

    return (
        <>
            <label>{label}</label>
            <input
                className="input-form"
                required
                pattern={pattern}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </>
    )
}