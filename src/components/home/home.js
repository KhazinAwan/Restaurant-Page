function loadHome() {

    const content = document.getElementById("content");

    const brandName = document.createElement("h1");
    brandName.textContent = "Golden Hive Honey";

    const headline = document.createElement("h2");
    headline.textContent = "Nature's Purest Sweetness";

    const description = document.createElement("p");
    description.textContent =
        "Experience rich, golden honey harvested with care from healthy bee colonies. Every jar is packed with natural flavor and crafted to bring the taste of the hive straight to your table.";

    const section = document.createElement("section");

    const sectionHeading = document.createElement("h3");
    sectionHeading.textContent = "Why Choose Golden Hive?";

    const list = document.createElement("ul");

    const reasons = [
        "100% Pure Honey",
        "Responsibly Harvested",
        "No Artificial Additives"
    ];

    reasons.forEach(reason => {

        const listItem = document.createElement("li");
        listItem.textContent = reason;

        list.appendChild(listItem);

    });

    section.append(sectionHeading, list);

    const quote = document.createElement("blockquote");
    quote.textContent =
        '"Every spoonful reminds you what real honey should taste like."';

    content.append(
        brandName,
        headline,
        description,
        section,
        quote
    );

}

export default loadHome;