import { getShoppingCart } from "../utilities/fakedb"

const cartLoaderData = async () => {
    const storedCart = getShoppingCart()
    const ids = Object.keys(storedCart)
    const loadedProducts = await fetch('https://ema-jhon-server-reza107-hub.vercel.app/inventory', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(ids)
    })
    const products = await loadedProducts.json()


    const savedCart = []
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd._id === id)
        if (addedProduct) {
            const quantity = storedCart[id]
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }
    return savedCart
}

export default cartLoaderData