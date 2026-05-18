import antlr4 from 'antlr4';
import fs from 'fs';

import FlightLexer from './generated/FlightLexer.js';
import FlightParser from './generated/FlightParser.js';

const archivo = process.argv[2];

const input = fs.readFileSync(archivo, 'utf8');

const chars = new antlr4.InputStream(input);

const lexer = new FlightLexer(chars);

const tokens = new antlr4.CommonTokenStream(lexer);

tokens.fill();

console.log("===== TABLA LEXEMAS-TOKENS =====");

const tabla = [];

tokens.tokens.forEach(token => {

    if (token.type !== -1) {

        tabla.push({
            Lexema: token.text,
            Token: FlightLexer.symbolicNames[token.type]
        });

    }
});

console.table(tabla);

const parser = new FlightParser(tokens);

parser.buildParseTrees = true;

parser.removeErrorListeners();

parser.addErrorListener({
    syntaxError(recognizer, offendingSymbol, line, column, msg) {

        console.log(
            `Error sintáctico en línea ${line}, columna ${column}: ${msg}`
        );

    }
});

const tree = parser.vuelo();

console.log("\nÁRBOL:");

console.log(tree.toStringTree(parser.ruleNames));

const texto = input.trim();

const regex =
/^([A-Z]{2}[0-9]{3}) ([A-Z]{3})-([A-Z]{3}) ([0-9]{2}:[0-9]{2}), (ON_TIME|DELAYED|CANCELLED), Gate: ([A-Z][0-9]{1,2})$/;

const match = texto.match(regex);

if(match){

    const flight = {
        code: match[1],
        from: match[2],
        to: match[3],
        time: match[4],
        status: match[5],
        gate: match[6]
    };

    console.log("\n===== TRADUCCION A JAVASCRIPT =====");

    console.log(flight);
}