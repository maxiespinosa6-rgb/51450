// Generated from d:/51450/Flight/Flight.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class FlightLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		COMA=1, ESPACIO=2, LPAREN=3, RPAREN=4, RPUERTA=5, LPUERTA=6, DOSPUNTOS=7, 
		GUION=8, BARRA=9, ONTIME=10, DELAYED=11, CANCELLED=12, HORA=13, LETRA=14, 
		DIGITO=15, WS=16;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"COMA", "ESPACIO", "LPAREN", "RPAREN", "RPUERTA", "LPUERTA", "DOSPUNTOS", 
			"GUION", "BARRA", "ONTIME", "DELAYED", "CANCELLED", "HORA", "LETRA", 
			"DIGITO", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "','", "' '", "'('", "')'", "'['", "']'", "':'", "'-'", "'/'", 
			"'ON_TIME'", "'DELAYED'", "'CANCELLED'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "COMA", "ESPACIO", "LPAREN", "RPAREN", "RPUERTA", "LPUERTA", "DOSPUNTOS", 
			"GUION", "BARRA", "ONTIME", "DELAYED", "CANCELLED", "HORA", "LETRA", 
			"DIGITO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public FlightLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Flight.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0010b\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003\fV\b\f\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0004\u000f]\b\u000f\u000b\u000f\f\u000f"+
		"^\u0001\u000f\u0001\u000f\u0000\u0000\u0010\u0001\u0001\u0003\u0002\u0005"+
		"\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n"+
		"\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010\u0001"+
		"\u0000\u0005\u0001\u000002\u0001\u000009\u0001\u000005\u0002\u0000AZa"+
		"z\u0003\u0000\t\n\r\r  c\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003"+
		"\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007"+
		"\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001"+
		"\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000"+
		"\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000"+
		"\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000"+
		"\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000"+
		"\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000"+
		"\u0000\u0000\u0001!\u0001\u0000\u0000\u0000\u0003#\u0001\u0000\u0000\u0000"+
		"\u0005%\u0001\u0000\u0000\u0000\u0007\'\u0001\u0000\u0000\u0000\t)\u0001"+
		"\u0000\u0000\u0000\u000b+\u0001\u0000\u0000\u0000\r-\u0001\u0000\u0000"+
		"\u0000\u000f/\u0001\u0000\u0000\u0000\u00111\u0001\u0000\u0000\u0000\u0013"+
		"3\u0001\u0000\u0000\u0000\u0015;\u0001\u0000\u0000\u0000\u0017C\u0001"+
		"\u0000\u0000\u0000\u0019U\u0001\u0000\u0000\u0000\u001bW\u0001\u0000\u0000"+
		"\u0000\u001dY\u0001\u0000\u0000\u0000\u001f\\\u0001\u0000\u0000\u0000"+
		"!\"\u0005,\u0000\u0000\"\u0002\u0001\u0000\u0000\u0000#$\u0005 \u0000"+
		"\u0000$\u0004\u0001\u0000\u0000\u0000%&\u0005(\u0000\u0000&\u0006\u0001"+
		"\u0000\u0000\u0000\'(\u0005)\u0000\u0000(\b\u0001\u0000\u0000\u0000)*"+
		"\u0005[\u0000\u0000*\n\u0001\u0000\u0000\u0000+,\u0005]\u0000\u0000,\f"+
		"\u0001\u0000\u0000\u0000-.\u0005:\u0000\u0000.\u000e\u0001\u0000\u0000"+
		"\u0000/0\u0005-\u0000\u00000\u0010\u0001\u0000\u0000\u000012\u0005/\u0000"+
		"\u00002\u0012\u0001\u0000\u0000\u000034\u0005O\u0000\u000045\u0005N\u0000"+
		"\u000056\u0005_\u0000\u000067\u0005T\u0000\u000078\u0005I\u0000\u0000"+
		"89\u0005M\u0000\u00009:\u0005E\u0000\u0000:\u0014\u0001\u0000\u0000\u0000"+
		";<\u0005D\u0000\u0000<=\u0005E\u0000\u0000=>\u0005L\u0000\u0000>?\u0005"+
		"A\u0000\u0000?@\u0005Y\u0000\u0000@A\u0005E\u0000\u0000AB\u0005D\u0000"+
		"\u0000B\u0016\u0001\u0000\u0000\u0000CD\u0005C\u0000\u0000DE\u0005A\u0000"+
		"\u0000EF\u0005N\u0000\u0000FG\u0005C\u0000\u0000GH\u0005E\u0000\u0000"+
		"HI\u0005L\u0000\u0000IJ\u0005L\u0000\u0000JK\u0005E\u0000\u0000KL\u0005"+
		"D\u0000\u0000L\u0018\u0001\u0000\u0000\u0000MN\u0007\u0000\u0000\u0000"+
		"NO\u0007\u0001\u0000\u0000OP\u0005:\u0000\u0000PQ\u0007\u0002\u0000\u0000"+
		"QV\u0007\u0001\u0000\u0000RS\u0005N\u0000\u0000ST\u0005O\u0000\u0000T"+
		"V\u0005W\u0000\u0000UM\u0001\u0000\u0000\u0000UR\u0001\u0000\u0000\u0000"+
		"V\u001a\u0001\u0000\u0000\u0000WX\u0007\u0003\u0000\u0000X\u001c\u0001"+
		"\u0000\u0000\u0000YZ\u0007\u0001\u0000\u0000Z\u001e\u0001\u0000\u0000"+
		"\u0000[]\u0007\u0004\u0000\u0000\\[\u0001\u0000\u0000\u0000]^\u0001\u0000"+
		"\u0000\u0000^\\\u0001\u0000\u0000\u0000^_\u0001\u0000\u0000\u0000_`\u0001"+
		"\u0000\u0000\u0000`a\u0006\u000f\u0000\u0000a \u0001\u0000\u0000\u0000"+
		"\u0003\u0000U^\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}