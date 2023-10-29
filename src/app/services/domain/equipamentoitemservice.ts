import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "src/app/config/api.config";



@Injectable()
export class EquipamentoItemService {

    constructor(public http: HttpClient){

    }

    insert(equipamentoItem: any){
        return this.http.post(`${API_CONFIG.baseUrl}/equipamentos_itens`, 
                                equipamentoItem, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }
}