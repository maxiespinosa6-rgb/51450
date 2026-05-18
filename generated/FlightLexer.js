// Generated from Flight.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,16,98,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,
1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,86,8,12,1,13,1,13,1,
14,1,14,1,15,4,15,93,8,15,11,15,12,15,94,1,15,1,15,0,0,16,1,1,3,2,5,3,7,
4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,1,0,
5,1,0,48,50,1,0,48,57,1,0,48,53,2,0,65,90,97,122,3,0,9,10,13,13,32,32,99,
0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,
0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,
0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,1,33,1,0,0,0,3,
35,1,0,0,0,5,37,1,0,0,0,7,39,1,0,0,0,9,41,1,0,0,0,11,43,1,0,0,0,13,45,1,
0,0,0,15,47,1,0,0,0,17,49,1,0,0,0,19,51,1,0,0,0,21,59,1,0,0,0,23,67,1,0,
0,0,25,85,1,0,0,0,27,87,1,0,0,0,29,89,1,0,0,0,31,92,1,0,0,0,33,34,5,44,0,
0,34,2,1,0,0,0,35,36,5,32,0,0,36,4,1,0,0,0,37,38,5,40,0,0,38,6,1,0,0,0,39,
40,5,41,0,0,40,8,1,0,0,0,41,42,5,91,0,0,42,10,1,0,0,0,43,44,5,93,0,0,44,
12,1,0,0,0,45,46,5,58,0,0,46,14,1,0,0,0,47,48,5,45,0,0,48,16,1,0,0,0,49,
50,5,47,0,0,50,18,1,0,0,0,51,52,5,79,0,0,52,53,5,78,0,0,53,54,5,95,0,0,54,
55,5,84,0,0,55,56,5,73,0,0,56,57,5,77,0,0,57,58,5,69,0,0,58,20,1,0,0,0,59,
60,5,68,0,0,60,61,5,69,0,0,61,62,5,76,0,0,62,63,5,65,0,0,63,64,5,89,0,0,
64,65,5,69,0,0,65,66,5,68,0,0,66,22,1,0,0,0,67,68,5,67,0,0,68,69,5,65,0,
0,69,70,5,78,0,0,70,71,5,67,0,0,71,72,5,69,0,0,72,73,5,76,0,0,73,74,5,76,
0,0,74,75,5,69,0,0,75,76,5,68,0,0,76,24,1,0,0,0,77,78,7,0,0,0,78,79,7,1,
0,0,79,80,5,58,0,0,80,81,7,2,0,0,81,86,7,1,0,0,82,83,5,78,0,0,83,84,5,79,
0,0,84,86,5,87,0,0,85,77,1,0,0,0,85,82,1,0,0,0,86,26,1,0,0,0,87,88,7,3,0,
0,88,28,1,0,0,0,89,90,7,1,0,0,90,30,1,0,0,0,91,93,7,4,0,0,92,91,1,0,0,0,
93,94,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,96,1,0,0,0,96,97,6,15,0,0,97,
32,1,0,0,0,3,0,85,94,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class FlightLexer extends antlr4.Lexer {

    static grammarFileName = "Flight.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "','", "' '", "'('", "')'", "'['", "']'", 
                         "':'", "'-'", "'/'", "'ON_TIME'", "'DELAYED'", 
                         "'CANCELLED'" ];
	static symbolicNames = [ null, "COMA", "ESPACIO", "LPAREN", "RPAREN", "RPUERTA", 
                          "LPUERTA", "DOSPUNTOS", "GUION", "BARRA", "ONTIME", 
                          "DELAYED", "CANCELLED", "HORA", "LETRA", "DIGITO", 
                          "WS" ];
	static ruleNames = [ "COMA", "ESPACIO", "LPAREN", "RPAREN", "RPUERTA", 
                      "LPUERTA", "DOSPUNTOS", "GUION", "BARRA", "ONTIME", 
                      "DELAYED", "CANCELLED", "HORA", "LETRA", "DIGITO", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

FlightLexer.EOF = antlr4.Token.EOF;
FlightLexer.COMA = 1;
FlightLexer.ESPACIO = 2;
FlightLexer.LPAREN = 3;
FlightLexer.RPAREN = 4;
FlightLexer.RPUERTA = 5;
FlightLexer.LPUERTA = 6;
FlightLexer.DOSPUNTOS = 7;
FlightLexer.GUION = 8;
FlightLexer.BARRA = 9;
FlightLexer.ONTIME = 10;
FlightLexer.DELAYED = 11;
FlightLexer.CANCELLED = 12;
FlightLexer.HORA = 13;
FlightLexer.LETRA = 14;
FlightLexer.DIGITO = 15;
FlightLexer.WS = 16;



