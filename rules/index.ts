import { isNaturalNumber } from "../utils";

export const requiredRule = {
    required: "This field is required"
}

export const perPageRule = {
    ...requiredRule,
    validate: isNaturalNumber
}