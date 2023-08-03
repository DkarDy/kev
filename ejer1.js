function sucesionFibonacci(entrada){
 limpiar();

 var a = 0;
 var b = 1;
 var c = null;
 var noMaximoElementos = 100;
 var elementosSeries = entrada.value;

 if (elementosSeries > noMaximoElementos){
     imprimir("debes probar con menos de 100 numeros");
     return;

 }
 imprimir (a);
 imprimir (b);
 for (i = 0; i < elementosSeries - 2; i++){
    c = a + b;
    a = b;
    b = c;
    imprimir(c);
  }
}
function imprimir(valor){
    document.getElementById("resultado").innerHTML += valor + ' ';
}
function limpiar(){
    document.getElementById("resultado").innerHTML = ' ';
}



function primos(entrada){
limpiar();
    var num = 0, x, cont;
    var n;
    var c = null;
    var noMaximoElementos = 100;
    var elementosSeries = entrada.value;
    
    if (elementosSeries > noMaximoElementos){
        imprimir("debes probar con menos de 100 numeros");
 }  
 imprimir (num);
 imprimir (n);   

    while (n > 0) {
            num = num + 1;
            x = 1;
            cont = 0;
    while (x <= num) {
            if (num % x == 0) {
                    cont++;
                }
                x = x + 1;
            }
            if (cont == 2) {
                n = n - 1;
                imprimir(c);
            }
        }
function imprimir(valor){
            document.getElementById("resultados").innerHTML += valor + ' ';
        }
function limpiar(){
            document.getElementById("resultados").innerHTML = ' ';
        }      
}
