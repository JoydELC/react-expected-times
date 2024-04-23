export function tiempo_pronostico(TA, porcentaje, d) {
    const v = d / TA;
    const porcentaje_decimal = porcentaje / 100;
    const vp = v+(v * porcentaje_decimal);
    const TP = d / vp;
    console.log(v)
    console.log(vp)
    return TP;
    
  }
  
  export function PB_evento(TP, TA, numEventos) {
    const TPP = Math.abs((TP * 100 / TA) - 100);
    const k = TPP / numEventos;
    const dk = 100 - k;
  
    let TE = TA;
    const PBS = [];
  
    for (let i = 0; i < numEventos; i++) {
      TE = (dk * TE) / 100;
      PBS.push(TE);
    }
  
    return PBS;
  }