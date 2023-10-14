import { Redirect } from "expo-router";

import { ProductContextProvider } from "../contexts/productContext"


export default function Index() {
    return (
        <ProductContextProvider>
    <Redirect href="/home" />
    </ProductContextProvider>
    )
}