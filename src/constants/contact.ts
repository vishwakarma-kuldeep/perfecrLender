
export const contactContent = {
    hero: {
        eyebrow: "Get Started",
        title: "Let's Find the Right Loan for You",
        description:
            "Take the next step toward your financial goals with a loan solution designed around your needs.",
    },

    form: {
        eyebrow: "Loan Application",
        title: "Tell Us What You Need",
        description:
            "Share a few details with us and our team will help you explore the right financial solution.",

        fields: {
            name: {
                label: "Full Name",
                placeholder: "Enter your full name",
            },
            email: {
                label: "Email Address",
                placeholder: "Enter your email address",
            },
            phone: {
                label: "Phone Number",
                placeholder: "Enter your phone number",
            },
            loanType: {
                label: "Loan Type",
                placeholder: "Select loan type",
                options: [
                    "Business Loan",
                    "Home Loan",
                    "Mortgage Loan",
                    "Personal Loan",
                    "Vehicle Loan",
                ],
            },
            loanAmount: {
                label: "Loan Amount",
                placeholder: "Enter required loan amount",
            },
            message: {
                label: "Message",
                placeholder: "Tell us a little about your requirement",
            },
        },

        submitLabel: "Submit Application",
    },

    contactDetails: {
        eyebrow: "Contact Us",
        title: "We're Here to Help",
        description:
            "Have questions about our loan options or the application process? Get in touch with our team.",

        address: {
            label: "Office Address",
            value:
                "205-206, BASANT HOUSE, Nr Navrangpura Bus Stand, Navrangpura, Landmark: Navrangpura Jain Derasar, Ahmedabad, Gujarat, 380007",
        },

        phone: {
            label: "Mobile",
            value: "63547 17440",
            href: "tel:+916354717440",
        },

        email: {
            label: "Email",
            value: "Contact@perfectlender.in",
            href: "mailto:Contact@perfectlender.in",
        },
    },

    map: {
        eyebrow: "Find Us",
        title: "Visit Our Office",
        description:
            "Find our office in Navrangpura, Ahmedabad using the map below.",

        embedUrl:
            "https://www.google.com/maps?q=205-206%20Basant%20House%20Navrangpura%20Ahmedabad%20Gujarat%20380007&output=embed",

        mapUrl:
            "https://www.google.com/maps/search/?api=1&query=205-206%20Basant%20House%20Navrangpura%20Ahmedabad%20Gujarat%20380007",

        mapButtonLabel: "Get Directions",
    },
} as const;

