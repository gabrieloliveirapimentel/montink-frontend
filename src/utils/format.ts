export function formatCurrency(value: number) {
    const formattedData = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value)

    return formattedData;
}

export function formatCep(cep: string) {
    const formattedData = cep.replace(/(\d{5})(\d{3})/, "$1-$2");
    return formattedData;
}
