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

  export function tablaTiempos(tiempo,distancia){
    const add = [0,0,0,0.5,1,1.5,2,2.5,3,7,9,14];
    const dist = [50,75,100,150,200,250,300,350,400,800,1000,1500];
    let prom100= (tiempo*100)/distancia;
    let r1 =[];
    let r2 =[];
    let vo2 =[];
    for (let i = 0; i < 12; i++) {
      let t1 = (prom100+3+add[i])*dist[i]/100;
      let t2 = (prom100+add[i])*dist[i]/100;
      let t3 = (prom100-3+add[i])*dist[i]/100;
      r1.push(t1);
      r2.push(t2);
      vo2.push(t3);
    
    }
    return {r1,r2,vo2}
  }
  