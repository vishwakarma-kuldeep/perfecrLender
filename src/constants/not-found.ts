export const notFoundContent = {
    errorCode: "404",

    hero: {
        eyebrow: "Page Not Found",
        title: "Looks like you've taken a wrong turn.",
        description:
            "The page you're looking for isn't available right now, but your financial journey doesn't have to stop here.",
    },

    actions: {
        home: {
            label: "Back to Home",
            href: "/",
        },
        loans: {
            label: "Explore Loans",
            href: "/loans",
        },
    },

    loanOptions: {
        eyebrow: "Explore Your Options",
        title: "Find a financial solution that fits your needs.",
        description:
            "Whether you're planning a business, buying a home, or taking care of personal needs, explore our loan solutions.",
    },

    contactCta: {
        eyebrow: "Need a little direction?",
        title: "We're here to help you find the right path.",
        description:
            "Explore our loan options or get in touch with Perfect Lender to take the next step toward your financial goals.",
        button: {
            label: "Contact Us",
            href: "/contact",
        },
    },
} as const;