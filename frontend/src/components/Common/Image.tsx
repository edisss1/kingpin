type ImageProps = {
    src: string
    alt?: string
    className?: string
}

const Image = ({ src, alt, className }: ImageProps) => {
    return (
        <img
            className={className}
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
        />
    )
}
export default Image
