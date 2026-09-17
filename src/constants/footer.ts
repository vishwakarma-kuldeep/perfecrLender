export type FooterLink = {
    label: string;
    href: string;
};

export type FooterLinkGroup = {
    title: string;
    links: FooterLink[];
};

export type FooterSocialLink = {
    label: string;
    href: string;
};

export const footerContent = {
    brand: {
        logo: "/images/logo3.png",
        logoAlt: "Perfect Lender",
        description:
            "Your trusted partner for flexible and reliable financial solutions.",
    },

    contact: {
        address:
            "205-206, BASANT HOUSE, Nr Navrangpura Bus Stand, Navrangpura, Landmark: Navrangpura Jain Derasar, Ahmedabad, Gujarat, 380007",
        phone: "63547 17440",
        phoneHref: "tel:+916354717440",
        email: "Contact@perfectlender.in",
        emailHref: "mailto:Contact@perfectlender.in",
    },

    socialLinks: [
        {
            label: "Instagram",
            href: "https://instagram.com/perfectlender01",
        },
    ] satisfies FooterSocialLink[],

    linkGroups: [
        {
            title: "Quick Links",
            links: [
                {
                    label: "Home",
                    href: "/",
                },
                {
                    label: "About",
                    href: "/about",
                },
                {
                    label: "Loans",
                    href: "/loans",
                },
                {
                    label: "Contact",
                    href: "/contact",
                },
            ],
        },

        {
            title: "Loan Products",
            links: [
                {
                    label: "Business Loan",
                    href: "/loans/business-loan",
                },
                {
                    label: "Home Loan",
                    href: "/loans/home-loan",
                },
                {
                    label: "Mortgage Loan",
                    href: "/loans/mortgage-loan",
                },
                {
                    label: "Personal Loan",
                    href: "/loans/personal-loan",
                },
                {
                    label: "Vehicle Loan",
                    href: "/loans/vehicle-loan",
                },
            ],
        },
    ] satisfies FooterLinkGroup[],

    legalLinks: [
        {
            label: "Privacy Policy",
            href: "/privacy",
        },
        {
            label: "Terms & Conditions",
            href: "/terms",
        },
    ] satisfies FooterLink[],

    copyright: "© 2026 Perfect Lender. All rights reserved.",
} as const;