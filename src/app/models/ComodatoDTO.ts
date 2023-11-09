export interface ComodatoDTO{
    id: number;
    dataInstalacao: any;
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