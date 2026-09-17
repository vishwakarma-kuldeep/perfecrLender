// export const homeContent = {
//     hero: {
//         eyebrow: "Perfect Lender",

//         title: "Your Trusted Partner for Financial Solutions",

//         description:
//             "Perfect Lender helps you achieve your dreams with flexible loan options, designed for your success.",

//         primaryCta: {
//             label: "Apply for a Loan Today",
//             href: "/contact",
//         },
//     },

//     loanOfferings: {
//         eyebrow: "Our Loan Offerings",

//         items: [
//             {
//                 title: "Business Loan",
//                 description:
//                     "Fuel your business growth with tailored financial support.",
//                 href: "/loans/business",
//             },
//             {
//                 title: "Home Loan",
//                 description:
//                     "Realize your dream of owning a home with our easy home loans.",
//                 href: "/loans/home",
//             },
//             {
//                 title: "Mortgage Loan",
//                 description:
//                     "Unlock the value of your property with our competitive mortgage options.",
//                 href: "/loans/mortgage",
//             },
//             {
//                 title: "Personal Loan",
//                 description:
//                     "Meet your personal financial needs with quick and flexible loans.",
//                 href: "/loans/personal",
//             },
//             {
//                 title: "Vehicle Loan",
//                 description:
//                     "Drive home your dream car with our affordable vehicle loans.",
//                 href: "/loans/vehicle",
//             },
//         ],
//     },

//     whyChooseUs: {
//         eyebrow: "Why Choose Perfect Lender?",

//         items: [
//             {
//                 title: "Fast Approvals",
//                 description:
//                     "Our streamlined process ensures quick loan approvals and disbursals, so you don't have to wait.",
//             },
//             {
//                 title: "Competitive Rates",
//                 description:
//                     "Benefit from attractive interest rates and transparent terms, designed to be favorable for you.",
//             },
//             {
//                 title: "Flexible Options",
//                 description:
//                     "We offer a range of customizable loan products to perfectly match your financial requirements.",
//             },
//             {
//                 title: "Dedicated Support",
//                 description:
//                     "Our experienced team provides personalized assistance every step of the way, ensuring a smooth experience.",
//             },
//         ],
//     },
// } as const;


export const homeContent = {
    hero: {
        eyebrow: "Perfect Lender",

        title: "Your Trusted Partner for Financial Solutions",

        description:
            "Perfect Lender helps you achieve your dreams with flexible loan options, designed for your success.",

        primaryCta: {
            label: "Apply for a Loan Today",
            href: "/contact",
        },
    },

    loanOfferings: {
        eyebrow: "Our Loan Offerings",

        items: [
            {
                id: "business-loan",
                title: "Business Loan",
                description:
                    "Fuel your business growth with tailored financial support.",
                href: "/loans/business",
                icon: "business",
            },
            {
                id: "home-loan",
                title: "Home Loan",
                description:
                    "Realize your dream of owning a home with our easy home loans.",
                href: "/loans/home",
                icon: "home",
            },
            {
                id: "mortgage-loan",
                title: "Mortgage Loan",
                description:
                    "Unlock the value of your property with our competitive mortgage options.",
                href: "/loans/mortgage",
                icon: "mortgage",
            },
            {
                id: "personal-loan",
                title: "Personal Loan",
                description:
                    "Meet your personal financial needs with quick and flexible loans.",
                href: "/loans/personal",
                icon: "personal",
            },
            {
                id: "vehicle-loan",
                title: "Vehicle Loan",
                description:
                    "Drive home your dream car with our affordable vehicle loans.",
                href: "/loans/vehicle",
                icon: "vehicle",
            },
        ],
    },

    whyChooseUs: {
        eyebrow: "Why Choose Perfect Lender?",

        items: [
            {
                id: "fast-approvals",
                title: "Fast Approvals",
                description:
                    "Our streamlined process ensures quick loan approvals and disbursals, so you don't have to wait.",
            },
            {
                id: "competitive-rates",
                title: "Competitive Rates",
                description:
                    "Benefit from attractive interest rates and transparent terms, designed to be favorable for you.",
            },
            {
                id: "flexible-options",
                title: "Flexible Options",
                description:
                    "We offer a range of customizable loan products to perfectly match your financial requirements.",
            },
            {
                id: "dedicated-support",
                title: "Dedicated Support",
                description:
                    "Our experienced team provides personalized assistance every step of the way, ensuring a smooth experience.",
            },
        ],
    },

    cta: {
        eyebrow: "Ready to Get Started?",

        title: "Find the Right Financial Solution for Your Needs",

        description:
            "Take the next step toward your financial goals with Perfect Lender.",

        button: {
            label: "Apply for a Loan",
            href: "/contact",
        },
    },
} as const;
