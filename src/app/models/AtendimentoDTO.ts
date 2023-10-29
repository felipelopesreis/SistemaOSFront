export interface AtendimentoDTO{
    id: number;
    relatoTecnico: string;
    os: {
        id: number;
        titulo: string;
    }
    funcionario:{
        id:number;
        nome:string;
    }
}