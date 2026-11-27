const LIMITE_URGENTE = 7;
const LIMITE_A_VENCER = 30;

export function situacao(dias) {
  // se dias for menor que 0, devolve "vencida"
  if (dias < 0) {
    return "vencida";
  }

  // senão, se dias for menor ou igual ao limite urgente, devolve "urgente"
  if (dias <= LIMITE_URGENTE) {
    return "urgente";
  }

  // senão, se dias for menor ou igual ao limite a vencer, devolve "a vencer"
 if (dias <= LIMITE_A_VENCER) {
     return "a vencer";
    }

  // senão, devolve "em dia"
    return "em dia";
  }


