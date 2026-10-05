type Props = {
    lepes: number;
    ujJatek: () => void;
};

function Info({ lepes, ujJatek }: Props) {
    return (
        <div className="info">
            <p>Lépések: {lepes}</p>

            <button onClick={ujJatek}>
                Új játék
            </button>
        </div>
    );
}

export default Info;