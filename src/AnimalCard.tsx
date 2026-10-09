type AnimalCardProps = {
    name: string;
    description: string;
    image?: string;
}

export default function AnimalCard({
    name, 
    description, 
    image 
}: AnimalCardProps) {
    return (
        <section style={{
            border: '1px solid #ddd',
            borderRadius: 12,
            padding: 16,
            maxWidth: 420,
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
            <h2 style={{ marginTop: 0}}>{name}</h2>
            {image && (
                <img
                    src={image}
                    alt={name}
                    style={{
                        width: '100%',
                        borderRadius: 8,
                        display: 'block',
                        marginBottom: 12
                    }}
                />
            )}
            <p>{description}</p>
        </section>
    );
}