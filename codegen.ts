import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.crm.refine.dev/graphql",
  documents: "src/**/*.ts",
  generates: {
    "src/graphql/schema.types.ts": {
      plugins: ["typescript"],
      config: {
        skipTypename: true,
        enumsAsTypes: true,
      },
    },
    "src/graphql/schema.zod.ts": {
      plugins: ["typescript-validation-schema"],
      config: {
        schema: "zod",
        importFrom: "./schema.types",
        withObjectType: true,
        skipTypename: true,
        enumsAsTypes: true,
        useTypeImports: true,
        scalarSchemas: {
          DateTime: "z.string().datetime()",
        },
      },
    },
    "src/graphql/types.ts": {
      preset: "import-types",
      documents: ["src/**/*.{ts,tsx}"],
      plugins: ["typescript-operations"],
      config: {
        skipTypename: true,
        enumsAsTypes: true,
        preResolveTypes: false,
        useTypeImports: true,
      },
      presetConfig: {
        typesPath: "./schema.types",
      },
    },
  },
}

export default config
