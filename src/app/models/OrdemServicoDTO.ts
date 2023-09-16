export interface OrdemServicoDTO{
    id: number;
	titulo: string;
	dataAbertura: Date;
	dataFechamento: Date;
	tipoServico: number;
	prioridade: number;
	status: number;
}