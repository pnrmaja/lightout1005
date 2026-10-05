import { useState } from "react";
import JatekTer from "./component/JatekTer";
import Info from "./component/Info";
import "./App.css";

const MERET = 3;

function veletlenTabla(): boolean[][] {
    return Array.from({ length: MERET }, () =>
        Array.from(
            { length: MERET },
            () => Math.random() < 0.5
        )
    );
}

function App() {
    const [tabla, setTabla] = useState<boolean[][]>(veletlenTabla());
    const [lepes, setLepes] = useState<number>(0);

    function kattintas(sor: number, oszlop: number) {
        const ujTabla = tabla.map((sor) => [...sor]);

        // Saját lámpa
        ujTabla[sor][oszlop] = !ujTabla[sor][oszlop];

        // Fent
        if (sor > 0) {
            ujTabla[sor - 1][oszlop] =
                !ujTabla[sor - 1][oszlop];
        }

        // Lent
        if (sor < MERET - 1) {
            ujTabla[sor + 1][oszlop] =
                !ujTabla[sor + 1][oszlop];
        }

        // Balra
        if (oszlop > 0) {
            ujTabla[sor][oszlop - 1] =
                !ujTabla[sor][oszlop - 1];
        }

        // Jobbra
        if (oszlop < MERET - 1) {
            ujTabla[sor][oszlop + 1] =
                !ujTabla[sor][oszlop + 1];
        }

        setTabla(ujTabla);
        setLepes(lepes + 1);

        // Győzelem ellenőrzése
        const nyert = ujTabla.every((sor) =>
            sor.every((aktiv) => !aktiv)
        );

        if (nyert) {
            setTimeout(() => {
                alert(`Gratulálok! ${lepes + 1} lépésből megoldottad!`);
            }, 100);
        }
    }

    function ujJatek() {
        setTabla(veletlenTabla());
        setLepes(0);
    }

    return (
        <main>
            <h1>LightOut</h1>

            <p className="leiras">
                Kapcsold le az összes lámpát!
            </p>

            <JatekTer
                tabla={tabla}
                kattintas={kattintas}
            />

            <Info
                lepes={lepes}
                ujJatek={ujJatek}
            />

            <footer>
                <p>
                    Készítette: Ponauer Maja
                </p>
            </footer>
        </main>
    );
}

export default App;