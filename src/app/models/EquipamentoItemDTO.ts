export interface EquipamentoItemDTO {
    id: number; 
    serial: string;
    situacao: number; 
    equipamento: {
        id: number;
    } 
}