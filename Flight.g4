grammar Flight;
//gramar
vuelo : codigo ESPACIO? aeropuertosalida ESPACIO? GUION ESPACIO? aeropuertoorigen ESPACIO? HORA ;
codigo : LETRA LETRA DIGITO DIGITO DIGITO;
fecha : DIGITO DIGITO '/' DIGITO DIGITO '/' DIGITO DIGITO DIGITO DIGITO ;
estado : ONTIME | DELAYED | CANCELLED ;
aeropuertosalida : LETRA LETRA LETRA ;
aeropuertoorigen : LETRA LETRA LETRA;
asiento : LETRA DIGITO DIGITO ;
operador : LETRA ( LETRA | ' ' )* ;
puerta : LETRA DIGITO+ ;
terminal : DIGITO | LETRA ;
//FlightLexer
COMA : ',' ;
ESPACIO : ' ' ;
LPAREN : '(';
RPAREN : ')' ;
RPUERTA : '[' ;
LPUERTA : ']' ;
DOSPUNTOS : ':' ;
GUION : '-' ;
BARRA : '/' ;
ONTIME : 'ON_TIME' ;
DELAYED : 'DELAYED' ;
CANCELLED : 'CANCELLED' ;
HORA : [0-2][0-9]':'[0-5][0-9] | 'NOW' ;
LETRA :  [a-zA-Z] ;
DIGITO : [0-9] ;
WS : [ \t\r\n]+ -> skip ;