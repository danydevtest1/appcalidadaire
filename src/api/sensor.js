import {ENV} from "../utils";
import Axios from "axios";

export class Sensor{
    baseApi=ENV.BASE_API;

    async getDatosSensor(){
        try {
            const urlDatosSensor= `${this.baseApi}/${ENV.API_ROUTES.GETSENSOR}`;
           const datos= await Axios.get(urlDatosSensor);
            return datos.data;
        } catch (error) {
            throw error;
        }
    }
}