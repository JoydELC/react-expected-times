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
export function TablaLibre(tiempo25) {
  let por = [1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32, 40, 60];
  let sum = [0, 2, 5.25, 7, 16.5, 22, 37.5, 43, 62.875, 57, 88, 99, 132, 193, 281];
  let vr1_1 = [1.15, 1.1];
  let vr1_2 = [1.17, 1.12];
  let vr1_3 = [1.2, 1.15];
  let vr2_1 = [1.1, 1.05];
  let vr2_2 = [1.12, 1.08];
  let vo2_1 = 1.06;
  let vo2_2 = [1.08, 1.07];
  let vrl_1 = 1.02;
  let vrl_2 = 1.04;
  let pron = [];

  for (let i = 0; i < 15; i++) {
    let value = tiempo25 * por[i] + sum[i];
    pron.push(value);
  }

  let r1_1 = [];
  let r1_2 = [];
  let r1_3 = [];
  let r2_1 = [];
  let r2_2 = [];
  let mvo2_1 = [];
  let mvo2_2 = [];
  let rl_1 = [];
  let rl_2 = [];

  for (let i = 1; i < pron.length; i++) {
    let x1_1 = pron[i] * vr1_1[0];
    let x1_2 = pron[i] * vr1_2[0];
    let x1_3 = pron[i] * vr1_3[0];
    let x2_1 = pron[i] * vr2_1[0];
    let x2_2 = pron[i] * vr2_2[0];
    let x3_1 = pron[i] * vo2_1;
    let x3_2 = pron[i] * (vo2_2[0] || 0); // Cambio aquí

    if (i == 12) {
      x1_1 = pron[i] * vr1_1[1];
      x1_2 = pron[i] * vr1_2[1];
      x1_3 = pron[i] * vr1_3[1];
      x2_1 = pron[i] * vr2_1[1];
      x2_2 = pron[i] * vr2_2[1];
      x3_2 = pron[i] * (vo2_2[1] || 0); // Cambio aquí
    }

    r1_1.push(x1_1);
    r1_2.push(x1_2);
    r1_3.push(x1_3);
    r2_1.push(x2_1);
    r2_2.push(x2_2);
    mvo2_1.push(x3_1);
    mvo2_2.push(x3_2);
  }

  for (let i = 0; i < 6; i++) {
    let x1 = pron[i] * vrl_1;
    let x2 = pron[i] * vrl_2;
    rl_1.push(x1);
    rl_2.push(x2);
  }

  return { pron, r1_1, r1_2, r1_3, r2_1, r2_2, mvo2_1, mvo2_2, rl_1, rl_2 };
}

export function TablaPechoMariposa(tiempo25) {
  let por = [1,2,3,4,6,8,10,12,16];
  let sum = [0,3,7.5,10,21,28,45,54,72];
  let r1 = [1.15,1.17,1.2];
  let r2 = [1.1,1.12];
  let vo2 = [1.06,1.08];
  let rl_v = [1.02,1.04];
  let pron = [];
  let r1_1 = [];
  let r1_2 = [];
  let r1_3 = [];
  let r2_1 = [];
  let r2_2 = [];
  let mvo2_1 = [];
  let mvo2_2 = [];
  let rl_1 = [];
  let rl_2 = [];

  for (let i = 0; i < 9; i++) {
    let value = tiempo25 * por[i] + sum[i];
    pron.push(value);
  }
  for (let i = 1; i < pron.length; i++) {
    let x1_1 = pron[i] * r1[0];
    let x1_2 = pron[i] * r1[1];
    let x1_3 = pron[i] * r1[2];
    let x2_1 = pron[i] * r2[0];
    let x2_2 = pron[i] * r2[1];
    let x3_1 = pron[i] * vo2[0];
    let x3_2 = pron[i] * vo2[1];

    r1_1.push(x1_1);
    r1_2.push(x1_2);
    r1_3.push(x1_3);
    r2_1.push(x2_1);
    r2_2.push(x2_2);
    mvo2_1.push(x3_1);
    mvo2_2.push(x3_2);
  }
  for (let i = 0; i < 6; i++) {
    let x1_1 = pron[i] * rl_v[0];
    let x1_2 = pron[i] * rl_v[1];

    rl_1.push(x1_1);
    rl_2.push(x1_2);
  }
  return {pron , r1_1,r1_2,r1_3,r2_1,r2_2,mvo2_1,mvo2_2,rl_1,rl_2}
}

export  function tablaCombinado(tiempo25) {
  let por = [1,2,4];
  let sum = [0,8,32];
  let r1_1 = [1.3,1.2,1.15];
  let r1_2 = [1.32,1.25,1.17];
  let r1_3 =[1.35,1.3,1.2];
  let r2_1 = [1.22,1.14,1.1];
  let r2_2 = [1.25,1.18,1.12];
  let vo2_1 = [1.15,1.1,1.08];
  let vo2_2 = [1.18,1.12,1.09];
  let pron = [];
  let vr1_1 = [];
  let vr1_2 = [];
  let vr1_3 = [];
  let vr2_1 = [];
  let vr2_2 = [];
  let mvo2_1 = [];
  let mvo2_2 = [];
  let rl_1 = [];
  let rl_2 = [];
  for (let i = 0; i < 3; i++) {
    let value = tiempo25 * por[i] + sum[i];
    pron.push(value);
  } 
  for(let i =0 ; i<3; i++){
    vr1_1.push(pron[i]*r1_1[i]);
    vr1_2.push(pron[i]*r1_2[i]);
    vr1_3.push(pron[i]*r1_3[i]);
    vr2_1.push(pron[i]*r2_1[i]);
    vr2_2.push(pron[i]*r2_2[i]);
    mvo2_1.push(pron[i]*vo2_1[i]);
    mvo2_2.push(pron[i]*vo2_2[i]);
    rl_1.push(pron[i]*1.02);
    rl_2.push(pron[i]*1.04);

  }
  return {pron, vr1_1, vr1_2, vr1_3, vr2_1, vr2_2, mvo2_1, mvo2_2, rl_1, rl_2}
} 

console.log(tablaCombinado(65))