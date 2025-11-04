type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
    className?: string
    disabled?: boolean
    type?: "submit" | "reset" | "button"
    variant?: "primary" | "secondary" | ""
}

const Button = ({
    children,
    onClick,
    className,
    disabled,
    type,
    variant
}: ButtonProps) => {
    const primary =
        "bg-primary text-white hover:opacity-80 active:bg-primary-pressed rounded-full"

    const secondary =
        "bg-secondary hover:opacity-80 active:bg-secondary-pressed rounded-full"

    const mergedClass = variant
        ? `${className} ${variant === "primary" ? primary : secondary}`
        : className

    return (
        <button
            className={mergedClass}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    )
}
export default Button
