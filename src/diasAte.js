export function diasAte(vencimento, hoje) {
 // 1. transformar os dois textos em datas
    const dataVencimento = new Date(vencimento);
    const dataHoje = new Date(hoje);

  // 2. subtrair uma da outra (o resultado vem em milissegundos)
    const diferencaEmMilissegundos = dataVencimento - dataHoje;

 // 3. converter para dias
    const diferencaEmDias = diferencaEmMilissegundos / ( 1000 * 60 * 60* 24);

 // 4. arredondar
    return Math.round(diferencaEmDias);

}