import Mezo from "./Mezo";

type Props = {
    tabla: boolean[][];
    kattintas: (sor: number, oszlop: number) => void;
};

function JatekTer({ tabla, kattintas }: Props) {
    return (
        <div className="jatek-ter">
            {tabla.map((sor, sorIndex) =>
                sor.map((aktiv, oszlopIndex) => (
                    <Mezo
                        key={`${sorIndex}-${oszlopIndex}`}
                        aktiv={aktiv}
                        kattintas={() =>
                            kattintas(sorIndex, oszlopIndex)
                        }
                    />
                ))
            )}
        </div>
    );
}

export default JatekTer;