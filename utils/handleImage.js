export function handleImage(imageId) {
    if (imageId === 1) {
        return require("../assets/products/product-tenis-grande.png");
    }
    if (imageId === 2) {
        return require("../assets/products/product-tenis-mini.png");
    }
    if (imageId === 3) {
        return require("../assets/products/product-pikachu.png");
    }
    if (imageId === 4) {
        return require("../assets/products/product-games.png");
    }
    if (imageId === 5) {
        return require("../assets/products/product-notebook.png");
    }
    if (imageId === 6) {
        return require("../assets/products/product-fone.png");
    }

    console.log('dkjsf')
    return {uri: ''};
}