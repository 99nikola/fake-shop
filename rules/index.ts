import { isNaturalNumber } from "../utils"

export const requiredRule = {
    required: "Required"
}

export const perPageRule = {
    ...requiredRule,
    validate: isNaturalNumber
}