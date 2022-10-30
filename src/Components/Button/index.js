import './button.css';

export function Button({ className, title }) {
    return (
        <button
            className={className}
            type="submit"
        >
            {title}
        </button>
    )
}