import type { SVGProps } from "react"
const KingpinLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx={16} cy={16} r={16} fill="#A85D24" />
        <path
            d="M18.5 9.75L15.1667 13.0833L11.8333 14.3333L10.5833 15.5833L16.4167 21.4167L17.6667 20.1667L18.9167 16.8333L22.25 13.5M13.5 18.5L9.75 22.25M18.0833 9.33333L22.6667 13.9167"
            stroke="#2C2C2C"
            strokeWidth={1.66667}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)
export { KingpinLogo }
