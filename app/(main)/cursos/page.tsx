import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Cursos() {
    const cursos = [
        {
            matricula: "20241011250100",
            nome: "israel Rodrigues",
            dataNascimento: "2005-10-25",
            email: "israel.rodrigues@example.com"
        },
        {
            matricula: "20241011250101",
            nome: "Jose Rodrigues",
            dataNascimento: "2005-10-25",
            email: "jose.rodrigues@example.com"
        },
        {
            matricula: "20241011250102",
            nome: "Maria Silva",
            dataNascimento: "2005-10-25",
            email: "maria.silva@example.com"
        }
    ];

    return (
        <DataTable value={cursos}emptyMessage="Nenhum aluno encontrado">
            <Column header="Matrícula" field="matricula" />
            <Column header="Nome" field="nome" />
            <Column header="Data de Nascimento" field="dataNascimento"/>
            <Column header="E-mail" field="email" />
        </DataTable>
    );
}