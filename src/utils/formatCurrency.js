export const formatCurrency = (number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'MYR' }).format(number)
} 