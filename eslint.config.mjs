export default [
  {
    files: ["lib/*.js"],
    languageOptions: {
      globals: {
        // Ambiente Browser
        window: "readonly",
        document: "readonly",
        console: "readonly",
        location: "readonly",
        localStorage: "readonly",
        
        // Para os testes (framework de teste)
        test: "readonly",
        update: "readonly", 
        view: "readonly",
        mount: "readonly",
        empty: "readonly",
        div: "readonly",
        section: "readonly",
        a: "readonly",
        button: "readonly",
        footer: "readonly",
        header: "readonly",
        h1: "readonly",
        input: "readonly",
        label: "readonly",
        li: "readonly",
        span: "readonly",
        strong: "readonly",
        text: "readonly",
        ul: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn", // Alterar para warning em vez de erro
      "no-redeclare": "error"
    }
  },
  {
    files: ["lib/server.js"],
    languageOptions: {
      globals: {
        // Ambiente Node.js para server.js
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        process: "readonly",
        exports: "readonly"
      }
    }
  },
  {
    files: ["lib/test.js"],
    rules: {
      "no-unused-vars": "warn", // Testes podem ter variáveis não usadas
      "no-undef": "warn" // Framework de teste pode injetar variáveis
    }
  }
];