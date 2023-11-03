export interface AtendimentoDTO{
    id: number;
    relatoTecnico: string;
    os: {
        id: number;
        titulo: string;
	    dataAbertura?: any;
	    dataFechamento?: any;
	    tipoServico: number;
	    prioridade: number;
	    status: number;
	    cliente: {
		    id: number;
		    nome: string;
	    }
    }
    funcionario:{
        id:number;
        nome:string;
    }
}
