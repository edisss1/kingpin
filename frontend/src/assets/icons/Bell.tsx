import type { SVGProps } from "react"
const Bell = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M10 2.5V4.16667"
            stroke="#2C2C2C"
            strokeWidth={1.66667}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M9.99992 4.16667C7.24159 4.16667 4.99992 6.40833 4.99992 9.16667V14.1667C4.16659 14.1667 3.33325 15 3.33325 15.8333H9.99992M9.99992 4.16667C12.7583 4.16667 14.9999 6.40833 14.9999 9.16667V14.1667C15.8333 14.1667 16.6666 15 16.6666 15.8333H9.99992"
            stroke="#2C2C2C"
            strokeWidth={1.66667}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8.33325 16.6667C8.33325 17.5833 9.08325 18.3333 9.99992 18.3333C10.9166 18.3333 11.6666 17.5833 11.6666 16.6667"
            stroke="#2C2C2C"
            strokeWidth={1.66667}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)
export { Bell }
