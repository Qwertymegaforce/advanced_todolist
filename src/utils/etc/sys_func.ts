export function getLSKeyFromDateObj(date_obj: Date): string {
    return `${date_obj.getDate()}/${date_obj.getMonth()}/${date_obj.getFullYear()}`
}