export type WhatsAppMessage = {
    id: string;
    label: string;
    message: string;
};

export const whatsappContent = {
    phoneNumber: "916354717440",

    button: {
        label: "Chat with us",
        ariaLabel: "Chat with Perfect Lender on WhatsApp",
    },

    popup: {
        title: "Chat with us",
        description: "How can we help you today?",
    },

    messages: [
        {
            id: "general",
            label: "General Enquiry",
            message:
                "Hello Perfect Lender, I would like to know more about your loan options.",
        },
        {
            id: "personal-loan",
            label: "Personal Loan",
            message:
                "Hello Perfect Lender, I am interested in a Personal Loan. Please share the available options and eligibility details.",
        },
        {
            id: "business-loan",
            label: "Business Loan",
            message:
                "Hello Perfect Lender, I am interested in a Business Loan. Please share the available options and eligibility details.",
        },
        {
            id: "home-loan",
            label: "Home Loan",
            message:
                "Hello Perfect Lender, I am interested in a Home Loan. Please share the available options and eligibility details.",
        },
        {
            id: "mortgage-loan",
            label: "Mortgage Loan",
            message:
                "Hello Perfect Lender, I am interested in a Mortgage Loan. Please share the available options and eligibility details.",
        },
        {
            id: "vehicle-loan",
            label: "Auto Loan",
            message:
                "Hello Perfect Lender, I am interested in an Auto Loan. Please share the available options and eligibility details.",
        },
        {
            id: "emi",
            label: "EMI Enquiry",
            message:
                "Hello Perfect Lender, I have used the EMI Calculator and would like to discuss my loan requirement.",
        },
    ] satisfies WhatsAppMessage[],
} as const;