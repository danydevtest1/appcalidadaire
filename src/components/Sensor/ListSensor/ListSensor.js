import {useState, useEffect} from 'react'
import {Sensor} from '../../../api';
import { ItemSensor } from "../ItemSensor";
const ctrSensor=new Sensor();

export  function ListSensor() {
    const [datoSensor, setDatoSensor] = useState([]);
    const [ultimoDato, setUltimoDato]=useState('');

    const buscarDatosSensor=async()=>{
        const datos=await ctrSensor.getDatosSensor();
        setDatoSensor(datos);
        if(datos.length>0){
            setUltimoDato(datos[datos.length-1])
        }
       
        
    }

    useEffect(() => {
     buscarDatosSensor();
    }, [ultimoDato])
    
  return (
    <div>
        
            <ItemSensor dato={ultimoDato}/>
       

    </div>
  )
}
