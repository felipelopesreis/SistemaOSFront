import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";



@Injectable()
export class AtendimentoService{
    constructor(public http: HttpClient){

    }

    insert(atendimento: any){
        return this.http.post(`${API_CONFIG.baseUrl}/atendimentos`, 
                                atendimento, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }


    findAll(): Observable<any[]>{
        return this.http.get<any[]>(`${API_CONFIG.baseUrl}/atendimentos`);
    }

    findById(id: number) : Observable<any> {
        return this.http.get<any>(
            `${API_CONFIG.baseUrl}/atendimentos/${id}`);
    }

    update(atendimento: any){
        return this.http.put(`${API_CONFIG.baseUrl}/atendimentos/${atendimento.id}`, atendimento,{observe: 'response', responseType: 'text'});
    }

    delete(id: number){
        return this.http.delete(`${API_CONFIG.baseUrl}/atendimentos/${id}`)
    }
    
}