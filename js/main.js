class FuncionesMath{
    Absoluto(){
        let numero=Number(document.getElementById("input-num").value);
        document.getElementById("result").textContent="Valor absoluto:";
        document.getElementById("numero").innerHTML = "<span class='num'>" + numero + "</span>" + " <span class='num'>=</span> " + "<span class='num'>" + Math.abs(numero) + "</span>";
    
    
    }
    
    Truncar(){
        let numero=Number(document.getElementById("input-num").value);
        document.getElementById("result").textContent="Se ha redondeado por truncamiento:"
        document.getElementById("numero").innerHTML = "<span class='num'>" + numero + "</span>" + " <span class='num'>=</span> " + "<span class='num'>" + Math.trunc(numero) + "</span>";
    
    }
    
    Redondear(){
        let numero=Number(document.getElementById("input-num").value);
        document.getElementById("result").textContent="Numero redondeado:";
        document.getElementById("numero").innerHTML = "<span class='num'>" + numero + "</span>" + " <span class='num'>=</span> " + "<span class='num'>" + Math.round(numero) + "</span>";
    
    }
    
    Raiz(){
        let numero=Number(document.getElementById("input-num").value);
        document.getElementById("result").textContent="La raiz cuadrada de:";
        document.getElementById("numero").innerHTML = "<span class='num'>" + numero + "</span>" + " <span class='num'>=</span> " + "<span class='num'>" + Math.sqrt(numero) + "</span>";
    }
    
    Random(){
        let aleatorio=Math.floor(Math.random() * 100) + 1;
        document.getElementById("result").textContent="Numero aleatorio generado:";
        document.getElementById("numero").innerHTML = "<span class='num'>" + aleatorio + "</span>";
    }
    

}

const mate= new FuncionesMath();


class Operaciones{

    Operacion(){
        let a = Number(document.getElementById("input-numA").value);
        let b = Number(document.getElementById("input-numB").value);
        let c = Number(document.getElementById("input-numC").value);
        let discriminante = b**2 - 4*a*c;
        if (discriminante < 0) {
            document.getElementById("numero2").innerHTML = "<span class='num'> El discriminante es negativo, no se puede calcular la raíz cuadrada.</span>";
            document.getElementById("result2").textContent = "";
        } else {
            let resultado = (-b + Math.sqrt(discriminante)) / (2*a);
            document.getElementById("result2").textContent = "Resultado:";
            document.getElementById("numero2").innerHTML = "<span class='num'>" + resultado + "</span>";
        }
    }
    
    
    Operacion2(){
        let a = Number(document.getElementById("input-numA2").value);
        let b = Number(document.getElementById("input-numB2").value);
        let operacion = ((3 + 5 * 8) < 3 && (((-6 / 3) * 4) + 2 < 2)) || (a > b);
        document.getElementById("result3").textContent = "Resultado:";
        document.getElementById("numero3").innerHTML = "<span class='num'>" + operacion + "</span>";
    }

    
}

const operar= new Operaciones();





class Intercambio {
    intercambiar() {
      let a = Number(document.getElementById("input-numA3").value);
      let b = Number(document.getElementById("input-numB3").value);
      let aux = a;
      a = b;
      b = aux;;
      document.getElementById("nuevoA").innerHTML = "A = " + "<span class='num'>" + a + "</span>";
      document.getElementById("nuevoB").innerHTML = "B = " + "<span class='num'>" + b + "</span>";
    }
}
const inter = new Intercambio();  

  
  class Suma {
    sumar() {
      let a = Number(document.getElementById("input-numA4").value);
      let b = Number(document.getElementById("input-numB4").value);
      let c = Number(document.getElementById("input-numC4").value);
      let suma = a + b + c;
      document.getElementById("resultadoSuma").innerHTML = "<span class='num'>" + suma + "</span>";
    }
  }

const sum = new Suma();
  
  class CalculoSegundos {
    calcular() {
      let a = Number(document.getElementById("input-numA5").value);
      let b = Number(document.getElementById("input-numB5").value);
      let c = Number(document.getElementById("input-numC5").value);
      let Shoras = a * 3600;
      let Sminutos = b * 60;
      let totalSegundos = Shoras + Sminutos + c;
      document.getElementById("resultadoSegundos").innerHTML = "<span class='num'>" + totalSegundos + "</span>" + " segundos";
    }
  }

const calS=new CalculoSegundos();


  
  class CalculoCirculo {
    calcular() {
      let r = Number(document.getElementById("input-numA6").value);
      const pi = 3.1416;
      let area = (pi) * (r ** 2);
      let longitud = 2 * pi * r;
      document.getElementById("area").innerHTML = "Area: " + "<span class='num'>" + area.toFixed(2) + "</span>";
      document.getElementById("longitud").innerHTML = "Longitud: " + "<span class='num'>" + longitud.toFixed(2) + "</span>";
    }
  }

const calC=new CalculoCirculo();



  class CalculoPorcentaje {
    calcular() {
      let h = Number(document.getElementById("input-numA7").value);
      let m = Number(document.getElementById("input-numB7").value);
      let total = h + m;
      let Phombres = (h / total) * 100;
      let Pmujeres = (m / total) * 100;
      document.getElementById("Phombres").innerHTML = "Porcentaje de Hombres: " + "<span class='num'>" + Phombres.toFixed(2) + "%" + "</span>";
      document.getElementById("Pmujeres").innerHTML = "Porcentaje de Mujeres: : " + "<span class='num'>" + Pmujeres.toFixed(2) + "%" + "</span>";
    }
  }
  const calP=new CalculoPorcentaje();


class CalculoMinutos {
  calcular() {
    const a = Number(document.getElementById("input-numA8").value);
    const b = Number(document.getElementById("input-numB8").value);
    const c = Number(document.getElementById("input-numC8").value);
    const cantA = a * 5;
    const cantB = b * 8;
    const cantC = c * 6;
    const total = cantA + cantB + cantC;
    const CMhoras = total / 60;
    const CMminutos = total % 60;
    document.getElementById("CMhoras").innerHTML = "Horas: " + "<span class='num'>" + Math.trunc(CMhoras) + "</span>";
    document.getElementById("CMminutos").innerHTML = "Minutos: : " + "<span class='num'>" + CMminutos + "</span>";
  }
}

const calMin=new CalculoMinutos();




class CalculoDescuento {
  calcular() {
    const a = Number(document.getElementById("input-numA9").value);
    const dcto = a - (a * 0.15);
    document.getElementById("dcto").innerHTML = "Descuento de: " + "<span class='num'>" + dcto.toFixed(2) + "</span>";
  }
}
const calDesc=new CalculoDescuento();


class CalculoCalificacionFinal {
  calcular() {
    const a = Number(document.getElementById("input-numA10").value);
    const b = Number(document.getElementById("input-numB10").value);
    const c = Number(document.getElementById("input-numC10").value);
    const d = Number(document.getElementById("input-numD10").value);
    const e = Number(document.getElementById("input-numE10").value);
    const prom = ((a + b + c) / 3) * 0.55;
    const calExam = d * 0.30;
    const calTrabajo = e * 0.15;
    const CFtotal = prom + calExam + calTrabajo;
    document.getElementById("CFtotal").innerHTML = "Su calificacion final es de " + "<span class='num'>" + CFtotal.toFixed(2) + "</span>";
  }
}
const calFin=new CalculoCalificacionFinal();




class NumParOImpar {
  calcular() {
    const a = Number(document.getElementById("input-varA1").value);
    if (a % 2 === 0) {
      document.getElementById("paroimpar").innerHTML = "El número " + a + " es " + "<span class='num'> par </span>";
    } else {
      document.getElementById("paroimpar").innerHTML = "El número " + a + " es " + "<span class='num'> impar </span>";
    }
  }
}

const calParImpar=new NumParOImpar();


class AprobDesaprob {
    calcular() {
      let a = Number(document.getElementById("input-varA2").value);
      let b = Number(document.getElementById("input-varB2").value);
      let c = Number(document.getElementById("input-varC2").value);
      let prom = (a + b + c) / 3;
  
      if (prom >= 70) {
        document.getElementById("aprobdesaprob").innerHTML =
          "Alumno: " + "<span class='num'> Aprobado con " + prom.toFixed(2) + "</span>";
      } else {
        document.getElementById("aprobdesaprob").innerHTML =
          "Alumno: " + "<span class='num'> Desaprobado con " + prom.toFixed(2) + "</span>";
      }
    }
  }

const aprob=new AprobDesaprob();
  
class Dcto100 {
    calcular() {
      let a = Number(document.getElementById("input-varA3").value);
      let dcto100 = a - a * 0.2;
      if (a > 100) {
        document.getElementById("dcto100").innerHTML =
          "Su total es de: " + "<span class='num'>" + dcto100.toFixed(2) + "$" + "</span>";
      } else {
        document.getElementById("dcto100").innerHTML =
          "Su total es de: " + "<span class='num'>" + a + "$" + "</span>";
      }
    }
  }

const descuento=new Dcto100();
  
class Operacion2num {
    calcular() {
      let a = Number(document.getElementById("input-varA4").value);
      let b = Number(document.getElementById("input-varB4").value);
      let sum = a + b;
      let rest = a - b;
      if (a == b) {
        document.getElementById("result2Op").innerHTML =
          "Numeros iguales -> Multiplicacion: " +
          "<span class='num'>" +
          a * b +
          "</span>";
      } else if (a > b) {
        document.getElementById("result2Op").innerHTML =
          a +
          " es mayor que " +
          b +
          " -> Resta: " +
          "<span class='num'>" +
          rest +
          "</span>";
      } else {
        document.getElementById("result2Op").innerHTML =
          b +
          " es mayor que " +
          a +
          " -> Suma: " +
          "<span class='num'>" +
          sum +
          "</span>";
      }
    }
  }

const op2=new Operacion2num();
  


class DctoManzana {
    calcular() {
        let a=Number(document.getElementById("input-varA6").value);
        let b=Number(document.getElementById("input-varB6").value);
        let total=(a*b);

        if (b>2 && b<=5){
            let dcto=total-(total*0.10);
            document.getElementById("dctomanz").innerHTML="Total a pagar: "+ "<span class='num'>" + dcto + "$"+"</span>";

        }
        else if(b>5 && b<=10){
            let dcto=total-(total*0.15);
            document.getElementById("dctomanz").innerHTML="Total a pagar: "+ "<span class='num'>" + dcto + "$"+"</span>";
        }
        else if(b>10){
            let dcto=total-(total*0.20);
            document.getElementById("dctomanz").innerHTML="Total a pagar: "+ "<span class='num'>" + dcto + "$"+"</span>";
        }
        else{
            document.getElementById("dctomanz").innerHTML="Total a pagar: "+ "<span class='num'>" + total + "$"+"</span>";

        }
    }
}
const dctoMan=new DctoManzana();


class DiasSem {
    calcular() {
        let a=Number(document.getElementById("input-varA7").value);
        switch(a){
            case 1:
                document.getElementById("diaSem").innerHTML="<span class='num'> Lunes </span>";
                break;

            case 2:
                document.getElementById("diaSem").innerHTML="<span class='num'> Martes </span>";
                break;

            case 3:
                document.getElementById("diaSem").innerHTML="<span class='num'> Miercoles </span>";
                break;

            case 4:
                document.getElementById("diaSem").innerHTML="<span class='num'> Jueves </span>";
                break;

            case 5:
                document.getElementById("diaSem").innerHTML="<span class='num'> Viernes </span>";
                break;

            case 6:
                document.getElementById("diaSem").innerHTML="<span class='num'> Sabado </span>";
                break;

            case 7:
                document.getElementById("diaSem").innerHTML="<span class='num'> Domingo </span>";
                break;

            default:
                document.getElementById("diaSem").innerHTML="<span class='num'> Numero invalido </span>";
                break;
        }
    }
}

const diaSemana=new DiasSem();


class AñosBoda{
    calcular(){
        let a=Number(document.getElementById("input-varA8").value);
        switch(a){
            case 10:
                document.getElementById("añosBoda").innerHTML="<span class='num'> Bodas de Hojalata </span>";
                break;
    
            case 20:
                document.getElementById("añosBoda").innerHTML="<span class='num'> Bodas de Porcelana </span>";
                break;
    
            case 30:
                document.getElementById("añosBoda").innerHTML="<span class='num'> Bodas de Perlas </span>";
                break;
        
            case 40:
                document.getElementById("añosBoda").innerHTML="<span class='num'> Bodas de Rubi </span>";
                break;
                
            case 50:
                document.getElementById("añosBoda").innerHTML="<span class='num'> Bodas de Oro </span>";
                break;
        
            case 60:
                document.getElementById("añosBoda").innerHTML="<span class='num'> Bodas de Diamante </span>";
                break;
    
                
            default:
                document.getElementById("añosBoda").innerHTML="<span class='num'> Año invalido </span>";
                break;
    
                }
    }

}

const anioBoda=new AñosBoda();




class Menu{

    elevar(){
        let num=prompt("Ingrese el numero a elevar: ");
        let x=prompt("Ingrese la cantidad a elevar: ");
        alert("Resultado: "+(num**x));
    }

    Raiz(){
        let num=prompt("Ingrese el numero: ");
        alert("Resultado: "+(Math.sqrt(num)));
    }
}

const men= new Menu();


class Iteracion{

  iterar(){
    let a=Number(document.getElementById("input-varA10").value);
    let suma=0;
    for (let i=0;i<=a;i++){
        suma=suma+i;
    }

    document.getElementById("resultIterador").innerHTML="Resultado: "+"<span class='num'> " + suma + " </span>";


}

}
const it=new Iteracion();



class Suma50num{
  calcular(){
    let b=Number(document.getElementById("input-varB11").value);
    let sumPar=0;
    let sumImpar=0;
    let i=0;
    
    for(i>1;i<b;i++){
      if (i%2===0){
        sumPar+=i;
      }
      else{
        sumImpar+=i;
      }
    }
    document.getElementById("resultEjer22").innerHTML="La suma de los pares es: "+"<span class='num'> " + sumPar + " </span>";
    document.getElementById("result2Ejer22").innerHTML="La suma de los impares es: "+"<span class='num'> " + sumImpar + " </span>";
  }
  
}
const suma50=new Suma50num();

class Ejer23{
  calcular(){  
    let sumPos=0;
    let sumNeg=0;
    let sumNeu=0; 
    for(let i=1;i<=10;i++){
      let num=prompt("Ingrese numero "+i+":");
      if (num>0){
        sumPos+=1;
      }
      else if(num<0){
        sumNeg+=1;
      }
      else{
        sumNeu+=1;
      }
    }
    document.getElementById("resultEjer23").innerHTML="La suma de los positivos es: "+"<span class='num'> " + sumPos + " </span>";
    document.getElementById("result2Ejer23").innerHTML="La suma de los negativos es: "+"<span class='num'> " + sumNeg + " </span>";
    document.getElementById("result3Ejer23").innerHTML="La suma de los neutros es: "+"<span class='num'> " + sumNeu + " </span>";

  }
  
}

const sumPNN=new Ejer23();

class Ejer24{
  calcular(){  
    let suma=0;
    let prom=0;
    let cal_baja=999999;
    for(let i=1;i<=10;i++){
      let num=Number(prompt("Ingrese calificacion "+i+":"));
      suma+=num;

      if (num<cal_baja){
        cal_baja=num;
      }
    }

    prom=suma/10;

    document.getElementById("resultEjer24").innerHTML="El promedio es: "+"<span class='num'> " + prom + " </span>";
    document.getElementById("result2Ejer24").innerHTML="La calificacion mas baja es: "+"<span class='num'> " + cal_baja + " </span>";

  }
  
}
const calBaja=new Ejer24();


class Ejer25{
  calcular(){
    let a=Number(document.getElementById("input-ejer25").value);
    while (a<0){
      alert("¡Ingrese un numero mayor a 0!");
      a=prompt("Ingrese numero mayor a 0:");
    }
    let i=1;
    let fact=1;
    while(i<=a){
      fact*=i;
      i++;
    }

    document.getElementById("resultEjer25").innerHTML="El factorial de " + a + " es: "+"<span class='num'> " + fact + " </span>";


    
  }
}

const cal25=new Ejer25();


class Ejer26{
  calcular(){
    let a=Number(document.getElementById("input-ejer26").value);
    let i=1;
    let sum=0;
    while(i<=a){
      sum+=(i**2);
      i++;
    }

    document.getElementById("resultEjer26").innerHTML="Sumatoria de " + a + " es: "+"<span class='num'> " + sum + " </span>";


    
  }
}

const cal26=new Ejer26();


class Ejer27{
  calcular(){
    let cant=Number(prompt("Ingrese cantidad de enteros: "));
    let i=0;
    let sumPar=0;
    let contPar=0;
    let sumImpar=0;
    let contImpar=0;

    while (i <cant){
      let num=Number(prompt("Ingrese el numero entero ("+ (i+1) +"):"));
      i++;
      if (num%2===0){
        sumPar+=num;
        contPar+=1;
      }
      else{
        sumImpar+=num;
        contImpar+=1;
      }
      
    }

    document.getElementById("result1Ejer27").innerHTML="Sumatoria de pares: " + "<span class='num'> " + sumPar + " </span>";
    document.getElementById("result2Ejer27").innerHTML="Cantidad de pares: " + "<span class='num'> " + contPar + " </span>";
    document.getElementById("result3Ejer27").innerHTML="Promedio de impares: "+ "<span class='num'> " + (sumImpar/contImpar).toFixed(2) + " </span>";




    
  }
}

const cal27=new Ejer27();

