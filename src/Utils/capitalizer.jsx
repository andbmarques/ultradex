export default function capitalizer(input) {
    return `${input[0].toUpperCase()}${input.slice(1).toLowerCase()}`
}