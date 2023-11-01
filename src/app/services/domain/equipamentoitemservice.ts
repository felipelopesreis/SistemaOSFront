import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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

    findAll(): Observable<any[]>{
        return this.http.get<any[]>(`${API_CONFIG.baseUrl}/equipamentos_itens`);
    }

    findById(id: number) : Observable<any> {
        return this.http.get<any>(
            `${API_CONFIG.baseUrl}/equipamentos_itens/${id}`);
    }

    update(equipamentoItem: any){
        return this.http.put(`${API_CONFIG.baseUrl}/equipamentos_itens/${equipamentoItem.id}`, equipamentoItem,{observe: 'response', responseType: 'text'});
    }

    delete(id: number){
        return this.http.delete(`${API_CONFIG.baseUrl}/equipamentos_itens/${id}`)
    }
}