import type { SVGProps } from "react"
const Cross = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M16.6666 16.6667L3.33325 3.33333M16.6666 3.33333L3.33325 16.6667"
            stroke="#2C2C2C"
            strokeWidth={1.66667}
            strokeLinecap="round"
        />
    </svg>
)
export { Cross }
