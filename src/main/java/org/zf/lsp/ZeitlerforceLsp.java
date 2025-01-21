/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package org.zf.lsp;

import org.antlr.v4.runtime.BufferedTokenStream;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;

/**
 *
 * @author Cody
 */
public class ZeitlerforceLsp {
    public static void main(String[] args) {
        String apexClass = "public class Foo {}";
        CharStream charStream = CharStreams.fromString(apexClass);
        SalesforceApexLexer lexer = new SalesforceApexLexer(charStream);

        BufferedTokenStream bufferedTokenStream = new  BufferedTokenStream(lexer); 
        SalesforceApexParser parser = new SalesforceApexParser(bufferedTokenStream);
        SalesforceApexParser.CompilationUnitContext context = parser.compilationUnit();
        System.out.println(context);

        System.out.println("Hello, World!");
    }
}
