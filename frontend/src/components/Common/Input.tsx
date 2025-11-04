type InputProps = {
    placeholder?: string
    label?: string
    onChange: () => void
    value: string
    type?: string
    required?: boolean
    disabled?: boolean
    className?: string
}

const Input = ({
    placeholder,
    label,
    onChange,
    value,
    type,
    required,
    disabled,
    className
}: InputProps) => {
    return (
        <div className="flex flex-col w-fit ">
            {label && <label className="ml-2">{label}</label>}
            <input
                className={`border-2 border-text rounded-lg p-2 focus:outline-accent transition-colors duration-200 ${className}`}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                required={required}
                disabled={disabled}
            />
        </div>
    )
}
export default Input
