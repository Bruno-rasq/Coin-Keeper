const formatDateValue = (value: number) => {
  return value >= 10 ? value : `0${value}`;
}

const createDate = () : string => {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const hour = now.getHours();
  const minute = now.getMinutes();

  return `${formatDateValue(day)}/${formatDateValue(month)}/${year} - ${formatDateValue(hour)}:${formatDateValue(minute)}`
}

export const Utils = {
  createData: (value: string, typeAction: string, nota: string) => {
    const data = {
      value,
      date: createDate(),
      typeAction,
      nota
    }

    return data
  },

  formatCurrency: (value: number) => {
    return value.toLocaleString(
      'pt-br', {
        style: 'currency',
        currency: 'BRL'
      }
    )
  }
}