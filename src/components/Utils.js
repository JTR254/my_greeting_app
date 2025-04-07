export function formatData(data) {
    return new Date(date).toLocaleDateString();
};

export function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`
}