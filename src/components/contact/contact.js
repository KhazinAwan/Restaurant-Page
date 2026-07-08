function loadContact() {

    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Visit Golden Hive";

    const subHeading = document.createElement("h2");
    subHeading.textContent = "We'd Love to Hear From You";

    const description = document.createElement("p");
    description.textContent =
        "Whether you're looking for the perfect jar of honey or have questions about our products, we're always happy to help.";

    const section = document.createElement("section");

    const sectionHeading = document.createElement("h3");
    sectionHeading.textContent = "Contact Information";

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contactContainer");

    const contacts = [
        {
            title: "📍 Address",
            value: "12 Honeycomb Lane, Beeville"
        },
        {
            title: "📞 Phone",
            value: "+1 (555) 123-4567"
        },
        {
            title: "✉️ Email",
            value: "hello@goldenhive.com"
        },
        {
            title: "🕒 Hours",
            value: "Mon - Sat | 9:00 AM - 6:00 PM"
        }
    ];

    contacts.forEach(contact => {

        const contactCard = document.createElement("div");
        contactCard.classList.add("contactCard");

        const title = document.createElement("h4");
        title.textContent = contact.title;

        const value = document.createElement("p");
        value.textContent = contact.value;

        contactCard.append(title, value);

        contactContainer.appendChild(contactCard);

    });

    section.append(sectionHeading, contactContainer);

    const note = document.createElement("blockquote");
    note.textContent =
        '"We look forward to welcoming you to the Golden Hive family!"';

    content.append(
        heading,
        subHeading,
        description,
        section,
        note
    );

}

export default loadContact;