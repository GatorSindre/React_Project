type FooterProps = {
    text: string;
};

export default function Footer({
    text
}: FooterProps) {
    return (
        <footer style={{ marginTop: 50}}>
           {text}
        </footer>
    )
}