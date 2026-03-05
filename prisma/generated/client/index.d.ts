
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Banner
 * 
 */
export type Banner = $Result.DefaultSelection<Prisma.$BannerPayload>
/**
 * Model Equipe
 * 
 */
export type Equipe = $Result.DefaultSelection<Prisma.$EquipePayload>
/**
 * Model Curso
 * 
 */
export type Curso = $Result.DefaultSelection<Prisma.$CursoPayload>
/**
 * Model Aluno
 * 
 */
export type Aluno = $Result.DefaultSelection<Prisma.$AlunoPayload>
/**
 * Model Professor
 * 
 */
export type Professor = $Result.DefaultSelection<Prisma.$ProfessorPayload>
/**
 * Model Turma
 * 
 */
export type Turma = $Result.DefaultSelection<Prisma.$TurmaPayload>
/**
 * Model Financeiro
 * 
 */
export type Financeiro = $Result.DefaultSelection<Prisma.$FinanceiroPayload>
/**
 * Model Depoimento
 * 
 */
export type Depoimento = $Result.DefaultSelection<Prisma.$DepoimentoPayload>
/**
 * Model Promocao
 * 
 */
export type Promocao = $Result.DefaultSelection<Prisma.$PromocaoPayload>
/**
 * Model Administrador
 * 
 */
export type Administrador = $Result.DefaultSelection<Prisma.$AdministradorPayload>
/**
 * Model Configuracao
 * 
 */
export type Configuracao = $Result.DefaultSelection<Prisma.$ConfiguracaoPayload>
/**
 * Model Despesa
 * 
 */
export type Despesa = $Result.DefaultSelection<Prisma.$DespesaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Banners
 * const banners = await prisma.banner.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Banners
   * const banners = await prisma.banner.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipe`: Exposes CRUD operations for the **Equipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipes
    * const equipes = await prisma.equipe.findMany()
    * ```
    */
  get equipe(): Prisma.EquipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curso`: Exposes CRUD operations for the **Curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.curso.findMany()
    * ```
    */
  get curso(): Prisma.CursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aluno`: Exposes CRUD operations for the **Aluno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunos
    * const alunos = await prisma.aluno.findMany()
    * ```
    */
  get aluno(): Prisma.AlunoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professor`: Exposes CRUD operations for the **Professor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professor.findMany()
    * ```
    */
  get professor(): Prisma.ProfessorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turma`: Exposes CRUD operations for the **Turma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turmas
    * const turmas = await prisma.turma.findMany()
    * ```
    */
  get turma(): Prisma.TurmaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financeiro`: Exposes CRUD operations for the **Financeiro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Financeiros
    * const financeiros = await prisma.financeiro.findMany()
    * ```
    */
  get financeiro(): Prisma.FinanceiroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.depoimento`: Exposes CRUD operations for the **Depoimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Depoimentos
    * const depoimentos = await prisma.depoimento.findMany()
    * ```
    */
  get depoimento(): Prisma.DepoimentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promocao`: Exposes CRUD operations for the **Promocao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promocaos
    * const promocaos = await prisma.promocao.findMany()
    * ```
    */
  get promocao(): Prisma.PromocaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.administrador`: Exposes CRUD operations for the **Administrador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administradors
    * const administradors = await prisma.administrador.findMany()
    * ```
    */
  get administrador(): Prisma.AdministradorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configuracao`: Exposes CRUD operations for the **Configuracao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configuracaos
    * const configuracaos = await prisma.configuracao.findMany()
    * ```
    */
  get configuracao(): Prisma.ConfiguracaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.despesa`: Exposes CRUD operations for the **Despesa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Despesas
    * const despesas = await prisma.despesa.findMany()
    * ```
    */
  get despesa(): Prisma.DespesaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Banner: 'Banner',
    Equipe: 'Equipe',
    Curso: 'Curso',
    Aluno: 'Aluno',
    Professor: 'Professor',
    Turma: 'Turma',
    Financeiro: 'Financeiro',
    Depoimento: 'Depoimento',
    Promocao: 'Promocao',
    Administrador: 'Administrador',
    Configuracao: 'Configuracao',
    Despesa: 'Despesa'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "banner" | "equipe" | "curso" | "aluno" | "professor" | "turma" | "financeiro" | "depoimento" | "promocao" | "administrador" | "configuracao" | "despesa"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Banner: {
        payload: Prisma.$BannerPayload<ExtArgs>
        fields: Prisma.BannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BannerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      Equipe: {
        payload: Prisma.$EquipePayload<ExtArgs>
        fields: Prisma.EquipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          findFirst: {
            args: Prisma.EquipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          findMany: {
            args: Prisma.EquipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>[]
          }
          create: {
            args: Prisma.EquipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          createMany: {
            args: Prisma.EquipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>[]
          }
          delete: {
            args: Prisma.EquipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          update: {
            args: Prisma.EquipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          deleteMany: {
            args: Prisma.EquipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>[]
          }
          upsert: {
            args: Prisma.EquipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          aggregate: {
            args: Prisma.EquipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipe>
          }
          groupBy: {
            args: Prisma.EquipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipeCountArgs<ExtArgs>
            result: $Utils.Optional<EquipeCountAggregateOutputType> | number
          }
        }
      }
      Curso: {
        payload: Prisma.$CursoPayload<ExtArgs>
        fields: Prisma.CursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findFirst: {
            args: Prisma.CursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findMany: {
            args: Prisma.CursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          create: {
            args: Prisma.CursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          createMany: {
            args: Prisma.CursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          delete: {
            args: Prisma.CursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          update: {
            args: Prisma.CursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          deleteMany: {
            args: Prisma.CursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          upsert: {
            args: Prisma.CursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          aggregate: {
            args: Prisma.CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurso>
          }
          groupBy: {
            args: Prisma.CursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CursoCountArgs<ExtArgs>
            result: $Utils.Optional<CursoCountAggregateOutputType> | number
          }
        }
      }
      Aluno: {
        payload: Prisma.$AlunoPayload<ExtArgs>
        fields: Prisma.AlunoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlunoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlunoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findFirst: {
            args: Prisma.AlunoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlunoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findMany: {
            args: Prisma.AlunoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          create: {
            args: Prisma.AlunoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          createMany: {
            args: Prisma.AlunoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlunoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          delete: {
            args: Prisma.AlunoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          update: {
            args: Prisma.AlunoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          deleteMany: {
            args: Prisma.AlunoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlunoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlunoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          upsert: {
            args: Prisma.AlunoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          aggregate: {
            args: Prisma.AlunoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAluno>
          }
          groupBy: {
            args: Prisma.AlunoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlunoCountArgs<ExtArgs>
            result: $Utils.Optional<AlunoCountAggregateOutputType> | number
          }
        }
      }
      Professor: {
        payload: Prisma.$ProfessorPayload<ExtArgs>
        fields: Prisma.ProfessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findFirst: {
            args: Prisma.ProfessorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findMany: {
            args: Prisma.ProfessorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          create: {
            args: Prisma.ProfessorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          createMany: {
            args: Prisma.ProfessorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          delete: {
            args: Prisma.ProfessorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          update: {
            args: Prisma.ProfessorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          upsert: {
            args: Prisma.ProfessorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          aggregate: {
            args: Prisma.ProfessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor>
          }
          groupBy: {
            args: Prisma.ProfessorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCountAggregateOutputType> | number
          }
        }
      }
      Turma: {
        payload: Prisma.$TurmaPayload<ExtArgs>
        fields: Prisma.TurmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          findFirst: {
            args: Prisma.TurmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          findMany: {
            args: Prisma.TurmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>[]
          }
          create: {
            args: Prisma.TurmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          createMany: {
            args: Prisma.TurmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TurmaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>[]
          }
          delete: {
            args: Prisma.TurmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          update: {
            args: Prisma.TurmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          deleteMany: {
            args: Prisma.TurmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TurmaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>[]
          }
          upsert: {
            args: Prisma.TurmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          aggregate: {
            args: Prisma.TurmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurma>
          }
          groupBy: {
            args: Prisma.TurmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurmaCountArgs<ExtArgs>
            result: $Utils.Optional<TurmaCountAggregateOutputType> | number
          }
        }
      }
      Financeiro: {
        payload: Prisma.$FinanceiroPayload<ExtArgs>
        fields: Prisma.FinanceiroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinanceiroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinanceiroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>
          }
          findFirst: {
            args: Prisma.FinanceiroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinanceiroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>
          }
          findMany: {
            args: Prisma.FinanceiroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>[]
          }
          create: {
            args: Prisma.FinanceiroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>
          }
          createMany: {
            args: Prisma.FinanceiroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinanceiroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>[]
          }
          delete: {
            args: Prisma.FinanceiroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>
          }
          update: {
            args: Prisma.FinanceiroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>
          }
          deleteMany: {
            args: Prisma.FinanceiroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinanceiroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinanceiroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>[]
          }
          upsert: {
            args: Prisma.FinanceiroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceiroPayload>
          }
          aggregate: {
            args: Prisma.FinanceiroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinanceiro>
          }
          groupBy: {
            args: Prisma.FinanceiroGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinanceiroGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinanceiroCountArgs<ExtArgs>
            result: $Utils.Optional<FinanceiroCountAggregateOutputType> | number
          }
        }
      }
      Depoimento: {
        payload: Prisma.$DepoimentoPayload<ExtArgs>
        fields: Prisma.DepoimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepoimentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepoimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepoimentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepoimentoPayload>
          }
          findFirst: {
            args: Prisma.DepoimentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepoimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepoimentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepoimentoPayload>
          }
          findMany: {
            args: Prisma.DepoimentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepoimentoPayload>[]
          }
          create: {
            args: Prisma.DepoimentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepoimentoPayload>
          }
          createMany: {
            args: Prisma.DepoimentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepoimentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepoimentoPayload>[]
          }
          delete: {
            args: Prisma.DepoimentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepoimentoPayload>
          }
          update: {
            args: Prisma.DepoimentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepoimentoPayload>
          }
          deleteMany: {
            args: Prisma.DepoimentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepoimentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepoimentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepoimentoPayload>[]
          }
          upsert: {
            args: Prisma.DepoimentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepoimentoPayload>
          }
          aggregate: {
            args: Prisma.DepoimentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepoimento>
          }
          groupBy: {
            args: Prisma.DepoimentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepoimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepoimentoCountArgs<ExtArgs>
            result: $Utils.Optional<DepoimentoCountAggregateOutputType> | number
          }
        }
      }
      Promocao: {
        payload: Prisma.$PromocaoPayload<ExtArgs>
        fields: Prisma.PromocaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromocaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromocaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>
          }
          findFirst: {
            args: Prisma.PromocaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromocaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>
          }
          findMany: {
            args: Prisma.PromocaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>[]
          }
          create: {
            args: Prisma.PromocaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>
          }
          createMany: {
            args: Prisma.PromocaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromocaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>[]
          }
          delete: {
            args: Prisma.PromocaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>
          }
          update: {
            args: Prisma.PromocaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>
          }
          deleteMany: {
            args: Prisma.PromocaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromocaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromocaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>[]
          }
          upsert: {
            args: Prisma.PromocaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>
          }
          aggregate: {
            args: Prisma.PromocaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromocao>
          }
          groupBy: {
            args: Prisma.PromocaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromocaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromocaoCountArgs<ExtArgs>
            result: $Utils.Optional<PromocaoCountAggregateOutputType> | number
          }
        }
      }
      Administrador: {
        payload: Prisma.$AdministradorPayload<ExtArgs>
        fields: Prisma.AdministradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findFirst: {
            args: Prisma.AdministradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findMany: {
            args: Prisma.AdministradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          create: {
            args: Prisma.AdministradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          createMany: {
            args: Prisma.AdministradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdministradorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          delete: {
            args: Prisma.AdministradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          update: {
            args: Prisma.AdministradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          deleteMany: {
            args: Prisma.AdministradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdministradorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          upsert: {
            args: Prisma.AdministradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          aggregate: {
            args: Prisma.AdministradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrador>
          }
          groupBy: {
            args: Prisma.AdministradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministradorCountArgs<ExtArgs>
            result: $Utils.Optional<AdministradorCountAggregateOutputType> | number
          }
        }
      }
      Configuracao: {
        payload: Prisma.$ConfiguracaoPayload<ExtArgs>
        fields: Prisma.ConfiguracaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfiguracaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfiguracaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          findFirst: {
            args: Prisma.ConfiguracaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfiguracaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          findMany: {
            args: Prisma.ConfiguracaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>[]
          }
          create: {
            args: Prisma.ConfiguracaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          createMany: {
            args: Prisma.ConfiguracaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfiguracaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>[]
          }
          delete: {
            args: Prisma.ConfiguracaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          update: {
            args: Prisma.ConfiguracaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          deleteMany: {
            args: Prisma.ConfiguracaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfiguracaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfiguracaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>[]
          }
          upsert: {
            args: Prisma.ConfiguracaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          aggregate: {
            args: Prisma.ConfiguracaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguracao>
          }
          groupBy: {
            args: Prisma.ConfiguracaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfiguracaoCountArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracaoCountAggregateOutputType> | number
          }
        }
      }
      Despesa: {
        payload: Prisma.$DespesaPayload<ExtArgs>
        fields: Prisma.DespesaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DespesaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DespesaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DespesaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DespesaPayload>
          }
          findFirst: {
            args: Prisma.DespesaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DespesaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DespesaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DespesaPayload>
          }
          findMany: {
            args: Prisma.DespesaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DespesaPayload>[]
          }
          create: {
            args: Prisma.DespesaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DespesaPayload>
          }
          createMany: {
            args: Prisma.DespesaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DespesaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DespesaPayload>[]
          }
          delete: {
            args: Prisma.DespesaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DespesaPayload>
          }
          update: {
            args: Prisma.DespesaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DespesaPayload>
          }
          deleteMany: {
            args: Prisma.DespesaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DespesaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DespesaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DespesaPayload>[]
          }
          upsert: {
            args: Prisma.DespesaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DespesaPayload>
          }
          aggregate: {
            args: Prisma.DespesaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDespesa>
          }
          groupBy: {
            args: Prisma.DespesaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DespesaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DespesaCountArgs<ExtArgs>
            result: $Utils.Optional<DespesaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    banner?: BannerOmit
    equipe?: EquipeOmit
    curso?: CursoOmit
    aluno?: AlunoOmit
    professor?: ProfessorOmit
    turma?: TurmaOmit
    financeiro?: FinanceiroOmit
    depoimento?: DepoimentoOmit
    promocao?: PromocaoOmit
    administrador?: AdministradorOmit
    configuracao?: ConfiguracaoOmit
    despesa?: DespesaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CursoCountOutputType
   */

  export type CursoCountOutputType = {
    alunos: number
    turmas: number
  }

  export type CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alunos?: boolean | CursoCountOutputTypeCountAlunosArgs
    turmas?: boolean | CursoCountOutputTypeCountTurmasArgs
  }

  // Custom InputTypes
  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursoCountOutputType
     */
    select?: CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountAlunosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountTurmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
  }


  /**
   * Count Type AlunoCountOutputType
   */

  export type AlunoCountOutputType = {
    financeiros: number
    depoimentos: number
  }

  export type AlunoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financeiros?: boolean | AlunoCountOutputTypeCountFinanceirosArgs
    depoimentos?: boolean | AlunoCountOutputTypeCountDepoimentosArgs
  }

  // Custom InputTypes
  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoCountOutputType
     */
    select?: AlunoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountFinanceirosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceiroWhereInput
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountDepoimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepoimentoWhereInput
  }


  /**
   * Count Type ProfessorCountOutputType
   */

  export type ProfessorCountOutputType = {
    turmas: number
  }

  export type ProfessorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turmas?: boolean | ProfessorCountOutputTypeCountTurmasArgs
  }

  // Custom InputTypes
  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCountOutputType
     */
    select?: ProfessorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountTurmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
  }


  /**
   * Count Type TurmaCountOutputType
   */

  export type TurmaCountOutputType = {
    alunos: number
  }

  export type TurmaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alunos?: boolean | TurmaCountOutputTypeCountAlunosArgs
  }

  // Custom InputTypes
  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurmaCountOutputType
     */
    select?: TurmaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeCountAlunosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerAvgAggregateOutputType = {
    ordem: number | null
  }

  export type BannerSumAggregateOutputType = {
    ordem: number | null
  }

  export type BannerMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    subtitulo: string | null
    descricao: string | null
    imagem: string | null
    link: string | null
    ordem: number | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    subtitulo: string | null
    descricao: string | null
    imagem: string | null
    link: string | null
    ordem: number | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerCountAggregateOutputType = {
    id: number
    titulo: number
    subtitulo: number
    descricao: number
    imagem: number
    link: number
    ordem: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BannerAvgAggregateInputType = {
    ordem?: true
  }

  export type BannerSumAggregateInputType = {
    ordem?: true
  }

  export type BannerMinAggregateInputType = {
    id?: true
    titulo?: true
    subtitulo?: true
    descricao?: true
    imagem?: true
    link?: true
    ordem?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerMaxAggregateInputType = {
    id?: true
    titulo?: true
    subtitulo?: true
    descricao?: true
    imagem?: true
    link?: true
    ordem?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerCountAggregateInputType = {
    id?: true
    titulo?: true
    subtitulo?: true
    descricao?: true
    imagem?: true
    link?: true
    ordem?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithAggregationInput | BannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _avg?: BannerAvgAggregateInputType
    _sum?: BannerSumAggregateInputType
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    id: string
    titulo: string | null
    subtitulo: string | null
    descricao: string | null
    imagem: string
    link: string | null
    ordem: number
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    subtitulo?: boolean
    descricao?: boolean
    imagem?: boolean
    link?: boolean
    ordem?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    subtitulo?: boolean
    descricao?: boolean
    imagem?: boolean
    link?: boolean
    ordem?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    subtitulo?: boolean
    descricao?: boolean
    imagem?: boolean
    link?: boolean
    ordem?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectScalar = {
    id?: boolean
    titulo?: boolean
    subtitulo?: boolean
    descricao?: boolean
    imagem?: boolean
    link?: boolean
    ordem?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "subtitulo" | "descricao" | "imagem" | "link" | "ordem" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["banner"]>

  export type $BannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string | null
      subtitulo: string | null
      descricao: string | null
      imagem: string
      link: string | null
      ordem: number
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type BannerGetPayload<S extends boolean | null | undefined | BannerDefaultArgs> = $Result.GetResult<Prisma.$BannerPayload, S>

  type BannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface BannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banner'], meta: { name: 'Banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerFindUniqueArgs>(args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerFindFirstArgs>(args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannerFindManyArgs>(args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends BannerCreateArgs>(args: SelectSubset<T, BannerCreateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banners.
     * @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerCreateManyArgs>(args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banners and returns the data saved in the database.
     * @param {BannerCreateManyAndReturnArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BannerCreateManyAndReturnArgs>(args?: SelectSubset<T, BannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends BannerDeleteArgs>(args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerUpdateArgs>(args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerDeleteManyArgs>(args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerUpdateManyArgs>(args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners and returns the data updated in the database.
     * @param {BannerUpdateManyAndReturnArgs} args - Arguments to update many Banners.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BannerUpdateManyAndReturnArgs>(args: SelectSubset<T, BannerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends BannerUpsertArgs>(args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banner model
   */
  readonly fields: BannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Banner model
   */
  interface BannerFieldRefs {
    readonly id: FieldRef<"Banner", 'String'>
    readonly titulo: FieldRef<"Banner", 'String'>
    readonly subtitulo: FieldRef<"Banner", 'String'>
    readonly descricao: FieldRef<"Banner", 'String'>
    readonly imagem: FieldRef<"Banner", 'String'>
    readonly link: FieldRef<"Banner", 'String'>
    readonly ordem: FieldRef<"Banner", 'Int'>
    readonly ativo: FieldRef<"Banner", 'Boolean'>
    readonly createdAt: FieldRef<"Banner", 'DateTime'>
    readonly updatedAt: FieldRef<"Banner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Banner findUnique
   */
  export type BannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findFirst
   */
  export type BannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner create
   */
  export type BannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data needed to create a Banner.
     */
    data: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }

  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner createManyAndReturn
   */
  export type BannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner update
   */
  export type BannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banner updateManyAndReturn
   */
  export type BannerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }

  /**
   * Banner delete
   */
  export type BannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to delete.
     */
    limit?: number
  }

  /**
   * Banner without action
   */
  export type BannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
  }


  /**
   * Model Equipe
   */

  export type AggregateEquipe = {
    _count: EquipeCountAggregateOutputType | null
    _min: EquipeMinAggregateOutputType | null
    _max: EquipeMaxAggregateOutputType | null
  }

  export type EquipeMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cargo: string | null
    imagem: string | null
    descricao: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipeMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cargo: string | null
    imagem: string | null
    descricao: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipeCountAggregateOutputType = {
    id: number
    nome: number
    cargo: number
    imagem: number
    descricao: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EquipeMinAggregateInputType = {
    id?: true
    nome?: true
    cargo?: true
    imagem?: true
    descricao?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipeMaxAggregateInputType = {
    id?: true
    nome?: true
    cargo?: true
    imagem?: true
    descricao?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipeCountAggregateInputType = {
    id?: true
    nome?: true
    cargo?: true
    imagem?: true
    descricao?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipe to aggregate.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipes
    **/
    _count?: true | EquipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipeMaxAggregateInputType
  }

  export type GetEquipeAggregateType<T extends EquipeAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipe[P]>
      : GetScalarType<T[P], AggregateEquipe[P]>
  }




  export type EquipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipeWhereInput
    orderBy?: EquipeOrderByWithAggregationInput | EquipeOrderByWithAggregationInput[]
    by: EquipeScalarFieldEnum[] | EquipeScalarFieldEnum
    having?: EquipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipeCountAggregateInputType | true
    _min?: EquipeMinAggregateInputType
    _max?: EquipeMaxAggregateInputType
  }

  export type EquipeGroupByOutputType = {
    id: string
    nome: string
    cargo: string
    imagem: string
    descricao: string
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: EquipeCountAggregateOutputType | null
    _min: EquipeMinAggregateOutputType | null
    _max: EquipeMaxAggregateOutputType | null
  }

  type GetEquipeGroupByPayload<T extends EquipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipeGroupByOutputType[P]>
            : GetScalarType<T[P], EquipeGroupByOutputType[P]>
        }
      >
    >


  export type EquipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cargo?: boolean
    imagem?: boolean
    descricao?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cargo?: boolean
    imagem?: boolean
    descricao?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cargo?: boolean
    imagem?: boolean
    descricao?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectScalar = {
    id?: boolean
    nome?: boolean
    cargo?: boolean
    imagem?: boolean
    descricao?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EquipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cargo" | "imagem" | "descricao" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["equipe"]>

  export type $EquipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipe"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cargo: string
      imagem: string
      descricao: string
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equipe"]>
    composites: {}
  }

  type EquipeGetPayload<S extends boolean | null | undefined | EquipeDefaultArgs> = $Result.GetResult<Prisma.$EquipePayload, S>

  type EquipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipeCountAggregateInputType | true
    }

  export interface EquipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipe'], meta: { name: 'Equipe' } }
    /**
     * Find zero or one Equipe that matches the filter.
     * @param {EquipeFindUniqueArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipeFindUniqueArgs>(args: SelectSubset<T, EquipeFindUniqueArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipeFindUniqueOrThrowArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipeFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeFindFirstArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipeFindFirstArgs>(args?: SelectSubset<T, EquipeFindFirstArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeFindFirstOrThrowArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipeFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipes
     * const equipes = await prisma.equipe.findMany()
     * 
     * // Get first 10 Equipes
     * const equipes = await prisma.equipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipeWithIdOnly = await prisma.equipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipeFindManyArgs>(args?: SelectSubset<T, EquipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipe.
     * @param {EquipeCreateArgs} args - Arguments to create a Equipe.
     * @example
     * // Create one Equipe
     * const Equipe = await prisma.equipe.create({
     *   data: {
     *     // ... data to create a Equipe
     *   }
     * })
     * 
     */
    create<T extends EquipeCreateArgs>(args: SelectSubset<T, EquipeCreateArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipes.
     * @param {EquipeCreateManyArgs} args - Arguments to create many Equipes.
     * @example
     * // Create many Equipes
     * const equipe = await prisma.equipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipeCreateManyArgs>(args?: SelectSubset<T, EquipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipes and returns the data saved in the database.
     * @param {EquipeCreateManyAndReturnArgs} args - Arguments to create many Equipes.
     * @example
     * // Create many Equipes
     * const equipe = await prisma.equipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipes and only return the `id`
     * const equipeWithIdOnly = await prisma.equipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipeCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipe.
     * @param {EquipeDeleteArgs} args - Arguments to delete one Equipe.
     * @example
     * // Delete one Equipe
     * const Equipe = await prisma.equipe.delete({
     *   where: {
     *     // ... filter to delete one Equipe
     *   }
     * })
     * 
     */
    delete<T extends EquipeDeleteArgs>(args: SelectSubset<T, EquipeDeleteArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipe.
     * @param {EquipeUpdateArgs} args - Arguments to update one Equipe.
     * @example
     * // Update one Equipe
     * const equipe = await prisma.equipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipeUpdateArgs>(args: SelectSubset<T, EquipeUpdateArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipes.
     * @param {EquipeDeleteManyArgs} args - Arguments to filter Equipes to delete.
     * @example
     * // Delete a few Equipes
     * const { count } = await prisma.equipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipeDeleteManyArgs>(args?: SelectSubset<T, EquipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipes
     * const equipe = await prisma.equipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipeUpdateManyArgs>(args: SelectSubset<T, EquipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipes and returns the data updated in the database.
     * @param {EquipeUpdateManyAndReturnArgs} args - Arguments to update many Equipes.
     * @example
     * // Update many Equipes
     * const equipe = await prisma.equipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipes and only return the `id`
     * const equipeWithIdOnly = await prisma.equipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipeUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipe.
     * @param {EquipeUpsertArgs} args - Arguments to update or create a Equipe.
     * @example
     * // Update or create a Equipe
     * const equipe = await prisma.equipe.upsert({
     *   create: {
     *     // ... data to create a Equipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipe we want to update
     *   }
     * })
     */
    upsert<T extends EquipeUpsertArgs>(args: SelectSubset<T, EquipeUpsertArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeCountArgs} args - Arguments to filter Equipes to count.
     * @example
     * // Count the number of Equipes
     * const count = await prisma.equipe.count({
     *   where: {
     *     // ... the filter for the Equipes we want to count
     *   }
     * })
    **/
    count<T extends EquipeCountArgs>(
      args?: Subset<T, EquipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipeAggregateArgs>(args: Subset<T, EquipeAggregateArgs>): Prisma.PrismaPromise<GetEquipeAggregateType<T>>

    /**
     * Group by Equipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipeGroupByArgs['orderBy'] }
        : { orderBy?: EquipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipe model
   */
  readonly fields: EquipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipe model
   */
  interface EquipeFieldRefs {
    readonly id: FieldRef<"Equipe", 'String'>
    readonly nome: FieldRef<"Equipe", 'String'>
    readonly cargo: FieldRef<"Equipe", 'String'>
    readonly imagem: FieldRef<"Equipe", 'String'>
    readonly descricao: FieldRef<"Equipe", 'String'>
    readonly ativo: FieldRef<"Equipe", 'Boolean'>
    readonly createdAt: FieldRef<"Equipe", 'DateTime'>
    readonly updatedAt: FieldRef<"Equipe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Equipe findUnique
   */
  export type EquipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe findUniqueOrThrow
   */
  export type EquipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe findFirst
   */
  export type EquipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipes.
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipes.
     */
    distinct?: EquipeScalarFieldEnum | EquipeScalarFieldEnum[]
  }

  /**
   * Equipe findFirstOrThrow
   */
  export type EquipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipes.
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipes.
     */
    distinct?: EquipeScalarFieldEnum | EquipeScalarFieldEnum[]
  }

  /**
   * Equipe findMany
   */
  export type EquipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Filter, which Equipes to fetch.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipes.
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    distinct?: EquipeScalarFieldEnum | EquipeScalarFieldEnum[]
  }

  /**
   * Equipe create
   */
  export type EquipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * The data needed to create a Equipe.
     */
    data: XOR<EquipeCreateInput, EquipeUncheckedCreateInput>
  }

  /**
   * Equipe createMany
   */
  export type EquipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipes.
     */
    data: EquipeCreateManyInput | EquipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipe createManyAndReturn
   */
  export type EquipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * The data used to create many Equipes.
     */
    data: EquipeCreateManyInput | EquipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipe update
   */
  export type EquipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * The data needed to update a Equipe.
     */
    data: XOR<EquipeUpdateInput, EquipeUncheckedUpdateInput>
    /**
     * Choose, which Equipe to update.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe updateMany
   */
  export type EquipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipes.
     */
    data: XOR<EquipeUpdateManyMutationInput, EquipeUncheckedUpdateManyInput>
    /**
     * Filter which Equipes to update
     */
    where?: EquipeWhereInput
    /**
     * Limit how many Equipes to update.
     */
    limit?: number
  }

  /**
   * Equipe updateManyAndReturn
   */
  export type EquipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * The data used to update Equipes.
     */
    data: XOR<EquipeUpdateManyMutationInput, EquipeUncheckedUpdateManyInput>
    /**
     * Filter which Equipes to update
     */
    where?: EquipeWhereInput
    /**
     * Limit how many Equipes to update.
     */
    limit?: number
  }

  /**
   * Equipe upsert
   */
  export type EquipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * The filter to search for the Equipe to update in case it exists.
     */
    where: EquipeWhereUniqueInput
    /**
     * In case the Equipe found by the `where` argument doesn't exist, create a new Equipe with this data.
     */
    create: XOR<EquipeCreateInput, EquipeUncheckedCreateInput>
    /**
     * In case the Equipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipeUpdateInput, EquipeUncheckedUpdateInput>
  }

  /**
   * Equipe delete
   */
  export type EquipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Filter which Equipe to delete.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe deleteMany
   */
  export type EquipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipes to delete
     */
    where?: EquipeWhereInput
    /**
     * Limit how many Equipes to delete.
     */
    limit?: number
  }

  /**
   * Equipe without action
   */
  export type EquipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
  }


  /**
   * Model Curso
   */

  export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  export type CursoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    duracao: string | null
    nivel: string | null
    preco: string | null
    imagem: string | null
    conteudo: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CursoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    duracao: string | null
    nivel: string | null
    preco: string | null
    imagem: string | null
    conteudo: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CursoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    duracao: number
    nivel: number
    preco: number
    imagem: number
    conteudo: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CursoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    duracao?: true
    nivel?: true
    preco?: true
    imagem?: true
    conteudo?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CursoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    duracao?: true
    nivel?: true
    preco?: true
    imagem?: true
    conteudo?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CursoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    duracao?: true
    nivel?: true
    preco?: true
    imagem?: true
    conteudo?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curso to aggregate.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cursos
    **/
    _count?: true | CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursoMaxAggregateInputType
  }

  export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurso[P]>
      : GetScalarType<T[P], AggregateCurso[P]>
  }




  export type CursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithAggregationInput | CursoOrderByWithAggregationInput[]
    by: CursoScalarFieldEnum[] | CursoScalarFieldEnum
    having?: CursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursoCountAggregateInputType | true
    _min?: CursoMinAggregateInputType
    _max?: CursoMaxAggregateInputType
  }

  export type CursoGroupByOutputType = {
    id: string
    nome: string
    descricao: string
    duracao: string
    nivel: string
    preco: string
    imagem: string
    conteudo: string | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: CursoCountAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  type GetCursoGroupByPayload<T extends CursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursoGroupByOutputType[P]>
            : GetScalarType<T[P], CursoGroupByOutputType[P]>
        }
      >
    >


  export type CursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    duracao?: boolean
    nivel?: boolean
    preco?: boolean
    imagem?: boolean
    conteudo?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alunos?: boolean | Curso$alunosArgs<ExtArgs>
    turmas?: boolean | Curso$turmasArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    duracao?: boolean
    nivel?: boolean
    preco?: boolean
    imagem?: boolean
    conteudo?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    duracao?: boolean
    nivel?: boolean
    preco?: boolean
    imagem?: boolean
    conteudo?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    duracao?: boolean
    nivel?: boolean
    preco?: boolean
    imagem?: boolean
    conteudo?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "duracao" | "nivel" | "preco" | "imagem" | "conteudo" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["curso"]>
  export type CursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alunos?: boolean | Curso$alunosArgs<ExtArgs>
    turmas?: boolean | Curso$turmasArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curso"
    objects: {
      alunos: Prisma.$AlunoPayload<ExtArgs>[]
      turmas: Prisma.$TurmaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string
      duracao: string
      nivel: string
      preco: string
      imagem: string
      conteudo: string | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["curso"]>
    composites: {}
  }

  type CursoGetPayload<S extends boolean | null | undefined | CursoDefaultArgs> = $Result.GetResult<Prisma.$CursoPayload, S>

  type CursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursoCountAggregateInputType | true
    }

  export interface CursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curso'], meta: { name: 'Curso' } }
    /**
     * Find zero or one Curso that matches the filter.
     * @param {CursoFindUniqueArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursoFindUniqueArgs>(args: SelectSubset<T, CursoFindUniqueArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CursoFindUniqueOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursoFindUniqueOrThrowArgs>(args: SelectSubset<T, CursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursoFindFirstArgs>(args?: SelectSubset<T, CursoFindFirstArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursoFindFirstOrThrowArgs>(args?: SelectSubset<T, CursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.curso.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.curso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cursoWithIdOnly = await prisma.curso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CursoFindManyArgs>(args?: SelectSubset<T, CursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curso.
     * @param {CursoCreateArgs} args - Arguments to create a Curso.
     * @example
     * // Create one Curso
     * const Curso = await prisma.curso.create({
     *   data: {
     *     // ... data to create a Curso
     *   }
     * })
     * 
     */
    create<T extends CursoCreateArgs>(args: SelectSubset<T, CursoCreateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {CursoCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursoCreateManyArgs>(args?: SelectSubset<T, CursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cursos and returns the data saved in the database.
     * @param {CursoCreateManyAndReturnArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cursos and only return the `id`
     * const cursoWithIdOnly = await prisma.curso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CursoCreateManyAndReturnArgs>(args?: SelectSubset<T, CursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curso.
     * @param {CursoDeleteArgs} args - Arguments to delete one Curso.
     * @example
     * // Delete one Curso
     * const Curso = await prisma.curso.delete({
     *   where: {
     *     // ... filter to delete one Curso
     *   }
     * })
     * 
     */
    delete<T extends CursoDeleteArgs>(args: SelectSubset<T, CursoDeleteArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curso.
     * @param {CursoUpdateArgs} args - Arguments to update one Curso.
     * @example
     * // Update one Curso
     * const curso = await prisma.curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursoUpdateArgs>(args: SelectSubset<T, CursoUpdateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {CursoDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursoDeleteManyArgs>(args?: SelectSubset<T, CursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursoUpdateManyArgs>(args: SelectSubset<T, CursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos and returns the data updated in the database.
     * @param {CursoUpdateManyAndReturnArgs} args - Arguments to update many Cursos.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cursos and only return the `id`
     * const cursoWithIdOnly = await prisma.curso.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CursoUpdateManyAndReturnArgs>(args: SelectSubset<T, CursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curso.
     * @param {CursoUpsertArgs} args - Arguments to update or create a Curso.
     * @example
     * // Update or create a Curso
     * const curso = await prisma.curso.upsert({
     *   create: {
     *     // ... data to create a Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curso we want to update
     *   }
     * })
     */
    upsert<T extends CursoUpsertArgs>(args: SelectSubset<T, CursoUpsertArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.curso.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends CursoCountArgs>(
      args?: Subset<T, CursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CursoAggregateArgs>(args: Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>

    /**
     * Group by Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursoGroupByArgs['orderBy'] }
        : { orderBy?: CursoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curso model
   */
  readonly fields: CursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alunos<T extends Curso$alunosArgs<ExtArgs> = {}>(args?: Subset<T, Curso$alunosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    turmas<T extends Curso$turmasArgs<ExtArgs> = {}>(args?: Subset<T, Curso$turmasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Curso model
   */
  interface CursoFieldRefs {
    readonly id: FieldRef<"Curso", 'String'>
    readonly nome: FieldRef<"Curso", 'String'>
    readonly descricao: FieldRef<"Curso", 'String'>
    readonly duracao: FieldRef<"Curso", 'String'>
    readonly nivel: FieldRef<"Curso", 'String'>
    readonly preco: FieldRef<"Curso", 'String'>
    readonly imagem: FieldRef<"Curso", 'String'>
    readonly conteudo: FieldRef<"Curso", 'String'>
    readonly ativo: FieldRef<"Curso", 'Boolean'>
    readonly createdAt: FieldRef<"Curso", 'DateTime'>
    readonly updatedAt: FieldRef<"Curso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Curso findUnique
   */
  export type CursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findUniqueOrThrow
   */
  export type CursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findFirst
   */
  export type CursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findFirstOrThrow
   */
  export type CursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findMany
   */
  export type CursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso create
   */
  export type CursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to create a Curso.
     */
    data: XOR<CursoCreateInput, CursoUncheckedCreateInput>
  }

  /**
   * Curso createMany
   */
  export type CursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso createManyAndReturn
   */
  export type CursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso update
   */
  export type CursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to update a Curso.
     */
    data: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
    /**
     * Choose, which Curso to update.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso updateMany
   */
  export type CursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso updateManyAndReturn
   */
  export type CursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso upsert
   */
  export type CursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The filter to search for the Curso to update in case it exists.
     */
    where: CursoWhereUniqueInput
    /**
     * In case the Curso found by the `where` argument doesn't exist, create a new Curso with this data.
     */
    create: XOR<CursoCreateInput, CursoUncheckedCreateInput>
    /**
     * In case the Curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
  }

  /**
   * Curso delete
   */
  export type CursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter which Curso to delete.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso deleteMany
   */
  export type CursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to delete
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to delete.
     */
    limit?: number
  }

  /**
   * Curso.alunos
   */
  export type Curso$alunosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    cursor?: AlunoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Curso.turmas
   */
  export type Curso$turmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    cursor?: TurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Curso without action
   */
  export type CursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
  }


  /**
   * Model Aluno
   */

  export type AggregateAluno = {
    _count: AlunoCountAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  export type AlunoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    endereco: string | null
    foto: string | null
    nomePais: string | null
    telefoneContato: string | null
    cursoId: string | null
    turmaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlunoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    endereco: string | null
    foto: string | null
    nomePais: string | null
    telefoneContato: string | null
    cursoId: string | null
    turmaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlunoCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    endereco: number
    foto: number
    nomePais: number
    telefoneContato: number
    cursoId: number
    turmaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlunoMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    endereco?: true
    foto?: true
    nomePais?: true
    telefoneContato?: true
    cursoId?: true
    turmaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlunoMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    endereco?: true
    foto?: true
    nomePais?: true
    telefoneContato?: true
    cursoId?: true
    turmaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlunoCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    endereco?: true
    foto?: true
    nomePais?: true
    telefoneContato?: true
    cursoId?: true
    turmaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlunoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aluno to aggregate.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alunos
    **/
    _count?: true | AlunoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunoMaxAggregateInputType
  }

  export type GetAlunoAggregateType<T extends AlunoAggregateArgs> = {
        [P in keyof T & keyof AggregateAluno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAluno[P]>
      : GetScalarType<T[P], AggregateAluno[P]>
  }




  export type AlunoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithAggregationInput | AlunoOrderByWithAggregationInput[]
    by: AlunoScalarFieldEnum[] | AlunoScalarFieldEnum
    having?: AlunoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunoCountAggregateInputType | true
    _min?: AlunoMinAggregateInputType
    _max?: AlunoMaxAggregateInputType
  }

  export type AlunoGroupByOutputType = {
    id: string
    nome: string
    email: string
    telefone: string
    endereco: string
    foto: string | null
    nomePais: string | null
    telefoneContato: string | null
    cursoId: string
    turmaId: string | null
    createdAt: Date
    updatedAt: Date
    _count: AlunoCountAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  type GetAlunoGroupByPayload<T extends AlunoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunoGroupByOutputType[P]>
            : GetScalarType<T[P], AlunoGroupByOutputType[P]>
        }
      >
    >


  export type AlunoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    foto?: boolean
    nomePais?: boolean
    telefoneContato?: boolean
    cursoId?: boolean
    turmaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    turma?: boolean | Aluno$turmaArgs<ExtArgs>
    financeiros?: boolean | Aluno$financeirosArgs<ExtArgs>
    depoimentos?: boolean | Aluno$depoimentosArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    foto?: boolean
    nomePais?: boolean
    telefoneContato?: boolean
    cursoId?: boolean
    turmaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    turma?: boolean | Aluno$turmaArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    foto?: boolean
    nomePais?: boolean
    telefoneContato?: boolean
    cursoId?: boolean
    turmaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    turma?: boolean | Aluno$turmaArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    endereco?: boolean
    foto?: boolean
    nomePais?: boolean
    telefoneContato?: boolean
    cursoId?: boolean
    turmaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlunoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "endereco" | "foto" | "nomePais" | "telefoneContato" | "cursoId" | "turmaId" | "createdAt" | "updatedAt", ExtArgs["result"]["aluno"]>
  export type AlunoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    turma?: boolean | Aluno$turmaArgs<ExtArgs>
    financeiros?: boolean | Aluno$financeirosArgs<ExtArgs>
    depoimentos?: boolean | Aluno$depoimentosArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlunoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    turma?: boolean | Aluno$turmaArgs<ExtArgs>
  }
  export type AlunoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    turma?: boolean | Aluno$turmaArgs<ExtArgs>
  }

  export type $AlunoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aluno"
    objects: {
      curso: Prisma.$CursoPayload<ExtArgs>
      turma: Prisma.$TurmaPayload<ExtArgs> | null
      financeiros: Prisma.$FinanceiroPayload<ExtArgs>[]
      depoimentos: Prisma.$DepoimentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      telefone: string
      endereco: string
      foto: string | null
      nomePais: string | null
      telefoneContato: string | null
      cursoId: string
      turmaId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aluno"]>
    composites: {}
  }

  type AlunoGetPayload<S extends boolean | null | undefined | AlunoDefaultArgs> = $Result.GetResult<Prisma.$AlunoPayload, S>

  type AlunoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlunoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlunoCountAggregateInputType | true
    }

  export interface AlunoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aluno'], meta: { name: 'Aluno' } }
    /**
     * Find zero or one Aluno that matches the filter.
     * @param {AlunoFindUniqueArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlunoFindUniqueArgs>(args: SelectSubset<T, AlunoFindUniqueArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aluno that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlunoFindUniqueOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlunoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlunoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlunoFindFirstArgs>(args?: SelectSubset<T, AlunoFindFirstArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlunoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlunoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunos
     * const alunos = await prisma.aluno.findMany()
     * 
     * // Get first 10 Alunos
     * const alunos = await prisma.aluno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alunoWithIdOnly = await prisma.aluno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlunoFindManyArgs>(args?: SelectSubset<T, AlunoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aluno.
     * @param {AlunoCreateArgs} args - Arguments to create a Aluno.
     * @example
     * // Create one Aluno
     * const Aluno = await prisma.aluno.create({
     *   data: {
     *     // ... data to create a Aluno
     *   }
     * })
     * 
     */
    create<T extends AlunoCreateArgs>(args: SelectSubset<T, AlunoCreateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alunos.
     * @param {AlunoCreateManyArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlunoCreateManyArgs>(args?: SelectSubset<T, AlunoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alunos and returns the data saved in the database.
     * @param {AlunoCreateManyAndReturnArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alunos and only return the `id`
     * const alunoWithIdOnly = await prisma.aluno.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlunoCreateManyAndReturnArgs>(args?: SelectSubset<T, AlunoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aluno.
     * @param {AlunoDeleteArgs} args - Arguments to delete one Aluno.
     * @example
     * // Delete one Aluno
     * const Aluno = await prisma.aluno.delete({
     *   where: {
     *     // ... filter to delete one Aluno
     *   }
     * })
     * 
     */
    delete<T extends AlunoDeleteArgs>(args: SelectSubset<T, AlunoDeleteArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aluno.
     * @param {AlunoUpdateArgs} args - Arguments to update one Aluno.
     * @example
     * // Update one Aluno
     * const aluno = await prisma.aluno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlunoUpdateArgs>(args: SelectSubset<T, AlunoUpdateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alunos.
     * @param {AlunoDeleteManyArgs} args - Arguments to filter Alunos to delete.
     * @example
     * // Delete a few Alunos
     * const { count } = await prisma.aluno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlunoDeleteManyArgs>(args?: SelectSubset<T, AlunoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlunoUpdateManyArgs>(args: SelectSubset<T, AlunoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos and returns the data updated in the database.
     * @param {AlunoUpdateManyAndReturnArgs} args - Arguments to update many Alunos.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alunos and only return the `id`
     * const alunoWithIdOnly = await prisma.aluno.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlunoUpdateManyAndReturnArgs>(args: SelectSubset<T, AlunoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aluno.
     * @param {AlunoUpsertArgs} args - Arguments to update or create a Aluno.
     * @example
     * // Update or create a Aluno
     * const aluno = await prisma.aluno.upsert({
     *   create: {
     *     // ... data to create a Aluno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aluno we want to update
     *   }
     * })
     */
    upsert<T extends AlunoUpsertArgs>(args: SelectSubset<T, AlunoUpsertArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoCountArgs} args - Arguments to filter Alunos to count.
     * @example
     * // Count the number of Alunos
     * const count = await prisma.aluno.count({
     *   where: {
     *     // ... the filter for the Alunos we want to count
     *   }
     * })
    **/
    count<T extends AlunoCountArgs>(
      args?: Subset<T, AlunoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlunoAggregateArgs>(args: Subset<T, AlunoAggregateArgs>): Prisma.PrismaPromise<GetAlunoAggregateType<T>>

    /**
     * Group by Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlunoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunoGroupByArgs['orderBy'] }
        : { orderBy?: AlunoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlunoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aluno model
   */
  readonly fields: AlunoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aluno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlunoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    turma<T extends Aluno$turmaArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$turmaArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    financeiros<T extends Aluno$financeirosArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$financeirosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    depoimentos<T extends Aluno$depoimentosArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$depoimentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepoimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Aluno model
   */
  interface AlunoFieldRefs {
    readonly id: FieldRef<"Aluno", 'String'>
    readonly nome: FieldRef<"Aluno", 'String'>
    readonly email: FieldRef<"Aluno", 'String'>
    readonly telefone: FieldRef<"Aluno", 'String'>
    readonly endereco: FieldRef<"Aluno", 'String'>
    readonly foto: FieldRef<"Aluno", 'String'>
    readonly nomePais: FieldRef<"Aluno", 'String'>
    readonly telefoneContato: FieldRef<"Aluno", 'String'>
    readonly cursoId: FieldRef<"Aluno", 'String'>
    readonly turmaId: FieldRef<"Aluno", 'String'>
    readonly createdAt: FieldRef<"Aluno", 'DateTime'>
    readonly updatedAt: FieldRef<"Aluno", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Aluno findUnique
   */
  export type AlunoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findUniqueOrThrow
   */
  export type AlunoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findFirst
   */
  export type AlunoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findFirstOrThrow
   */
  export type AlunoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findMany
   */
  export type AlunoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Alunos to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno create
   */
  export type AlunoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to create a Aluno.
     */
    data: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
  }

  /**
   * Aluno createMany
   */
  export type AlunoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alunos.
     */
    data: AlunoCreateManyInput | AlunoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aluno createManyAndReturn
   */
  export type AlunoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * The data used to create many Alunos.
     */
    data: AlunoCreateManyInput | AlunoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Aluno update
   */
  export type AlunoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to update a Aluno.
     */
    data: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
    /**
     * Choose, which Aluno to update.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno updateMany
   */
  export type AlunoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alunos.
     */
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyInput>
    /**
     * Filter which Alunos to update
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to update.
     */
    limit?: number
  }

  /**
   * Aluno updateManyAndReturn
   */
  export type AlunoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * The data used to update Alunos.
     */
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyInput>
    /**
     * Filter which Alunos to update
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Aluno upsert
   */
  export type AlunoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The filter to search for the Aluno to update in case it exists.
     */
    where: AlunoWhereUniqueInput
    /**
     * In case the Aluno found by the `where` argument doesn't exist, create a new Aluno with this data.
     */
    create: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
    /**
     * In case the Aluno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
  }

  /**
   * Aluno delete
   */
  export type AlunoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter which Aluno to delete.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno deleteMany
   */
  export type AlunoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alunos to delete
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to delete.
     */
    limit?: number
  }

  /**
   * Aluno.turma
   */
  export type Aluno$turmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
  }

  /**
   * Aluno.financeiros
   */
  export type Aluno$financeirosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceiroInclude<ExtArgs> | null
    where?: FinanceiroWhereInput
    orderBy?: FinanceiroOrderByWithRelationInput | FinanceiroOrderByWithRelationInput[]
    cursor?: FinanceiroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinanceiroScalarFieldEnum | FinanceiroScalarFieldEnum[]
  }

  /**
   * Aluno.depoimentos
   */
  export type Aluno$depoimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depoimento
     */
    select?: DepoimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depoimento
     */
    omit?: DepoimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepoimentoInclude<ExtArgs> | null
    where?: DepoimentoWhereInput
    orderBy?: DepoimentoOrderByWithRelationInput | DepoimentoOrderByWithRelationInput[]
    cursor?: DepoimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepoimentoScalarFieldEnum | DepoimentoScalarFieldEnum[]
  }

  /**
   * Aluno without action
   */
  export type AlunoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
  }


  /**
   * Model Professor
   */

  export type AggregateProfessor = {
    _count: ProfessorCountAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  export type ProfessorMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    biografia: string | null
    imagem: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessorMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    biografia: string | null
    imagem: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessorCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    biografia: number
    imagem: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfessorMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    biografia?: true
    imagem?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessorMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    biografia?: true
    imagem?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessorCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    biografia?: true
    imagem?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professor to aggregate.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professors
    **/
    _count?: true | ProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorMaxAggregateInputType
  }

  export type GetProfessorAggregateType<T extends ProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor[P]>
      : GetScalarType<T[P], AggregateProfessor[P]>
  }




  export type ProfessorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithAggregationInput | ProfessorOrderByWithAggregationInput[]
    by: ProfessorScalarFieldEnum[] | ProfessorScalarFieldEnum
    having?: ProfessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCountAggregateInputType | true
    _min?: ProfessorMinAggregateInputType
    _max?: ProfessorMaxAggregateInputType
  }

  export type ProfessorGroupByOutputType = {
    id: string
    nome: string
    email: string
    senha: string
    biografia: string | null
    imagem: string | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProfessorCountAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  type GetProfessorGroupByPayload<T extends ProfessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    biografia?: boolean
    imagem?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    turmas?: boolean | Professor$turmasArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    biografia?: boolean
    imagem?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    biografia?: boolean
    imagem?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    biografia?: boolean
    imagem?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfessorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "biografia" | "imagem" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["professor"]>
  export type ProfessorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turmas?: boolean | Professor$turmasArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfessorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfessorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professor"
    objects: {
      turmas: Prisma.$TurmaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senha: string
      biografia: string | null
      imagem: string | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["professor"]>
    composites: {}
  }

  type ProfessorGetPayload<S extends boolean | null | undefined | ProfessorDefaultArgs> = $Result.GetResult<Prisma.$ProfessorPayload, S>

  type ProfessorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorCountAggregateInputType | true
    }

  export interface ProfessorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professor'], meta: { name: 'Professor' } }
    /**
     * Find zero or one Professor that matches the filter.
     * @param {ProfessorFindUniqueArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessorFindUniqueArgs>(args: SelectSubset<T, ProfessorFindUniqueArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessorFindUniqueOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessorFindFirstArgs>(args?: SelectSubset<T, ProfessorFindFirstArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professor.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professorWithIdOnly = await prisma.professor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessorFindManyArgs>(args?: SelectSubset<T, ProfessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professor.
     * @param {ProfessorCreateArgs} args - Arguments to create a Professor.
     * @example
     * // Create one Professor
     * const Professor = await prisma.professor.create({
     *   data: {
     *     // ... data to create a Professor
     *   }
     * })
     * 
     */
    create<T extends ProfessorCreateArgs>(args: SelectSubset<T, ProfessorCreateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professors.
     * @param {ProfessorCreateManyArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessorCreateManyArgs>(args?: SelectSubset<T, ProfessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professors and returns the data saved in the database.
     * @param {ProfessorCreateManyAndReturnArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professors and only return the `id`
     * const professorWithIdOnly = await prisma.professor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professor.
     * @param {ProfessorDeleteArgs} args - Arguments to delete one Professor.
     * @example
     * // Delete one Professor
     * const Professor = await prisma.professor.delete({
     *   where: {
     *     // ... filter to delete one Professor
     *   }
     * })
     * 
     */
    delete<T extends ProfessorDeleteArgs>(args: SelectSubset<T, ProfessorDeleteArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professor.
     * @param {ProfessorUpdateArgs} args - Arguments to update one Professor.
     * @example
     * // Update one Professor
     * const professor = await prisma.professor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessorUpdateArgs>(args: SelectSubset<T, ProfessorUpdateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professors.
     * @param {ProfessorDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessorDeleteManyArgs>(args?: SelectSubset<T, ProfessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessorUpdateManyArgs>(args: SelectSubset<T, ProfessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors and returns the data updated in the database.
     * @param {ProfessorUpdateManyAndReturnArgs} args - Arguments to update many Professors.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professors and only return the `id`
     * const professorWithIdOnly = await prisma.professor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfessorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professor.
     * @param {ProfessorUpsertArgs} args - Arguments to update or create a Professor.
     * @example
     * // Update or create a Professor
     * const professor = await prisma.professor.upsert({
     *   create: {
     *     // ... data to create a Professor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor we want to update
     *   }
     * })
     */
    upsert<T extends ProfessorUpsertArgs>(args: SelectSubset<T, ProfessorUpsertArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professor.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends ProfessorCountArgs>(
      args?: Subset<T, ProfessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfessorAggregateArgs>(args: Subset<T, ProfessorAggregateArgs>): Prisma.PrismaPromise<GetProfessorAggregateType<T>>

    /**
     * Group by Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professor model
   */
  readonly fields: ProfessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turmas<T extends Professor$turmasArgs<ExtArgs> = {}>(args?: Subset<T, Professor$turmasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Professor model
   */
  interface ProfessorFieldRefs {
    readonly id: FieldRef<"Professor", 'String'>
    readonly nome: FieldRef<"Professor", 'String'>
    readonly email: FieldRef<"Professor", 'String'>
    readonly senha: FieldRef<"Professor", 'String'>
    readonly biografia: FieldRef<"Professor", 'String'>
    readonly imagem: FieldRef<"Professor", 'String'>
    readonly ativo: FieldRef<"Professor", 'Boolean'>
    readonly createdAt: FieldRef<"Professor", 'DateTime'>
    readonly updatedAt: FieldRef<"Professor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Professor findUnique
   */
  export type ProfessorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findUniqueOrThrow
   */
  export type ProfessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findFirst
   */
  export type ProfessorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findFirstOrThrow
   */
  export type ProfessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findMany
   */
  export type ProfessorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professors to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor create
   */
  export type ProfessorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to create a Professor.
     */
    data: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
  }

  /**
   * Professor createMany
   */
  export type ProfessorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor createManyAndReturn
   */
  export type ProfessorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor update
   */
  export type ProfessorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to update a Professor.
     */
    data: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
    /**
     * Choose, which Professor to update.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor updateMany
   */
  export type ProfessorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor updateManyAndReturn
   */
  export type ProfessorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor upsert
   */
  export type ProfessorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The filter to search for the Professor to update in case it exists.
     */
    where: ProfessorWhereUniqueInput
    /**
     * In case the Professor found by the `where` argument doesn't exist, create a new Professor with this data.
     */
    create: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
    /**
     * In case the Professor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
  }

  /**
   * Professor delete
   */
  export type ProfessorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter which Professor to delete.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor deleteMany
   */
  export type ProfessorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professors to delete
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to delete.
     */
    limit?: number
  }

  /**
   * Professor.turmas
   */
  export type Professor$turmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    cursor?: TurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Professor without action
   */
  export type ProfessorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
  }


  /**
   * Model Turma
   */

  export type AggregateTurma = {
    _count: TurmaCountAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  export type TurmaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    horario: string | null
    diasSemana: string | null
    cursoId: string | null
    professorId: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TurmaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    horario: string | null
    diasSemana: string | null
    cursoId: string | null
    professorId: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TurmaCountAggregateOutputType = {
    id: number
    nome: number
    horario: number
    diasSemana: number
    cursoId: number
    professorId: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TurmaMinAggregateInputType = {
    id?: true
    nome?: true
    horario?: true
    diasSemana?: true
    cursoId?: true
    professorId?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TurmaMaxAggregateInputType = {
    id?: true
    nome?: true
    horario?: true
    diasSemana?: true
    cursoId?: true
    professorId?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TurmaCountAggregateInputType = {
    id?: true
    nome?: true
    horario?: true
    diasSemana?: true
    cursoId?: true
    professorId?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TurmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turma to aggregate.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turmas
    **/
    _count?: true | TurmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurmaMaxAggregateInputType
  }

  export type GetTurmaAggregateType<T extends TurmaAggregateArgs> = {
        [P in keyof T & keyof AggregateTurma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurma[P]>
      : GetScalarType<T[P], AggregateTurma[P]>
  }




  export type TurmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithAggregationInput | TurmaOrderByWithAggregationInput[]
    by: TurmaScalarFieldEnum[] | TurmaScalarFieldEnum
    having?: TurmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurmaCountAggregateInputType | true
    _min?: TurmaMinAggregateInputType
    _max?: TurmaMaxAggregateInputType
  }

  export type TurmaGroupByOutputType = {
    id: string
    nome: string
    horario: string
    diasSemana: string
    cursoId: string
    professorId: string
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: TurmaCountAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  type GetTurmaGroupByPayload<T extends TurmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurmaGroupByOutputType[P]>
            : GetScalarType<T[P], TurmaGroupByOutputType[P]>
        }
      >
    >


  export type TurmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    horario?: boolean
    diasSemana?: boolean
    cursoId?: boolean
    professorId?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    alunos?: boolean | Turma$alunosArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>

  export type TurmaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    horario?: boolean
    diasSemana?: boolean
    cursoId?: boolean
    professorId?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>

  export type TurmaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    horario?: boolean
    diasSemana?: boolean
    cursoId?: boolean
    professorId?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>

  export type TurmaSelectScalar = {
    id?: boolean
    nome?: boolean
    horario?: boolean
    diasSemana?: boolean
    cursoId?: boolean
    professorId?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TurmaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "horario" | "diasSemana" | "cursoId" | "professorId" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["turma"]>
  export type TurmaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    alunos?: boolean | Turma$alunosArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TurmaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }
  export type TurmaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }

  export type $TurmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turma"
    objects: {
      curso: Prisma.$CursoPayload<ExtArgs>
      professor: Prisma.$ProfessorPayload<ExtArgs>
      alunos: Prisma.$AlunoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      horario: string
      diasSemana: string
      cursoId: string
      professorId: string
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["turma"]>
    composites: {}
  }

  type TurmaGetPayload<S extends boolean | null | undefined | TurmaDefaultArgs> = $Result.GetResult<Prisma.$TurmaPayload, S>

  type TurmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TurmaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurmaCountAggregateInputType | true
    }

  export interface TurmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turma'], meta: { name: 'Turma' } }
    /**
     * Find zero or one Turma that matches the filter.
     * @param {TurmaFindUniqueArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurmaFindUniqueArgs>(args: SelectSubset<T, TurmaFindUniqueArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Turma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TurmaFindUniqueOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurmaFindUniqueOrThrowArgs>(args: SelectSubset<T, TurmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurmaFindFirstArgs>(args?: SelectSubset<T, TurmaFindFirstArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurmaFindFirstOrThrowArgs>(args?: SelectSubset<T, TurmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Turmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turmas
     * const turmas = await prisma.turma.findMany()
     * 
     * // Get first 10 Turmas
     * const turmas = await prisma.turma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turmaWithIdOnly = await prisma.turma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurmaFindManyArgs>(args?: SelectSubset<T, TurmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Turma.
     * @param {TurmaCreateArgs} args - Arguments to create a Turma.
     * @example
     * // Create one Turma
     * const Turma = await prisma.turma.create({
     *   data: {
     *     // ... data to create a Turma
     *   }
     * })
     * 
     */
    create<T extends TurmaCreateArgs>(args: SelectSubset<T, TurmaCreateArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Turmas.
     * @param {TurmaCreateManyArgs} args - Arguments to create many Turmas.
     * @example
     * // Create many Turmas
     * const turma = await prisma.turma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurmaCreateManyArgs>(args?: SelectSubset<T, TurmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Turmas and returns the data saved in the database.
     * @param {TurmaCreateManyAndReturnArgs} args - Arguments to create many Turmas.
     * @example
     * // Create many Turmas
     * const turma = await prisma.turma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Turmas and only return the `id`
     * const turmaWithIdOnly = await prisma.turma.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TurmaCreateManyAndReturnArgs>(args?: SelectSubset<T, TurmaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Turma.
     * @param {TurmaDeleteArgs} args - Arguments to delete one Turma.
     * @example
     * // Delete one Turma
     * const Turma = await prisma.turma.delete({
     *   where: {
     *     // ... filter to delete one Turma
     *   }
     * })
     * 
     */
    delete<T extends TurmaDeleteArgs>(args: SelectSubset<T, TurmaDeleteArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Turma.
     * @param {TurmaUpdateArgs} args - Arguments to update one Turma.
     * @example
     * // Update one Turma
     * const turma = await prisma.turma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurmaUpdateArgs>(args: SelectSubset<T, TurmaUpdateArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Turmas.
     * @param {TurmaDeleteManyArgs} args - Arguments to filter Turmas to delete.
     * @example
     * // Delete a few Turmas
     * const { count } = await prisma.turma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurmaDeleteManyArgs>(args?: SelectSubset<T, TurmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turmas
     * const turma = await prisma.turma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurmaUpdateManyArgs>(args: SelectSubset<T, TurmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turmas and returns the data updated in the database.
     * @param {TurmaUpdateManyAndReturnArgs} args - Arguments to update many Turmas.
     * @example
     * // Update many Turmas
     * const turma = await prisma.turma.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Turmas and only return the `id`
     * const turmaWithIdOnly = await prisma.turma.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TurmaUpdateManyAndReturnArgs>(args: SelectSubset<T, TurmaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Turma.
     * @param {TurmaUpsertArgs} args - Arguments to update or create a Turma.
     * @example
     * // Update or create a Turma
     * const turma = await prisma.turma.upsert({
     *   create: {
     *     // ... data to create a Turma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turma we want to update
     *   }
     * })
     */
    upsert<T extends TurmaUpsertArgs>(args: SelectSubset<T, TurmaUpsertArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaCountArgs} args - Arguments to filter Turmas to count.
     * @example
     * // Count the number of Turmas
     * const count = await prisma.turma.count({
     *   where: {
     *     // ... the filter for the Turmas we want to count
     *   }
     * })
    **/
    count<T extends TurmaCountArgs>(
      args?: Subset<T, TurmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TurmaAggregateArgs>(args: Subset<T, TurmaAggregateArgs>): Prisma.PrismaPromise<GetTurmaAggregateType<T>>

    /**
     * Group by Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TurmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurmaGroupByArgs['orderBy'] }
        : { orderBy?: TurmaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TurmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turma model
   */
  readonly fields: TurmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alunos<T extends Turma$alunosArgs<ExtArgs> = {}>(args?: Subset<T, Turma$alunosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Turma model
   */
  interface TurmaFieldRefs {
    readonly id: FieldRef<"Turma", 'String'>
    readonly nome: FieldRef<"Turma", 'String'>
    readonly horario: FieldRef<"Turma", 'String'>
    readonly diasSemana: FieldRef<"Turma", 'String'>
    readonly cursoId: FieldRef<"Turma", 'String'>
    readonly professorId: FieldRef<"Turma", 'String'>
    readonly ativo: FieldRef<"Turma", 'Boolean'>
    readonly createdAt: FieldRef<"Turma", 'DateTime'>
    readonly updatedAt: FieldRef<"Turma", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Turma findUnique
   */
  export type TurmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma findUniqueOrThrow
   */
  export type TurmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma findFirst
   */
  export type TurmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma findFirstOrThrow
   */
  export type TurmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma findMany
   */
  export type TurmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turmas to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma create
   */
  export type TurmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to create a Turma.
     */
    data: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
  }

  /**
   * Turma createMany
   */
  export type TurmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turmas.
     */
    data: TurmaCreateManyInput | TurmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Turma createManyAndReturn
   */
  export type TurmaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * The data used to create many Turmas.
     */
    data: TurmaCreateManyInput | TurmaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turma update
   */
  export type TurmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to update a Turma.
     */
    data: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
    /**
     * Choose, which Turma to update.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma updateMany
   */
  export type TurmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turmas.
     */
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyInput>
    /**
     * Filter which Turmas to update
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to update.
     */
    limit?: number
  }

  /**
   * Turma updateManyAndReturn
   */
  export type TurmaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * The data used to update Turmas.
     */
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyInput>
    /**
     * Filter which Turmas to update
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turma upsert
   */
  export type TurmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The filter to search for the Turma to update in case it exists.
     */
    where: TurmaWhereUniqueInput
    /**
     * In case the Turma found by the `where` argument doesn't exist, create a new Turma with this data.
     */
    create: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
    /**
     * In case the Turma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
  }

  /**
   * Turma delete
   */
  export type TurmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter which Turma to delete.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma deleteMany
   */
  export type TurmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turmas to delete
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to delete.
     */
    limit?: number
  }

  /**
   * Turma.alunos
   */
  export type Turma$alunosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    cursor?: AlunoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Turma without action
   */
  export type TurmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
  }


  /**
   * Model Financeiro
   */

  export type AggregateFinanceiro = {
    _count: FinanceiroCountAggregateOutputType | null
    _avg: FinanceiroAvgAggregateOutputType | null
    _sum: FinanceiroSumAggregateOutputType | null
    _min: FinanceiroMinAggregateOutputType | null
    _max: FinanceiroMaxAggregateOutputType | null
  }

  export type FinanceiroAvgAggregateOutputType = {
    valor: number | null
  }

  export type FinanceiroSumAggregateOutputType = {
    valor: number | null
  }

  export type FinanceiroMinAggregateOutputType = {
    id: string | null
    alunoId: string | null
    valor: number | null
    dataVencimento: Date | null
    dataPagamento: Date | null
    status: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinanceiroMaxAggregateOutputType = {
    id: string | null
    alunoId: string | null
    valor: number | null
    dataVencimento: Date | null
    dataPagamento: Date | null
    status: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinanceiroCountAggregateOutputType = {
    id: number
    alunoId: number
    valor: number
    dataVencimento: number
    dataPagamento: number
    status: number
    descricao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FinanceiroAvgAggregateInputType = {
    valor?: true
  }

  export type FinanceiroSumAggregateInputType = {
    valor?: true
  }

  export type FinanceiroMinAggregateInputType = {
    id?: true
    alunoId?: true
    valor?: true
    dataVencimento?: true
    dataPagamento?: true
    status?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinanceiroMaxAggregateInputType = {
    id?: true
    alunoId?: true
    valor?: true
    dataVencimento?: true
    dataPagamento?: true
    status?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinanceiroCountAggregateInputType = {
    id?: true
    alunoId?: true
    valor?: true
    dataVencimento?: true
    dataPagamento?: true
    status?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FinanceiroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Financeiro to aggregate.
     */
    where?: FinanceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Financeiros to fetch.
     */
    orderBy?: FinanceiroOrderByWithRelationInput | FinanceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinanceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Financeiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Financeiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Financeiros
    **/
    _count?: true | FinanceiroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinanceiroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinanceiroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinanceiroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinanceiroMaxAggregateInputType
  }

  export type GetFinanceiroAggregateType<T extends FinanceiroAggregateArgs> = {
        [P in keyof T & keyof AggregateFinanceiro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinanceiro[P]>
      : GetScalarType<T[P], AggregateFinanceiro[P]>
  }




  export type FinanceiroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceiroWhereInput
    orderBy?: FinanceiroOrderByWithAggregationInput | FinanceiroOrderByWithAggregationInput[]
    by: FinanceiroScalarFieldEnum[] | FinanceiroScalarFieldEnum
    having?: FinanceiroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinanceiroCountAggregateInputType | true
    _avg?: FinanceiroAvgAggregateInputType
    _sum?: FinanceiroSumAggregateInputType
    _min?: FinanceiroMinAggregateInputType
    _max?: FinanceiroMaxAggregateInputType
  }

  export type FinanceiroGroupByOutputType = {
    id: string
    alunoId: string
    valor: number
    dataVencimento: Date
    dataPagamento: Date | null
    status: string
    descricao: string | null
    createdAt: Date
    updatedAt: Date
    _count: FinanceiroCountAggregateOutputType | null
    _avg: FinanceiroAvgAggregateOutputType | null
    _sum: FinanceiroSumAggregateOutputType | null
    _min: FinanceiroMinAggregateOutputType | null
    _max: FinanceiroMaxAggregateOutputType | null
  }

  type GetFinanceiroGroupByPayload<T extends FinanceiroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinanceiroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinanceiroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinanceiroGroupByOutputType[P]>
            : GetScalarType<T[P], FinanceiroGroupByOutputType[P]>
        }
      >
    >


  export type FinanceiroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alunoId?: boolean
    valor?: boolean
    dataVencimento?: boolean
    dataPagamento?: boolean
    status?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financeiro"]>

  export type FinanceiroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alunoId?: boolean
    valor?: boolean
    dataVencimento?: boolean
    dataPagamento?: boolean
    status?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financeiro"]>

  export type FinanceiroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alunoId?: boolean
    valor?: boolean
    dataVencimento?: boolean
    dataPagamento?: boolean
    status?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financeiro"]>

  export type FinanceiroSelectScalar = {
    id?: boolean
    alunoId?: boolean
    valor?: boolean
    dataVencimento?: boolean
    dataPagamento?: boolean
    status?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FinanceiroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alunoId" | "valor" | "dataVencimento" | "dataPagamento" | "status" | "descricao" | "createdAt" | "updatedAt", ExtArgs["result"]["financeiro"]>
  export type FinanceiroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }
  export type FinanceiroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }
  export type FinanceiroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }

  export type $FinanceiroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Financeiro"
    objects: {
      aluno: Prisma.$AlunoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      alunoId: string
      valor: number
      dataVencimento: Date
      dataPagamento: Date | null
      status: string
      descricao: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["financeiro"]>
    composites: {}
  }

  type FinanceiroGetPayload<S extends boolean | null | undefined | FinanceiroDefaultArgs> = $Result.GetResult<Prisma.$FinanceiroPayload, S>

  type FinanceiroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinanceiroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinanceiroCountAggregateInputType | true
    }

  export interface FinanceiroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Financeiro'], meta: { name: 'Financeiro' } }
    /**
     * Find zero or one Financeiro that matches the filter.
     * @param {FinanceiroFindUniqueArgs} args - Arguments to find a Financeiro
     * @example
     * // Get one Financeiro
     * const financeiro = await prisma.financeiro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinanceiroFindUniqueArgs>(args: SelectSubset<T, FinanceiroFindUniqueArgs<ExtArgs>>): Prisma__FinanceiroClient<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Financeiro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinanceiroFindUniqueOrThrowArgs} args - Arguments to find a Financeiro
     * @example
     * // Get one Financeiro
     * const financeiro = await prisma.financeiro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinanceiroFindUniqueOrThrowArgs>(args: SelectSubset<T, FinanceiroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinanceiroClient<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Financeiro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceiroFindFirstArgs} args - Arguments to find a Financeiro
     * @example
     * // Get one Financeiro
     * const financeiro = await prisma.financeiro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinanceiroFindFirstArgs>(args?: SelectSubset<T, FinanceiroFindFirstArgs<ExtArgs>>): Prisma__FinanceiroClient<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Financeiro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceiroFindFirstOrThrowArgs} args - Arguments to find a Financeiro
     * @example
     * // Get one Financeiro
     * const financeiro = await prisma.financeiro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinanceiroFindFirstOrThrowArgs>(args?: SelectSubset<T, FinanceiroFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinanceiroClient<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Financeiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceiroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Financeiros
     * const financeiros = await prisma.financeiro.findMany()
     * 
     * // Get first 10 Financeiros
     * const financeiros = await prisma.financeiro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financeiroWithIdOnly = await prisma.financeiro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinanceiroFindManyArgs>(args?: SelectSubset<T, FinanceiroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Financeiro.
     * @param {FinanceiroCreateArgs} args - Arguments to create a Financeiro.
     * @example
     * // Create one Financeiro
     * const Financeiro = await prisma.financeiro.create({
     *   data: {
     *     // ... data to create a Financeiro
     *   }
     * })
     * 
     */
    create<T extends FinanceiroCreateArgs>(args: SelectSubset<T, FinanceiroCreateArgs<ExtArgs>>): Prisma__FinanceiroClient<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Financeiros.
     * @param {FinanceiroCreateManyArgs} args - Arguments to create many Financeiros.
     * @example
     * // Create many Financeiros
     * const financeiro = await prisma.financeiro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinanceiroCreateManyArgs>(args?: SelectSubset<T, FinanceiroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Financeiros and returns the data saved in the database.
     * @param {FinanceiroCreateManyAndReturnArgs} args - Arguments to create many Financeiros.
     * @example
     * // Create many Financeiros
     * const financeiro = await prisma.financeiro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Financeiros and only return the `id`
     * const financeiroWithIdOnly = await prisma.financeiro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinanceiroCreateManyAndReturnArgs>(args?: SelectSubset<T, FinanceiroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Financeiro.
     * @param {FinanceiroDeleteArgs} args - Arguments to delete one Financeiro.
     * @example
     * // Delete one Financeiro
     * const Financeiro = await prisma.financeiro.delete({
     *   where: {
     *     // ... filter to delete one Financeiro
     *   }
     * })
     * 
     */
    delete<T extends FinanceiroDeleteArgs>(args: SelectSubset<T, FinanceiroDeleteArgs<ExtArgs>>): Prisma__FinanceiroClient<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Financeiro.
     * @param {FinanceiroUpdateArgs} args - Arguments to update one Financeiro.
     * @example
     * // Update one Financeiro
     * const financeiro = await prisma.financeiro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinanceiroUpdateArgs>(args: SelectSubset<T, FinanceiroUpdateArgs<ExtArgs>>): Prisma__FinanceiroClient<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Financeiros.
     * @param {FinanceiroDeleteManyArgs} args - Arguments to filter Financeiros to delete.
     * @example
     * // Delete a few Financeiros
     * const { count } = await prisma.financeiro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinanceiroDeleteManyArgs>(args?: SelectSubset<T, FinanceiroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Financeiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceiroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Financeiros
     * const financeiro = await prisma.financeiro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinanceiroUpdateManyArgs>(args: SelectSubset<T, FinanceiroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Financeiros and returns the data updated in the database.
     * @param {FinanceiroUpdateManyAndReturnArgs} args - Arguments to update many Financeiros.
     * @example
     * // Update many Financeiros
     * const financeiro = await prisma.financeiro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Financeiros and only return the `id`
     * const financeiroWithIdOnly = await prisma.financeiro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinanceiroUpdateManyAndReturnArgs>(args: SelectSubset<T, FinanceiroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Financeiro.
     * @param {FinanceiroUpsertArgs} args - Arguments to update or create a Financeiro.
     * @example
     * // Update or create a Financeiro
     * const financeiro = await prisma.financeiro.upsert({
     *   create: {
     *     // ... data to create a Financeiro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Financeiro we want to update
     *   }
     * })
     */
    upsert<T extends FinanceiroUpsertArgs>(args: SelectSubset<T, FinanceiroUpsertArgs<ExtArgs>>): Prisma__FinanceiroClient<$Result.GetResult<Prisma.$FinanceiroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Financeiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceiroCountArgs} args - Arguments to filter Financeiros to count.
     * @example
     * // Count the number of Financeiros
     * const count = await prisma.financeiro.count({
     *   where: {
     *     // ... the filter for the Financeiros we want to count
     *   }
     * })
    **/
    count<T extends FinanceiroCountArgs>(
      args?: Subset<T, FinanceiroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinanceiroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Financeiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceiroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinanceiroAggregateArgs>(args: Subset<T, FinanceiroAggregateArgs>): Prisma.PrismaPromise<GetFinanceiroAggregateType<T>>

    /**
     * Group by Financeiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceiroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FinanceiroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinanceiroGroupByArgs['orderBy'] }
        : { orderBy?: FinanceiroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinanceiroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinanceiroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Financeiro model
   */
  readonly fields: FinanceiroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Financeiro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinanceiroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends AlunoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunoDefaultArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Financeiro model
   */
  interface FinanceiroFieldRefs {
    readonly id: FieldRef<"Financeiro", 'String'>
    readonly alunoId: FieldRef<"Financeiro", 'String'>
    readonly valor: FieldRef<"Financeiro", 'Float'>
    readonly dataVencimento: FieldRef<"Financeiro", 'DateTime'>
    readonly dataPagamento: FieldRef<"Financeiro", 'DateTime'>
    readonly status: FieldRef<"Financeiro", 'String'>
    readonly descricao: FieldRef<"Financeiro", 'String'>
    readonly createdAt: FieldRef<"Financeiro", 'DateTime'>
    readonly updatedAt: FieldRef<"Financeiro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Financeiro findUnique
   */
  export type FinanceiroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceiroInclude<ExtArgs> | null
    /**
     * Filter, which Financeiro to fetch.
     */
    where: FinanceiroWhereUniqueInput
  }

  /**
   * Financeiro findUniqueOrThrow
   */
  export type FinanceiroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceiroInclude<ExtArgs> | null
    /**
     * Filter, which Financeiro to fetch.
     */
    where: FinanceiroWhereUniqueInput
  }

  /**
   * Financeiro findFirst
   */
  export type FinanceiroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceiroInclude<ExtArgs> | null
    /**
     * Filter, which Financeiro to fetch.
     */
    where?: FinanceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Financeiros to fetch.
     */
    orderBy?: FinanceiroOrderByWithRelationInput | FinanceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Financeiros.
     */
    cursor?: FinanceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Financeiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Financeiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Financeiros.
     */
    distinct?: FinanceiroScalarFieldEnum | FinanceiroScalarFieldEnum[]
  }

  /**
   * Financeiro findFirstOrThrow
   */
  export type FinanceiroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceiroInclude<ExtArgs> | null
    /**
     * Filter, which Financeiro to fetch.
     */
    where?: FinanceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Financeiros to fetch.
     */
    orderBy?: FinanceiroOrderByWithRelationInput | FinanceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Financeiros.
     */
    cursor?: FinanceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Financeiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Financeiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Financeiros.
     */
    distinct?: FinanceiroScalarFieldEnum | FinanceiroScalarFieldEnum[]
  }

  /**
   * Financeiro findMany
   */
  export type FinanceiroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceiroInclude<ExtArgs> | null
    /**
     * Filter, which Financeiros to fetch.
     */
    where?: FinanceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Financeiros to fetch.
     */
    orderBy?: FinanceiroOrderByWithRelationInput | FinanceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Financeiros.
     */
    cursor?: FinanceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Financeiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Financeiros.
     */
    skip?: number
    distinct?: FinanceiroScalarFieldEnum | FinanceiroScalarFieldEnum[]
  }

  /**
   * Financeiro create
   */
  export type FinanceiroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceiroInclude<ExtArgs> | null
    /**
     * The data needed to create a Financeiro.
     */
    data: XOR<FinanceiroCreateInput, FinanceiroUncheckedCreateInput>
  }

  /**
   * Financeiro createMany
   */
  export type FinanceiroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Financeiros.
     */
    data: FinanceiroCreateManyInput | FinanceiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Financeiro createManyAndReturn
   */
  export type FinanceiroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * The data used to create many Financeiros.
     */
    data: FinanceiroCreateManyInput | FinanceiroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceiroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Financeiro update
   */
  export type FinanceiroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceiroInclude<ExtArgs> | null
    /**
     * The data needed to update a Financeiro.
     */
    data: XOR<FinanceiroUpdateInput, FinanceiroUncheckedUpdateInput>
    /**
     * Choose, which Financeiro to update.
     */
    where: FinanceiroWhereUniqueInput
  }

  /**
   * Financeiro updateMany
   */
  export type FinanceiroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Financeiros.
     */
    data: XOR<FinanceiroUpdateManyMutationInput, FinanceiroUncheckedUpdateManyInput>
    /**
     * Filter which Financeiros to update
     */
    where?: FinanceiroWhereInput
    /**
     * Limit how many Financeiros to update.
     */
    limit?: number
  }

  /**
   * Financeiro updateManyAndReturn
   */
  export type FinanceiroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * The data used to update Financeiros.
     */
    data: XOR<FinanceiroUpdateManyMutationInput, FinanceiroUncheckedUpdateManyInput>
    /**
     * Filter which Financeiros to update
     */
    where?: FinanceiroWhereInput
    /**
     * Limit how many Financeiros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceiroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Financeiro upsert
   */
  export type FinanceiroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceiroInclude<ExtArgs> | null
    /**
     * The filter to search for the Financeiro to update in case it exists.
     */
    where: FinanceiroWhereUniqueInput
    /**
     * In case the Financeiro found by the `where` argument doesn't exist, create a new Financeiro with this data.
     */
    create: XOR<FinanceiroCreateInput, FinanceiroUncheckedCreateInput>
    /**
     * In case the Financeiro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinanceiroUpdateInput, FinanceiroUncheckedUpdateInput>
  }

  /**
   * Financeiro delete
   */
  export type FinanceiroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceiroInclude<ExtArgs> | null
    /**
     * Filter which Financeiro to delete.
     */
    where: FinanceiroWhereUniqueInput
  }

  /**
   * Financeiro deleteMany
   */
  export type FinanceiroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Financeiros to delete
     */
    where?: FinanceiroWhereInput
    /**
     * Limit how many Financeiros to delete.
     */
    limit?: number
  }

  /**
   * Financeiro without action
   */
  export type FinanceiroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Financeiro
     */
    select?: FinanceiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Financeiro
     */
    omit?: FinanceiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceiroInclude<ExtArgs> | null
  }


  /**
   * Model Depoimento
   */

  export type AggregateDepoimento = {
    _count: DepoimentoCountAggregateOutputType | null
    _min: DepoimentoMinAggregateOutputType | null
    _max: DepoimentoMaxAggregateOutputType | null
  }

  export type DepoimentoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    curso: string | null
    texto: string | null
    imagem: string | null
    aprovado: boolean | null
    alunoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepoimentoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    curso: string | null
    texto: string | null
    imagem: string | null
    aprovado: boolean | null
    alunoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepoimentoCountAggregateOutputType = {
    id: number
    nome: number
    curso: number
    texto: number
    imagem: number
    aprovado: number
    alunoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepoimentoMinAggregateInputType = {
    id?: true
    nome?: true
    curso?: true
    texto?: true
    imagem?: true
    aprovado?: true
    alunoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepoimentoMaxAggregateInputType = {
    id?: true
    nome?: true
    curso?: true
    texto?: true
    imagem?: true
    aprovado?: true
    alunoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepoimentoCountAggregateInputType = {
    id?: true
    nome?: true
    curso?: true
    texto?: true
    imagem?: true
    aprovado?: true
    alunoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepoimentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Depoimento to aggregate.
     */
    where?: DepoimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Depoimentos to fetch.
     */
    orderBy?: DepoimentoOrderByWithRelationInput | DepoimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepoimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Depoimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Depoimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Depoimentos
    **/
    _count?: true | DepoimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepoimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepoimentoMaxAggregateInputType
  }

  export type GetDepoimentoAggregateType<T extends DepoimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateDepoimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepoimento[P]>
      : GetScalarType<T[P], AggregateDepoimento[P]>
  }




  export type DepoimentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepoimentoWhereInput
    orderBy?: DepoimentoOrderByWithAggregationInput | DepoimentoOrderByWithAggregationInput[]
    by: DepoimentoScalarFieldEnum[] | DepoimentoScalarFieldEnum
    having?: DepoimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepoimentoCountAggregateInputType | true
    _min?: DepoimentoMinAggregateInputType
    _max?: DepoimentoMaxAggregateInputType
  }

  export type DepoimentoGroupByOutputType = {
    id: string
    nome: string
    curso: string
    texto: string
    imagem: string | null
    aprovado: boolean
    alunoId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DepoimentoCountAggregateOutputType | null
    _min: DepoimentoMinAggregateOutputType | null
    _max: DepoimentoMaxAggregateOutputType | null
  }

  type GetDepoimentoGroupByPayload<T extends DepoimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepoimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepoimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepoimentoGroupByOutputType[P]>
            : GetScalarType<T[P], DepoimentoGroupByOutputType[P]>
        }
      >
    >


  export type DepoimentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    curso?: boolean
    texto?: boolean
    imagem?: boolean
    aprovado?: boolean
    alunoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aluno?: boolean | Depoimento$alunoArgs<ExtArgs>
  }, ExtArgs["result"]["depoimento"]>

  export type DepoimentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    curso?: boolean
    texto?: boolean
    imagem?: boolean
    aprovado?: boolean
    alunoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aluno?: boolean | Depoimento$alunoArgs<ExtArgs>
  }, ExtArgs["result"]["depoimento"]>

  export type DepoimentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    curso?: boolean
    texto?: boolean
    imagem?: boolean
    aprovado?: boolean
    alunoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aluno?: boolean | Depoimento$alunoArgs<ExtArgs>
  }, ExtArgs["result"]["depoimento"]>

  export type DepoimentoSelectScalar = {
    id?: boolean
    nome?: boolean
    curso?: boolean
    texto?: boolean
    imagem?: boolean
    aprovado?: boolean
    alunoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepoimentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "curso" | "texto" | "imagem" | "aprovado" | "alunoId" | "createdAt" | "updatedAt", ExtArgs["result"]["depoimento"]>
  export type DepoimentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | Depoimento$alunoArgs<ExtArgs>
  }
  export type DepoimentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | Depoimento$alunoArgs<ExtArgs>
  }
  export type DepoimentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | Depoimento$alunoArgs<ExtArgs>
  }

  export type $DepoimentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Depoimento"
    objects: {
      aluno: Prisma.$AlunoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      curso: string
      texto: string
      imagem: string | null
      aprovado: boolean
      alunoId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["depoimento"]>
    composites: {}
  }

  type DepoimentoGetPayload<S extends boolean | null | undefined | DepoimentoDefaultArgs> = $Result.GetResult<Prisma.$DepoimentoPayload, S>

  type DepoimentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepoimentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepoimentoCountAggregateInputType | true
    }

  export interface DepoimentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Depoimento'], meta: { name: 'Depoimento' } }
    /**
     * Find zero or one Depoimento that matches the filter.
     * @param {DepoimentoFindUniqueArgs} args - Arguments to find a Depoimento
     * @example
     * // Get one Depoimento
     * const depoimento = await prisma.depoimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepoimentoFindUniqueArgs>(args: SelectSubset<T, DepoimentoFindUniqueArgs<ExtArgs>>): Prisma__DepoimentoClient<$Result.GetResult<Prisma.$DepoimentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Depoimento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepoimentoFindUniqueOrThrowArgs} args - Arguments to find a Depoimento
     * @example
     * // Get one Depoimento
     * const depoimento = await prisma.depoimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepoimentoFindUniqueOrThrowArgs>(args: SelectSubset<T, DepoimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepoimentoClient<$Result.GetResult<Prisma.$DepoimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Depoimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepoimentoFindFirstArgs} args - Arguments to find a Depoimento
     * @example
     * // Get one Depoimento
     * const depoimento = await prisma.depoimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepoimentoFindFirstArgs>(args?: SelectSubset<T, DepoimentoFindFirstArgs<ExtArgs>>): Prisma__DepoimentoClient<$Result.GetResult<Prisma.$DepoimentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Depoimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepoimentoFindFirstOrThrowArgs} args - Arguments to find a Depoimento
     * @example
     * // Get one Depoimento
     * const depoimento = await prisma.depoimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepoimentoFindFirstOrThrowArgs>(args?: SelectSubset<T, DepoimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepoimentoClient<$Result.GetResult<Prisma.$DepoimentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Depoimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepoimentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Depoimentos
     * const depoimentos = await prisma.depoimento.findMany()
     * 
     * // Get first 10 Depoimentos
     * const depoimentos = await prisma.depoimento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depoimentoWithIdOnly = await prisma.depoimento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepoimentoFindManyArgs>(args?: SelectSubset<T, DepoimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepoimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Depoimento.
     * @param {DepoimentoCreateArgs} args - Arguments to create a Depoimento.
     * @example
     * // Create one Depoimento
     * const Depoimento = await prisma.depoimento.create({
     *   data: {
     *     // ... data to create a Depoimento
     *   }
     * })
     * 
     */
    create<T extends DepoimentoCreateArgs>(args: SelectSubset<T, DepoimentoCreateArgs<ExtArgs>>): Prisma__DepoimentoClient<$Result.GetResult<Prisma.$DepoimentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Depoimentos.
     * @param {DepoimentoCreateManyArgs} args - Arguments to create many Depoimentos.
     * @example
     * // Create many Depoimentos
     * const depoimento = await prisma.depoimento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepoimentoCreateManyArgs>(args?: SelectSubset<T, DepoimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Depoimentos and returns the data saved in the database.
     * @param {DepoimentoCreateManyAndReturnArgs} args - Arguments to create many Depoimentos.
     * @example
     * // Create many Depoimentos
     * const depoimento = await prisma.depoimento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Depoimentos and only return the `id`
     * const depoimentoWithIdOnly = await prisma.depoimento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepoimentoCreateManyAndReturnArgs>(args?: SelectSubset<T, DepoimentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepoimentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Depoimento.
     * @param {DepoimentoDeleteArgs} args - Arguments to delete one Depoimento.
     * @example
     * // Delete one Depoimento
     * const Depoimento = await prisma.depoimento.delete({
     *   where: {
     *     // ... filter to delete one Depoimento
     *   }
     * })
     * 
     */
    delete<T extends DepoimentoDeleteArgs>(args: SelectSubset<T, DepoimentoDeleteArgs<ExtArgs>>): Prisma__DepoimentoClient<$Result.GetResult<Prisma.$DepoimentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Depoimento.
     * @param {DepoimentoUpdateArgs} args - Arguments to update one Depoimento.
     * @example
     * // Update one Depoimento
     * const depoimento = await prisma.depoimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepoimentoUpdateArgs>(args: SelectSubset<T, DepoimentoUpdateArgs<ExtArgs>>): Prisma__DepoimentoClient<$Result.GetResult<Prisma.$DepoimentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Depoimentos.
     * @param {DepoimentoDeleteManyArgs} args - Arguments to filter Depoimentos to delete.
     * @example
     * // Delete a few Depoimentos
     * const { count } = await prisma.depoimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepoimentoDeleteManyArgs>(args?: SelectSubset<T, DepoimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Depoimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepoimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Depoimentos
     * const depoimento = await prisma.depoimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepoimentoUpdateManyArgs>(args: SelectSubset<T, DepoimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Depoimentos and returns the data updated in the database.
     * @param {DepoimentoUpdateManyAndReturnArgs} args - Arguments to update many Depoimentos.
     * @example
     * // Update many Depoimentos
     * const depoimento = await prisma.depoimento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Depoimentos and only return the `id`
     * const depoimentoWithIdOnly = await prisma.depoimento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepoimentoUpdateManyAndReturnArgs>(args: SelectSubset<T, DepoimentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepoimentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Depoimento.
     * @param {DepoimentoUpsertArgs} args - Arguments to update or create a Depoimento.
     * @example
     * // Update or create a Depoimento
     * const depoimento = await prisma.depoimento.upsert({
     *   create: {
     *     // ... data to create a Depoimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Depoimento we want to update
     *   }
     * })
     */
    upsert<T extends DepoimentoUpsertArgs>(args: SelectSubset<T, DepoimentoUpsertArgs<ExtArgs>>): Prisma__DepoimentoClient<$Result.GetResult<Prisma.$DepoimentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Depoimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepoimentoCountArgs} args - Arguments to filter Depoimentos to count.
     * @example
     * // Count the number of Depoimentos
     * const count = await prisma.depoimento.count({
     *   where: {
     *     // ... the filter for the Depoimentos we want to count
     *   }
     * })
    **/
    count<T extends DepoimentoCountArgs>(
      args?: Subset<T, DepoimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepoimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Depoimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepoimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepoimentoAggregateArgs>(args: Subset<T, DepoimentoAggregateArgs>): Prisma.PrismaPromise<GetDepoimentoAggregateType<T>>

    /**
     * Group by Depoimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepoimentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepoimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepoimentoGroupByArgs['orderBy'] }
        : { orderBy?: DepoimentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepoimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepoimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Depoimento model
   */
  readonly fields: DepoimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Depoimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepoimentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends Depoimento$alunoArgs<ExtArgs> = {}>(args?: Subset<T, Depoimento$alunoArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Depoimento model
   */
  interface DepoimentoFieldRefs {
    readonly id: FieldRef<"Depoimento", 'String'>
    readonly nome: FieldRef<"Depoimento", 'String'>
    readonly curso: FieldRef<"Depoimento", 'String'>
    readonly texto: FieldRef<"Depoimento", 'String'>
    readonly imagem: FieldRef<"Depoimento", 'String'>
    readonly aprovado: FieldRef<"Depoimento", 'Boolean'>
    readonly alunoId: FieldRef<"Depoimento", 'String'>
    readonly createdAt: FieldRef<"Depoimento", 'DateTime'>
    readonly updatedAt: FieldRef<"Depoimento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Depoimento findUnique
   */
  export type DepoimentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depoimento
     */
    select?: DepoimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depoimento
     */
    omit?: DepoimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepoimentoInclude<ExtArgs> | null
    /**
     * Filter, which Depoimento to fetch.
     */
    where: DepoimentoWhereUniqueInput
  }

  /**
   * Depoimento findUniqueOrThrow
   */
  export type DepoimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depoimento
     */
    select?: DepoimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depoimento
     */
    omit?: DepoimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepoimentoInclude<ExtArgs> | null
    /**
     * Filter, which Depoimento to fetch.
     */
    where: DepoimentoWhereUniqueInput
  }

  /**
   * Depoimento findFirst
   */
  export type DepoimentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depoimento
     */
    select?: DepoimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depoimento
     */
    omit?: DepoimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepoimentoInclude<ExtArgs> | null
    /**
     * Filter, which Depoimento to fetch.
     */
    where?: DepoimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Depoimentos to fetch.
     */
    orderBy?: DepoimentoOrderByWithRelationInput | DepoimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Depoimentos.
     */
    cursor?: DepoimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Depoimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Depoimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Depoimentos.
     */
    distinct?: DepoimentoScalarFieldEnum | DepoimentoScalarFieldEnum[]
  }

  /**
   * Depoimento findFirstOrThrow
   */
  export type DepoimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depoimento
     */
    select?: DepoimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depoimento
     */
    omit?: DepoimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepoimentoInclude<ExtArgs> | null
    /**
     * Filter, which Depoimento to fetch.
     */
    where?: DepoimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Depoimentos to fetch.
     */
    orderBy?: DepoimentoOrderByWithRelationInput | DepoimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Depoimentos.
     */
    cursor?: DepoimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Depoimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Depoimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Depoimentos.
     */
    distinct?: DepoimentoScalarFieldEnum | DepoimentoScalarFieldEnum[]
  }

  /**
   * Depoimento findMany
   */
  export type DepoimentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depoimento
     */
    select?: DepoimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depoimento
     */
    omit?: DepoimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepoimentoInclude<ExtArgs> | null
    /**
     * Filter, which Depoimentos to fetch.
     */
    where?: DepoimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Depoimentos to fetch.
     */
    orderBy?: DepoimentoOrderByWithRelationInput | DepoimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Depoimentos.
     */
    cursor?: DepoimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Depoimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Depoimentos.
     */
    skip?: number
    distinct?: DepoimentoScalarFieldEnum | DepoimentoScalarFieldEnum[]
  }

  /**
   * Depoimento create
   */
  export type DepoimentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depoimento
     */
    select?: DepoimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depoimento
     */
    omit?: DepoimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepoimentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Depoimento.
     */
    data: XOR<DepoimentoCreateInput, DepoimentoUncheckedCreateInput>
  }

  /**
   * Depoimento createMany
   */
  export type DepoimentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Depoimentos.
     */
    data: DepoimentoCreateManyInput | DepoimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Depoimento createManyAndReturn
   */
  export type DepoimentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depoimento
     */
    select?: DepoimentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Depoimento
     */
    omit?: DepoimentoOmit<ExtArgs> | null
    /**
     * The data used to create many Depoimentos.
     */
    data: DepoimentoCreateManyInput | DepoimentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepoimentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Depoimento update
   */
  export type DepoimentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depoimento
     */
    select?: DepoimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depoimento
     */
    omit?: DepoimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepoimentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Depoimento.
     */
    data: XOR<DepoimentoUpdateInput, DepoimentoUncheckedUpdateInput>
    /**
     * Choose, which Depoimento to update.
     */
    where: DepoimentoWhereUniqueInput
  }

  /**
   * Depoimento updateMany
   */
  export type DepoimentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Depoimentos.
     */
    data: XOR<DepoimentoUpdateManyMutationInput, DepoimentoUncheckedUpdateManyInput>
    /**
     * Filter which Depoimentos to update
     */
    where?: DepoimentoWhereInput
    /**
     * Limit how many Depoimentos to update.
     */
    limit?: number
  }

  /**
   * Depoimento updateManyAndReturn
   */
  export type DepoimentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depoimento
     */
    select?: DepoimentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Depoimento
     */
    omit?: DepoimentoOmit<ExtArgs> | null
    /**
     * The data used to update Depoimentos.
     */
    data: XOR<DepoimentoUpdateManyMutationInput, DepoimentoUncheckedUpdateManyInput>
    /**
     * Filter which Depoimentos to update
     */
    where?: DepoimentoWhereInput
    /**
     * Limit how many Depoimentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepoimentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Depoimento upsert
   */
  export type DepoimentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depoimento
     */
    select?: DepoimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depoimento
     */
    omit?: DepoimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepoimentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Depoimento to update in case it exists.
     */
    where: DepoimentoWhereUniqueInput
    /**
     * In case the Depoimento found by the `where` argument doesn't exist, create a new Depoimento with this data.
     */
    create: XOR<DepoimentoCreateInput, DepoimentoUncheckedCreateInput>
    /**
     * In case the Depoimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepoimentoUpdateInput, DepoimentoUncheckedUpdateInput>
  }

  /**
   * Depoimento delete
   */
  export type DepoimentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depoimento
     */
    select?: DepoimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depoimento
     */
    omit?: DepoimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepoimentoInclude<ExtArgs> | null
    /**
     * Filter which Depoimento to delete.
     */
    where: DepoimentoWhereUniqueInput
  }

  /**
   * Depoimento deleteMany
   */
  export type DepoimentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Depoimentos to delete
     */
    where?: DepoimentoWhereInput
    /**
     * Limit how many Depoimentos to delete.
     */
    limit?: number
  }

  /**
   * Depoimento.aluno
   */
  export type Depoimento$alunoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    where?: AlunoWhereInput
  }

  /**
   * Depoimento without action
   */
  export type DepoimentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depoimento
     */
    select?: DepoimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depoimento
     */
    omit?: DepoimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepoimentoInclude<ExtArgs> | null
  }


  /**
   * Model Promocao
   */

  export type AggregatePromocao = {
    _count: PromocaoCountAggregateOutputType | null
    _min: PromocaoMinAggregateOutputType | null
    _max: PromocaoMaxAggregateOutputType | null
  }

  export type PromocaoMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    desconto: string | null
    cupom: string | null
    ativa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromocaoMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    desconto: string | null
    cupom: string | null
    ativa: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromocaoCountAggregateOutputType = {
    id: number
    titulo: number
    desconto: number
    cupom: number
    ativa: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromocaoMinAggregateInputType = {
    id?: true
    titulo?: true
    desconto?: true
    cupom?: true
    ativa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromocaoMaxAggregateInputType = {
    id?: true
    titulo?: true
    desconto?: true
    cupom?: true
    ativa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromocaoCountAggregateInputType = {
    id?: true
    titulo?: true
    desconto?: true
    cupom?: true
    ativa?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromocaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promocao to aggregate.
     */
    where?: PromocaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocaos to fetch.
     */
    orderBy?: PromocaoOrderByWithRelationInput | PromocaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromocaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promocaos
    **/
    _count?: true | PromocaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromocaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromocaoMaxAggregateInputType
  }

  export type GetPromocaoAggregateType<T extends PromocaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePromocao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromocao[P]>
      : GetScalarType<T[P], AggregatePromocao[P]>
  }




  export type PromocaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromocaoWhereInput
    orderBy?: PromocaoOrderByWithAggregationInput | PromocaoOrderByWithAggregationInput[]
    by: PromocaoScalarFieldEnum[] | PromocaoScalarFieldEnum
    having?: PromocaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromocaoCountAggregateInputType | true
    _min?: PromocaoMinAggregateInputType
    _max?: PromocaoMaxAggregateInputType
  }

  export type PromocaoGroupByOutputType = {
    id: string
    titulo: string
    desconto: string
    cupom: string | null
    ativa: boolean
    createdAt: Date
    updatedAt: Date
    _count: PromocaoCountAggregateOutputType | null
    _min: PromocaoMinAggregateOutputType | null
    _max: PromocaoMaxAggregateOutputType | null
  }

  type GetPromocaoGroupByPayload<T extends PromocaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromocaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromocaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromocaoGroupByOutputType[P]>
            : GetScalarType<T[P], PromocaoGroupByOutputType[P]>
        }
      >
    >


  export type PromocaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    desconto?: boolean
    cupom?: boolean
    ativa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promocao"]>

  export type PromocaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    desconto?: boolean
    cupom?: boolean
    ativa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promocao"]>

  export type PromocaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    desconto?: boolean
    cupom?: boolean
    ativa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promocao"]>

  export type PromocaoSelectScalar = {
    id?: boolean
    titulo?: boolean
    desconto?: boolean
    cupom?: boolean
    ativa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromocaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "desconto" | "cupom" | "ativa" | "createdAt" | "updatedAt", ExtArgs["result"]["promocao"]>

  export type $PromocaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promocao"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      desconto: string
      cupom: string | null
      ativa: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promocao"]>
    composites: {}
  }

  type PromocaoGetPayload<S extends boolean | null | undefined | PromocaoDefaultArgs> = $Result.GetResult<Prisma.$PromocaoPayload, S>

  type PromocaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromocaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromocaoCountAggregateInputType | true
    }

  export interface PromocaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promocao'], meta: { name: 'Promocao' } }
    /**
     * Find zero or one Promocao that matches the filter.
     * @param {PromocaoFindUniqueArgs} args - Arguments to find a Promocao
     * @example
     * // Get one Promocao
     * const promocao = await prisma.promocao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromocaoFindUniqueArgs>(args: SelectSubset<T, PromocaoFindUniqueArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promocao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromocaoFindUniqueOrThrowArgs} args - Arguments to find a Promocao
     * @example
     * // Get one Promocao
     * const promocao = await prisma.promocao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromocaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PromocaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promocao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocaoFindFirstArgs} args - Arguments to find a Promocao
     * @example
     * // Get one Promocao
     * const promocao = await prisma.promocao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromocaoFindFirstArgs>(args?: SelectSubset<T, PromocaoFindFirstArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promocao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocaoFindFirstOrThrowArgs} args - Arguments to find a Promocao
     * @example
     * // Get one Promocao
     * const promocao = await prisma.promocao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromocaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PromocaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promocaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promocaos
     * const promocaos = await prisma.promocao.findMany()
     * 
     * // Get first 10 Promocaos
     * const promocaos = await prisma.promocao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promocaoWithIdOnly = await prisma.promocao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromocaoFindManyArgs>(args?: SelectSubset<T, PromocaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promocao.
     * @param {PromocaoCreateArgs} args - Arguments to create a Promocao.
     * @example
     * // Create one Promocao
     * const Promocao = await prisma.promocao.create({
     *   data: {
     *     // ... data to create a Promocao
     *   }
     * })
     * 
     */
    create<T extends PromocaoCreateArgs>(args: SelectSubset<T, PromocaoCreateArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promocaos.
     * @param {PromocaoCreateManyArgs} args - Arguments to create many Promocaos.
     * @example
     * // Create many Promocaos
     * const promocao = await prisma.promocao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromocaoCreateManyArgs>(args?: SelectSubset<T, PromocaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promocaos and returns the data saved in the database.
     * @param {PromocaoCreateManyAndReturnArgs} args - Arguments to create many Promocaos.
     * @example
     * // Create many Promocaos
     * const promocao = await prisma.promocao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promocaos and only return the `id`
     * const promocaoWithIdOnly = await prisma.promocao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromocaoCreateManyAndReturnArgs>(args?: SelectSubset<T, PromocaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Promocao.
     * @param {PromocaoDeleteArgs} args - Arguments to delete one Promocao.
     * @example
     * // Delete one Promocao
     * const Promocao = await prisma.promocao.delete({
     *   where: {
     *     // ... filter to delete one Promocao
     *   }
     * })
     * 
     */
    delete<T extends PromocaoDeleteArgs>(args: SelectSubset<T, PromocaoDeleteArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promocao.
     * @param {PromocaoUpdateArgs} args - Arguments to update one Promocao.
     * @example
     * // Update one Promocao
     * const promocao = await prisma.promocao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromocaoUpdateArgs>(args: SelectSubset<T, PromocaoUpdateArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promocaos.
     * @param {PromocaoDeleteManyArgs} args - Arguments to filter Promocaos to delete.
     * @example
     * // Delete a few Promocaos
     * const { count } = await prisma.promocao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromocaoDeleteManyArgs>(args?: SelectSubset<T, PromocaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promocaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promocaos
     * const promocao = await prisma.promocao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromocaoUpdateManyArgs>(args: SelectSubset<T, PromocaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promocaos and returns the data updated in the database.
     * @param {PromocaoUpdateManyAndReturnArgs} args - Arguments to update many Promocaos.
     * @example
     * // Update many Promocaos
     * const promocao = await prisma.promocao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Promocaos and only return the `id`
     * const promocaoWithIdOnly = await prisma.promocao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromocaoUpdateManyAndReturnArgs>(args: SelectSubset<T, PromocaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Promocao.
     * @param {PromocaoUpsertArgs} args - Arguments to update or create a Promocao.
     * @example
     * // Update or create a Promocao
     * const promocao = await prisma.promocao.upsert({
     *   create: {
     *     // ... data to create a Promocao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promocao we want to update
     *   }
     * })
     */
    upsert<T extends PromocaoUpsertArgs>(args: SelectSubset<T, PromocaoUpsertArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promocaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocaoCountArgs} args - Arguments to filter Promocaos to count.
     * @example
     * // Count the number of Promocaos
     * const count = await prisma.promocao.count({
     *   where: {
     *     // ... the filter for the Promocaos we want to count
     *   }
     * })
    **/
    count<T extends PromocaoCountArgs>(
      args?: Subset<T, PromocaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromocaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promocao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromocaoAggregateArgs>(args: Subset<T, PromocaoAggregateArgs>): Prisma.PrismaPromise<GetPromocaoAggregateType<T>>

    /**
     * Group by Promocao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromocaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromocaoGroupByArgs['orderBy'] }
        : { orderBy?: PromocaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromocaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromocaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promocao model
   */
  readonly fields: PromocaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promocao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromocaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promocao model
   */
  interface PromocaoFieldRefs {
    readonly id: FieldRef<"Promocao", 'String'>
    readonly titulo: FieldRef<"Promocao", 'String'>
    readonly desconto: FieldRef<"Promocao", 'String'>
    readonly cupom: FieldRef<"Promocao", 'String'>
    readonly ativa: FieldRef<"Promocao", 'Boolean'>
    readonly createdAt: FieldRef<"Promocao", 'DateTime'>
    readonly updatedAt: FieldRef<"Promocao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promocao findUnique
   */
  export type PromocaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Filter, which Promocao to fetch.
     */
    where: PromocaoWhereUniqueInput
  }

  /**
   * Promocao findUniqueOrThrow
   */
  export type PromocaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Filter, which Promocao to fetch.
     */
    where: PromocaoWhereUniqueInput
  }

  /**
   * Promocao findFirst
   */
  export type PromocaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Filter, which Promocao to fetch.
     */
    where?: PromocaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocaos to fetch.
     */
    orderBy?: PromocaoOrderByWithRelationInput | PromocaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promocaos.
     */
    cursor?: PromocaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promocaos.
     */
    distinct?: PromocaoScalarFieldEnum | PromocaoScalarFieldEnum[]
  }

  /**
   * Promocao findFirstOrThrow
   */
  export type PromocaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Filter, which Promocao to fetch.
     */
    where?: PromocaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocaos to fetch.
     */
    orderBy?: PromocaoOrderByWithRelationInput | PromocaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promocaos.
     */
    cursor?: PromocaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promocaos.
     */
    distinct?: PromocaoScalarFieldEnum | PromocaoScalarFieldEnum[]
  }

  /**
   * Promocao findMany
   */
  export type PromocaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Filter, which Promocaos to fetch.
     */
    where?: PromocaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocaos to fetch.
     */
    orderBy?: PromocaoOrderByWithRelationInput | PromocaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promocaos.
     */
    cursor?: PromocaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocaos.
     */
    skip?: number
    distinct?: PromocaoScalarFieldEnum | PromocaoScalarFieldEnum[]
  }

  /**
   * Promocao create
   */
  export type PromocaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * The data needed to create a Promocao.
     */
    data: XOR<PromocaoCreateInput, PromocaoUncheckedCreateInput>
  }

  /**
   * Promocao createMany
   */
  export type PromocaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promocaos.
     */
    data: PromocaoCreateManyInput | PromocaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promocao createManyAndReturn
   */
  export type PromocaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * The data used to create many Promocaos.
     */
    data: PromocaoCreateManyInput | PromocaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promocao update
   */
  export type PromocaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * The data needed to update a Promocao.
     */
    data: XOR<PromocaoUpdateInput, PromocaoUncheckedUpdateInput>
    /**
     * Choose, which Promocao to update.
     */
    where: PromocaoWhereUniqueInput
  }

  /**
   * Promocao updateMany
   */
  export type PromocaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promocaos.
     */
    data: XOR<PromocaoUpdateManyMutationInput, PromocaoUncheckedUpdateManyInput>
    /**
     * Filter which Promocaos to update
     */
    where?: PromocaoWhereInput
    /**
     * Limit how many Promocaos to update.
     */
    limit?: number
  }

  /**
   * Promocao updateManyAndReturn
   */
  export type PromocaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * The data used to update Promocaos.
     */
    data: XOR<PromocaoUpdateManyMutationInput, PromocaoUncheckedUpdateManyInput>
    /**
     * Filter which Promocaos to update
     */
    where?: PromocaoWhereInput
    /**
     * Limit how many Promocaos to update.
     */
    limit?: number
  }

  /**
   * Promocao upsert
   */
  export type PromocaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * The filter to search for the Promocao to update in case it exists.
     */
    where: PromocaoWhereUniqueInput
    /**
     * In case the Promocao found by the `where` argument doesn't exist, create a new Promocao with this data.
     */
    create: XOR<PromocaoCreateInput, PromocaoUncheckedCreateInput>
    /**
     * In case the Promocao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromocaoUpdateInput, PromocaoUncheckedUpdateInput>
  }

  /**
   * Promocao delete
   */
  export type PromocaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Filter which Promocao to delete.
     */
    where: PromocaoWhereUniqueInput
  }

  /**
   * Promocao deleteMany
   */
  export type PromocaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promocaos to delete
     */
    where?: PromocaoWhereInput
    /**
     * Limit how many Promocaos to delete.
     */
    limit?: number
  }

  /**
   * Promocao without action
   */
  export type PromocaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
  }


  /**
   * Model Administrador
   */

  export type AggregateAdministrador = {
    _count: AdministradorCountAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  export type AdministradorMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministradorMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministradorCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdministradorMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministradorMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministradorCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdministradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrador to aggregate.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administradors
    **/
    _count?: true | AdministradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministradorMaxAggregateInputType
  }

  export type GetAdministradorAggregateType<T extends AdministradorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrador[P]>
      : GetScalarType<T[P], AggregateAdministrador[P]>
  }




  export type AdministradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministradorWhereInput
    orderBy?: AdministradorOrderByWithAggregationInput | AdministradorOrderByWithAggregationInput[]
    by: AdministradorScalarFieldEnum[] | AdministradorScalarFieldEnum
    having?: AdministradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministradorCountAggregateInputType | true
    _min?: AdministradorMinAggregateInputType
    _max?: AdministradorMaxAggregateInputType
  }

  export type AdministradorGroupByOutputType = {
    id: string
    nome: string
    email: string
    senha: string
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: AdministradorCountAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  type GetAdministradorGroupByPayload<T extends AdministradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
        }
      >
    >


  export type AdministradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdministradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["administrador"]>

  export type $AdministradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrador"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senha: string
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["administrador"]>
    composites: {}
  }

  type AdministradorGetPayload<S extends boolean | null | undefined | AdministradorDefaultArgs> = $Result.GetResult<Prisma.$AdministradorPayload, S>

  type AdministradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdministradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministradorCountAggregateInputType | true
    }

  export interface AdministradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrador'], meta: { name: 'Administrador' } }
    /**
     * Find zero or one Administrador that matches the filter.
     * @param {AdministradorFindUniqueArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministradorFindUniqueArgs>(args: SelectSubset<T, AdministradorFindUniqueArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administrador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdministradorFindUniqueOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministradorFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministradorFindFirstArgs>(args?: SelectSubset<T, AdministradorFindFirstArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministradorFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administradors
     * const administradors = await prisma.administrador.findMany()
     * 
     * // Get first 10 Administradors
     * const administradors = await prisma.administrador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const administradorWithIdOnly = await prisma.administrador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdministradorFindManyArgs>(args?: SelectSubset<T, AdministradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administrador.
     * @param {AdministradorCreateArgs} args - Arguments to create a Administrador.
     * @example
     * // Create one Administrador
     * const Administrador = await prisma.administrador.create({
     *   data: {
     *     // ... data to create a Administrador
     *   }
     * })
     * 
     */
    create<T extends AdministradorCreateArgs>(args: SelectSubset<T, AdministradorCreateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administradors.
     * @param {AdministradorCreateManyArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministradorCreateManyArgs>(args?: SelectSubset<T, AdministradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Administradors and returns the data saved in the database.
     * @param {AdministradorCreateManyAndReturnArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Administradors and only return the `id`
     * const administradorWithIdOnly = await prisma.administrador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdministradorCreateManyAndReturnArgs>(args?: SelectSubset<T, AdministradorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Administrador.
     * @param {AdministradorDeleteArgs} args - Arguments to delete one Administrador.
     * @example
     * // Delete one Administrador
     * const Administrador = await prisma.administrador.delete({
     *   where: {
     *     // ... filter to delete one Administrador
     *   }
     * })
     * 
     */
    delete<T extends AdministradorDeleteArgs>(args: SelectSubset<T, AdministradorDeleteArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administrador.
     * @param {AdministradorUpdateArgs} args - Arguments to update one Administrador.
     * @example
     * // Update one Administrador
     * const administrador = await prisma.administrador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministradorUpdateArgs>(args: SelectSubset<T, AdministradorUpdateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administradors.
     * @param {AdministradorDeleteManyArgs} args - Arguments to filter Administradors to delete.
     * @example
     * // Delete a few Administradors
     * const { count } = await prisma.administrador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministradorDeleteManyArgs>(args?: SelectSubset<T, AdministradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministradorUpdateManyArgs>(args: SelectSubset<T, AdministradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors and returns the data updated in the database.
     * @param {AdministradorUpdateManyAndReturnArgs} args - Arguments to update many Administradors.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Administradors and only return the `id`
     * const administradorWithIdOnly = await prisma.administrador.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdministradorUpdateManyAndReturnArgs>(args: SelectSubset<T, AdministradorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Administrador.
     * @param {AdministradorUpsertArgs} args - Arguments to update or create a Administrador.
     * @example
     * // Update or create a Administrador
     * const administrador = await prisma.administrador.upsert({
     *   create: {
     *     // ... data to create a Administrador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrador we want to update
     *   }
     * })
     */
    upsert<T extends AdministradorUpsertArgs>(args: SelectSubset<T, AdministradorUpsertArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorCountArgs} args - Arguments to filter Administradors to count.
     * @example
     * // Count the number of Administradors
     * const count = await prisma.administrador.count({
     *   where: {
     *     // ... the filter for the Administradors we want to count
     *   }
     * })
    **/
    count<T extends AdministradorCountArgs>(
      args?: Subset<T, AdministradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdministradorAggregateArgs>(args: Subset<T, AdministradorAggregateArgs>): Prisma.PrismaPromise<GetAdministradorAggregateType<T>>

    /**
     * Group by Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdministradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministradorGroupByArgs['orderBy'] }
        : { orderBy?: AdministradorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdministradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrador model
   */
  readonly fields: AdministradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Administrador model
   */
  interface AdministradorFieldRefs {
    readonly id: FieldRef<"Administrador", 'String'>
    readonly nome: FieldRef<"Administrador", 'String'>
    readonly email: FieldRef<"Administrador", 'String'>
    readonly senha: FieldRef<"Administrador", 'String'>
    readonly ativo: FieldRef<"Administrador", 'Boolean'>
    readonly createdAt: FieldRef<"Administrador", 'DateTime'>
    readonly updatedAt: FieldRef<"Administrador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Administrador findUnique
   */
  export type AdministradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findUniqueOrThrow
   */
  export type AdministradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findFirst
   */
  export type AdministradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findFirstOrThrow
   */
  export type AdministradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findMany
   */
  export type AdministradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter, which Administradors to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador create
   */
  export type AdministradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data needed to create a Administrador.
     */
    data: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
  }

  /**
   * Administrador createMany
   */
  export type AdministradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador createManyAndReturn
   */
  export type AdministradorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador update
   */
  export type AdministradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data needed to update a Administrador.
     */
    data: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
    /**
     * Choose, which Administrador to update.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador updateMany
   */
  export type AdministradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to update.
     */
    limit?: number
  }

  /**
   * Administrador updateManyAndReturn
   */
  export type AdministradorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to update.
     */
    limit?: number
  }

  /**
   * Administrador upsert
   */
  export type AdministradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The filter to search for the Administrador to update in case it exists.
     */
    where: AdministradorWhereUniqueInput
    /**
     * In case the Administrador found by the `where` argument doesn't exist, create a new Administrador with this data.
     */
    create: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
    /**
     * In case the Administrador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
  }

  /**
   * Administrador delete
   */
  export type AdministradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter which Administrador to delete.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador deleteMany
   */
  export type AdministradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administradors to delete
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to delete.
     */
    limit?: number
  }

  /**
   * Administrador without action
   */
  export type AdministradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
  }


  /**
   * Model Configuracao
   */

  export type AggregateConfiguracao = {
    _count: ConfiguracaoCountAggregateOutputType | null
    _min: ConfiguracaoMinAggregateOutputType | null
    _max: ConfiguracaoMaxAggregateOutputType | null
  }

  export type ConfiguracaoMinAggregateOutputType = {
    id: string | null
    historia: string | null
    historiaImagem: string | null
    historiaVideo: string | null
    missao: string | null
    visao: string | null
    valores: string | null
    telefone: string | null
    email: string | null
    endereco: string | null
    instagram: string | null
    facebook: string | null
    youtube: string | null
    linkedin: string | null
    tiktok: string | null
    slogan: string | null
    updatedAt: Date | null
  }

  export type ConfiguracaoMaxAggregateOutputType = {
    id: string | null
    historia: string | null
    historiaImagem: string | null
    historiaVideo: string | null
    missao: string | null
    visao: string | null
    valores: string | null
    telefone: string | null
    email: string | null
    endereco: string | null
    instagram: string | null
    facebook: string | null
    youtube: string | null
    linkedin: string | null
    tiktok: string | null
    slogan: string | null
    updatedAt: Date | null
  }

  export type ConfiguracaoCountAggregateOutputType = {
    id: number
    historia: number
    historiaImagem: number
    historiaVideo: number
    missao: number
    visao: number
    valores: number
    telefone: number
    email: number
    endereco: number
    instagram: number
    facebook: number
    youtube: number
    linkedin: number
    tiktok: number
    slogan: number
    updatedAt: number
    _all: number
  }


  export type ConfiguracaoMinAggregateInputType = {
    id?: true
    historia?: true
    historiaImagem?: true
    historiaVideo?: true
    missao?: true
    visao?: true
    valores?: true
    telefone?: true
    email?: true
    endereco?: true
    instagram?: true
    facebook?: true
    youtube?: true
    linkedin?: true
    tiktok?: true
    slogan?: true
    updatedAt?: true
  }

  export type ConfiguracaoMaxAggregateInputType = {
    id?: true
    historia?: true
    historiaImagem?: true
    historiaVideo?: true
    missao?: true
    visao?: true
    valores?: true
    telefone?: true
    email?: true
    endereco?: true
    instagram?: true
    facebook?: true
    youtube?: true
    linkedin?: true
    tiktok?: true
    slogan?: true
    updatedAt?: true
  }

  export type ConfiguracaoCountAggregateInputType = {
    id?: true
    historia?: true
    historiaImagem?: true
    historiaVideo?: true
    missao?: true
    visao?: true
    valores?: true
    telefone?: true
    email?: true
    endereco?: true
    instagram?: true
    facebook?: true
    youtube?: true
    linkedin?: true
    tiktok?: true
    slogan?: true
    updatedAt?: true
    _all?: true
  }

  export type ConfiguracaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configuracao to aggregate.
     */
    where?: ConfiguracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracaos to fetch.
     */
    orderBy?: ConfiguracaoOrderByWithRelationInput | ConfiguracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfiguracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configuracaos
    **/
    _count?: true | ConfiguracaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfiguracaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfiguracaoMaxAggregateInputType
  }

  export type GetConfiguracaoAggregateType<T extends ConfiguracaoAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguracao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguracao[P]>
      : GetScalarType<T[P], AggregateConfiguracao[P]>
  }




  export type ConfiguracaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfiguracaoWhereInput
    orderBy?: ConfiguracaoOrderByWithAggregationInput | ConfiguracaoOrderByWithAggregationInput[]
    by: ConfiguracaoScalarFieldEnum[] | ConfiguracaoScalarFieldEnum
    having?: ConfiguracaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfiguracaoCountAggregateInputType | true
    _min?: ConfiguracaoMinAggregateInputType
    _max?: ConfiguracaoMaxAggregateInputType
  }

  export type ConfiguracaoGroupByOutputType = {
    id: string
    historia: string
    historiaImagem: string | null
    historiaVideo: string | null
    missao: string
    visao: string
    valores: string
    telefone: string | null
    email: string | null
    endereco: string | null
    instagram: string | null
    facebook: string | null
    youtube: string | null
    linkedin: string | null
    tiktok: string | null
    slogan: string | null
    updatedAt: Date
    _count: ConfiguracaoCountAggregateOutputType | null
    _min: ConfiguracaoMinAggregateOutputType | null
    _max: ConfiguracaoMaxAggregateOutputType | null
  }

  type GetConfiguracaoGroupByPayload<T extends ConfiguracaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfiguracaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfiguracaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfiguracaoGroupByOutputType[P]>
            : GetScalarType<T[P], ConfiguracaoGroupByOutputType[P]>
        }
      >
    >


  export type ConfiguracaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    historia?: boolean
    historiaImagem?: boolean
    historiaVideo?: boolean
    missao?: boolean
    visao?: boolean
    valores?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    instagram?: boolean
    facebook?: boolean
    youtube?: boolean
    linkedin?: boolean
    tiktok?: boolean
    slogan?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["configuracao"]>

  export type ConfiguracaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    historia?: boolean
    historiaImagem?: boolean
    historiaVideo?: boolean
    missao?: boolean
    visao?: boolean
    valores?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    instagram?: boolean
    facebook?: boolean
    youtube?: boolean
    linkedin?: boolean
    tiktok?: boolean
    slogan?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["configuracao"]>

  export type ConfiguracaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    historia?: boolean
    historiaImagem?: boolean
    historiaVideo?: boolean
    missao?: boolean
    visao?: boolean
    valores?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    instagram?: boolean
    facebook?: boolean
    youtube?: boolean
    linkedin?: boolean
    tiktok?: boolean
    slogan?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["configuracao"]>

  export type ConfiguracaoSelectScalar = {
    id?: boolean
    historia?: boolean
    historiaImagem?: boolean
    historiaVideo?: boolean
    missao?: boolean
    visao?: boolean
    valores?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    instagram?: boolean
    facebook?: boolean
    youtube?: boolean
    linkedin?: boolean
    tiktok?: boolean
    slogan?: boolean
    updatedAt?: boolean
  }

  export type ConfiguracaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "historia" | "historiaImagem" | "historiaVideo" | "missao" | "visao" | "valores" | "telefone" | "email" | "endereco" | "instagram" | "facebook" | "youtube" | "linkedin" | "tiktok" | "slogan" | "updatedAt", ExtArgs["result"]["configuracao"]>

  export type $ConfiguracaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Configuracao"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      historia: string
      historiaImagem: string | null
      historiaVideo: string | null
      missao: string
      visao: string
      valores: string
      telefone: string | null
      email: string | null
      endereco: string | null
      instagram: string | null
      facebook: string | null
      youtube: string | null
      linkedin: string | null
      tiktok: string | null
      slogan: string | null
      updatedAt: Date
    }, ExtArgs["result"]["configuracao"]>
    composites: {}
  }

  type ConfiguracaoGetPayload<S extends boolean | null | undefined | ConfiguracaoDefaultArgs> = $Result.GetResult<Prisma.$ConfiguracaoPayload, S>

  type ConfiguracaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfiguracaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfiguracaoCountAggregateInputType | true
    }

  export interface ConfiguracaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Configuracao'], meta: { name: 'Configuracao' } }
    /**
     * Find zero or one Configuracao that matches the filter.
     * @param {ConfiguracaoFindUniqueArgs} args - Arguments to find a Configuracao
     * @example
     * // Get one Configuracao
     * const configuracao = await prisma.configuracao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfiguracaoFindUniqueArgs>(args: SelectSubset<T, ConfiguracaoFindUniqueArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Configuracao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfiguracaoFindUniqueOrThrowArgs} args - Arguments to find a Configuracao
     * @example
     * // Get one Configuracao
     * const configuracao = await prisma.configuracao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfiguracaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfiguracaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoFindFirstArgs} args - Arguments to find a Configuracao
     * @example
     * // Get one Configuracao
     * const configuracao = await prisma.configuracao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfiguracaoFindFirstArgs>(args?: SelectSubset<T, ConfiguracaoFindFirstArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoFindFirstOrThrowArgs} args - Arguments to find a Configuracao
     * @example
     * // Get one Configuracao
     * const configuracao = await prisma.configuracao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfiguracaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfiguracaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configuracaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configuracaos
     * const configuracaos = await prisma.configuracao.findMany()
     * 
     * // Get first 10 Configuracaos
     * const configuracaos = await prisma.configuracao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configuracaoWithIdOnly = await prisma.configuracao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfiguracaoFindManyArgs>(args?: SelectSubset<T, ConfiguracaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Configuracao.
     * @param {ConfiguracaoCreateArgs} args - Arguments to create a Configuracao.
     * @example
     * // Create one Configuracao
     * const Configuracao = await prisma.configuracao.create({
     *   data: {
     *     // ... data to create a Configuracao
     *   }
     * })
     * 
     */
    create<T extends ConfiguracaoCreateArgs>(args: SelectSubset<T, ConfiguracaoCreateArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configuracaos.
     * @param {ConfiguracaoCreateManyArgs} args - Arguments to create many Configuracaos.
     * @example
     * // Create many Configuracaos
     * const configuracao = await prisma.configuracao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfiguracaoCreateManyArgs>(args?: SelectSubset<T, ConfiguracaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configuracaos and returns the data saved in the database.
     * @param {ConfiguracaoCreateManyAndReturnArgs} args - Arguments to create many Configuracaos.
     * @example
     * // Create many Configuracaos
     * const configuracao = await prisma.configuracao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configuracaos and only return the `id`
     * const configuracaoWithIdOnly = await prisma.configuracao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfiguracaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfiguracaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Configuracao.
     * @param {ConfiguracaoDeleteArgs} args - Arguments to delete one Configuracao.
     * @example
     * // Delete one Configuracao
     * const Configuracao = await prisma.configuracao.delete({
     *   where: {
     *     // ... filter to delete one Configuracao
     *   }
     * })
     * 
     */
    delete<T extends ConfiguracaoDeleteArgs>(args: SelectSubset<T, ConfiguracaoDeleteArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Configuracao.
     * @param {ConfiguracaoUpdateArgs} args - Arguments to update one Configuracao.
     * @example
     * // Update one Configuracao
     * const configuracao = await prisma.configuracao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfiguracaoUpdateArgs>(args: SelectSubset<T, ConfiguracaoUpdateArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configuracaos.
     * @param {ConfiguracaoDeleteManyArgs} args - Arguments to filter Configuracaos to delete.
     * @example
     * // Delete a few Configuracaos
     * const { count } = await prisma.configuracao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfiguracaoDeleteManyArgs>(args?: SelectSubset<T, ConfiguracaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configuracaos
     * const configuracao = await prisma.configuracao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfiguracaoUpdateManyArgs>(args: SelectSubset<T, ConfiguracaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracaos and returns the data updated in the database.
     * @param {ConfiguracaoUpdateManyAndReturnArgs} args - Arguments to update many Configuracaos.
     * @example
     * // Update many Configuracaos
     * const configuracao = await prisma.configuracao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Configuracaos and only return the `id`
     * const configuracaoWithIdOnly = await prisma.configuracao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConfiguracaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfiguracaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Configuracao.
     * @param {ConfiguracaoUpsertArgs} args - Arguments to update or create a Configuracao.
     * @example
     * // Update or create a Configuracao
     * const configuracao = await prisma.configuracao.upsert({
     *   create: {
     *     // ... data to create a Configuracao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuracao we want to update
     *   }
     * })
     */
    upsert<T extends ConfiguracaoUpsertArgs>(args: SelectSubset<T, ConfiguracaoUpsertArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configuracaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoCountArgs} args - Arguments to filter Configuracaos to count.
     * @example
     * // Count the number of Configuracaos
     * const count = await prisma.configuracao.count({
     *   where: {
     *     // ... the filter for the Configuracaos we want to count
     *   }
     * })
    **/
    count<T extends ConfiguracaoCountArgs>(
      args?: Subset<T, ConfiguracaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfiguracaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuracao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConfiguracaoAggregateArgs>(args: Subset<T, ConfiguracaoAggregateArgs>): Prisma.PrismaPromise<GetConfiguracaoAggregateType<T>>

    /**
     * Group by Configuracao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConfiguracaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfiguracaoGroupByArgs['orderBy'] }
        : { orderBy?: ConfiguracaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConfiguracaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Configuracao model
   */
  readonly fields: ConfiguracaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Configuracao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfiguracaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Configuracao model
   */
  interface ConfiguracaoFieldRefs {
    readonly id: FieldRef<"Configuracao", 'String'>
    readonly historia: FieldRef<"Configuracao", 'String'>
    readonly historiaImagem: FieldRef<"Configuracao", 'String'>
    readonly historiaVideo: FieldRef<"Configuracao", 'String'>
    readonly missao: FieldRef<"Configuracao", 'String'>
    readonly visao: FieldRef<"Configuracao", 'String'>
    readonly valores: FieldRef<"Configuracao", 'String'>
    readonly telefone: FieldRef<"Configuracao", 'String'>
    readonly email: FieldRef<"Configuracao", 'String'>
    readonly endereco: FieldRef<"Configuracao", 'String'>
    readonly instagram: FieldRef<"Configuracao", 'String'>
    readonly facebook: FieldRef<"Configuracao", 'String'>
    readonly youtube: FieldRef<"Configuracao", 'String'>
    readonly linkedin: FieldRef<"Configuracao", 'String'>
    readonly tiktok: FieldRef<"Configuracao", 'String'>
    readonly slogan: FieldRef<"Configuracao", 'String'>
    readonly updatedAt: FieldRef<"Configuracao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Configuracao findUnique
   */
  export type ConfiguracaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Filter, which Configuracao to fetch.
     */
    where: ConfiguracaoWhereUniqueInput
  }

  /**
   * Configuracao findUniqueOrThrow
   */
  export type ConfiguracaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Filter, which Configuracao to fetch.
     */
    where: ConfiguracaoWhereUniqueInput
  }

  /**
   * Configuracao findFirst
   */
  export type ConfiguracaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Filter, which Configuracao to fetch.
     */
    where?: ConfiguracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracaos to fetch.
     */
    orderBy?: ConfiguracaoOrderByWithRelationInput | ConfiguracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configuracaos.
     */
    cursor?: ConfiguracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configuracaos.
     */
    distinct?: ConfiguracaoScalarFieldEnum | ConfiguracaoScalarFieldEnum[]
  }

  /**
   * Configuracao findFirstOrThrow
   */
  export type ConfiguracaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Filter, which Configuracao to fetch.
     */
    where?: ConfiguracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracaos to fetch.
     */
    orderBy?: ConfiguracaoOrderByWithRelationInput | ConfiguracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configuracaos.
     */
    cursor?: ConfiguracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configuracaos.
     */
    distinct?: ConfiguracaoScalarFieldEnum | ConfiguracaoScalarFieldEnum[]
  }

  /**
   * Configuracao findMany
   */
  export type ConfiguracaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Filter, which Configuracaos to fetch.
     */
    where?: ConfiguracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracaos to fetch.
     */
    orderBy?: ConfiguracaoOrderByWithRelationInput | ConfiguracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configuracaos.
     */
    cursor?: ConfiguracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracaos.
     */
    skip?: number
    distinct?: ConfiguracaoScalarFieldEnum | ConfiguracaoScalarFieldEnum[]
  }

  /**
   * Configuracao create
   */
  export type ConfiguracaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * The data needed to create a Configuracao.
     */
    data: XOR<ConfiguracaoCreateInput, ConfiguracaoUncheckedCreateInput>
  }

  /**
   * Configuracao createMany
   */
  export type ConfiguracaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configuracaos.
     */
    data: ConfiguracaoCreateManyInput | ConfiguracaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Configuracao createManyAndReturn
   */
  export type ConfiguracaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * The data used to create many Configuracaos.
     */
    data: ConfiguracaoCreateManyInput | ConfiguracaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Configuracao update
   */
  export type ConfiguracaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * The data needed to update a Configuracao.
     */
    data: XOR<ConfiguracaoUpdateInput, ConfiguracaoUncheckedUpdateInput>
    /**
     * Choose, which Configuracao to update.
     */
    where: ConfiguracaoWhereUniqueInput
  }

  /**
   * Configuracao updateMany
   */
  export type ConfiguracaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configuracaos.
     */
    data: XOR<ConfiguracaoUpdateManyMutationInput, ConfiguracaoUncheckedUpdateManyInput>
    /**
     * Filter which Configuracaos to update
     */
    where?: ConfiguracaoWhereInput
    /**
     * Limit how many Configuracaos to update.
     */
    limit?: number
  }

  /**
   * Configuracao updateManyAndReturn
   */
  export type ConfiguracaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * The data used to update Configuracaos.
     */
    data: XOR<ConfiguracaoUpdateManyMutationInput, ConfiguracaoUncheckedUpdateManyInput>
    /**
     * Filter which Configuracaos to update
     */
    where?: ConfiguracaoWhereInput
    /**
     * Limit how many Configuracaos to update.
     */
    limit?: number
  }

  /**
   * Configuracao upsert
   */
  export type ConfiguracaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * The filter to search for the Configuracao to update in case it exists.
     */
    where: ConfiguracaoWhereUniqueInput
    /**
     * In case the Configuracao found by the `where` argument doesn't exist, create a new Configuracao with this data.
     */
    create: XOR<ConfiguracaoCreateInput, ConfiguracaoUncheckedCreateInput>
    /**
     * In case the Configuracao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfiguracaoUpdateInput, ConfiguracaoUncheckedUpdateInput>
  }

  /**
   * Configuracao delete
   */
  export type ConfiguracaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Filter which Configuracao to delete.
     */
    where: ConfiguracaoWhereUniqueInput
  }

  /**
   * Configuracao deleteMany
   */
  export type ConfiguracaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configuracaos to delete
     */
    where?: ConfiguracaoWhereInput
    /**
     * Limit how many Configuracaos to delete.
     */
    limit?: number
  }

  /**
   * Configuracao without action
   */
  export type ConfiguracaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
  }


  /**
   * Model Despesa
   */

  export type AggregateDespesa = {
    _count: DespesaCountAggregateOutputType | null
    _avg: DespesaAvgAggregateOutputType | null
    _sum: DespesaSumAggregateOutputType | null
    _min: DespesaMinAggregateOutputType | null
    _max: DespesaMaxAggregateOutputType | null
  }

  export type DespesaAvgAggregateOutputType = {
    valor: number | null
  }

  export type DespesaSumAggregateOutputType = {
    valor: number | null
  }

  export type DespesaMinAggregateOutputType = {
    id: string | null
    descricao: string | null
    valor: number | null
    vencimento: Date | null
    categoria: string | null
    pago: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DespesaMaxAggregateOutputType = {
    id: string | null
    descricao: string | null
    valor: number | null
    vencimento: Date | null
    categoria: string | null
    pago: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DespesaCountAggregateOutputType = {
    id: number
    descricao: number
    valor: number
    vencimento: number
    categoria: number
    pago: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DespesaAvgAggregateInputType = {
    valor?: true
  }

  export type DespesaSumAggregateInputType = {
    valor?: true
  }

  export type DespesaMinAggregateInputType = {
    id?: true
    descricao?: true
    valor?: true
    vencimento?: true
    categoria?: true
    pago?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DespesaMaxAggregateInputType = {
    id?: true
    descricao?: true
    valor?: true
    vencimento?: true
    categoria?: true
    pago?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DespesaCountAggregateInputType = {
    id?: true
    descricao?: true
    valor?: true
    vencimento?: true
    categoria?: true
    pago?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DespesaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Despesa to aggregate.
     */
    where?: DespesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Despesas to fetch.
     */
    orderBy?: DespesaOrderByWithRelationInput | DespesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DespesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Despesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Despesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Despesas
    **/
    _count?: true | DespesaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DespesaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DespesaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DespesaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DespesaMaxAggregateInputType
  }

  export type GetDespesaAggregateType<T extends DespesaAggregateArgs> = {
        [P in keyof T & keyof AggregateDespesa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDespesa[P]>
      : GetScalarType<T[P], AggregateDespesa[P]>
  }




  export type DespesaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DespesaWhereInput
    orderBy?: DespesaOrderByWithAggregationInput | DespesaOrderByWithAggregationInput[]
    by: DespesaScalarFieldEnum[] | DespesaScalarFieldEnum
    having?: DespesaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DespesaCountAggregateInputType | true
    _avg?: DespesaAvgAggregateInputType
    _sum?: DespesaSumAggregateInputType
    _min?: DespesaMinAggregateInputType
    _max?: DespesaMaxAggregateInputType
  }

  export type DespesaGroupByOutputType = {
    id: string
    descricao: string
    valor: number
    vencimento: Date
    categoria: string
    pago: boolean
    createdAt: Date
    updatedAt: Date
    _count: DespesaCountAggregateOutputType | null
    _avg: DespesaAvgAggregateOutputType | null
    _sum: DespesaSumAggregateOutputType | null
    _min: DespesaMinAggregateOutputType | null
    _max: DespesaMaxAggregateOutputType | null
  }

  type GetDespesaGroupByPayload<T extends DespesaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DespesaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DespesaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DespesaGroupByOutputType[P]>
            : GetScalarType<T[P], DespesaGroupByOutputType[P]>
        }
      >
    >


  export type DespesaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    valor?: boolean
    vencimento?: boolean
    categoria?: boolean
    pago?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["despesa"]>

  export type DespesaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    valor?: boolean
    vencimento?: boolean
    categoria?: boolean
    pago?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["despesa"]>

  export type DespesaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    valor?: boolean
    vencimento?: boolean
    categoria?: boolean
    pago?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["despesa"]>

  export type DespesaSelectScalar = {
    id?: boolean
    descricao?: boolean
    valor?: boolean
    vencimento?: boolean
    categoria?: boolean
    pago?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DespesaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "valor" | "vencimento" | "categoria" | "pago" | "createdAt" | "updatedAt", ExtArgs["result"]["despesa"]>

  export type $DespesaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Despesa"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      descricao: string
      valor: number
      vencimento: Date
      categoria: string
      pago: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["despesa"]>
    composites: {}
  }

  type DespesaGetPayload<S extends boolean | null | undefined | DespesaDefaultArgs> = $Result.GetResult<Prisma.$DespesaPayload, S>

  type DespesaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DespesaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DespesaCountAggregateInputType | true
    }

  export interface DespesaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Despesa'], meta: { name: 'Despesa' } }
    /**
     * Find zero or one Despesa that matches the filter.
     * @param {DespesaFindUniqueArgs} args - Arguments to find a Despesa
     * @example
     * // Get one Despesa
     * const despesa = await prisma.despesa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DespesaFindUniqueArgs>(args: SelectSubset<T, DespesaFindUniqueArgs<ExtArgs>>): Prisma__DespesaClient<$Result.GetResult<Prisma.$DespesaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Despesa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DespesaFindUniqueOrThrowArgs} args - Arguments to find a Despesa
     * @example
     * // Get one Despesa
     * const despesa = await prisma.despesa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DespesaFindUniqueOrThrowArgs>(args: SelectSubset<T, DespesaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DespesaClient<$Result.GetResult<Prisma.$DespesaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Despesa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DespesaFindFirstArgs} args - Arguments to find a Despesa
     * @example
     * // Get one Despesa
     * const despesa = await prisma.despesa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DespesaFindFirstArgs>(args?: SelectSubset<T, DespesaFindFirstArgs<ExtArgs>>): Prisma__DespesaClient<$Result.GetResult<Prisma.$DespesaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Despesa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DespesaFindFirstOrThrowArgs} args - Arguments to find a Despesa
     * @example
     * // Get one Despesa
     * const despesa = await prisma.despesa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DespesaFindFirstOrThrowArgs>(args?: SelectSubset<T, DespesaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DespesaClient<$Result.GetResult<Prisma.$DespesaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Despesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DespesaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Despesas
     * const despesas = await prisma.despesa.findMany()
     * 
     * // Get first 10 Despesas
     * const despesas = await prisma.despesa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const despesaWithIdOnly = await prisma.despesa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DespesaFindManyArgs>(args?: SelectSubset<T, DespesaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DespesaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Despesa.
     * @param {DespesaCreateArgs} args - Arguments to create a Despesa.
     * @example
     * // Create one Despesa
     * const Despesa = await prisma.despesa.create({
     *   data: {
     *     // ... data to create a Despesa
     *   }
     * })
     * 
     */
    create<T extends DespesaCreateArgs>(args: SelectSubset<T, DespesaCreateArgs<ExtArgs>>): Prisma__DespesaClient<$Result.GetResult<Prisma.$DespesaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Despesas.
     * @param {DespesaCreateManyArgs} args - Arguments to create many Despesas.
     * @example
     * // Create many Despesas
     * const despesa = await prisma.despesa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DespesaCreateManyArgs>(args?: SelectSubset<T, DespesaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Despesas and returns the data saved in the database.
     * @param {DespesaCreateManyAndReturnArgs} args - Arguments to create many Despesas.
     * @example
     * // Create many Despesas
     * const despesa = await prisma.despesa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Despesas and only return the `id`
     * const despesaWithIdOnly = await prisma.despesa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DespesaCreateManyAndReturnArgs>(args?: SelectSubset<T, DespesaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DespesaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Despesa.
     * @param {DespesaDeleteArgs} args - Arguments to delete one Despesa.
     * @example
     * // Delete one Despesa
     * const Despesa = await prisma.despesa.delete({
     *   where: {
     *     // ... filter to delete one Despesa
     *   }
     * })
     * 
     */
    delete<T extends DespesaDeleteArgs>(args: SelectSubset<T, DespesaDeleteArgs<ExtArgs>>): Prisma__DespesaClient<$Result.GetResult<Prisma.$DespesaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Despesa.
     * @param {DespesaUpdateArgs} args - Arguments to update one Despesa.
     * @example
     * // Update one Despesa
     * const despesa = await prisma.despesa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DespesaUpdateArgs>(args: SelectSubset<T, DespesaUpdateArgs<ExtArgs>>): Prisma__DespesaClient<$Result.GetResult<Prisma.$DespesaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Despesas.
     * @param {DespesaDeleteManyArgs} args - Arguments to filter Despesas to delete.
     * @example
     * // Delete a few Despesas
     * const { count } = await prisma.despesa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DespesaDeleteManyArgs>(args?: SelectSubset<T, DespesaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Despesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DespesaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Despesas
     * const despesa = await prisma.despesa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DespesaUpdateManyArgs>(args: SelectSubset<T, DespesaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Despesas and returns the data updated in the database.
     * @param {DespesaUpdateManyAndReturnArgs} args - Arguments to update many Despesas.
     * @example
     * // Update many Despesas
     * const despesa = await prisma.despesa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Despesas and only return the `id`
     * const despesaWithIdOnly = await prisma.despesa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DespesaUpdateManyAndReturnArgs>(args: SelectSubset<T, DespesaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DespesaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Despesa.
     * @param {DespesaUpsertArgs} args - Arguments to update or create a Despesa.
     * @example
     * // Update or create a Despesa
     * const despesa = await prisma.despesa.upsert({
     *   create: {
     *     // ... data to create a Despesa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Despesa we want to update
     *   }
     * })
     */
    upsert<T extends DespesaUpsertArgs>(args: SelectSubset<T, DespesaUpsertArgs<ExtArgs>>): Prisma__DespesaClient<$Result.GetResult<Prisma.$DespesaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Despesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DespesaCountArgs} args - Arguments to filter Despesas to count.
     * @example
     * // Count the number of Despesas
     * const count = await prisma.despesa.count({
     *   where: {
     *     // ... the filter for the Despesas we want to count
     *   }
     * })
    **/
    count<T extends DespesaCountArgs>(
      args?: Subset<T, DespesaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DespesaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Despesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DespesaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DespesaAggregateArgs>(args: Subset<T, DespesaAggregateArgs>): Prisma.PrismaPromise<GetDespesaAggregateType<T>>

    /**
     * Group by Despesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DespesaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DespesaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DespesaGroupByArgs['orderBy'] }
        : { orderBy?: DespesaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DespesaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDespesaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Despesa model
   */
  readonly fields: DespesaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Despesa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DespesaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Despesa model
   */
  interface DespesaFieldRefs {
    readonly id: FieldRef<"Despesa", 'String'>
    readonly descricao: FieldRef<"Despesa", 'String'>
    readonly valor: FieldRef<"Despesa", 'Float'>
    readonly vencimento: FieldRef<"Despesa", 'DateTime'>
    readonly categoria: FieldRef<"Despesa", 'String'>
    readonly pago: FieldRef<"Despesa", 'Boolean'>
    readonly createdAt: FieldRef<"Despesa", 'DateTime'>
    readonly updatedAt: FieldRef<"Despesa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Despesa findUnique
   */
  export type DespesaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Despesa
     */
    omit?: DespesaOmit<ExtArgs> | null
    /**
     * Filter, which Despesa to fetch.
     */
    where: DespesaWhereUniqueInput
  }

  /**
   * Despesa findUniqueOrThrow
   */
  export type DespesaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Despesa
     */
    omit?: DespesaOmit<ExtArgs> | null
    /**
     * Filter, which Despesa to fetch.
     */
    where: DespesaWhereUniqueInput
  }

  /**
   * Despesa findFirst
   */
  export type DespesaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Despesa
     */
    omit?: DespesaOmit<ExtArgs> | null
    /**
     * Filter, which Despesa to fetch.
     */
    where?: DespesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Despesas to fetch.
     */
    orderBy?: DespesaOrderByWithRelationInput | DespesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Despesas.
     */
    cursor?: DespesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Despesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Despesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Despesas.
     */
    distinct?: DespesaScalarFieldEnum | DespesaScalarFieldEnum[]
  }

  /**
   * Despesa findFirstOrThrow
   */
  export type DespesaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Despesa
     */
    omit?: DespesaOmit<ExtArgs> | null
    /**
     * Filter, which Despesa to fetch.
     */
    where?: DespesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Despesas to fetch.
     */
    orderBy?: DespesaOrderByWithRelationInput | DespesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Despesas.
     */
    cursor?: DespesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Despesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Despesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Despesas.
     */
    distinct?: DespesaScalarFieldEnum | DespesaScalarFieldEnum[]
  }

  /**
   * Despesa findMany
   */
  export type DespesaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Despesa
     */
    omit?: DespesaOmit<ExtArgs> | null
    /**
     * Filter, which Despesas to fetch.
     */
    where?: DespesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Despesas to fetch.
     */
    orderBy?: DespesaOrderByWithRelationInput | DespesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Despesas.
     */
    cursor?: DespesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Despesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Despesas.
     */
    skip?: number
    distinct?: DespesaScalarFieldEnum | DespesaScalarFieldEnum[]
  }

  /**
   * Despesa create
   */
  export type DespesaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Despesa
     */
    omit?: DespesaOmit<ExtArgs> | null
    /**
     * The data needed to create a Despesa.
     */
    data: XOR<DespesaCreateInput, DespesaUncheckedCreateInput>
  }

  /**
   * Despesa createMany
   */
  export type DespesaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Despesas.
     */
    data: DespesaCreateManyInput | DespesaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Despesa createManyAndReturn
   */
  export type DespesaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Despesa
     */
    omit?: DespesaOmit<ExtArgs> | null
    /**
     * The data used to create many Despesas.
     */
    data: DespesaCreateManyInput | DespesaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Despesa update
   */
  export type DespesaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Despesa
     */
    omit?: DespesaOmit<ExtArgs> | null
    /**
     * The data needed to update a Despesa.
     */
    data: XOR<DespesaUpdateInput, DespesaUncheckedUpdateInput>
    /**
     * Choose, which Despesa to update.
     */
    where: DespesaWhereUniqueInput
  }

  /**
   * Despesa updateMany
   */
  export type DespesaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Despesas.
     */
    data: XOR<DespesaUpdateManyMutationInput, DespesaUncheckedUpdateManyInput>
    /**
     * Filter which Despesas to update
     */
    where?: DespesaWhereInput
    /**
     * Limit how many Despesas to update.
     */
    limit?: number
  }

  /**
   * Despesa updateManyAndReturn
   */
  export type DespesaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Despesa
     */
    omit?: DespesaOmit<ExtArgs> | null
    /**
     * The data used to update Despesas.
     */
    data: XOR<DespesaUpdateManyMutationInput, DespesaUncheckedUpdateManyInput>
    /**
     * Filter which Despesas to update
     */
    where?: DespesaWhereInput
    /**
     * Limit how many Despesas to update.
     */
    limit?: number
  }

  /**
   * Despesa upsert
   */
  export type DespesaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Despesa
     */
    omit?: DespesaOmit<ExtArgs> | null
    /**
     * The filter to search for the Despesa to update in case it exists.
     */
    where: DespesaWhereUniqueInput
    /**
     * In case the Despesa found by the `where` argument doesn't exist, create a new Despesa with this data.
     */
    create: XOR<DespesaCreateInput, DespesaUncheckedCreateInput>
    /**
     * In case the Despesa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DespesaUpdateInput, DespesaUncheckedUpdateInput>
  }

  /**
   * Despesa delete
   */
  export type DespesaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Despesa
     */
    omit?: DespesaOmit<ExtArgs> | null
    /**
     * Filter which Despesa to delete.
     */
    where: DespesaWhereUniqueInput
  }

  /**
   * Despesa deleteMany
   */
  export type DespesaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Despesas to delete
     */
    where?: DespesaWhereInput
    /**
     * Limit how many Despesas to delete.
     */
    limit?: number
  }

  /**
   * Despesa without action
   */
  export type DespesaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Despesa
     */
    select?: DespesaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Despesa
     */
    omit?: DespesaOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BannerScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    subtitulo: 'subtitulo',
    descricao: 'descricao',
    imagem: 'imagem',
    link: 'link',
    ordem: 'ordem',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const EquipeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cargo: 'cargo',
    imagem: 'imagem',
    descricao: 'descricao',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EquipeScalarFieldEnum = (typeof EquipeScalarFieldEnum)[keyof typeof EquipeScalarFieldEnum]


  export const CursoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    duracao: 'duracao',
    nivel: 'nivel',
    preco: 'preco',
    imagem: 'imagem',
    conteudo: 'conteudo',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum]


  export const AlunoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    endereco: 'endereco',
    foto: 'foto',
    nomePais: 'nomePais',
    telefoneContato: 'telefoneContato',
    cursoId: 'cursoId',
    turmaId: 'turmaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlunoScalarFieldEnum = (typeof AlunoScalarFieldEnum)[keyof typeof AlunoScalarFieldEnum]


  export const ProfessorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    biografia: 'biografia',
    imagem: 'imagem',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfessorScalarFieldEnum = (typeof ProfessorScalarFieldEnum)[keyof typeof ProfessorScalarFieldEnum]


  export const TurmaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    horario: 'horario',
    diasSemana: 'diasSemana',
    cursoId: 'cursoId',
    professorId: 'professorId',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TurmaScalarFieldEnum = (typeof TurmaScalarFieldEnum)[keyof typeof TurmaScalarFieldEnum]


  export const FinanceiroScalarFieldEnum: {
    id: 'id',
    alunoId: 'alunoId',
    valor: 'valor',
    dataVencimento: 'dataVencimento',
    dataPagamento: 'dataPagamento',
    status: 'status',
    descricao: 'descricao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FinanceiroScalarFieldEnum = (typeof FinanceiroScalarFieldEnum)[keyof typeof FinanceiroScalarFieldEnum]


  export const DepoimentoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    curso: 'curso',
    texto: 'texto',
    imagem: 'imagem',
    aprovado: 'aprovado',
    alunoId: 'alunoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepoimentoScalarFieldEnum = (typeof DepoimentoScalarFieldEnum)[keyof typeof DepoimentoScalarFieldEnum]


  export const PromocaoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    desconto: 'desconto',
    cupom: 'cupom',
    ativa: 'ativa',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromocaoScalarFieldEnum = (typeof PromocaoScalarFieldEnum)[keyof typeof PromocaoScalarFieldEnum]


  export const AdministradorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdministradorScalarFieldEnum = (typeof AdministradorScalarFieldEnum)[keyof typeof AdministradorScalarFieldEnum]


  export const ConfiguracaoScalarFieldEnum: {
    id: 'id',
    historia: 'historia',
    historiaImagem: 'historiaImagem',
    historiaVideo: 'historiaVideo',
    missao: 'missao',
    visao: 'visao',
    valores: 'valores',
    telefone: 'telefone',
    email: 'email',
    endereco: 'endereco',
    instagram: 'instagram',
    facebook: 'facebook',
    youtube: 'youtube',
    linkedin: 'linkedin',
    tiktok: 'tiktok',
    slogan: 'slogan',
    updatedAt: 'updatedAt'
  };

  export type ConfiguracaoScalarFieldEnum = (typeof ConfiguracaoScalarFieldEnum)[keyof typeof ConfiguracaoScalarFieldEnum]


  export const DespesaScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    valor: 'valor',
    vencimento: 'vencimento',
    categoria: 'categoria',
    pago: 'pago',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DespesaScalarFieldEnum = (typeof DespesaScalarFieldEnum)[keyof typeof DespesaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BannerWhereInput = {
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    id?: StringFilter<"Banner"> | string
    titulo?: StringNullableFilter<"Banner"> | string | null
    subtitulo?: StringNullableFilter<"Banner"> | string | null
    descricao?: StringNullableFilter<"Banner"> | string | null
    imagem?: StringFilter<"Banner"> | string
    link?: StringNullableFilter<"Banner"> | string | null
    ordem?: IntFilter<"Banner"> | number
    ativo?: BoolFilter<"Banner"> | boolean
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
  }

  export type BannerOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrderInput | SortOrder
    subtitulo?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    imagem?: SortOrder
    link?: SortOrderInput | SortOrder
    ordem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    titulo?: StringNullableFilter<"Banner"> | string | null
    subtitulo?: StringNullableFilter<"Banner"> | string | null
    descricao?: StringNullableFilter<"Banner"> | string | null
    imagem?: StringFilter<"Banner"> | string
    link?: StringNullableFilter<"Banner"> | string | null
    ordem?: IntFilter<"Banner"> | number
    ativo?: BoolFilter<"Banner"> | boolean
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
  }, "id">

  export type BannerOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrderInput | SortOrder
    subtitulo?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    imagem?: SortOrder
    link?: SortOrderInput | SortOrder
    ordem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BannerCountOrderByAggregateInput
    _avg?: BannerAvgOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
    _sum?: BannerSumOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    OR?: BannerScalarWhereWithAggregatesInput[]
    NOT?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Banner"> | string
    titulo?: StringNullableWithAggregatesFilter<"Banner"> | string | null
    subtitulo?: StringNullableWithAggregatesFilter<"Banner"> | string | null
    descricao?: StringNullableWithAggregatesFilter<"Banner"> | string | null
    imagem?: StringWithAggregatesFilter<"Banner"> | string
    link?: StringNullableWithAggregatesFilter<"Banner"> | string | null
    ordem?: IntWithAggregatesFilter<"Banner"> | number
    ativo?: BoolWithAggregatesFilter<"Banner"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
  }

  export type EquipeWhereInput = {
    AND?: EquipeWhereInput | EquipeWhereInput[]
    OR?: EquipeWhereInput[]
    NOT?: EquipeWhereInput | EquipeWhereInput[]
    id?: StringFilter<"Equipe"> | string
    nome?: StringFilter<"Equipe"> | string
    cargo?: StringFilter<"Equipe"> | string
    imagem?: StringFilter<"Equipe"> | string
    descricao?: StringFilter<"Equipe"> | string
    ativo?: BoolFilter<"Equipe"> | boolean
    createdAt?: DateTimeFilter<"Equipe"> | Date | string
    updatedAt?: DateTimeFilter<"Equipe"> | Date | string
  }

  export type EquipeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cargo?: SortOrder
    imagem?: SortOrder
    descricao?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EquipeWhereInput | EquipeWhereInput[]
    OR?: EquipeWhereInput[]
    NOT?: EquipeWhereInput | EquipeWhereInput[]
    nome?: StringFilter<"Equipe"> | string
    cargo?: StringFilter<"Equipe"> | string
    imagem?: StringFilter<"Equipe"> | string
    descricao?: StringFilter<"Equipe"> | string
    ativo?: BoolFilter<"Equipe"> | boolean
    createdAt?: DateTimeFilter<"Equipe"> | Date | string
    updatedAt?: DateTimeFilter<"Equipe"> | Date | string
  }, "id">

  export type EquipeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cargo?: SortOrder
    imagem?: SortOrder
    descricao?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquipeCountOrderByAggregateInput
    _max?: EquipeMaxOrderByAggregateInput
    _min?: EquipeMinOrderByAggregateInput
  }

  export type EquipeScalarWhereWithAggregatesInput = {
    AND?: EquipeScalarWhereWithAggregatesInput | EquipeScalarWhereWithAggregatesInput[]
    OR?: EquipeScalarWhereWithAggregatesInput[]
    NOT?: EquipeScalarWhereWithAggregatesInput | EquipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Equipe"> | string
    nome?: StringWithAggregatesFilter<"Equipe"> | string
    cargo?: StringWithAggregatesFilter<"Equipe"> | string
    imagem?: StringWithAggregatesFilter<"Equipe"> | string
    descricao?: StringWithAggregatesFilter<"Equipe"> | string
    ativo?: BoolWithAggregatesFilter<"Equipe"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Equipe"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Equipe"> | Date | string
  }

  export type CursoWhereInput = {
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    id?: StringFilter<"Curso"> | string
    nome?: StringFilter<"Curso"> | string
    descricao?: StringFilter<"Curso"> | string
    duracao?: StringFilter<"Curso"> | string
    nivel?: StringFilter<"Curso"> | string
    preco?: StringFilter<"Curso"> | string
    imagem?: StringFilter<"Curso"> | string
    conteudo?: StringNullableFilter<"Curso"> | string | null
    ativo?: BoolFilter<"Curso"> | boolean
    createdAt?: DateTimeFilter<"Curso"> | Date | string
    updatedAt?: DateTimeFilter<"Curso"> | Date | string
    alunos?: AlunoListRelationFilter
    turmas?: TurmaListRelationFilter
  }

  export type CursoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    duracao?: SortOrder
    nivel?: SortOrder
    preco?: SortOrder
    imagem?: SortOrder
    conteudo?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alunos?: AlunoOrderByRelationAggregateInput
    turmas?: TurmaOrderByRelationAggregateInput
  }

  export type CursoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    nome?: StringFilter<"Curso"> | string
    descricao?: StringFilter<"Curso"> | string
    duracao?: StringFilter<"Curso"> | string
    nivel?: StringFilter<"Curso"> | string
    preco?: StringFilter<"Curso"> | string
    imagem?: StringFilter<"Curso"> | string
    conteudo?: StringNullableFilter<"Curso"> | string | null
    ativo?: BoolFilter<"Curso"> | boolean
    createdAt?: DateTimeFilter<"Curso"> | Date | string
    updatedAt?: DateTimeFilter<"Curso"> | Date | string
    alunos?: AlunoListRelationFilter
    turmas?: TurmaListRelationFilter
  }, "id">

  export type CursoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    duracao?: SortOrder
    nivel?: SortOrder
    preco?: SortOrder
    imagem?: SortOrder
    conteudo?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CursoCountOrderByAggregateInput
    _max?: CursoMaxOrderByAggregateInput
    _min?: CursoMinOrderByAggregateInput
  }

  export type CursoScalarWhereWithAggregatesInput = {
    AND?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    OR?: CursoScalarWhereWithAggregatesInput[]
    NOT?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Curso"> | string
    nome?: StringWithAggregatesFilter<"Curso"> | string
    descricao?: StringWithAggregatesFilter<"Curso"> | string
    duracao?: StringWithAggregatesFilter<"Curso"> | string
    nivel?: StringWithAggregatesFilter<"Curso"> | string
    preco?: StringWithAggregatesFilter<"Curso"> | string
    imagem?: StringWithAggregatesFilter<"Curso"> | string
    conteudo?: StringNullableWithAggregatesFilter<"Curso"> | string | null
    ativo?: BoolWithAggregatesFilter<"Curso"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Curso"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Curso"> | Date | string
  }

  export type AlunoWhereInput = {
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    id?: StringFilter<"Aluno"> | string
    nome?: StringFilter<"Aluno"> | string
    email?: StringFilter<"Aluno"> | string
    telefone?: StringFilter<"Aluno"> | string
    endereco?: StringFilter<"Aluno"> | string
    foto?: StringNullableFilter<"Aluno"> | string | null
    nomePais?: StringNullableFilter<"Aluno"> | string | null
    telefoneContato?: StringNullableFilter<"Aluno"> | string | null
    cursoId?: StringFilter<"Aluno"> | string
    turmaId?: StringNullableFilter<"Aluno"> | string | null
    createdAt?: DateTimeFilter<"Aluno"> | Date | string
    updatedAt?: DateTimeFilter<"Aluno"> | Date | string
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    turma?: XOR<TurmaNullableScalarRelationFilter, TurmaWhereInput> | null
    financeiros?: FinanceiroListRelationFilter
    depoimentos?: DepoimentoListRelationFilter
  }

  export type AlunoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    foto?: SortOrderInput | SortOrder
    nomePais?: SortOrderInput | SortOrder
    telefoneContato?: SortOrderInput | SortOrder
    cursoId?: SortOrder
    turmaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    curso?: CursoOrderByWithRelationInput
    turma?: TurmaOrderByWithRelationInput
    financeiros?: FinanceiroOrderByRelationAggregateInput
    depoimentos?: DepoimentoOrderByRelationAggregateInput
  }

  export type AlunoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    nome?: StringFilter<"Aluno"> | string
    telefone?: StringFilter<"Aluno"> | string
    endereco?: StringFilter<"Aluno"> | string
    foto?: StringNullableFilter<"Aluno"> | string | null
    nomePais?: StringNullableFilter<"Aluno"> | string | null
    telefoneContato?: StringNullableFilter<"Aluno"> | string | null
    cursoId?: StringFilter<"Aluno"> | string
    turmaId?: StringNullableFilter<"Aluno"> | string | null
    createdAt?: DateTimeFilter<"Aluno"> | Date | string
    updatedAt?: DateTimeFilter<"Aluno"> | Date | string
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    turma?: XOR<TurmaNullableScalarRelationFilter, TurmaWhereInput> | null
    financeiros?: FinanceiroListRelationFilter
    depoimentos?: DepoimentoListRelationFilter
  }, "id" | "email">

  export type AlunoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    foto?: SortOrderInput | SortOrder
    nomePais?: SortOrderInput | SortOrder
    telefoneContato?: SortOrderInput | SortOrder
    cursoId?: SortOrder
    turmaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlunoCountOrderByAggregateInput
    _max?: AlunoMaxOrderByAggregateInput
    _min?: AlunoMinOrderByAggregateInput
  }

  export type AlunoScalarWhereWithAggregatesInput = {
    AND?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    OR?: AlunoScalarWhereWithAggregatesInput[]
    NOT?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Aluno"> | string
    nome?: StringWithAggregatesFilter<"Aluno"> | string
    email?: StringWithAggregatesFilter<"Aluno"> | string
    telefone?: StringWithAggregatesFilter<"Aluno"> | string
    endereco?: StringWithAggregatesFilter<"Aluno"> | string
    foto?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    nomePais?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    telefoneContato?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    cursoId?: StringWithAggregatesFilter<"Aluno"> | string
    turmaId?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Aluno"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Aluno"> | Date | string
  }

  export type ProfessorWhereInput = {
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    id?: StringFilter<"Professor"> | string
    nome?: StringFilter<"Professor"> | string
    email?: StringFilter<"Professor"> | string
    senha?: StringFilter<"Professor"> | string
    biografia?: StringNullableFilter<"Professor"> | string | null
    imagem?: StringNullableFilter<"Professor"> | string | null
    ativo?: BoolFilter<"Professor"> | boolean
    createdAt?: DateTimeFilter<"Professor"> | Date | string
    updatedAt?: DateTimeFilter<"Professor"> | Date | string
    turmas?: TurmaListRelationFilter
  }

  export type ProfessorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    biografia?: SortOrderInput | SortOrder
    imagem?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    turmas?: TurmaOrderByRelationAggregateInput
  }

  export type ProfessorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    nome?: StringFilter<"Professor"> | string
    senha?: StringFilter<"Professor"> | string
    biografia?: StringNullableFilter<"Professor"> | string | null
    imagem?: StringNullableFilter<"Professor"> | string | null
    ativo?: BoolFilter<"Professor"> | boolean
    createdAt?: DateTimeFilter<"Professor"> | Date | string
    updatedAt?: DateTimeFilter<"Professor"> | Date | string
    turmas?: TurmaListRelationFilter
  }, "id" | "email">

  export type ProfessorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    biografia?: SortOrderInput | SortOrder
    imagem?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfessorCountOrderByAggregateInput
    _max?: ProfessorMaxOrderByAggregateInput
    _min?: ProfessorMinOrderByAggregateInput
  }

  export type ProfessorScalarWhereWithAggregatesInput = {
    AND?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    OR?: ProfessorScalarWhereWithAggregatesInput[]
    NOT?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Professor"> | string
    nome?: StringWithAggregatesFilter<"Professor"> | string
    email?: StringWithAggregatesFilter<"Professor"> | string
    senha?: StringWithAggregatesFilter<"Professor"> | string
    biografia?: StringNullableWithAggregatesFilter<"Professor"> | string | null
    imagem?: StringNullableWithAggregatesFilter<"Professor"> | string | null
    ativo?: BoolWithAggregatesFilter<"Professor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Professor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Professor"> | Date | string
  }

  export type TurmaWhereInput = {
    AND?: TurmaWhereInput | TurmaWhereInput[]
    OR?: TurmaWhereInput[]
    NOT?: TurmaWhereInput | TurmaWhereInput[]
    id?: StringFilter<"Turma"> | string
    nome?: StringFilter<"Turma"> | string
    horario?: StringFilter<"Turma"> | string
    diasSemana?: StringFilter<"Turma"> | string
    cursoId?: StringFilter<"Turma"> | string
    professorId?: StringFilter<"Turma"> | string
    ativo?: BoolFilter<"Turma"> | boolean
    createdAt?: DateTimeFilter<"Turma"> | Date | string
    updatedAt?: DateTimeFilter<"Turma"> | Date | string
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    alunos?: AlunoListRelationFilter
  }

  export type TurmaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    horario?: SortOrder
    diasSemana?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    curso?: CursoOrderByWithRelationInput
    professor?: ProfessorOrderByWithRelationInput
    alunos?: AlunoOrderByRelationAggregateInput
  }

  export type TurmaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TurmaWhereInput | TurmaWhereInput[]
    OR?: TurmaWhereInput[]
    NOT?: TurmaWhereInput | TurmaWhereInput[]
    nome?: StringFilter<"Turma"> | string
    horario?: StringFilter<"Turma"> | string
    diasSemana?: StringFilter<"Turma"> | string
    cursoId?: StringFilter<"Turma"> | string
    professorId?: StringFilter<"Turma"> | string
    ativo?: BoolFilter<"Turma"> | boolean
    createdAt?: DateTimeFilter<"Turma"> | Date | string
    updatedAt?: DateTimeFilter<"Turma"> | Date | string
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    alunos?: AlunoListRelationFilter
  }, "id">

  export type TurmaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    horario?: SortOrder
    diasSemana?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TurmaCountOrderByAggregateInput
    _max?: TurmaMaxOrderByAggregateInput
    _min?: TurmaMinOrderByAggregateInput
  }

  export type TurmaScalarWhereWithAggregatesInput = {
    AND?: TurmaScalarWhereWithAggregatesInput | TurmaScalarWhereWithAggregatesInput[]
    OR?: TurmaScalarWhereWithAggregatesInput[]
    NOT?: TurmaScalarWhereWithAggregatesInput | TurmaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Turma"> | string
    nome?: StringWithAggregatesFilter<"Turma"> | string
    horario?: StringWithAggregatesFilter<"Turma"> | string
    diasSemana?: StringWithAggregatesFilter<"Turma"> | string
    cursoId?: StringWithAggregatesFilter<"Turma"> | string
    professorId?: StringWithAggregatesFilter<"Turma"> | string
    ativo?: BoolWithAggregatesFilter<"Turma"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Turma"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Turma"> | Date | string
  }

  export type FinanceiroWhereInput = {
    AND?: FinanceiroWhereInput | FinanceiroWhereInput[]
    OR?: FinanceiroWhereInput[]
    NOT?: FinanceiroWhereInput | FinanceiroWhereInput[]
    id?: StringFilter<"Financeiro"> | string
    alunoId?: StringFilter<"Financeiro"> | string
    valor?: FloatFilter<"Financeiro"> | number
    dataVencimento?: DateTimeFilter<"Financeiro"> | Date | string
    dataPagamento?: DateTimeNullableFilter<"Financeiro"> | Date | string | null
    status?: StringFilter<"Financeiro"> | string
    descricao?: StringNullableFilter<"Financeiro"> | string | null
    createdAt?: DateTimeFilter<"Financeiro"> | Date | string
    updatedAt?: DateTimeFilter<"Financeiro"> | Date | string
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }

  export type FinanceiroOrderByWithRelationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrderInput | SortOrder
    status?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aluno?: AlunoOrderByWithRelationInput
  }

  export type FinanceiroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinanceiroWhereInput | FinanceiroWhereInput[]
    OR?: FinanceiroWhereInput[]
    NOT?: FinanceiroWhereInput | FinanceiroWhereInput[]
    alunoId?: StringFilter<"Financeiro"> | string
    valor?: FloatFilter<"Financeiro"> | number
    dataVencimento?: DateTimeFilter<"Financeiro"> | Date | string
    dataPagamento?: DateTimeNullableFilter<"Financeiro"> | Date | string | null
    status?: StringFilter<"Financeiro"> | string
    descricao?: StringNullableFilter<"Financeiro"> | string | null
    createdAt?: DateTimeFilter<"Financeiro"> | Date | string
    updatedAt?: DateTimeFilter<"Financeiro"> | Date | string
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }, "id">

  export type FinanceiroOrderByWithAggregationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrderInput | SortOrder
    status?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FinanceiroCountOrderByAggregateInput
    _avg?: FinanceiroAvgOrderByAggregateInput
    _max?: FinanceiroMaxOrderByAggregateInput
    _min?: FinanceiroMinOrderByAggregateInput
    _sum?: FinanceiroSumOrderByAggregateInput
  }

  export type FinanceiroScalarWhereWithAggregatesInput = {
    AND?: FinanceiroScalarWhereWithAggregatesInput | FinanceiroScalarWhereWithAggregatesInput[]
    OR?: FinanceiroScalarWhereWithAggregatesInput[]
    NOT?: FinanceiroScalarWhereWithAggregatesInput | FinanceiroScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Financeiro"> | string
    alunoId?: StringWithAggregatesFilter<"Financeiro"> | string
    valor?: FloatWithAggregatesFilter<"Financeiro"> | number
    dataVencimento?: DateTimeWithAggregatesFilter<"Financeiro"> | Date | string
    dataPagamento?: DateTimeNullableWithAggregatesFilter<"Financeiro"> | Date | string | null
    status?: StringWithAggregatesFilter<"Financeiro"> | string
    descricao?: StringNullableWithAggregatesFilter<"Financeiro"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Financeiro"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Financeiro"> | Date | string
  }

  export type DepoimentoWhereInput = {
    AND?: DepoimentoWhereInput | DepoimentoWhereInput[]
    OR?: DepoimentoWhereInput[]
    NOT?: DepoimentoWhereInput | DepoimentoWhereInput[]
    id?: StringFilter<"Depoimento"> | string
    nome?: StringFilter<"Depoimento"> | string
    curso?: StringFilter<"Depoimento"> | string
    texto?: StringFilter<"Depoimento"> | string
    imagem?: StringNullableFilter<"Depoimento"> | string | null
    aprovado?: BoolFilter<"Depoimento"> | boolean
    alunoId?: StringNullableFilter<"Depoimento"> | string | null
    createdAt?: DateTimeFilter<"Depoimento"> | Date | string
    updatedAt?: DateTimeFilter<"Depoimento"> | Date | string
    aluno?: XOR<AlunoNullableScalarRelationFilter, AlunoWhereInput> | null
  }

  export type DepoimentoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    curso?: SortOrder
    texto?: SortOrder
    imagem?: SortOrderInput | SortOrder
    aprovado?: SortOrder
    alunoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aluno?: AlunoOrderByWithRelationInput
  }

  export type DepoimentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepoimentoWhereInput | DepoimentoWhereInput[]
    OR?: DepoimentoWhereInput[]
    NOT?: DepoimentoWhereInput | DepoimentoWhereInput[]
    nome?: StringFilter<"Depoimento"> | string
    curso?: StringFilter<"Depoimento"> | string
    texto?: StringFilter<"Depoimento"> | string
    imagem?: StringNullableFilter<"Depoimento"> | string | null
    aprovado?: BoolFilter<"Depoimento"> | boolean
    alunoId?: StringNullableFilter<"Depoimento"> | string | null
    createdAt?: DateTimeFilter<"Depoimento"> | Date | string
    updatedAt?: DateTimeFilter<"Depoimento"> | Date | string
    aluno?: XOR<AlunoNullableScalarRelationFilter, AlunoWhereInput> | null
  }, "id">

  export type DepoimentoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    curso?: SortOrder
    texto?: SortOrder
    imagem?: SortOrderInput | SortOrder
    aprovado?: SortOrder
    alunoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepoimentoCountOrderByAggregateInput
    _max?: DepoimentoMaxOrderByAggregateInput
    _min?: DepoimentoMinOrderByAggregateInput
  }

  export type DepoimentoScalarWhereWithAggregatesInput = {
    AND?: DepoimentoScalarWhereWithAggregatesInput | DepoimentoScalarWhereWithAggregatesInput[]
    OR?: DepoimentoScalarWhereWithAggregatesInput[]
    NOT?: DepoimentoScalarWhereWithAggregatesInput | DepoimentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Depoimento"> | string
    nome?: StringWithAggregatesFilter<"Depoimento"> | string
    curso?: StringWithAggregatesFilter<"Depoimento"> | string
    texto?: StringWithAggregatesFilter<"Depoimento"> | string
    imagem?: StringNullableWithAggregatesFilter<"Depoimento"> | string | null
    aprovado?: BoolWithAggregatesFilter<"Depoimento"> | boolean
    alunoId?: StringNullableWithAggregatesFilter<"Depoimento"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Depoimento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Depoimento"> | Date | string
  }

  export type PromocaoWhereInput = {
    AND?: PromocaoWhereInput | PromocaoWhereInput[]
    OR?: PromocaoWhereInput[]
    NOT?: PromocaoWhereInput | PromocaoWhereInput[]
    id?: StringFilter<"Promocao"> | string
    titulo?: StringFilter<"Promocao"> | string
    desconto?: StringFilter<"Promocao"> | string
    cupom?: StringNullableFilter<"Promocao"> | string | null
    ativa?: BoolFilter<"Promocao"> | boolean
    createdAt?: DateTimeFilter<"Promocao"> | Date | string
    updatedAt?: DateTimeFilter<"Promocao"> | Date | string
  }

  export type PromocaoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    desconto?: SortOrder
    cupom?: SortOrderInput | SortOrder
    ativa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromocaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromocaoWhereInput | PromocaoWhereInput[]
    OR?: PromocaoWhereInput[]
    NOT?: PromocaoWhereInput | PromocaoWhereInput[]
    titulo?: StringFilter<"Promocao"> | string
    desconto?: StringFilter<"Promocao"> | string
    cupom?: StringNullableFilter<"Promocao"> | string | null
    ativa?: BoolFilter<"Promocao"> | boolean
    createdAt?: DateTimeFilter<"Promocao"> | Date | string
    updatedAt?: DateTimeFilter<"Promocao"> | Date | string
  }, "id">

  export type PromocaoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    desconto?: SortOrder
    cupom?: SortOrderInput | SortOrder
    ativa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromocaoCountOrderByAggregateInput
    _max?: PromocaoMaxOrderByAggregateInput
    _min?: PromocaoMinOrderByAggregateInput
  }

  export type PromocaoScalarWhereWithAggregatesInput = {
    AND?: PromocaoScalarWhereWithAggregatesInput | PromocaoScalarWhereWithAggregatesInput[]
    OR?: PromocaoScalarWhereWithAggregatesInput[]
    NOT?: PromocaoScalarWhereWithAggregatesInput | PromocaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Promocao"> | string
    titulo?: StringWithAggregatesFilter<"Promocao"> | string
    desconto?: StringWithAggregatesFilter<"Promocao"> | string
    cupom?: StringNullableWithAggregatesFilter<"Promocao"> | string | null
    ativa?: BoolWithAggregatesFilter<"Promocao"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Promocao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Promocao"> | Date | string
  }

  export type AdministradorWhereInput = {
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    id?: StringFilter<"Administrador"> | string
    nome?: StringFilter<"Administrador"> | string
    email?: StringFilter<"Administrador"> | string
    senha?: StringFilter<"Administrador"> | string
    ativo?: BoolFilter<"Administrador"> | boolean
    createdAt?: DateTimeFilter<"Administrador"> | Date | string
    updatedAt?: DateTimeFilter<"Administrador"> | Date | string
  }

  export type AdministradorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministradorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    nome?: StringFilter<"Administrador"> | string
    senha?: StringFilter<"Administrador"> | string
    ativo?: BoolFilter<"Administrador"> | boolean
    createdAt?: DateTimeFilter<"Administrador"> | Date | string
    updatedAt?: DateTimeFilter<"Administrador"> | Date | string
  }, "id" | "email">

  export type AdministradorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdministradorCountOrderByAggregateInput
    _max?: AdministradorMaxOrderByAggregateInput
    _min?: AdministradorMinOrderByAggregateInput
  }

  export type AdministradorScalarWhereWithAggregatesInput = {
    AND?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    OR?: AdministradorScalarWhereWithAggregatesInput[]
    NOT?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Administrador"> | string
    nome?: StringWithAggregatesFilter<"Administrador"> | string
    email?: StringWithAggregatesFilter<"Administrador"> | string
    senha?: StringWithAggregatesFilter<"Administrador"> | string
    ativo?: BoolWithAggregatesFilter<"Administrador"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Administrador"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Administrador"> | Date | string
  }

  export type ConfiguracaoWhereInput = {
    AND?: ConfiguracaoWhereInput | ConfiguracaoWhereInput[]
    OR?: ConfiguracaoWhereInput[]
    NOT?: ConfiguracaoWhereInput | ConfiguracaoWhereInput[]
    id?: StringFilter<"Configuracao"> | string
    historia?: StringFilter<"Configuracao"> | string
    historiaImagem?: StringNullableFilter<"Configuracao"> | string | null
    historiaVideo?: StringNullableFilter<"Configuracao"> | string | null
    missao?: StringFilter<"Configuracao"> | string
    visao?: StringFilter<"Configuracao"> | string
    valores?: StringFilter<"Configuracao"> | string
    telefone?: StringNullableFilter<"Configuracao"> | string | null
    email?: StringNullableFilter<"Configuracao"> | string | null
    endereco?: StringNullableFilter<"Configuracao"> | string | null
    instagram?: StringNullableFilter<"Configuracao"> | string | null
    facebook?: StringNullableFilter<"Configuracao"> | string | null
    youtube?: StringNullableFilter<"Configuracao"> | string | null
    linkedin?: StringNullableFilter<"Configuracao"> | string | null
    tiktok?: StringNullableFilter<"Configuracao"> | string | null
    slogan?: StringNullableFilter<"Configuracao"> | string | null
    updatedAt?: DateTimeFilter<"Configuracao"> | Date | string
  }

  export type ConfiguracaoOrderByWithRelationInput = {
    id?: SortOrder
    historia?: SortOrder
    historiaImagem?: SortOrderInput | SortOrder
    historiaVideo?: SortOrderInput | SortOrder
    missao?: SortOrder
    visao?: SortOrder
    valores?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    youtube?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    tiktok?: SortOrderInput | SortOrder
    slogan?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConfiguracaoWhereInput | ConfiguracaoWhereInput[]
    OR?: ConfiguracaoWhereInput[]
    NOT?: ConfiguracaoWhereInput | ConfiguracaoWhereInput[]
    historia?: StringFilter<"Configuracao"> | string
    historiaImagem?: StringNullableFilter<"Configuracao"> | string | null
    historiaVideo?: StringNullableFilter<"Configuracao"> | string | null
    missao?: StringFilter<"Configuracao"> | string
    visao?: StringFilter<"Configuracao"> | string
    valores?: StringFilter<"Configuracao"> | string
    telefone?: StringNullableFilter<"Configuracao"> | string | null
    email?: StringNullableFilter<"Configuracao"> | string | null
    endereco?: StringNullableFilter<"Configuracao"> | string | null
    instagram?: StringNullableFilter<"Configuracao"> | string | null
    facebook?: StringNullableFilter<"Configuracao"> | string | null
    youtube?: StringNullableFilter<"Configuracao"> | string | null
    linkedin?: StringNullableFilter<"Configuracao"> | string | null
    tiktok?: StringNullableFilter<"Configuracao"> | string | null
    slogan?: StringNullableFilter<"Configuracao"> | string | null
    updatedAt?: DateTimeFilter<"Configuracao"> | Date | string
  }, "id">

  export type ConfiguracaoOrderByWithAggregationInput = {
    id?: SortOrder
    historia?: SortOrder
    historiaImagem?: SortOrderInput | SortOrder
    historiaVideo?: SortOrderInput | SortOrder
    missao?: SortOrder
    visao?: SortOrder
    valores?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    youtube?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    tiktok?: SortOrderInput | SortOrder
    slogan?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: ConfiguracaoCountOrderByAggregateInput
    _max?: ConfiguracaoMaxOrderByAggregateInput
    _min?: ConfiguracaoMinOrderByAggregateInput
  }

  export type ConfiguracaoScalarWhereWithAggregatesInput = {
    AND?: ConfiguracaoScalarWhereWithAggregatesInput | ConfiguracaoScalarWhereWithAggregatesInput[]
    OR?: ConfiguracaoScalarWhereWithAggregatesInput[]
    NOT?: ConfiguracaoScalarWhereWithAggregatesInput | ConfiguracaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Configuracao"> | string
    historia?: StringWithAggregatesFilter<"Configuracao"> | string
    historiaImagem?: StringNullableWithAggregatesFilter<"Configuracao"> | string | null
    historiaVideo?: StringNullableWithAggregatesFilter<"Configuracao"> | string | null
    missao?: StringWithAggregatesFilter<"Configuracao"> | string
    visao?: StringWithAggregatesFilter<"Configuracao"> | string
    valores?: StringWithAggregatesFilter<"Configuracao"> | string
    telefone?: StringNullableWithAggregatesFilter<"Configuracao"> | string | null
    email?: StringNullableWithAggregatesFilter<"Configuracao"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"Configuracao"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"Configuracao"> | string | null
    facebook?: StringNullableWithAggregatesFilter<"Configuracao"> | string | null
    youtube?: StringNullableWithAggregatesFilter<"Configuracao"> | string | null
    linkedin?: StringNullableWithAggregatesFilter<"Configuracao"> | string | null
    tiktok?: StringNullableWithAggregatesFilter<"Configuracao"> | string | null
    slogan?: StringNullableWithAggregatesFilter<"Configuracao"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Configuracao"> | Date | string
  }

  export type DespesaWhereInput = {
    AND?: DespesaWhereInput | DespesaWhereInput[]
    OR?: DespesaWhereInput[]
    NOT?: DespesaWhereInput | DespesaWhereInput[]
    id?: StringFilter<"Despesa"> | string
    descricao?: StringFilter<"Despesa"> | string
    valor?: FloatFilter<"Despesa"> | number
    vencimento?: DateTimeFilter<"Despesa"> | Date | string
    categoria?: StringFilter<"Despesa"> | string
    pago?: BoolFilter<"Despesa"> | boolean
    createdAt?: DateTimeFilter<"Despesa"> | Date | string
    updatedAt?: DateTimeFilter<"Despesa"> | Date | string
  }

  export type DespesaOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    vencimento?: SortOrder
    categoria?: SortOrder
    pago?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DespesaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DespesaWhereInput | DespesaWhereInput[]
    OR?: DespesaWhereInput[]
    NOT?: DespesaWhereInput | DespesaWhereInput[]
    descricao?: StringFilter<"Despesa"> | string
    valor?: FloatFilter<"Despesa"> | number
    vencimento?: DateTimeFilter<"Despesa"> | Date | string
    categoria?: StringFilter<"Despesa"> | string
    pago?: BoolFilter<"Despesa"> | boolean
    createdAt?: DateTimeFilter<"Despesa"> | Date | string
    updatedAt?: DateTimeFilter<"Despesa"> | Date | string
  }, "id">

  export type DespesaOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    vencimento?: SortOrder
    categoria?: SortOrder
    pago?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DespesaCountOrderByAggregateInput
    _avg?: DespesaAvgOrderByAggregateInput
    _max?: DespesaMaxOrderByAggregateInput
    _min?: DespesaMinOrderByAggregateInput
    _sum?: DespesaSumOrderByAggregateInput
  }

  export type DespesaScalarWhereWithAggregatesInput = {
    AND?: DespesaScalarWhereWithAggregatesInput | DespesaScalarWhereWithAggregatesInput[]
    OR?: DespesaScalarWhereWithAggregatesInput[]
    NOT?: DespesaScalarWhereWithAggregatesInput | DespesaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Despesa"> | string
    descricao?: StringWithAggregatesFilter<"Despesa"> | string
    valor?: FloatWithAggregatesFilter<"Despesa"> | number
    vencimento?: DateTimeWithAggregatesFilter<"Despesa"> | Date | string
    categoria?: StringWithAggregatesFilter<"Despesa"> | string
    pago?: BoolWithAggregatesFilter<"Despesa"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Despesa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Despesa"> | Date | string
  }

  export type BannerCreateInput = {
    id?: string
    titulo?: string | null
    subtitulo?: string | null
    descricao?: string | null
    imagem: string
    link?: string | null
    ordem?: number
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUncheckedCreateInput = {
    id?: string
    titulo?: string | null
    subtitulo?: string | null
    descricao?: string | null
    imagem: string
    link?: string | null
    ordem?: number
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    subtitulo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    subtitulo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateManyInput = {
    id?: string
    titulo?: string | null
    subtitulo?: string | null
    descricao?: string | null
    imagem: string
    link?: string | null
    ordem?: number
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    subtitulo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    subtitulo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipeCreateInput = {
    id?: string
    nome: string
    cargo: string
    imagem: string
    descricao: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipeUncheckedCreateInput = {
    id?: string
    nome: string
    cargo: string
    imagem: string
    descricao: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipeCreateManyInput = {
    id?: string
    nome: string
    cargo: string
    imagem: string
    descricao: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CursoCreateInput = {
    id?: string
    nome: string
    descricao: string
    duracao: string
    nivel: string
    preco: string
    imagem: string
    conteudo?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    alunos?: AlunoCreateNestedManyWithoutCursoInput
    turmas?: TurmaCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateInput = {
    id?: string
    nome: string
    descricao: string
    duracao: string
    nivel: string
    preco: string
    imagem: string
    conteudo?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    alunos?: AlunoUncheckedCreateNestedManyWithoutCursoInput
    turmas?: TurmaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    duracao?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    preco?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUpdateManyWithoutCursoNestedInput
    turmas?: TurmaUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    duracao?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    preco?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUncheckedUpdateManyWithoutCursoNestedInput
    turmas?: TurmaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoCreateManyInput = {
    id?: string
    nome: string
    descricao: string
    duracao: string
    nivel: string
    preco: string
    imagem: string
    conteudo?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CursoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    duracao?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    preco?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CursoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    duracao?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    preco?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoCreateInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    endereco: string
    foto?: string | null
    nomePais?: string | null
    telefoneContato?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    curso: CursoCreateNestedOneWithoutAlunosInput
    turma?: TurmaCreateNestedOneWithoutAlunosInput
    financeiros?: FinanceiroCreateNestedManyWithoutAlunoInput
    depoimentos?: DepoimentoCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    endereco: string
    foto?: string | null
    nomePais?: string | null
    telefoneContato?: string | null
    cursoId: string
    turmaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financeiros?: FinanceiroUncheckedCreateNestedManyWithoutAlunoInput
    depoimentos?: DepoimentoUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    nomePais?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutAlunosNestedInput
    turma?: TurmaUpdateOneWithoutAlunosNestedInput
    financeiros?: FinanceiroUpdateManyWithoutAlunoNestedInput
    depoimentos?: DepoimentoUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    nomePais?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    cursoId?: StringFieldUpdateOperationsInput | string
    turmaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financeiros?: FinanceiroUncheckedUpdateManyWithoutAlunoNestedInput
    depoimentos?: DepoimentoUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateManyInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    endereco: string
    foto?: string | null
    nomePais?: string | null
    telefoneContato?: string | null
    cursoId: string
    turmaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlunoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    nomePais?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    nomePais?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    cursoId?: StringFieldUpdateOperationsInput | string
    turmaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    biografia?: string | null
    imagem?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    turmas?: TurmaCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    biografia?: string | null
    imagem?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    turmas?: TurmaUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    turmas?: TurmaUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    turmas?: TurmaUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorCreateManyInput = {
    id?: string
    nome: string
    email: string
    senha: string
    biografia?: string | null
    imagem?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurmaCreateInput = {
    id?: string
    nome: string
    horario: string
    diasSemana: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    curso: CursoCreateNestedOneWithoutTurmasInput
    professor: ProfessorCreateNestedOneWithoutTurmasInput
    alunos?: AlunoCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateInput = {
    id?: string
    nome: string
    horario: string
    diasSemana: string
    cursoId: string
    professorId: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    alunos?: AlunoUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    diasSemana?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutTurmasNestedInput
    professor?: ProfessorUpdateOneRequiredWithoutTurmasNestedInput
    alunos?: AlunoUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    diasSemana?: StringFieldUpdateOperationsInput | string
    cursoId?: StringFieldUpdateOperationsInput | string
    professorId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaCreateManyInput = {
    id?: string
    nome: string
    horario: string
    diasSemana: string
    cursoId: string
    professorId: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurmaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    diasSemana?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurmaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    diasSemana?: StringFieldUpdateOperationsInput | string
    cursoId?: StringFieldUpdateOperationsInput | string
    professorId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceiroCreateInput = {
    id?: string
    valor: number
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aluno: AlunoCreateNestedOneWithoutFinanceirosInput
  }

  export type FinanceiroUncheckedCreateInput = {
    id?: string
    alunoId: string
    valor: number
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinanceiroUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aluno?: AlunoUpdateOneRequiredWithoutFinanceirosNestedInput
  }

  export type FinanceiroUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alunoId?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceiroCreateManyInput = {
    id?: string
    alunoId: string
    valor: number
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinanceiroUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceiroUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alunoId?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepoimentoCreateInput = {
    id?: string
    nome: string
    curso: string
    texto: string
    imagem?: string | null
    aprovado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    aluno?: AlunoCreateNestedOneWithoutDepoimentosInput
  }

  export type DepoimentoUncheckedCreateInput = {
    id?: string
    nome: string
    curso: string
    texto: string
    imagem?: string | null
    aprovado?: boolean
    alunoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepoimentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aluno?: AlunoUpdateOneWithoutDepoimentosNestedInput
  }

  export type DepoimentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    alunoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepoimentoCreateManyInput = {
    id?: string
    nome: string
    curso: string
    texto: string
    imagem?: string | null
    aprovado?: boolean
    alunoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepoimentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepoimentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    alunoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromocaoCreateInput = {
    id?: string
    titulo: string
    desconto: string
    cupom?: string | null
    ativa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromocaoUncheckedCreateInput = {
    id?: string
    titulo: string
    desconto: string
    cupom?: string | null
    ativa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromocaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    desconto?: StringFieldUpdateOperationsInput | string
    cupom?: NullableStringFieldUpdateOperationsInput | string | null
    ativa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromocaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    desconto?: StringFieldUpdateOperationsInput | string
    cupom?: NullableStringFieldUpdateOperationsInput | string | null
    ativa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromocaoCreateManyInput = {
    id?: string
    titulo: string
    desconto: string
    cupom?: string | null
    ativa?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromocaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    desconto?: StringFieldUpdateOperationsInput | string
    cupom?: NullableStringFieldUpdateOperationsInput | string | null
    ativa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromocaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    desconto?: StringFieldUpdateOperationsInput | string
    cupom?: NullableStringFieldUpdateOperationsInput | string | null
    ativa?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministradorUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministradorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorCreateManyInput = {
    id?: string
    nome: string
    email: string
    senha: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministradorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoCreateInput = {
    id?: string
    historia: string
    historiaImagem?: string | null
    historiaVideo?: string | null
    missao: string
    visao: string
    valores: string
    telefone?: string | null
    email?: string | null
    endereco?: string | null
    instagram?: string | null
    facebook?: string | null
    youtube?: string | null
    linkedin?: string | null
    tiktok?: string | null
    slogan?: string | null
    updatedAt?: Date | string
  }

  export type ConfiguracaoUncheckedCreateInput = {
    id?: string
    historia: string
    historiaImagem?: string | null
    historiaVideo?: string | null
    missao: string
    visao: string
    valores: string
    telefone?: string | null
    email?: string | null
    endereco?: string | null
    instagram?: string | null
    facebook?: string | null
    youtube?: string | null
    linkedin?: string | null
    tiktok?: string | null
    slogan?: string | null
    updatedAt?: Date | string
  }

  export type ConfiguracaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    historia?: StringFieldUpdateOperationsInput | string
    historiaImagem?: NullableStringFieldUpdateOperationsInput | string | null
    historiaVideo?: NullableStringFieldUpdateOperationsInput | string | null
    missao?: StringFieldUpdateOperationsInput | string
    visao?: StringFieldUpdateOperationsInput | string
    valores?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    historia?: StringFieldUpdateOperationsInput | string
    historiaImagem?: NullableStringFieldUpdateOperationsInput | string | null
    historiaVideo?: NullableStringFieldUpdateOperationsInput | string | null
    missao?: StringFieldUpdateOperationsInput | string
    visao?: StringFieldUpdateOperationsInput | string
    valores?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoCreateManyInput = {
    id?: string
    historia: string
    historiaImagem?: string | null
    historiaVideo?: string | null
    missao: string
    visao: string
    valores: string
    telefone?: string | null
    email?: string | null
    endereco?: string | null
    instagram?: string | null
    facebook?: string | null
    youtube?: string | null
    linkedin?: string | null
    tiktok?: string | null
    slogan?: string | null
    updatedAt?: Date | string
  }

  export type ConfiguracaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    historia?: StringFieldUpdateOperationsInput | string
    historiaImagem?: NullableStringFieldUpdateOperationsInput | string | null
    historiaVideo?: NullableStringFieldUpdateOperationsInput | string | null
    missao?: StringFieldUpdateOperationsInput | string
    visao?: StringFieldUpdateOperationsInput | string
    valores?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    historia?: StringFieldUpdateOperationsInput | string
    historiaImagem?: NullableStringFieldUpdateOperationsInput | string | null
    historiaVideo?: NullableStringFieldUpdateOperationsInput | string | null
    missao?: StringFieldUpdateOperationsInput | string
    visao?: StringFieldUpdateOperationsInput | string
    valores?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DespesaCreateInput = {
    id?: string
    descricao: string
    valor: number
    vencimento: Date | string
    categoria: string
    pago?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DespesaUncheckedCreateInput = {
    id?: string
    descricao: string
    valor: number
    vencimento: Date | string
    categoria: string
    pago?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DespesaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: StringFieldUpdateOperationsInput | string
    pago?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DespesaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: StringFieldUpdateOperationsInput | string
    pago?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DespesaCreateManyInput = {
    id?: string
    descricao: string
    valor: number
    vencimento: Date | string
    categoria: string
    pago?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DespesaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: StringFieldUpdateOperationsInput | string
    pago?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DespesaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: StringFieldUpdateOperationsInput | string
    pago?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BannerCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    subtitulo?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    link?: SortOrder
    ordem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerAvgOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    subtitulo?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    link?: SortOrder
    ordem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    subtitulo?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    link?: SortOrder
    ordem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerSumOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EquipeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cargo?: SortOrder
    imagem?: SortOrder
    descricao?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cargo?: SortOrder
    imagem?: SortOrder
    descricao?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cargo?: SortOrder
    imagem?: SortOrder
    descricao?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlunoListRelationFilter = {
    every?: AlunoWhereInput
    some?: AlunoWhereInput
    none?: AlunoWhereInput
  }

  export type TurmaListRelationFilter = {
    every?: TurmaWhereInput
    some?: TurmaWhereInput
    none?: TurmaWhereInput
  }

  export type AlunoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TurmaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CursoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    duracao?: SortOrder
    nivel?: SortOrder
    preco?: SortOrder
    imagem?: SortOrder
    conteudo?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CursoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    duracao?: SortOrder
    nivel?: SortOrder
    preco?: SortOrder
    imagem?: SortOrder
    conteudo?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CursoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    duracao?: SortOrder
    nivel?: SortOrder
    preco?: SortOrder
    imagem?: SortOrder
    conteudo?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CursoScalarRelationFilter = {
    is?: CursoWhereInput
    isNot?: CursoWhereInput
  }

  export type TurmaNullableScalarRelationFilter = {
    is?: TurmaWhereInput | null
    isNot?: TurmaWhereInput | null
  }

  export type FinanceiroListRelationFilter = {
    every?: FinanceiroWhereInput
    some?: FinanceiroWhereInput
    none?: FinanceiroWhereInput
  }

  export type DepoimentoListRelationFilter = {
    every?: DepoimentoWhereInput
    some?: DepoimentoWhereInput
    none?: DepoimentoWhereInput
  }

  export type FinanceiroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepoimentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlunoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    foto?: SortOrder
    nomePais?: SortOrder
    telefoneContato?: SortOrder
    cursoId?: SortOrder
    turmaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlunoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    foto?: SortOrder
    nomePais?: SortOrder
    telefoneContato?: SortOrder
    cursoId?: SortOrder
    turmaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlunoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    foto?: SortOrder
    nomePais?: SortOrder
    telefoneContato?: SortOrder
    cursoId?: SortOrder
    turmaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    biografia?: SortOrder
    imagem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    biografia?: SortOrder
    imagem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    biografia?: SortOrder
    imagem?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessorScalarRelationFilter = {
    is?: ProfessorWhereInput
    isNot?: ProfessorWhereInput
  }

  export type TurmaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    horario?: SortOrder
    diasSemana?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TurmaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    horario?: SortOrder
    diasSemana?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TurmaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    horario?: SortOrder
    diasSemana?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AlunoScalarRelationFilter = {
    is?: AlunoWhereInput
    isNot?: AlunoWhereInput
  }

  export type FinanceiroCountOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrder
    status?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceiroAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type FinanceiroMaxOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrder
    status?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceiroMinOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrder
    status?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinanceiroSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AlunoNullableScalarRelationFilter = {
    is?: AlunoWhereInput | null
    isNot?: AlunoWhereInput | null
  }

  export type DepoimentoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    curso?: SortOrder
    texto?: SortOrder
    imagem?: SortOrder
    aprovado?: SortOrder
    alunoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepoimentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    curso?: SortOrder
    texto?: SortOrder
    imagem?: SortOrder
    aprovado?: SortOrder
    alunoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepoimentoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    curso?: SortOrder
    texto?: SortOrder
    imagem?: SortOrder
    aprovado?: SortOrder
    alunoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromocaoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    desconto?: SortOrder
    cupom?: SortOrder
    ativa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromocaoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    desconto?: SortOrder
    cupom?: SortOrder
    ativa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromocaoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    desconto?: SortOrder
    cupom?: SortOrder
    ativa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministradorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministradorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministradorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracaoCountOrderByAggregateInput = {
    id?: SortOrder
    historia?: SortOrder
    historiaImagem?: SortOrder
    historiaVideo?: SortOrder
    missao?: SortOrder
    visao?: SortOrder
    valores?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    youtube?: SortOrder
    linkedin?: SortOrder
    tiktok?: SortOrder
    slogan?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracaoMaxOrderByAggregateInput = {
    id?: SortOrder
    historia?: SortOrder
    historiaImagem?: SortOrder
    historiaVideo?: SortOrder
    missao?: SortOrder
    visao?: SortOrder
    valores?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    youtube?: SortOrder
    linkedin?: SortOrder
    tiktok?: SortOrder
    slogan?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracaoMinOrderByAggregateInput = {
    id?: SortOrder
    historia?: SortOrder
    historiaImagem?: SortOrder
    historiaVideo?: SortOrder
    missao?: SortOrder
    visao?: SortOrder
    valores?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    youtube?: SortOrder
    linkedin?: SortOrder
    tiktok?: SortOrder
    slogan?: SortOrder
    updatedAt?: SortOrder
  }

  export type DespesaCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    vencimento?: SortOrder
    categoria?: SortOrder
    pago?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DespesaAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type DespesaMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    vencimento?: SortOrder
    categoria?: SortOrder
    pago?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DespesaMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    vencimento?: SortOrder
    categoria?: SortOrder
    pago?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DespesaSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AlunoCreateNestedManyWithoutCursoInput = {
    create?: XOR<AlunoCreateWithoutCursoInput, AlunoUncheckedCreateWithoutCursoInput> | AlunoCreateWithoutCursoInput[] | AlunoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutCursoInput | AlunoCreateOrConnectWithoutCursoInput[]
    createMany?: AlunoCreateManyCursoInputEnvelope
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
  }

  export type TurmaCreateNestedManyWithoutCursoInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type AlunoUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<AlunoCreateWithoutCursoInput, AlunoUncheckedCreateWithoutCursoInput> | AlunoCreateWithoutCursoInput[] | AlunoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutCursoInput | AlunoCreateOrConnectWithoutCursoInput[]
    createMany?: AlunoCreateManyCursoInputEnvelope
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
  }

  export type TurmaUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type AlunoUpdateManyWithoutCursoNestedInput = {
    create?: XOR<AlunoCreateWithoutCursoInput, AlunoUncheckedCreateWithoutCursoInput> | AlunoCreateWithoutCursoInput[] | AlunoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutCursoInput | AlunoCreateOrConnectWithoutCursoInput[]
    upsert?: AlunoUpsertWithWhereUniqueWithoutCursoInput | AlunoUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: AlunoCreateManyCursoInputEnvelope
    set?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    disconnect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    delete?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    update?: AlunoUpdateWithWhereUniqueWithoutCursoInput | AlunoUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: AlunoUpdateManyWithWhereWithoutCursoInput | AlunoUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
  }

  export type TurmaUpdateManyWithoutCursoNestedInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutCursoInput | TurmaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutCursoInput | TurmaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutCursoInput | TurmaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type AlunoUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<AlunoCreateWithoutCursoInput, AlunoUncheckedCreateWithoutCursoInput> | AlunoCreateWithoutCursoInput[] | AlunoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutCursoInput | AlunoCreateOrConnectWithoutCursoInput[]
    upsert?: AlunoUpsertWithWhereUniqueWithoutCursoInput | AlunoUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: AlunoCreateManyCursoInputEnvelope
    set?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    disconnect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    delete?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    update?: AlunoUpdateWithWhereUniqueWithoutCursoInput | AlunoUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: AlunoUpdateManyWithWhereWithoutCursoInput | AlunoUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
  }

  export type TurmaUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutCursoInput | TurmaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutCursoInput | TurmaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutCursoInput | TurmaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type CursoCreateNestedOneWithoutAlunosInput = {
    create?: XOR<CursoCreateWithoutAlunosInput, CursoUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: CursoCreateOrConnectWithoutAlunosInput
    connect?: CursoWhereUniqueInput
  }

  export type TurmaCreateNestedOneWithoutAlunosInput = {
    create?: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutAlunosInput
    connect?: TurmaWhereUniqueInput
  }

  export type FinanceiroCreateNestedManyWithoutAlunoInput = {
    create?: XOR<FinanceiroCreateWithoutAlunoInput, FinanceiroUncheckedCreateWithoutAlunoInput> | FinanceiroCreateWithoutAlunoInput[] | FinanceiroUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: FinanceiroCreateOrConnectWithoutAlunoInput | FinanceiroCreateOrConnectWithoutAlunoInput[]
    createMany?: FinanceiroCreateManyAlunoInputEnvelope
    connect?: FinanceiroWhereUniqueInput | FinanceiroWhereUniqueInput[]
  }

  export type DepoimentoCreateNestedManyWithoutAlunoInput = {
    create?: XOR<DepoimentoCreateWithoutAlunoInput, DepoimentoUncheckedCreateWithoutAlunoInput> | DepoimentoCreateWithoutAlunoInput[] | DepoimentoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: DepoimentoCreateOrConnectWithoutAlunoInput | DepoimentoCreateOrConnectWithoutAlunoInput[]
    createMany?: DepoimentoCreateManyAlunoInputEnvelope
    connect?: DepoimentoWhereUniqueInput | DepoimentoWhereUniqueInput[]
  }

  export type FinanceiroUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<FinanceiroCreateWithoutAlunoInput, FinanceiroUncheckedCreateWithoutAlunoInput> | FinanceiroCreateWithoutAlunoInput[] | FinanceiroUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: FinanceiroCreateOrConnectWithoutAlunoInput | FinanceiroCreateOrConnectWithoutAlunoInput[]
    createMany?: FinanceiroCreateManyAlunoInputEnvelope
    connect?: FinanceiroWhereUniqueInput | FinanceiroWhereUniqueInput[]
  }

  export type DepoimentoUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<DepoimentoCreateWithoutAlunoInput, DepoimentoUncheckedCreateWithoutAlunoInput> | DepoimentoCreateWithoutAlunoInput[] | DepoimentoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: DepoimentoCreateOrConnectWithoutAlunoInput | DepoimentoCreateOrConnectWithoutAlunoInput[]
    createMany?: DepoimentoCreateManyAlunoInputEnvelope
    connect?: DepoimentoWhereUniqueInput | DepoimentoWhereUniqueInput[]
  }

  export type CursoUpdateOneRequiredWithoutAlunosNestedInput = {
    create?: XOR<CursoCreateWithoutAlunosInput, CursoUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: CursoCreateOrConnectWithoutAlunosInput
    upsert?: CursoUpsertWithoutAlunosInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutAlunosInput, CursoUpdateWithoutAlunosInput>, CursoUncheckedUpdateWithoutAlunosInput>
  }

  export type TurmaUpdateOneWithoutAlunosNestedInput = {
    create?: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutAlunosInput
    upsert?: TurmaUpsertWithoutAlunosInput
    disconnect?: TurmaWhereInput | boolean
    delete?: TurmaWhereInput | boolean
    connect?: TurmaWhereUniqueInput
    update?: XOR<XOR<TurmaUpdateToOneWithWhereWithoutAlunosInput, TurmaUpdateWithoutAlunosInput>, TurmaUncheckedUpdateWithoutAlunosInput>
  }

  export type FinanceiroUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<FinanceiroCreateWithoutAlunoInput, FinanceiroUncheckedCreateWithoutAlunoInput> | FinanceiroCreateWithoutAlunoInput[] | FinanceiroUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: FinanceiroCreateOrConnectWithoutAlunoInput | FinanceiroCreateOrConnectWithoutAlunoInput[]
    upsert?: FinanceiroUpsertWithWhereUniqueWithoutAlunoInput | FinanceiroUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: FinanceiroCreateManyAlunoInputEnvelope
    set?: FinanceiroWhereUniqueInput | FinanceiroWhereUniqueInput[]
    disconnect?: FinanceiroWhereUniqueInput | FinanceiroWhereUniqueInput[]
    delete?: FinanceiroWhereUniqueInput | FinanceiroWhereUniqueInput[]
    connect?: FinanceiroWhereUniqueInput | FinanceiroWhereUniqueInput[]
    update?: FinanceiroUpdateWithWhereUniqueWithoutAlunoInput | FinanceiroUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: FinanceiroUpdateManyWithWhereWithoutAlunoInput | FinanceiroUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: FinanceiroScalarWhereInput | FinanceiroScalarWhereInput[]
  }

  export type DepoimentoUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<DepoimentoCreateWithoutAlunoInput, DepoimentoUncheckedCreateWithoutAlunoInput> | DepoimentoCreateWithoutAlunoInput[] | DepoimentoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: DepoimentoCreateOrConnectWithoutAlunoInput | DepoimentoCreateOrConnectWithoutAlunoInput[]
    upsert?: DepoimentoUpsertWithWhereUniqueWithoutAlunoInput | DepoimentoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: DepoimentoCreateManyAlunoInputEnvelope
    set?: DepoimentoWhereUniqueInput | DepoimentoWhereUniqueInput[]
    disconnect?: DepoimentoWhereUniqueInput | DepoimentoWhereUniqueInput[]
    delete?: DepoimentoWhereUniqueInput | DepoimentoWhereUniqueInput[]
    connect?: DepoimentoWhereUniqueInput | DepoimentoWhereUniqueInput[]
    update?: DepoimentoUpdateWithWhereUniqueWithoutAlunoInput | DepoimentoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: DepoimentoUpdateManyWithWhereWithoutAlunoInput | DepoimentoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: DepoimentoScalarWhereInput | DepoimentoScalarWhereInput[]
  }

  export type FinanceiroUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<FinanceiroCreateWithoutAlunoInput, FinanceiroUncheckedCreateWithoutAlunoInput> | FinanceiroCreateWithoutAlunoInput[] | FinanceiroUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: FinanceiroCreateOrConnectWithoutAlunoInput | FinanceiroCreateOrConnectWithoutAlunoInput[]
    upsert?: FinanceiroUpsertWithWhereUniqueWithoutAlunoInput | FinanceiroUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: FinanceiroCreateManyAlunoInputEnvelope
    set?: FinanceiroWhereUniqueInput | FinanceiroWhereUniqueInput[]
    disconnect?: FinanceiroWhereUniqueInput | FinanceiroWhereUniqueInput[]
    delete?: FinanceiroWhereUniqueInput | FinanceiroWhereUniqueInput[]
    connect?: FinanceiroWhereUniqueInput | FinanceiroWhereUniqueInput[]
    update?: FinanceiroUpdateWithWhereUniqueWithoutAlunoInput | FinanceiroUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: FinanceiroUpdateManyWithWhereWithoutAlunoInput | FinanceiroUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: FinanceiroScalarWhereInput | FinanceiroScalarWhereInput[]
  }

  export type DepoimentoUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<DepoimentoCreateWithoutAlunoInput, DepoimentoUncheckedCreateWithoutAlunoInput> | DepoimentoCreateWithoutAlunoInput[] | DepoimentoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: DepoimentoCreateOrConnectWithoutAlunoInput | DepoimentoCreateOrConnectWithoutAlunoInput[]
    upsert?: DepoimentoUpsertWithWhereUniqueWithoutAlunoInput | DepoimentoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: DepoimentoCreateManyAlunoInputEnvelope
    set?: DepoimentoWhereUniqueInput | DepoimentoWhereUniqueInput[]
    disconnect?: DepoimentoWhereUniqueInput | DepoimentoWhereUniqueInput[]
    delete?: DepoimentoWhereUniqueInput | DepoimentoWhereUniqueInput[]
    connect?: DepoimentoWhereUniqueInput | DepoimentoWhereUniqueInput[]
    update?: DepoimentoUpdateWithWhereUniqueWithoutAlunoInput | DepoimentoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: DepoimentoUpdateManyWithWhereWithoutAlunoInput | DepoimentoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: DepoimentoScalarWhereInput | DepoimentoScalarWhereInput[]
  }

  export type TurmaCreateNestedManyWithoutProfessorInput = {
    create?: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput> | TurmaCreateWithoutProfessorInput[] | TurmaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutProfessorInput | TurmaCreateOrConnectWithoutProfessorInput[]
    createMany?: TurmaCreateManyProfessorInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type TurmaUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput> | TurmaCreateWithoutProfessorInput[] | TurmaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutProfessorInput | TurmaCreateOrConnectWithoutProfessorInput[]
    createMany?: TurmaCreateManyProfessorInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type TurmaUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput> | TurmaCreateWithoutProfessorInput[] | TurmaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutProfessorInput | TurmaCreateOrConnectWithoutProfessorInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutProfessorInput | TurmaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: TurmaCreateManyProfessorInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutProfessorInput | TurmaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutProfessorInput | TurmaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type TurmaUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput> | TurmaCreateWithoutProfessorInput[] | TurmaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutProfessorInput | TurmaCreateOrConnectWithoutProfessorInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutProfessorInput | TurmaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: TurmaCreateManyProfessorInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutProfessorInput | TurmaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutProfessorInput | TurmaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type CursoCreateNestedOneWithoutTurmasInput = {
    create?: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutTurmasInput
    connect?: CursoWhereUniqueInput
  }

  export type ProfessorCreateNestedOneWithoutTurmasInput = {
    create?: XOR<ProfessorCreateWithoutTurmasInput, ProfessorUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutTurmasInput
    connect?: ProfessorWhereUniqueInput
  }

  export type AlunoCreateNestedManyWithoutTurmaInput = {
    create?: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput> | AlunoCreateWithoutTurmaInput[] | AlunoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutTurmaInput | AlunoCreateOrConnectWithoutTurmaInput[]
    createMany?: AlunoCreateManyTurmaInputEnvelope
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
  }

  export type AlunoUncheckedCreateNestedManyWithoutTurmaInput = {
    create?: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput> | AlunoCreateWithoutTurmaInput[] | AlunoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutTurmaInput | AlunoCreateOrConnectWithoutTurmaInput[]
    createMany?: AlunoCreateManyTurmaInputEnvelope
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
  }

  export type CursoUpdateOneRequiredWithoutTurmasNestedInput = {
    create?: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutTurmasInput
    upsert?: CursoUpsertWithoutTurmasInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutTurmasInput, CursoUpdateWithoutTurmasInput>, CursoUncheckedUpdateWithoutTurmasInput>
  }

  export type ProfessorUpdateOneRequiredWithoutTurmasNestedInput = {
    create?: XOR<ProfessorCreateWithoutTurmasInput, ProfessorUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutTurmasInput
    upsert?: ProfessorUpsertWithoutTurmasInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutTurmasInput, ProfessorUpdateWithoutTurmasInput>, ProfessorUncheckedUpdateWithoutTurmasInput>
  }

  export type AlunoUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput> | AlunoCreateWithoutTurmaInput[] | AlunoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutTurmaInput | AlunoCreateOrConnectWithoutTurmaInput[]
    upsert?: AlunoUpsertWithWhereUniqueWithoutTurmaInput | AlunoUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: AlunoCreateManyTurmaInputEnvelope
    set?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    disconnect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    delete?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    update?: AlunoUpdateWithWhereUniqueWithoutTurmaInput | AlunoUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: AlunoUpdateManyWithWhereWithoutTurmaInput | AlunoUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
  }

  export type AlunoUncheckedUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput> | AlunoCreateWithoutTurmaInput[] | AlunoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutTurmaInput | AlunoCreateOrConnectWithoutTurmaInput[]
    upsert?: AlunoUpsertWithWhereUniqueWithoutTurmaInput | AlunoUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: AlunoCreateManyTurmaInputEnvelope
    set?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    disconnect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    delete?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    update?: AlunoUpdateWithWhereUniqueWithoutTurmaInput | AlunoUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: AlunoUpdateManyWithWhereWithoutTurmaInput | AlunoUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
  }

  export type AlunoCreateNestedOneWithoutFinanceirosInput = {
    create?: XOR<AlunoCreateWithoutFinanceirosInput, AlunoUncheckedCreateWithoutFinanceirosInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutFinanceirosInput
    connect?: AlunoWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AlunoUpdateOneRequiredWithoutFinanceirosNestedInput = {
    create?: XOR<AlunoCreateWithoutFinanceirosInput, AlunoUncheckedCreateWithoutFinanceirosInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutFinanceirosInput
    upsert?: AlunoUpsertWithoutFinanceirosInput
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutFinanceirosInput, AlunoUpdateWithoutFinanceirosInput>, AlunoUncheckedUpdateWithoutFinanceirosInput>
  }

  export type AlunoCreateNestedOneWithoutDepoimentosInput = {
    create?: XOR<AlunoCreateWithoutDepoimentosInput, AlunoUncheckedCreateWithoutDepoimentosInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutDepoimentosInput
    connect?: AlunoWhereUniqueInput
  }

  export type AlunoUpdateOneWithoutDepoimentosNestedInput = {
    create?: XOR<AlunoCreateWithoutDepoimentosInput, AlunoUncheckedCreateWithoutDepoimentosInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutDepoimentosInput
    upsert?: AlunoUpsertWithoutDepoimentosInput
    disconnect?: AlunoWhereInput | boolean
    delete?: AlunoWhereInput | boolean
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutDepoimentosInput, AlunoUpdateWithoutDepoimentosInput>, AlunoUncheckedUpdateWithoutDepoimentosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AlunoCreateWithoutCursoInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    endereco: string
    foto?: string | null
    nomePais?: string | null
    telefoneContato?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    turma?: TurmaCreateNestedOneWithoutAlunosInput
    financeiros?: FinanceiroCreateNestedManyWithoutAlunoInput
    depoimentos?: DepoimentoCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutCursoInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    endereco: string
    foto?: string | null
    nomePais?: string | null
    telefoneContato?: string | null
    turmaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financeiros?: FinanceiroUncheckedCreateNestedManyWithoutAlunoInput
    depoimentos?: DepoimentoUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutCursoInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutCursoInput, AlunoUncheckedCreateWithoutCursoInput>
  }

  export type AlunoCreateManyCursoInputEnvelope = {
    data: AlunoCreateManyCursoInput | AlunoCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type TurmaCreateWithoutCursoInput = {
    id?: string
    nome: string
    horario: string
    diasSemana: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    professor: ProfessorCreateNestedOneWithoutTurmasInput
    alunos?: AlunoCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutCursoInput = {
    id?: string
    nome: string
    horario: string
    diasSemana: string
    professorId: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    alunos?: AlunoUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput>
  }

  export type TurmaCreateManyCursoInputEnvelope = {
    data: TurmaCreateManyCursoInput | TurmaCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type AlunoUpsertWithWhereUniqueWithoutCursoInput = {
    where: AlunoWhereUniqueInput
    update: XOR<AlunoUpdateWithoutCursoInput, AlunoUncheckedUpdateWithoutCursoInput>
    create: XOR<AlunoCreateWithoutCursoInput, AlunoUncheckedCreateWithoutCursoInput>
  }

  export type AlunoUpdateWithWhereUniqueWithoutCursoInput = {
    where: AlunoWhereUniqueInput
    data: XOR<AlunoUpdateWithoutCursoInput, AlunoUncheckedUpdateWithoutCursoInput>
  }

  export type AlunoUpdateManyWithWhereWithoutCursoInput = {
    where: AlunoScalarWhereInput
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyWithoutCursoInput>
  }

  export type AlunoScalarWhereInput = {
    AND?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
    OR?: AlunoScalarWhereInput[]
    NOT?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
    id?: StringFilter<"Aluno"> | string
    nome?: StringFilter<"Aluno"> | string
    email?: StringFilter<"Aluno"> | string
    telefone?: StringFilter<"Aluno"> | string
    endereco?: StringFilter<"Aluno"> | string
    foto?: StringNullableFilter<"Aluno"> | string | null
    nomePais?: StringNullableFilter<"Aluno"> | string | null
    telefoneContato?: StringNullableFilter<"Aluno"> | string | null
    cursoId?: StringFilter<"Aluno"> | string
    turmaId?: StringNullableFilter<"Aluno"> | string | null
    createdAt?: DateTimeFilter<"Aluno"> | Date | string
    updatedAt?: DateTimeFilter<"Aluno"> | Date | string
  }

  export type TurmaUpsertWithWhereUniqueWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    update: XOR<TurmaUpdateWithoutCursoInput, TurmaUncheckedUpdateWithoutCursoInput>
    create: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput>
  }

  export type TurmaUpdateWithWhereUniqueWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    data: XOR<TurmaUpdateWithoutCursoInput, TurmaUncheckedUpdateWithoutCursoInput>
  }

  export type TurmaUpdateManyWithWhereWithoutCursoInput = {
    where: TurmaScalarWhereInput
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyWithoutCursoInput>
  }

  export type TurmaScalarWhereInput = {
    AND?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
    OR?: TurmaScalarWhereInput[]
    NOT?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
    id?: StringFilter<"Turma"> | string
    nome?: StringFilter<"Turma"> | string
    horario?: StringFilter<"Turma"> | string
    diasSemana?: StringFilter<"Turma"> | string
    cursoId?: StringFilter<"Turma"> | string
    professorId?: StringFilter<"Turma"> | string
    ativo?: BoolFilter<"Turma"> | boolean
    createdAt?: DateTimeFilter<"Turma"> | Date | string
    updatedAt?: DateTimeFilter<"Turma"> | Date | string
  }

  export type CursoCreateWithoutAlunosInput = {
    id?: string
    nome: string
    descricao: string
    duracao: string
    nivel: string
    preco: string
    imagem: string
    conteudo?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    turmas?: TurmaCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutAlunosInput = {
    id?: string
    nome: string
    descricao: string
    duracao: string
    nivel: string
    preco: string
    imagem: string
    conteudo?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    turmas?: TurmaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutAlunosInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutAlunosInput, CursoUncheckedCreateWithoutAlunosInput>
  }

  export type TurmaCreateWithoutAlunosInput = {
    id?: string
    nome: string
    horario: string
    diasSemana: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    curso: CursoCreateNestedOneWithoutTurmasInput
    professor: ProfessorCreateNestedOneWithoutTurmasInput
  }

  export type TurmaUncheckedCreateWithoutAlunosInput = {
    id?: string
    nome: string
    horario: string
    diasSemana: string
    cursoId: string
    professorId: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurmaCreateOrConnectWithoutAlunosInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
  }

  export type FinanceiroCreateWithoutAlunoInput = {
    id?: string
    valor: number
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinanceiroUncheckedCreateWithoutAlunoInput = {
    id?: string
    valor: number
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinanceiroCreateOrConnectWithoutAlunoInput = {
    where: FinanceiroWhereUniqueInput
    create: XOR<FinanceiroCreateWithoutAlunoInput, FinanceiroUncheckedCreateWithoutAlunoInput>
  }

  export type FinanceiroCreateManyAlunoInputEnvelope = {
    data: FinanceiroCreateManyAlunoInput | FinanceiroCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type DepoimentoCreateWithoutAlunoInput = {
    id?: string
    nome: string
    curso: string
    texto: string
    imagem?: string | null
    aprovado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepoimentoUncheckedCreateWithoutAlunoInput = {
    id?: string
    nome: string
    curso: string
    texto: string
    imagem?: string | null
    aprovado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepoimentoCreateOrConnectWithoutAlunoInput = {
    where: DepoimentoWhereUniqueInput
    create: XOR<DepoimentoCreateWithoutAlunoInput, DepoimentoUncheckedCreateWithoutAlunoInput>
  }

  export type DepoimentoCreateManyAlunoInputEnvelope = {
    data: DepoimentoCreateManyAlunoInput | DepoimentoCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type CursoUpsertWithoutAlunosInput = {
    update: XOR<CursoUpdateWithoutAlunosInput, CursoUncheckedUpdateWithoutAlunosInput>
    create: XOR<CursoCreateWithoutAlunosInput, CursoUncheckedCreateWithoutAlunosInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutAlunosInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutAlunosInput, CursoUncheckedUpdateWithoutAlunosInput>
  }

  export type CursoUpdateWithoutAlunosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    duracao?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    preco?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    turmas?: TurmaUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutAlunosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    duracao?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    preco?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    turmas?: TurmaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type TurmaUpsertWithoutAlunosInput = {
    update: XOR<TurmaUpdateWithoutAlunosInput, TurmaUncheckedUpdateWithoutAlunosInput>
    create: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
    where?: TurmaWhereInput
  }

  export type TurmaUpdateToOneWithWhereWithoutAlunosInput = {
    where?: TurmaWhereInput
    data: XOR<TurmaUpdateWithoutAlunosInput, TurmaUncheckedUpdateWithoutAlunosInput>
  }

  export type TurmaUpdateWithoutAlunosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    diasSemana?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutTurmasNestedInput
    professor?: ProfessorUpdateOneRequiredWithoutTurmasNestedInput
  }

  export type TurmaUncheckedUpdateWithoutAlunosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    diasSemana?: StringFieldUpdateOperationsInput | string
    cursoId?: StringFieldUpdateOperationsInput | string
    professorId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceiroUpsertWithWhereUniqueWithoutAlunoInput = {
    where: FinanceiroWhereUniqueInput
    update: XOR<FinanceiroUpdateWithoutAlunoInput, FinanceiroUncheckedUpdateWithoutAlunoInput>
    create: XOR<FinanceiroCreateWithoutAlunoInput, FinanceiroUncheckedCreateWithoutAlunoInput>
  }

  export type FinanceiroUpdateWithWhereUniqueWithoutAlunoInput = {
    where: FinanceiroWhereUniqueInput
    data: XOR<FinanceiroUpdateWithoutAlunoInput, FinanceiroUncheckedUpdateWithoutAlunoInput>
  }

  export type FinanceiroUpdateManyWithWhereWithoutAlunoInput = {
    where: FinanceiroScalarWhereInput
    data: XOR<FinanceiroUpdateManyMutationInput, FinanceiroUncheckedUpdateManyWithoutAlunoInput>
  }

  export type FinanceiroScalarWhereInput = {
    AND?: FinanceiroScalarWhereInput | FinanceiroScalarWhereInput[]
    OR?: FinanceiroScalarWhereInput[]
    NOT?: FinanceiroScalarWhereInput | FinanceiroScalarWhereInput[]
    id?: StringFilter<"Financeiro"> | string
    alunoId?: StringFilter<"Financeiro"> | string
    valor?: FloatFilter<"Financeiro"> | number
    dataVencimento?: DateTimeFilter<"Financeiro"> | Date | string
    dataPagamento?: DateTimeNullableFilter<"Financeiro"> | Date | string | null
    status?: StringFilter<"Financeiro"> | string
    descricao?: StringNullableFilter<"Financeiro"> | string | null
    createdAt?: DateTimeFilter<"Financeiro"> | Date | string
    updatedAt?: DateTimeFilter<"Financeiro"> | Date | string
  }

  export type DepoimentoUpsertWithWhereUniqueWithoutAlunoInput = {
    where: DepoimentoWhereUniqueInput
    update: XOR<DepoimentoUpdateWithoutAlunoInput, DepoimentoUncheckedUpdateWithoutAlunoInput>
    create: XOR<DepoimentoCreateWithoutAlunoInput, DepoimentoUncheckedCreateWithoutAlunoInput>
  }

  export type DepoimentoUpdateWithWhereUniqueWithoutAlunoInput = {
    where: DepoimentoWhereUniqueInput
    data: XOR<DepoimentoUpdateWithoutAlunoInput, DepoimentoUncheckedUpdateWithoutAlunoInput>
  }

  export type DepoimentoUpdateManyWithWhereWithoutAlunoInput = {
    where: DepoimentoScalarWhereInput
    data: XOR<DepoimentoUpdateManyMutationInput, DepoimentoUncheckedUpdateManyWithoutAlunoInput>
  }

  export type DepoimentoScalarWhereInput = {
    AND?: DepoimentoScalarWhereInput | DepoimentoScalarWhereInput[]
    OR?: DepoimentoScalarWhereInput[]
    NOT?: DepoimentoScalarWhereInput | DepoimentoScalarWhereInput[]
    id?: StringFilter<"Depoimento"> | string
    nome?: StringFilter<"Depoimento"> | string
    curso?: StringFilter<"Depoimento"> | string
    texto?: StringFilter<"Depoimento"> | string
    imagem?: StringNullableFilter<"Depoimento"> | string | null
    aprovado?: BoolFilter<"Depoimento"> | boolean
    alunoId?: StringNullableFilter<"Depoimento"> | string | null
    createdAt?: DateTimeFilter<"Depoimento"> | Date | string
    updatedAt?: DateTimeFilter<"Depoimento"> | Date | string
  }

  export type TurmaCreateWithoutProfessorInput = {
    id?: string
    nome: string
    horario: string
    diasSemana: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    curso: CursoCreateNestedOneWithoutTurmasInput
    alunos?: AlunoCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutProfessorInput = {
    id?: string
    nome: string
    horario: string
    diasSemana: string
    cursoId: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    alunos?: AlunoUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutProfessorInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput>
  }

  export type TurmaCreateManyProfessorInputEnvelope = {
    data: TurmaCreateManyProfessorInput | TurmaCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type TurmaUpsertWithWhereUniqueWithoutProfessorInput = {
    where: TurmaWhereUniqueInput
    update: XOR<TurmaUpdateWithoutProfessorInput, TurmaUncheckedUpdateWithoutProfessorInput>
    create: XOR<TurmaCreateWithoutProfessorInput, TurmaUncheckedCreateWithoutProfessorInput>
  }

  export type TurmaUpdateWithWhereUniqueWithoutProfessorInput = {
    where: TurmaWhereUniqueInput
    data: XOR<TurmaUpdateWithoutProfessorInput, TurmaUncheckedUpdateWithoutProfessorInput>
  }

  export type TurmaUpdateManyWithWhereWithoutProfessorInput = {
    where: TurmaScalarWhereInput
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyWithoutProfessorInput>
  }

  export type CursoCreateWithoutTurmasInput = {
    id?: string
    nome: string
    descricao: string
    duracao: string
    nivel: string
    preco: string
    imagem: string
    conteudo?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    alunos?: AlunoCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutTurmasInput = {
    id?: string
    nome: string
    descricao: string
    duracao: string
    nivel: string
    preco: string
    imagem: string
    conteudo?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    alunos?: AlunoUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutTurmasInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
  }

  export type ProfessorCreateWithoutTurmasInput = {
    id?: string
    nome: string
    email: string
    senha: string
    biografia?: string | null
    imagem?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessorUncheckedCreateWithoutTurmasInput = {
    id?: string
    nome: string
    email: string
    senha: string
    biografia?: string | null
    imagem?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessorCreateOrConnectWithoutTurmasInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutTurmasInput, ProfessorUncheckedCreateWithoutTurmasInput>
  }

  export type AlunoCreateWithoutTurmaInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    endereco: string
    foto?: string | null
    nomePais?: string | null
    telefoneContato?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    curso: CursoCreateNestedOneWithoutAlunosInput
    financeiros?: FinanceiroCreateNestedManyWithoutAlunoInput
    depoimentos?: DepoimentoCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutTurmaInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    endereco: string
    foto?: string | null
    nomePais?: string | null
    telefoneContato?: string | null
    cursoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    financeiros?: FinanceiroUncheckedCreateNestedManyWithoutAlunoInput
    depoimentos?: DepoimentoUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutTurmaInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput>
  }

  export type AlunoCreateManyTurmaInputEnvelope = {
    data: AlunoCreateManyTurmaInput | AlunoCreateManyTurmaInput[]
    skipDuplicates?: boolean
  }

  export type CursoUpsertWithoutTurmasInput = {
    update: XOR<CursoUpdateWithoutTurmasInput, CursoUncheckedUpdateWithoutTurmasInput>
    create: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutTurmasInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutTurmasInput, CursoUncheckedUpdateWithoutTurmasInput>
  }

  export type CursoUpdateWithoutTurmasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    duracao?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    preco?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutTurmasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    duracao?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    preco?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type ProfessorUpsertWithoutTurmasInput = {
    update: XOR<ProfessorUpdateWithoutTurmasInput, ProfessorUncheckedUpdateWithoutTurmasInput>
    create: XOR<ProfessorCreateWithoutTurmasInput, ProfessorUncheckedCreateWithoutTurmasInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutTurmasInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutTurmasInput, ProfessorUncheckedUpdateWithoutTurmasInput>
  }

  export type ProfessorUpdateWithoutTurmasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorUncheckedUpdateWithoutTurmasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoUpsertWithWhereUniqueWithoutTurmaInput = {
    where: AlunoWhereUniqueInput
    update: XOR<AlunoUpdateWithoutTurmaInput, AlunoUncheckedUpdateWithoutTurmaInput>
    create: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput>
  }

  export type AlunoUpdateWithWhereUniqueWithoutTurmaInput = {
    where: AlunoWhereUniqueInput
    data: XOR<AlunoUpdateWithoutTurmaInput, AlunoUncheckedUpdateWithoutTurmaInput>
  }

  export type AlunoUpdateManyWithWhereWithoutTurmaInput = {
    where: AlunoScalarWhereInput
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyWithoutTurmaInput>
  }

  export type AlunoCreateWithoutFinanceirosInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    endereco: string
    foto?: string | null
    nomePais?: string | null
    telefoneContato?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    curso: CursoCreateNestedOneWithoutAlunosInput
    turma?: TurmaCreateNestedOneWithoutAlunosInput
    depoimentos?: DepoimentoCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutFinanceirosInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    endereco: string
    foto?: string | null
    nomePais?: string | null
    telefoneContato?: string | null
    cursoId: string
    turmaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    depoimentos?: DepoimentoUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutFinanceirosInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutFinanceirosInput, AlunoUncheckedCreateWithoutFinanceirosInput>
  }

  export type AlunoUpsertWithoutFinanceirosInput = {
    update: XOR<AlunoUpdateWithoutFinanceirosInput, AlunoUncheckedUpdateWithoutFinanceirosInput>
    create: XOR<AlunoCreateWithoutFinanceirosInput, AlunoUncheckedCreateWithoutFinanceirosInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutFinanceirosInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutFinanceirosInput, AlunoUncheckedUpdateWithoutFinanceirosInput>
  }

  export type AlunoUpdateWithoutFinanceirosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    nomePais?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutAlunosNestedInput
    turma?: TurmaUpdateOneWithoutAlunosNestedInput
    depoimentos?: DepoimentoUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutFinanceirosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    nomePais?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    cursoId?: StringFieldUpdateOperationsInput | string
    turmaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depoimentos?: DepoimentoUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateWithoutDepoimentosInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    endereco: string
    foto?: string | null
    nomePais?: string | null
    telefoneContato?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    curso: CursoCreateNestedOneWithoutAlunosInput
    turma?: TurmaCreateNestedOneWithoutAlunosInput
    financeiros?: FinanceiroCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutDepoimentosInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    endereco: string
    foto?: string | null
    nomePais?: string | null
    telefoneContato?: string | null
    cursoId: string
    turmaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financeiros?: FinanceiroUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutDepoimentosInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutDepoimentosInput, AlunoUncheckedCreateWithoutDepoimentosInput>
  }

  export type AlunoUpsertWithoutDepoimentosInput = {
    update: XOR<AlunoUpdateWithoutDepoimentosInput, AlunoUncheckedUpdateWithoutDepoimentosInput>
    create: XOR<AlunoCreateWithoutDepoimentosInput, AlunoUncheckedCreateWithoutDepoimentosInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutDepoimentosInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutDepoimentosInput, AlunoUncheckedUpdateWithoutDepoimentosInput>
  }

  export type AlunoUpdateWithoutDepoimentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    nomePais?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutAlunosNestedInput
    turma?: TurmaUpdateOneWithoutAlunosNestedInput
    financeiros?: FinanceiroUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutDepoimentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    nomePais?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    cursoId?: StringFieldUpdateOperationsInput | string
    turmaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financeiros?: FinanceiroUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateManyCursoInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    endereco: string
    foto?: string | null
    nomePais?: string | null
    telefoneContato?: string | null
    turmaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurmaCreateManyCursoInput = {
    id?: string
    nome: string
    horario: string
    diasSemana: string
    professorId: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlunoUpdateWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    nomePais?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    turma?: TurmaUpdateOneWithoutAlunosNestedInput
    financeiros?: FinanceiroUpdateManyWithoutAlunoNestedInput
    depoimentos?: DepoimentoUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    nomePais?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    turmaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financeiros?: FinanceiroUncheckedUpdateManyWithoutAlunoNestedInput
    depoimentos?: DepoimentoUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateManyWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    nomePais?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    turmaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurmaUpdateWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    diasSemana?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: ProfessorUpdateOneRequiredWithoutTurmasNestedInput
    alunos?: AlunoUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    diasSemana?: StringFieldUpdateOperationsInput | string
    professorId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateManyWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    diasSemana?: StringFieldUpdateOperationsInput | string
    professorId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceiroCreateManyAlunoInput = {
    id?: string
    valor: number
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepoimentoCreateManyAlunoInput = {
    id?: string
    nome: string
    curso: string
    texto: string
    imagem?: string | null
    aprovado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinanceiroUpdateWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceiroUncheckedUpdateWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceiroUncheckedUpdateManyWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepoimentoUpdateWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepoimentoUncheckedUpdateWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepoimentoUncheckedUpdateManyWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurmaCreateManyProfessorInput = {
    id?: string
    nome: string
    horario: string
    diasSemana: string
    cursoId: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurmaUpdateWithoutProfessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    diasSemana?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutTurmasNestedInput
    alunos?: AlunoUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutProfessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    diasSemana?: StringFieldUpdateOperationsInput | string
    cursoId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateManyWithoutProfessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    diasSemana?: StringFieldUpdateOperationsInput | string
    cursoId?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoCreateManyTurmaInput = {
    id?: string
    nome: string
    email: string
    telefone: string
    endereco: string
    foto?: string | null
    nomePais?: string | null
    telefoneContato?: string | null
    cursoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlunoUpdateWithoutTurmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    nomePais?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutAlunosNestedInput
    financeiros?: FinanceiroUpdateManyWithoutAlunoNestedInput
    depoimentos?: DepoimentoUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutTurmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    nomePais?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    cursoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financeiros?: FinanceiroUncheckedUpdateManyWithoutAlunoNestedInput
    depoimentos?: DepoimentoUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateManyWithoutTurmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    nomePais?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneContato?: NullableStringFieldUpdateOperationsInput | string | null
    cursoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}