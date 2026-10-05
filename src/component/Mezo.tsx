type Props = {
    aktiv: boolean;
    kattintas: () => void;
};

function Mezo({ aktiv, kattintas }: Props) {
    return (
        <button
            className={`mezo ${aktiv ? "aktiv" : ""}`}
            onClick={kattintas}
        >
        </button>
    );
}

export default Mezo;