import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";




@Injectable()
export class ComodatoService{
    constructor(public http: HttpClient){

    }

    insert(comodato: any){
        return this.http.post(`${API_CONFIG.baseUrl}/comodatos`, 
                                comodato, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }

    findAll(): Observable<any[]>{
        return this.http.get<any[]>(`${API_CONFIG.baseUrl}/comodatos`);
    }

    findById(id: number) : Observable<any> {
        return this.http.get<any>(
            `${API_CONFIG.baseUrl}/comodatos/${id}`);
    }

    update(comodato: any){
        return this.http.put(`${API_CONFIG.baseUrl}/comodatos/${comodato.id}`, comodato,{observe: 'response', responseType: 'text'});
    }


    delete(id: number){
        return this.http.delete(`${API_CONFIG.baseUrl}/comodatos/${id}`)
    }

}   