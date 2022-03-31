const upperCaseLetters = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
export function randomID(){
    const twoRandomLetters = `${upperCaseLetters[randomNumber(upperCaseLetters.length)]}${upperCaseLetters[randomNumber(upperCaseLetters.length)]}`
    const fourRandomNumbers = `${randomNumber(10)}${randomNumber(10)}${randomNumber(10)}${randomNumber(10)}`
    return `${twoRandomLetters}${fourRandomNumbers}`
}
function randomNumber(limit:number){
    return Math.floor(Math.random() * limit)
}

export function generateInvoiceItems(count:number){
    const items = []
    for(let i = 0; i < count; i++){
        const item = {
            id: randomID(),
            quantity: 0,
            price: 0,
            total: 0,
            name: ""
        }
        items.push(item)
    }
    return items
}
export function formatDate(date:Date) {
    return  new Date(date).toLocaleDateString().split('/').reverse().join('-')
}
export function generateDefaultInvoice() {
    return {
        "id": randomID(),
        "paymentDue": formatDate(new Date()),
        "description": "",
        "paymentTerms": 1,
        "clientName": "",
        "clientEmail": "",
        "status": "",
        "senderAddress": {
        "street": "",
        "city": "",
        "postCode": "",
        "country": ""
        },
        "clientAddress": {
        "street": "",
        "city": "",
        "postCode": "",
        "country": ""
        },
        "items": generateInvoiceItems(1),
        "total": 0,
        "createdAt": formatDate(new Date())
}
}

export const paymentTerms = [
    { label: "Next Day", value: 1 },
    { label: "Next 7 Days", value: 7 },
    { label: "Next 30 Days", value: 30 },
]