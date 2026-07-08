function loadMenu() {

    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Our Honey Collection";

    const subHeading = document.createElement("h2");
    subHeading.textContent = "Crafted by Nature, Bottled with Care";

    const description = document.createElement("p");
    description.textContent =
        "Discover our selection of premium honey, each harvested with care to preserve its natural taste and quality.";

    const section = document.createElement("section");

    const sectionHeading = document.createElement("h3");
    sectionHeading.textContent = "Available Products";

    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");

    const products = [
        {
            name: "Wildflower Honey",
            description: "Rich floral flavor",
            price: "$12"
        },
        {
            name: "Acacia Honey",
            description: "Light and delicate sweetness",
            price: "$15"
        },
        {
            name: "Forest Honey",
            description: "Bold, earthy taste",
            price: "$18"
        },
        {
            name: "Comb Honey",
            description: "Fresh honey served in natural honeycomb",
            price: "$20"
        }
    ];

    products.forEach(product => {

        const productCard = document.createElement("div");
        productCard.classList.add("productCard");

        const productInfo = document.createElement("div");
        productInfo.classList.add("productInfo");

        const productName = document.createElement("h4");
        productName.textContent = product.name;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        productInfo.append(productName, productDescription);

        const price = document.createElement("p");
        price.classList.add("price");
        price.textContent = product.price;

        productCard.append(productInfo, price);

        productContainer.appendChild(productCard);

    });

    section.append(sectionHeading, productContainer);

    const note = document.createElement("blockquote");
    note.textContent =
        '"Every jar is harvested in small batches to ensure exceptional quality."';

    content.append(
        heading,
        subHeading,
        description,
        section,
        note
    );

}

export default loadMenu;