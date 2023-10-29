import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { EquipamentoDTO } from "src/app/models/EquipamentoDTO";




@Injectable()
export class EquipamentoService {

    constructor(public http: HttpClient){

    }

    findAll() : Observable<EquipamentoDTO[]> {
        return this.http.get<EquipamentoDTO[]>(`${API_CONFIG.baseUrl}/equipamentos`);
    }

    findById(id: number) : Observable<EquipamentoDTO> {
        return this.http.get<EquipamentoDTO>(
            `${API_CONFIG.baseUrl}/equipamentos/${id}`);
    }

    insert(equipamento: EquipamentoDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/equipamentos`, 
                                equipamento, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }

    update(equipamento: EquipamentoDTO){
        return this.http.put(`${API_CONFIG.baseUrl}/equipamentos/${equipamento.id}`, 
                                equipamento, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }

    delete(id: number){
        return this.http.delete(`${API_CONFIG.baseUrl}/equipamentos/${id}`)
    }
}