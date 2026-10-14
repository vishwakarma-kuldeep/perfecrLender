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

    showContentOnImage?: boolean;

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

const loanSlideOrder = [
    "personal-loan",
    "business-loan",
    "home-loan",
    "mortgage-loan",
    "vehicle-loan",
];

const unsortedHeroSlides: HeroSlide[] = [
    {
        id: "business-loan",
        type: "image",

        media: {
            src: "/images/webp/desk-2.webp",
            mobileSrc: "/images/webp/mobi-2.webp",
            alt: "Expert loan guidance at zero cost",
        },

        overlay: {
            enabled: false,
            variant: "dark",
            opacity: 0.45,
        },

        content: {
            position: "center-left",

            eyebrow: "Expert Loan Guidance",

            title: "Expert loan guidance at zero cost",

            description:
                "Get personalised guidance, compare options and find the right loan completely free.",

            cta: {
                label: "Get Started Today",
                href: "/contact",
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
            src: "/images/webp/desk-3.webp",
            mobileSrc: "/images/webp/mobi-3.webp",
            alt: "Explore better loan options from banks and NBFCs",
        },

        overlay: {
            enabled: false,
            variant: "dark",
            opacity: 0.4,
        },

        content: {
            position: "bottom-left",

            eyebrow: "Explore Better Options",

            title: "Still paying high interest on your loan?",

            description:
                "Explore better loan options from banks and NBFCs with guidance tailored to your needs.",

            cta: {
                label: "Explore Better Options",
                href: "/loans",
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
            src: "/images/webp/desk-4.webp",
            mobileSrc: "/images/webp/mobi-4.webp",
            alt: "A simpler way to find the right loan",
        },

        overlay: {
            enabled: false,
            variant: "dark",
            opacity: 0.45,
        },

        content: {
            position: "center-right",

            eyebrow: "Clear Information & Support",

            title: "A simpler way to get the right loan",

            description:
                "Find the right loan for you, with clear information and support at no cost.",

            cta: {
                label: "Find the Right Loan for You Now",
                href: "/contact",
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
            src: "/images/webp/desk-1.webp",
            mobileSrc: "/images/webp/mobi-1.webp",
            alt: "One place for all your loan needs",
        },

        overlay: {
            enabled: false,
            variant: "dark",
            opacity: 0.4,
        },

        content: {
            position: "top-right",

            eyebrow: "One Place for All Your Loan Needs",

            title: "One place for all your loan needs",

            description:
                "Explore personal, home, business, mortgage, and auto loan options with guidance tailored to your goals.",

            cta: {
                label: "Get Started Today",
                href: "/contact",
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
            src: "/images/webp/desk-5.webp",
            mobileSrc: "/images/webp/mobi-5.webp",
            alt: "Your loan journey just got easier",
        },

        overlay: {
            enabled: false,
            variant: "dark",
            opacity: 0.4,
        },

        content: {
            position: "bottom-right",

            eyebrow: "Start Your Loan Journey",

            title: "Your loan journey just got easier.",

            description:
                "Get the right guidance, at no cost, and take the next step with confidence.",

            cta: {
                label: "Start Your Loan Journey",
                href: "/contact",
            },
        },

        theme: "light",

        animation: {
            variant: "fade",
        },
    },
];

export const heroSlides = [...unsortedHeroSlides].sort(
    (first, second) =>
        loanSlideOrder.indexOf(first.id) - loanSlideOrder.indexOf(second.id),
);