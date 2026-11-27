export function situacao(dias) {
  // se dias for menor que 0, devolve "vencida"
  if (dias < 0) {
    return "vencida";
  }

  // senão, se dias for menor ou igual ao limite urgente, devolve "urgente"
  if (dias <= 7) {
    return "urgente";
  }

  // senão, se dias for menor ou igual ao limite a vencer, devolve "a vencer"
 if (dias <= 30) {
     return "a vencer";
    }

  // senão, devolve "em dia"
    return "em dia";
  }


