import IPackage from "../../interface/package";
import actionTypes from "./actionTypes";

export const setCart = (pack: IPackage) => {
    if (pack) {
        return {
            type: actionTypes.SET_CART,
            pack
        }
    }
}

export const nusProductCart = (id: string) => {
    if (id) {
        return {
            type: actionTypes.NUS_PRODUCT_CART,
            id
        }
    }
}

export const minusProductCart = (id: string) => {
    if (id) {
        return {
            type: actionTypes.MINUS_PRODUCT_CART,
            id
        }
    }
}

export const removeProductCart = (id: string) => {
    if (id) {
        return {
            type: actionTypes.REMOVE_PRODUCT_CART,
            id
        }
    }
}