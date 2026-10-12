export type HeroSlide = {
    id: string;

    type: "image" | "video" | "text";

    media?: {
        src: string;
        mobileSrc?: string;
        poster?: string;
        alt?: string;

        autoplay?: boolean;
        muted?: boolean;
        loop?: boolean;
        playsInline?: boolean;
    };

    background?: {
        variant: "default" | "primary" | "dark" | "light";
    };

    overlay?: {
        enabled: boolean;
        variant?: "dark" | "light" | "primary";
        opacity?: number;
    };

    content: {
        position:
        | "top-left"
        | "top-center"
        | "top-right"
        | "center-left"
        | "center"
        | "center-right"
        | "bottom-left"
        | "bottom-center"
        | "bottom-right";

        eyebrow?: string;
        title: string;
        description?: string;

        cta?: {
            label: string;
            href: string;
        };
    };

    theme?: "light" | "dark" | "primary";

    animation?: {
        variant: "fade" | "slide" | "zoom";
    };
};

export const heroSliderConfig = {
    autoplay: true,
    interval: 6000,
    pauseOnHover: true,
    showArrows: true,
    showDots: true,
} as const;

export const heroSlides: HeroSlide[] = [
    {
        id: "business-loan",
        type: "image",

        media: {
            src: "/images/hero/business-loan.webp",
            mobileSrc: "/images/hero/business-loan-mobile.webp",
            alt: "Business loan solutions",
        },

        overlay: {
            enabled: true,
            variant: "dark",
            opacity: 0.45,
        },

        content: {
            position: "center-left",

            eyebrow: "Business Loan",

            title: "Fuel Your Business Growth",

            description:
                "Get the financial support you need to take your business forward with flexible business loan solutions.",

            cta: {
                label: "Explore Business Loan",
                href: "/loans/business-loan",
            },
        },

        theme: "light",

        animation: {
            variant: "fade",
        },
    },

    {
        id: "home-loan",
        type: "image",

        media: {
            src: "/images/hero/home-loan.webp",
            mobileSrc: "/images/hero/home-loan-mobile.webp",
            alt: "Home loan solutions",
        },

        overlay: {
            enabled: true,
            variant: "dark",
            opacity: 0.4,
        },

        content: {
            position: "bottom-left",

            eyebrow: "Home Loan",

            title: "Turn Your Dream Home Into Reality",

            description:
                "Choose a flexible home loan solution designed to help you move closer to owning your dream home.",

            cta: {
                label: "Explore Home Loan",
                href: "/loans/home-loan",
            },
        },

        theme: "light",

        animation: {
            variant: "fade",
        },
    },

    {
        id: "mortgage-loan",
        type: "image",

        media: {
            src: "/images/hero/mortgage-loan.webp",
            mobileSrc: "/images/hero/mortgage-loan-mobile.webp",
            alt: "Mortgage loan solutions",
        },

        overlay: {
            enabled: true,
            variant: "dark",
            opacity: 0.45,
        },

        content: {
            position: "center-right",

            eyebrow: "Mortgage Loan",

            title: "Unlock the Value of Your Property",

            description:
                "Access flexible mortgage financing designed around your financial requirements.",

            cta: {
                label: "Explore Mortgage Loan",
                href: "/loans/mortgage-loan",
            },
        },

        theme: "light",

        animation: {
            variant: "fade",
        },
    },

    {
        id: "personal-loan",
        type: "image",

        media: {
            src: "/images/hero/personal-loan.webp",
            mobileSrc: "/images/hero/personal-loan-mobile.webp",
            alt: "Personal loan solutions",
        },

        overlay: {
            enabled: true,
            variant: "dark",
            opacity: 0.4,
        },

        content: {
            position: "top-right",

            eyebrow: "Personal Loan",

            title: "Financial Support for Your Personal Needs",

            description:
                "Get access to flexible personal loan options designed to support the plans and priorities that matter to you.",

            cta: {
                label: "Explore Personal Loan",
                href: "/loans/personal-loan",
            },
        },

        theme: "light",

        animation: {
            variant: "fade",
        },
    },

    {
        id: "vehicle-loan",
        type: "image",

        media: {
            src: "/images/hero/vehicle-loan.webp",
            mobileSrc: "/images/hero/vehicle-loan-mobile.webp",
            alt: "Vehicle loan solutions",
        },

        overlay: {
            enabled: true,
            variant: "dark",
            opacity: 0.4,
        },

        content: {
            position: "bottom-right",

            eyebrow: "Auto Loan",

            title: "Drive Toward Your Next Goal",

            description:
                "Make your vehicle purchase easier with a flexible financing solution tailored to your needs.",

            cta: {
                label: "Explore Auto Loan",
                href: "/loans/vehicle-loan",
            },
        },

        theme: "light",

        animation: {
            variant: "fade",
        },
    },
];