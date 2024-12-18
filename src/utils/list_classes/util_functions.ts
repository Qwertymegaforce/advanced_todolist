export function addZeroAtTheStartIfNeeded(integer: number): string {
    if (integer > 9) return `${integer}`
    else return `0${integer}`
}