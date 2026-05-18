// Generated from Flight.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import FlightListener from './FlightListener.js';
const serializedATN = [4,1,16,85,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,3,0,23,8,0,1,0,1,0,3,0,27,
8,0,1,0,1,0,3,0,31,8,0,1,0,1,0,3,0,35,8,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,
1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,
5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,5,7,72,8,7,10,7,12,7,75,9,7,1,8,1,
8,4,8,79,8,8,11,8,12,8,80,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,
3,1,0,10,12,2,0,2,2,14,14,1,0,14,15,80,0,20,1,0,0,0,2,38,1,0,0,0,4,44,1,
0,0,0,6,55,1,0,0,0,8,57,1,0,0,0,10,61,1,0,0,0,12,65,1,0,0,0,14,69,1,0,0,
0,16,76,1,0,0,0,18,82,1,0,0,0,20,22,3,2,1,0,21,23,5,2,0,0,22,21,1,0,0,0,
22,23,1,0,0,0,23,24,1,0,0,0,24,26,3,8,4,0,25,27,5,2,0,0,26,25,1,0,0,0,26,
27,1,0,0,0,27,28,1,0,0,0,28,30,5,8,0,0,29,31,5,2,0,0,30,29,1,0,0,0,30,31,
1,0,0,0,31,32,1,0,0,0,32,34,3,10,5,0,33,35,5,2,0,0,34,33,1,0,0,0,34,35,1,
0,0,0,35,36,1,0,0,0,36,37,5,13,0,0,37,1,1,0,0,0,38,39,5,14,0,0,39,40,5,14,
0,0,40,41,5,15,0,0,41,42,5,15,0,0,42,43,5,15,0,0,43,3,1,0,0,0,44,45,5,15,
0,0,45,46,5,15,0,0,46,47,5,9,0,0,47,48,5,15,0,0,48,49,5,15,0,0,49,50,5,9,
0,0,50,51,5,15,0,0,51,52,5,15,0,0,52,53,5,15,0,0,53,54,5,15,0,0,54,5,1,0,
0,0,55,56,7,0,0,0,56,7,1,0,0,0,57,58,5,14,0,0,58,59,5,14,0,0,59,60,5,14,
0,0,60,9,1,0,0,0,61,62,5,14,0,0,62,63,5,14,0,0,63,64,5,14,0,0,64,11,1,0,
0,0,65,66,5,14,0,0,66,67,5,15,0,0,67,68,5,15,0,0,68,13,1,0,0,0,69,73,5,14,
0,0,70,72,7,1,0,0,71,70,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,
0,74,15,1,0,0,0,75,73,1,0,0,0,76,78,5,14,0,0,77,79,5,15,0,0,78,77,1,0,0,
0,79,80,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,17,1,0,0,0,82,83,7,2,0,0,
83,19,1,0,0,0,6,22,26,30,34,73,80];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class FlightParser extends antlr4.Parser {

    static grammarFileName = "Flight.g4";
    static literalNames = [ null, "','", "' '", "'('", "')'", "'['", "']'", 
                            "':'", "'-'", "'/'", "'ON_TIME'", "'DELAYED'", 
                            "'CANCELLED'" ];
    static symbolicNames = [ null, "COMA", "ESPACIO", "LPAREN", "RPAREN", 
                             "RPUERTA", "LPUERTA", "DOSPUNTOS", "GUION", 
                             "BARRA", "ONTIME", "DELAYED", "CANCELLED", 
                             "HORA", "LETRA", "DIGITO", "WS" ];
    static ruleNames = [ "vuelo", "codigo", "fecha", "estado", "aeropuertosalida", 
                         "aeropuertoorigen", "asiento", "operador", "puerta", 
                         "terminal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FlightParser.ruleNames;
        this.literalNames = FlightParser.literalNames;
        this.symbolicNames = FlightParser.symbolicNames;
    }



	vuelo() {
	    let localctx = new VueloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FlightParser.RULE_vuelo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.codigo();
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 21;
	            this.match(FlightParser.ESPACIO);
	        }

	        this.state = 24;
	        this.aeropuertosalida();
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 25;
	            this.match(FlightParser.ESPACIO);
	        }

	        this.state = 28;
	        this.match(FlightParser.GUION);
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 29;
	            this.match(FlightParser.ESPACIO);
	        }

	        this.state = 32;
	        this.aeropuertoorigen();
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 33;
	            this.match(FlightParser.ESPACIO);
	        }

	        this.state = 36;
	        this.match(FlightParser.HORA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	codigo() {
	    let localctx = new CodigoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FlightParser.RULE_codigo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(FlightParser.LETRA);
	        this.state = 39;
	        this.match(FlightParser.LETRA);
	        this.state = 40;
	        this.match(FlightParser.DIGITO);
	        this.state = 41;
	        this.match(FlightParser.DIGITO);
	        this.state = 42;
	        this.match(FlightParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fecha() {
	    let localctx = new FechaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FlightParser.RULE_fecha);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(FlightParser.DIGITO);
	        this.state = 45;
	        this.match(FlightParser.DIGITO);
	        this.state = 46;
	        this.match(FlightParser.BARRA);
	        this.state = 47;
	        this.match(FlightParser.DIGITO);
	        this.state = 48;
	        this.match(FlightParser.DIGITO);
	        this.state = 49;
	        this.match(FlightParser.BARRA);
	        this.state = 50;
	        this.match(FlightParser.DIGITO);
	        this.state = 51;
	        this.match(FlightParser.DIGITO);
	        this.state = 52;
	        this.match(FlightParser.DIGITO);
	        this.state = 53;
	        this.match(FlightParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FlightParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7168) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aeropuertosalida() {
	    let localctx = new AeropuertosalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, FlightParser.RULE_aeropuertosalida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(FlightParser.LETRA);
	        this.state = 58;
	        this.match(FlightParser.LETRA);
	        this.state = 59;
	        this.match(FlightParser.LETRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aeropuertoorigen() {
	    let localctx = new AeropuertoorigenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FlightParser.RULE_aeropuertoorigen);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(FlightParser.LETRA);
	        this.state = 62;
	        this.match(FlightParser.LETRA);
	        this.state = 63;
	        this.match(FlightParser.LETRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asiento() {
	    let localctx = new AsientoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, FlightParser.RULE_asiento);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(FlightParser.LETRA);
	        this.state = 66;
	        this.match(FlightParser.DIGITO);
	        this.state = 67;
	        this.match(FlightParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operador() {
	    let localctx = new OperadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, FlightParser.RULE_operador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(FlightParser.LETRA);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2 || _la===14) {
	            this.state = 70;
	            _la = this._input.LA(1);
	            if(!(_la===2 || _la===14)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	puerta() {
	    let localctx = new PuertaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, FlightParser.RULE_puerta);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(FlightParser.LETRA);
	        this.state = 78; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 77;
	            this.match(FlightParser.DIGITO);
	            this.state = 80; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminal() {
	    let localctx = new TerminalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, FlightParser.RULE_terminal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        _la = this._input.LA(1);
	        if(!(_la===14 || _la===15)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

FlightParser.EOF = antlr4.Token.EOF;
FlightParser.COMA = 1;
FlightParser.ESPACIO = 2;
FlightParser.LPAREN = 3;
FlightParser.RPAREN = 4;
FlightParser.RPUERTA = 5;
FlightParser.LPUERTA = 6;
FlightParser.DOSPUNTOS = 7;
FlightParser.GUION = 8;
FlightParser.BARRA = 9;
FlightParser.ONTIME = 10;
FlightParser.DELAYED = 11;
FlightParser.CANCELLED = 12;
FlightParser.HORA = 13;
FlightParser.LETRA = 14;
FlightParser.DIGITO = 15;
FlightParser.WS = 16;

FlightParser.RULE_vuelo = 0;
FlightParser.RULE_codigo = 1;
FlightParser.RULE_fecha = 2;
FlightParser.RULE_estado = 3;
FlightParser.RULE_aeropuertosalida = 4;
FlightParser.RULE_aeropuertoorigen = 5;
FlightParser.RULE_asiento = 6;
FlightParser.RULE_operador = 7;
FlightParser.RULE_puerta = 8;
FlightParser.RULE_terminal = 9;

class VueloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlightParser.RULE_vuelo;
    }

	codigo() {
	    return this.getTypedRuleContext(CodigoContext,0);
	};

	aeropuertosalida() {
	    return this.getTypedRuleContext(AeropuertosalidaContext,0);
	};

	GUION() {
	    return this.getToken(FlightParser.GUION, 0);
	};

	aeropuertoorigen() {
	    return this.getTypedRuleContext(AeropuertoorigenContext,0);
	};

	HORA() {
	    return this.getToken(FlightParser.HORA, 0);
	};

	ESPACIO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlightParser.ESPACIO);
	    } else {
	        return this.getToken(FlightParser.ESPACIO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.enterVuelo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.exitVuelo(this);
		}
	}


}



class CodigoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlightParser.RULE_codigo;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlightParser.LETRA);
	    } else {
	        return this.getToken(FlightParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlightParser.DIGITO);
	    } else {
	        return this.getToken(FlightParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.enterCodigo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.exitCodigo(this);
		}
	}


}



class FechaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlightParser.RULE_fecha;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlightParser.DIGITO);
	    } else {
	        return this.getToken(FlightParser.DIGITO, i);
	    }
	};


	BARRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlightParser.BARRA);
	    } else {
	        return this.getToken(FlightParser.BARRA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.enterFecha(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.exitFecha(this);
		}
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlightParser.RULE_estado;
    }

	ONTIME() {
	    return this.getToken(FlightParser.ONTIME, 0);
	};

	DELAYED() {
	    return this.getToken(FlightParser.DELAYED, 0);
	};

	CANCELLED() {
	    return this.getToken(FlightParser.CANCELLED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.exitEstado(this);
		}
	}


}



class AeropuertosalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlightParser.RULE_aeropuertosalida;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlightParser.LETRA);
	    } else {
	        return this.getToken(FlightParser.LETRA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.enterAeropuertosalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.exitAeropuertosalida(this);
		}
	}


}



class AeropuertoorigenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlightParser.RULE_aeropuertoorigen;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlightParser.LETRA);
	    } else {
	        return this.getToken(FlightParser.LETRA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.enterAeropuertoorigen(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.exitAeropuertoorigen(this);
		}
	}


}



class AsientoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlightParser.RULE_asiento;
    }

	LETRA() {
	    return this.getToken(FlightParser.LETRA, 0);
	};

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlightParser.DIGITO);
	    } else {
	        return this.getToken(FlightParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.enterAsiento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.exitAsiento(this);
		}
	}


}



class OperadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlightParser.RULE_operador;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlightParser.LETRA);
	    } else {
	        return this.getToken(FlightParser.LETRA, i);
	    }
	};


	ESPACIO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlightParser.ESPACIO);
	    } else {
	        return this.getToken(FlightParser.ESPACIO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.enterOperador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.exitOperador(this);
		}
	}


}



class PuertaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlightParser.RULE_puerta;
    }

	LETRA() {
	    return this.getToken(FlightParser.LETRA, 0);
	};

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FlightParser.DIGITO);
	    } else {
	        return this.getToken(FlightParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.enterPuerta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.exitPuerta(this);
		}
	}


}



class TerminalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlightParser.RULE_terminal;
    }

	DIGITO() {
	    return this.getToken(FlightParser.DIGITO, 0);
	};

	LETRA() {
	    return this.getToken(FlightParser.LETRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.enterTerminal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlightListener ) {
	        listener.exitTerminal(this);
		}
	}


}




FlightParser.VueloContext = VueloContext; 
FlightParser.CodigoContext = CodigoContext; 
FlightParser.FechaContext = FechaContext; 
FlightParser.EstadoContext = EstadoContext; 
FlightParser.AeropuertosalidaContext = AeropuertosalidaContext; 
FlightParser.AeropuertoorigenContext = AeropuertoorigenContext; 
FlightParser.AsientoContext = AsientoContext; 
FlightParser.OperadorContext = OperadorContext; 
FlightParser.PuertaContext = PuertaContext; 
FlightParser.TerminalContext = TerminalContext; 
