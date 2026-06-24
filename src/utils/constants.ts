export const DEFAULT_VALUES = {
  empresa: "High Point Group",
  unidades: 4,
  colaboradoresPorUnidade: 25,
  totalColaboradores: 100,
  salarioResponsavelRH_MZN: 108927,
  salarioAnalista_MZN: 25000,
  tempoFechamentoAtual: 10,
  tempoFechamentoFactorial: 2.5,
  horasPorDia: 8,
  numPessoasRH: 2,
  horasRetrabalho: 70,
  custoErrosUnidade_EUR: 350,
  // Pricing monthly (USD PEPM — displayed via formatUSD)
  custoColaboradorMes_EUR: 10,
  custoPrimaveraMes_EUR: 0,
  implantacaoFactorial_EUR: 2500,
  // Conversions
  conversaoEUR_MZN: 68.75,
  percentualEncargos: 0.30,
  conversaoMZN_EUR: 0.01455,
};

export const SCENARIOS = {
  conservador: {
    nome: "Conservador",
    reducaoTempo: 0.6,
    tempoFactorial: 4,
    reducaoRetrabalho: 0.7,
    reducaoErros: 0.5,
  },
  realista: {
    nome: "Realista",
    reducaoTempo: 0.75,
    tempoFactorial: 2.5,
    reducaoRetrabalho: 0.85,
    reducaoErros: 0.6,
    recomendado: true,
  },
  otimista: {
    nome: "Otimista",
    reducaoTempo: 0.8,
    tempoFactorial: 2,
    reducaoRetrabalho: 0.95,
    reducaoErros: 0.7,
  },
} as const;

export type ScenarioKey = keyof typeof SCENARIOS;
