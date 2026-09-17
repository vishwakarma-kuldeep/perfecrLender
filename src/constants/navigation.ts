export type NavigationItem = {
    label: string;
    href: string;
    children?: NavigationItem[];
};

export const navigationItems: NavigationItem[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Loans",
        href: "/loans",
        children: [
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
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export const navigationCta = {
    label: "Apply for a Loan",
    href: "/contact",
};