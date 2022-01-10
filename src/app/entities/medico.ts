export interface Medico {

    idMedico: number,
    nome: string,
    crmv: number,
    dataNascimento: Date,
    telefone: String,
    email: string,
    ativo: boolean

}

/* Ex:

{
    "idMedico": 2,
    "nome": "Benício Thales Thiago Porto",
    "crmv": 12345,
    "dataNascimento": "1972-02-14T04:00:00.000+00:00",
    "telefone": "963539-4594",
    "email": "beniciothalesthiagoporto-96@artedaserra.com.br",
    "ativo": true
}

*/
