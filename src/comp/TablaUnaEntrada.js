// TablaUnaEntrada.jsx
import "../TablaVel.css";
import "../Tabla1ent.css";
import { TablaLibre } from "../estilos/TablaLibre";
import { TablaEspalda } from "../estilos/TablaEspalda";
import { TablaPecho } from "../estilos/TablaPecho";
import { TablaMariposa } from "../estilos/TablaMariposa";
import { TablaCombinado } from "../estilos/TablaCombinado";
export const TablaUnaEntrada = () => {


  return (
    <div className='table-container'>
        <TablaLibre/>
        <TablaEspalda/>
        <TablaPecho/>
        <TablaMariposa/>
        <TablaCombinado/>
        
    </div>
  );
};

export default TablaUnaEntrada;