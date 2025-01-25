// Generated from .\src\parser\ApexParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CompilationUnitContext } from "./ApexParserParser";
import { PackageDeclarationContext } from "./ApexParserParser";
import { ImportDeclarationContext } from "./ApexParserParser";
import { TypeDeclarationContext } from "./ApexParserParser";
import { ModifierContext } from "./ApexParserParser";
import { ClassOrInterfaceModifierContext } from "./ApexParserParser";
import { VariableModifierContext } from "./ApexParserParser";
import { ClassDeclarationContext } from "./ApexParserParser";
import { TypeParametersContext } from "./ApexParserParser";
import { TypeParameterContext } from "./ApexParserParser";
import { TypeBoundContext } from "./ApexParserParser";
import { EnumDeclarationContext } from "./ApexParserParser";
import { EnumConstantsContext } from "./ApexParserParser";
import { EnumConstantContext } from "./ApexParserParser";
import { EnumBodyDeclarationsContext } from "./ApexParserParser";
import { InterfaceDeclarationContext } from "./ApexParserParser";
import { TypeListContext } from "./ApexParserParser";
import { ClassBodyContext } from "./ApexParserParser";
import { InterfaceBodyContext } from "./ApexParserParser";
import { ClassBodyDeclarationContext } from "./ApexParserParser";
import { MemberDeclarationContext } from "./ApexParserParser";
import { MethodDeclarationContext } from "./ApexParserParser";
import { GenericMethodDeclarationContext } from "./ApexParserParser";
import { ConstructorDeclarationContext } from "./ApexParserParser";
import { GenericConstructorDeclarationContext } from "./ApexParserParser";
import { FieldDeclarationContext } from "./ApexParserParser";
import { PropertyDeclarationContext } from "./ApexParserParser";
import { PropertyBodyDeclarationContext } from "./ApexParserParser";
import { InterfaceBodyDeclarationContext } from "./ApexParserParser";
import { InterfaceMemberDeclarationContext } from "./ApexParserParser";
import { ConstDeclarationContext } from "./ApexParserParser";
import { ConstantDeclaratorContext } from "./ApexParserParser";
import { InterfaceMethodDeclarationContext } from "./ApexParserParser";
import { GenericInterfaceMethodDeclarationContext } from "./ApexParserParser";
import { VariableDeclaratorsContext } from "./ApexParserParser";
import { VariableDeclaratorContext } from "./ApexParserParser";
import { VariableDeclaratorIdContext } from "./ApexParserParser";
import { VariableInitializerContext } from "./ApexParserParser";
import { ArrayInitializerContext } from "./ApexParserParser";
import { EnumConstantNameContext } from "./ApexParserParser";
import { Type_Context } from "./ApexParserParser";
import { ClassOrInterfaceTypeContext } from "./ApexParserParser";
import { PrimitiveTypeContext } from "./ApexParserParser";
import { TypeArgumentsContext } from "./ApexParserParser";
import { TypeArgumentContext } from "./ApexParserParser";
import { QualifiedNameListContext } from "./ApexParserParser";
import { FormalParametersContext } from "./ApexParserParser";
import { FormalParameterListContext } from "./ApexParserParser";
import { FormalParameterContext } from "./ApexParserParser";
import { LastFormalParameterContext } from "./ApexParserParser";
import { MethodBodyContext } from "./ApexParserParser";
import { ConstructorBodyContext } from "./ApexParserParser";
import { QualifiedNameContext } from "./ApexParserParser";
import { LiteralContext } from "./ApexParserParser";
import { AnnotationContext } from "./ApexParserParser";
import { AnnotationNameContext } from "./ApexParserParser";
import { ElementValuePairsContext } from "./ApexParserParser";
import { ElementValuePairContext } from "./ApexParserParser";
import { ElementValueContext } from "./ApexParserParser";
import { ElementValueArrayInitializerContext } from "./ApexParserParser";
import { AnnotationTypeDeclarationContext } from "./ApexParserParser";
import { AnnotationTypeBodyContext } from "./ApexParserParser";
import { AnnotationTypeElementDeclarationContext } from "./ApexParserParser";
import { AnnotationTypeElementRestContext } from "./ApexParserParser";
import { AnnotationMethodOrConstantRestContext } from "./ApexParserParser";
import { AnnotationMethodRestContext } from "./ApexParserParser";
import { AnnotationConstantRestContext } from "./ApexParserParser";
import { DefaultValueContext } from "./ApexParserParser";
import { BlockContext } from "./ApexParserParser";
import { BlockStatementContext } from "./ApexParserParser";
import { LocalVariableDeclarationStatementContext } from "./ApexParserParser";
import { LocalVariableDeclarationContext } from "./ApexParserParser";
import { StatementContext } from "./ApexParserParser";
import { PropertyBlockContext } from "./ApexParserParser";
import { GetterContext } from "./ApexParserParser";
import { SetterContext } from "./ApexParserParser";
import { CatchClauseContext } from "./ApexParserParser";
import { CatchTypeContext } from "./ApexParserParser";
import { FinallyBlockContext } from "./ApexParserParser";
import { ResourceSpecificationContext } from "./ApexParserParser";
import { ResourcesContext } from "./ApexParserParser";
import { ResourceContext } from "./ApexParserParser";
import { ForControlContext } from "./ApexParserParser";
import { ForInitContext } from "./ApexParserParser";
import { EnhancedForControlContext } from "./ApexParserParser";
import { ForUpdateContext } from "./ApexParserParser";
import { ParExpressionContext } from "./ApexParserParser";
import { ExpressionListContext } from "./ApexParserParser";
import { StatementExpressionContext } from "./ApexParserParser";
import { ConstantExpressionContext } from "./ApexParserParser";
import { ApexDbUpsertExpressionContext } from "./ApexParserParser";
import { ApexDbExpressionContext } from "./ApexParserParser";
import { ExpressionContext } from "./ApexParserParser";
import { PrimaryContext } from "./ApexParserParser";
import { CreatorContext } from "./ApexParserParser";
import { CreatedNameContext } from "./ApexParserParser";
import { InnerCreatorContext } from "./ApexParserParser";
import { ArrayCreatorRestContext } from "./ApexParserParser";
import { MapCreatorRestContext } from "./ApexParserParser";
import { SetCreatorRestContext } from "./ApexParserParser";
import { ClassCreatorRestContext } from "./ApexParserParser";
import { ExplicitGenericInvocationContext } from "./ApexParserParser";
import { NonWildcardTypeArgumentsContext } from "./ApexParserParser";
import { TypeArgumentsOrDiamondContext } from "./ApexParserParser";
import { NonWildcardTypeArgumentsOrDiamondContext } from "./ApexParserParser";
import { SuperSuffixContext } from "./ApexParserParser";
import { ExplicitGenericInvocationSuffixContext } from "./ApexParserParser";
import { ArgumentsContext } from "./ApexParserParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ApexParserParser`.
 */
export interface ApexParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ApexParserParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPackageDeclaration?: (ctx: PackageDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.modifier`.
	 * @param ctx the parse tree
	 */
	enterModifier?: (ctx: ModifierContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.modifier`.
	 * @param ctx the parse tree
	 */
	exitModifier?: (ctx: ModifierContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	enterVariableModifier?: (ctx: VariableModifierContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	exitVariableModifier?: (ctx: VariableModifierContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeParameters?: (ctx: TypeParametersContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.typeBound`.
	 * @param ctx the parse tree
	 */
	enterTypeBound?: (ctx: TypeBoundContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.typeBound`.
	 * @param ctx the parse tree
	 */
	exitTypeBound?: (ctx: TypeBoundContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	enterEnumConstants?: (ctx: EnumConstantsContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	exitEnumConstants?: (ctx: EnumConstantsContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	enterEnumConstant?: (ctx: EnumConstantContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	exitEnumConstant?: (ctx: EnumConstantContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 */
	enterEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 */
	exitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.typeList`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.typeList`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	enterInterfaceBody?: (ctx: InterfaceBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	exitInterfaceBody?: (ctx: InterfaceBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMemberDeclaration?: (ctx: MemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.genericMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterGenericMethodDeclaration?: (ctx: GenericMethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.genericMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitGenericMethodDeclaration?: (ctx: GenericMethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.genericConstructorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterGenericConstructorDeclaration?: (ctx: GenericConstructorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.genericConstructorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitGenericConstructorDeclaration?: (ctx: GenericConstructorDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.propertyBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPropertyBodyDeclaration?: (ctx: PropertyBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.propertyBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPropertyBodyDeclaration?: (ctx: PropertyBodyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.interfaceBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.interfaceBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.constDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstDeclaration?: (ctx: ConstDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.constDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstDeclaration?: (ctx: ConstDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.constantDeclarator`.
	 * @param ctx the parse tree
	 */
	enterConstantDeclarator?: (ctx: ConstantDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.constantDeclarator`.
	 * @param ctx the parse tree
	 */
	exitConstantDeclarator?: (ctx: ConstantDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.genericInterfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterGenericInterfaceMethodDeclaration?: (ctx: GenericInterfaceMethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.genericInterfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitGenericInterfaceMethodDeclaration?: (ctx: GenericInterfaceMethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializer?: (ctx: VariableInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializer?: (ctx: VariableInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterArrayInitializer?: (ctx: ArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitArrayInitializer?: (ctx: ArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.enumConstantName`.
	 * @param ctx the parse tree
	 */
	enterEnumConstantName?: (ctx: EnumConstantNameContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.enumConstantName`.
	 * @param ctx the parse tree
	 */
	exitEnumConstantName?: (ctx: EnumConstantNameContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.type_`.
	 * @param ctx the parse tree
	 */
	enterType_?: (ctx: Type_Context) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.type_`.
	 * @param ctx the parse tree
	 */
	exitType_?: (ctx: Type_Context) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	exitTypeArguments?: (ctx: TypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	enterTypeArgument?: (ctx: TypeArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	exitTypeArgument?: (ctx: TypeArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.qualifiedNameList`.
	 * @param ctx the parse tree
	 */
	enterQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.qualifiedNameList`.
	 * @param ctx the parse tree
	 */
	exitQualifiedNameList?: (ctx: QualifiedNameListContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	enterFormalParameters?: (ctx: FormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	exitFormalParameters?: (ctx: FormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	enterFormalParameter?: (ctx: FormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	exitFormalParameter?: (ctx: FormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.lastFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterLastFormalParameter?: (ctx: LastFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.lastFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitLastFormalParameter?: (ctx: LastFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.methodBody`.
	 * @param ctx the parse tree
	 */
	enterMethodBody?: (ctx: MethodBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.methodBody`.
	 * @param ctx the parse tree
	 */
	exitMethodBody?: (ctx: MethodBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.constructorBody`.
	 * @param ctx the parse tree
	 */
	enterConstructorBody?: (ctx: ConstructorBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.constructorBody`.
	 * @param ctx the parse tree
	 */
	exitConstructorBody?: (ctx: ConstructorBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.annotationName`.
	 * @param ctx the parse tree
	 */
	enterAnnotationName?: (ctx: AnnotationNameContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.annotationName`.
	 * @param ctx the parse tree
	 */
	exitAnnotationName?: (ctx: AnnotationNameContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	enterElementValuePairs?: (ctx: ElementValuePairsContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	exitElementValuePairs?: (ctx: ElementValuePairsContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	enterElementValuePair?: (ctx: ElementValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	exitElementValuePair?: (ctx: ElementValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.elementValue`.
	 * @param ctx the parse tree
	 */
	enterElementValue?: (ctx: ElementValueContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.elementValue`.
	 * @param ctx the parse tree
	 */
	exitElementValue?: (ctx: ElementValueContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.annotationTypeBody`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.annotationTypeBody`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.annotationTypeElementRest`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.annotationTypeElementRest`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.annotationMethodOrConstantRest`.
	 * @param ctx the parse tree
	 */
	enterAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.annotationMethodOrConstantRest`.
	 * @param ctx the parse tree
	 */
	exitAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.annotationMethodRest`.
	 * @param ctx the parse tree
	 */
	enterAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.annotationMethodRest`.
	 * @param ctx the parse tree
	 */
	exitAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.annotationConstantRest`.
	 * @param ctx the parse tree
	 */
	enterAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.annotationConstantRest`.
	 * @param ctx the parse tree
	 */
	exitAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	enterDefaultValue?: (ctx: DefaultValueContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	exitDefaultValue?: (ctx: DefaultValueContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.propertyBlock`.
	 * @param ctx the parse tree
	 */
	enterPropertyBlock?: (ctx: PropertyBlockContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.propertyBlock`.
	 * @param ctx the parse tree
	 */
	exitPropertyBlock?: (ctx: PropertyBlockContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.getter`.
	 * @param ctx the parse tree
	 */
	enterGetter?: (ctx: GetterContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.getter`.
	 * @param ctx the parse tree
	 */
	exitGetter?: (ctx: GetterContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.setter`.
	 * @param ctx the parse tree
	 */
	enterSetter?: (ctx: SetterContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.setter`.
	 * @param ctx the parse tree
	 */
	exitSetter?: (ctx: SetterContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatchClause?: (ctx: CatchClauseContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.catchType`.
	 * @param ctx the parse tree
	 */
	enterCatchType?: (ctx: CatchTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.catchType`.
	 * @param ctx the parse tree
	 */
	exitCatchType?: (ctx: CatchTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	enterFinallyBlock?: (ctx: FinallyBlockContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	exitFinallyBlock?: (ctx: FinallyBlockContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.resourceSpecification`.
	 * @param ctx the parse tree
	 */
	enterResourceSpecification?: (ctx: ResourceSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.resourceSpecification`.
	 * @param ctx the parse tree
	 */
	exitResourceSpecification?: (ctx: ResourceSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.resources`.
	 * @param ctx the parse tree
	 */
	enterResources?: (ctx: ResourcesContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.resources`.
	 * @param ctx the parse tree
	 */
	exitResources?: (ctx: ResourcesContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.forControl`.
	 * @param ctx the parse tree
	 */
	enterForControl?: (ctx: ForControlContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.forControl`.
	 * @param ctx the parse tree
	 */
	exitForControl?: (ctx: ForControlContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.forInit`.
	 * @param ctx the parse tree
	 */
	enterForInit?: (ctx: ForInitContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.forInit`.
	 * @param ctx the parse tree
	 */
	exitForInit?: (ctx: ForInitContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	enterEnhancedForControl?: (ctx: EnhancedForControlContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	exitEnhancedForControl?: (ctx: EnhancedForControlContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	enterForUpdate?: (ctx: ForUpdateContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	exitForUpdate?: (ctx: ForUpdateContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.parExpression`.
	 * @param ctx the parse tree
	 */
	enterParExpression?: (ctx: ParExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.parExpression`.
	 * @param ctx the parse tree
	 */
	exitParExpression?: (ctx: ParExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	enterStatementExpression?: (ctx: StatementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	exitStatementExpression?: (ctx: StatementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.constantExpression`.
	 * @param ctx the parse tree
	 */
	enterConstantExpression?: (ctx: ConstantExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.constantExpression`.
	 * @param ctx the parse tree
	 */
	exitConstantExpression?: (ctx: ConstantExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.apexDbUpsertExpression`.
	 * @param ctx the parse tree
	 */
	enterApexDbUpsertExpression?: (ctx: ApexDbUpsertExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.apexDbUpsertExpression`.
	 * @param ctx the parse tree
	 */
	exitApexDbUpsertExpression?: (ctx: ApexDbUpsertExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.apexDbExpression`.
	 * @param ctx the parse tree
	 */
	enterApexDbExpression?: (ctx: ApexDbExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.apexDbExpression`.
	 * @param ctx the parse tree
	 */
	exitApexDbExpression?: (ctx: ApexDbExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.creator`.
	 * @param ctx the parse tree
	 */
	enterCreator?: (ctx: CreatorContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.creator`.
	 * @param ctx the parse tree
	 */
	exitCreator?: (ctx: CreatorContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.createdName`.
	 * @param ctx the parse tree
	 */
	enterCreatedName?: (ctx: CreatedNameContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.createdName`.
	 * @param ctx the parse tree
	 */
	exitCreatedName?: (ctx: CreatedNameContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.innerCreator`.
	 * @param ctx the parse tree
	 */
	enterInnerCreator?: (ctx: InnerCreatorContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.innerCreator`.
	 * @param ctx the parse tree
	 */
	exitInnerCreator?: (ctx: InnerCreatorContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.mapCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterMapCreatorRest?: (ctx: MapCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.mapCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitMapCreatorRest?: (ctx: MapCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.setCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterSetCreatorRest?: (ctx: SetCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.setCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitSetCreatorRest?: (ctx: SetCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.classCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterClassCreatorRest?: (ctx: ClassCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.classCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitClassCreatorRest?: (ctx: ClassCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.explicitGenericInvocation`.
	 * @param ctx the parse tree
	 */
	enterExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.explicitGenericInvocation`.
	 * @param ctx the parse tree
	 */
	exitExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 */
	enterNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 */
	exitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	enterTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	exitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.nonWildcardTypeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	enterNonWildcardTypeArgumentsOrDiamond?: (ctx: NonWildcardTypeArgumentsOrDiamondContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.nonWildcardTypeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	exitNonWildcardTypeArgumentsOrDiamond?: (ctx: NonWildcardTypeArgumentsOrDiamondContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.superSuffix`.
	 * @param ctx the parse tree
	 */
	enterSuperSuffix?: (ctx: SuperSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.superSuffix`.
	 * @param ctx the parse tree
	 */
	exitSuperSuffix?: (ctx: SuperSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.explicitGenericInvocationSuffix`.
	 * @param ctx the parse tree
	 */
	enterExplicitGenericInvocationSuffix?: (ctx: ExplicitGenericInvocationSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.explicitGenericInvocationSuffix`.
	 * @param ctx the parse tree
	 */
	exitExplicitGenericInvocationSuffix?: (ctx: ExplicitGenericInvocationSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `ApexParserParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ApexParserParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;
}

