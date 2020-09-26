export const requiredField = (value:string) => {
    return (value ? undefined : "Field is required")
}

export const maxLengthCreator = (maxLength:number) => (value:string) => {
    if (value && value.length > maxLength) return "Max length is 30 symbols"
    else {return undefined}
}
