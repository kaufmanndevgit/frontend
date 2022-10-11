import { useState } from "react";
import { Professor } from "../../components/Cabecalho/@types/professor";

export function useIndex() {
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([
        {
            id: 1,
            nome: "Professor 1",
            foto: "#",
            descricao: "Descrição do professor 1",
            valor_hora: 100
        },
        {
            id: 2,
            nome: "Professor 2",
            foto: "#",
            descricao: "Descrição do professor 1",
            valor_hora: 100
        },
        {
            id: 3,
            nome: "Professor 3",
            foto: "#",
            descricao: "Descrição do professor 1",
            valor_hora: 100
        },
        {
            id: 4,
            nome: "Professor 4",
            foto: "#",
            descricao: "Descrição do professor 1",
            valor_hora: 100
        }
    ]);

    return {
        listaProfessores
    }
}