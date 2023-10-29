export interface OrdemServicoDTO{
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