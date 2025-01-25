// Generated from .\src\parser\ApexParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ApexParserParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ApexParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ApexParserParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.packageDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.variableModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifier?: (ctx: VariableModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.typeBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBound?: (ctx: TypeBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.enumConstants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstants?: (ctx: EnumConstantsContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.enumConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstant?: (ctx: EnumConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.interfaceBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.genericMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericMethodDeclaration?: (ctx: GenericMethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.genericConstructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericConstructorDeclaration?: (ctx: GenericConstructorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.propertyBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyBodyDeclaration?: (ctx: PropertyBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.interfaceBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.constDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstDeclaration?: (ctx: ConstDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.constantDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDeclarator?: (ctx: ConstantDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.genericInterfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericInterfaceMethodDeclaration?: (ctx: GenericInterfaceMethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.variableDeclarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.variableDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.variableInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.arrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.enumConstantName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstantName?: (ctx: EnumConstantNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.type_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_?: (ctx: Type_Context) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.typeArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgument?: (ctx: TypeArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.qualifiedNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedNameList?: (ctx: QualifiedNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.lastFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLastFormalParameter?: (ctx: LastFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.methodBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodBody?: (ctx: MethodBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.constructorBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorBody?: (ctx: ConstructorBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.annotationName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationName?: (ctx: AnnotationNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.elementValuePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairs?: (ctx: ElementValuePairsContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.elementValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePair?: (ctx: ElementValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.elementValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValue?: (ctx: ElementValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.annotationTypeBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.annotationTypeElementRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.annotationMethodOrConstantRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.annotationMethodRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.annotationConstantRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.defaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultValue?: (ctx: DefaultValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.propertyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyBlock?: (ctx: PropertyBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.getter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetter?: (ctx: GetterContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.setter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetter?: (ctx: SetterContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.catchType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchType?: (ctx: CatchTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.finallyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyBlock?: (ctx: FinallyBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.resourceSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceSpecification?: (ctx: ResourceSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.resources`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResources?: (ctx: ResourcesContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource?: (ctx: ResourceContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.forControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForControl?: (ctx: ForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.enhancedForControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForControl?: (ctx: EnhancedForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.forUpdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForUpdate?: (ctx: ForUpdateContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.parExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParExpression?: (ctx: ParExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.statementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementExpression?: (ctx: StatementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.constantExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.apexDbUpsertExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApexDbUpsertExpression?: (ctx: ApexDbUpsertExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.apexDbExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApexDbExpression?: (ctx: ApexDbExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.creator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreator?: (ctx: CreatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.createdName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreatedName?: (ctx: CreatedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.innerCreator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInnerCreator?: (ctx: InnerCreatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.mapCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapCreatorRest?: (ctx: MapCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.setCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetCreatorRest?: (ctx: SetCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.classCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassCreatorRest?: (ctx: ClassCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.explicitGenericInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.nonWildcardTypeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonWildcardTypeArgumentsOrDiamond?: (ctx: NonWildcardTypeArgumentsOrDiamondContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.superSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperSuffix?: (ctx: SuperSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.explicitGenericInvocationSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitGenericInvocationSuffix?: (ctx: ExplicitGenericInvocationSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParserParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;
}

