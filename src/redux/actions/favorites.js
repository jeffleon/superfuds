export const Add = (comic) => ({
    type: "ADD",
    payload: comic
})

export const Delete = (id) => ({
    type: "DELETE",
    payload: id
})

export const Plus = (id) => ({
    type: "PLUS",
    payload: id
})

export const Minus = (id) => ({
    type: "MINUS",
    payload: id
})