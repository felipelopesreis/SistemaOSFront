export interface EquipamentoItemDTO {
    id: number; 
    serial: string;
    situacao: number; 
    equipamento: {
        id: number;
        nome: string;
        descricao: string; 
        dispositivo: number;
        marca: string;  
        foto: string; 
        quantidade: number;
    } 
}


