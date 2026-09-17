import {
    BadgeCheck,
    HandCoins,
    ShieldCheck,
    Sparkles,
    Users,
    Zap,
} from "lucide-react";

export const aboutContent = {
    hero: {
        eyebrow: "About Perfect Lender",
        title: "A smarter way to move forward financially.",
        description:
            "We are committed to making lending simpler, more transparent, and more accessible for our customers.",
    },

    story: {
        eyebrow: "Who We Are",
        title: "Built around people, powered by better lending.",
        description:
            "Perfect Lender is focused on delivering lending solutions designed around the needs of individuals and businesses.",
        supportingText:
            "Our approach combines customer-focused service with a modern, streamlined lending experience.",
    },

    mission: {
        eyebrow: "Our Mission",
        title: "Making the lending journey simpler.",
        description:
            "Our mission is to make access to lending straightforward through transparent processes, responsive service, and solutions built around customer needs.",
    },

    vision: {
        eyebrow: "Our Vision",
        title: "A more accessible financial future.",
        description:
            "We aim to build a lending experience where customers can make informed financial decisions with greater confidence and clarity.",
    },

    values: {
        eyebrow: "What We Stand For",
        title: "Principles that guide every interaction.",
        description:
            "The way we work is shaped by a simple set of principles focused on customers, trust, and long-term relationships.",

        items: [
            {
                title: "Customer First",
                description:
                    "We keep customer needs at the centre of the lending experience.",
                icon: Users,
            },
            {
                title: "Transparency",
                description:
                    "We believe clear communication creates stronger and more trusted relationships.",
                icon: ShieldCheck,
            },
            {
                title: "Reliability",
                description:
                    "We strive to provide dependable service throughout the lending journey.",
                icon: BadgeCheck,
            },
            {
                title: "Innovation",
                description:
                    "We continuously look for better ways to simplify and improve the lending experience.",
                icon: Sparkles,
            },
        ],
    },

    approach: {
        eyebrow: "Our Approach",
        title: "Simple thinking. Better experiences.",
        items: [
            {
                number: "01",
                title: "Understand",
                description:
                    "We focus on understanding the financial needs behind every lending requirement.",
                icon: Users,
            },
            {
                number: "02",
                title: "Simplify",
                description:
                    "We work to keep the lending journey clear and straightforward.",
                icon: Zap,
            },
            {
                number: "03",
                title: "Support",
                description:
                    "We stay focused on providing customers with responsive and helpful service.",
                icon: HandCoins,
            },
            {
                number: "04",
                title: "Build Trust",
                description:
                    "We believe lasting relationships are built through transparency and consistency.",
                icon: ShieldCheck,
            },
        ],
    },

    trust: {
        eyebrow: "Why Customers Trust Us",
        title: "More than lending. A relationship built on trust.",
        description:
            "We focus on delivering a professional lending experience backed by clear communication and customer-focused service.",

        points: [
            "Customer-focused lending experience",
            "Clear and transparent communication",
            "Solutions designed around individual requirements",
            "Professional and responsive service",
        ],
    },

    cta: {
        eyebrow: "Ready to Get Started?",
        title: "Let's find the right lending solution for you.",
        description:
            "Have a lending requirement? Get in touch with our team and take the next step.",
        primaryAction: {
            label: "Contact Us",
            href: "/contact",
        },
        secondaryAction: {
            label: "Explore Loans",
            href: "/loans",
        },
    },
} as const;