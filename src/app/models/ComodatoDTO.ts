export interface ComodatoDTO{
    id: number;
    dataInstalacao: string;
    dataDevolucao: string;
    os:{
        id: number;
        titulo: string;
    }

    equipamentoItem: {
        id: number;
        serial: number;
    }
}