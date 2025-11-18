type HomeSectionContainerProps = {
    children: React.ReactNode
    ariaLabel: string
}

const HomeSectionContainer = ({
    children,
    ariaLabel
}: HomeSectionContainerProps) => {
    return <section aria-label={ariaLabel}>{children}</section>
}
export default HomeSectionContainer
