export const animationConfig = {
    theme: {
        // Client can change this value only.
        duration: 5000,

        // Direction of the diagonal theme reveal.
        direction: "top-right-to-bottom-left",

        easing: [0.22, 1, 0.36, 1] as const,
    },

    interaction: {
        fast: 150,
        normal: 300,
        slow: 500,
    },

    indicator: {
        theme: 320,
    },

    mobileMenu: {
        duration: 220,
        stagger: 20,
    },
} as const;