import {
    Building2,
    CarFront,
    CheckCircle2,
    FileText,
    House,
    Landmark,
    ShieldCheck,
    UserRound,
    Users,
    WalletCards,
} from "lucide-react";

export const loansContent = {
    hero: {
        eyebrow: "Loan Solutions",
        title: "The right lending solution for your next step.",
        description:
            "Explore loan options designed to support different personal, property, vehicle, and business financing needs.",
        primaryAction: {
            label: "Explore Loan Options",
            href: "#loan-products",
        },
        secondaryAction: {
            label: "Talk to Us",
            href: "/contact",
        },
    },

    intro: {
        eyebrow: "Explore Your Options",
        title: "Financing solutions for different financial needs.",
        description:
            "From business requirements and home ownership to personal expenses, property-backed financing, and vehicles, explore a range of lending solutions designed for different purposes.",
    },

    products: [
        {
            id: "business-loan",
            title: "Business Loan",
            eyebrow: "For Your Business",
            href: "/loans/business-loan",
            shortDescription:
                "Financial support to help you manage business requirements, pursue opportunities, and keep your plans moving forward.",

            description:
                "A business loan can provide financial support for businesses looking to manage working capital requirements, expand operations, invest in business needs, or pursue new opportunities.",

            longDescription:
                "Running and growing a business often requires access to timely capital. A business loan can help eligible businesses address different financial requirements while allowing them to focus on their operations and growth plans.",

            icon: Building2,

            suitableFor: [
                "Business expansion",
                "Working capital requirements",
                "Business-related expenses",
                "Equipment or operational needs",
                "New business opportunities",
            ],

            benefits: [
                "Additional financial support for business requirements",
                "Useful for planned business expenses",
                "Can support expansion and growth-related needs",
                "Structured lending process",
                "Customer-focused assistance throughout the process",
            ],

            documents: [
                "Identity and address proof",
                "Business-related documents",
                "Banking and financial documents",
                "Income-related documents",
                "Additional documents as applicable",
            ],

            eligibility: [
                "Applicant should meet the applicable age requirements",
                "Business and income-related information may be required",
                "Eligibility depends on the applicant profile and lending criteria",
                "Required documentation must be provided",
            ],

            useCases: [
                "Expanding an existing business",
                "Managing working capital",
                "Purchasing business-related assets",
                "Meeting operational requirements",
            ],

            faqs: [
                {
                    question: "What can a business loan be used for?",
                    answer:
                        "A business loan may be used for eligible business requirements such as working capital, expansion, operational expenses, assets, and other business-related needs.",
                },
                {
                    question: "Who can apply for a business loan?",
                    answer:
                        "Business owners and eligible applicants may apply, subject to applicable lending criteria and documentation requirements.",
                },
                {
                    question: "What documents are required?",
                    answer:
                        "Documents may include identity and address proof, business documents, banking information, and financial or income-related documents.",
                },
            ],
        },

        {
            id: "home-loan",
            title: "Home Loan",
            eyebrow: "For Your Home",
            href: "/loans/home-loan",
            shortDescription:
                "Turn your plans for owning a home into a structured financing journey.",

            description:
                "A home loan can help eligible applicants finance the purchase or construction of a home while managing the cost through a structured repayment plan.",

            longDescription:
                "Buying or building a home is an important financial decision. A home loan can provide financial support for eligible housing requirements and help applicants move toward home ownership through structured financing.",

            icon: House,

            suitableFor: [
                "Purchasing a home",
                "Constructing a house",
                "Residential property requirements",
                "Planned home ownership",
            ],

            benefits: [
                "Financial support for home ownership",
                "Structured repayment approach",
                "Suitable for eligible residential property requirements",
                "Professional assistance through the lending journey",
                "Clear communication during the process",
            ],

            documents: [
                "Identity and address proof",
                "Income-related documents",
                "Bank statements",
                "Property-related documents",
                "Additional documents as applicable",
            ],

            eligibility: [
                "Applicant should meet applicable age requirements",
                "Income and financial information may be evaluated",
                "Property-related documentation may be required",
                "Final eligibility depends on applicable lending criteria",
            ],

            useCases: [
                "Buying a residential property",
                "Constructing a house",
                "Financing an eligible home purchase",
            ],

            faqs: [
                {
                    question: "What is a home loan?",
                    answer:
                        "A home loan is financing provided for eligible housing-related requirements, such as purchasing or constructing a residential property.",
                },
                {
                    question: "Can I discuss my home loan requirement before applying?",
                    answer:
                        "Yes. You can contact the Perfect Lender team to discuss your requirement and understand the applicable lending process.",
                },
                {
                    question: "What property documents may be required?",
                    answer:
                        "Property-related documentation can vary depending on the transaction and property. The applicable documents will be communicated during the process.",
                },
            ],
        },

        {
            id: "mortgage-loan",
            title: "Mortgage Loan",
            eyebrow: "Against Property",
            href: "/loans/mortgage-loan",
            shortDescription:
                "Unlock the financial potential of your property with mortgage-based financing.",

            description:
                "A mortgage loan can provide financial support by using eligible property as security, subject to applicable lending terms and requirements.",

            longDescription:
                "Property can represent a significant financial asset. Mortgage-based financing can allow eligible property owners to access funds for suitable financial requirements while the property serves as security for the lending arrangement.",

            icon: Landmark,

            suitableFor: [
                "Property-backed financial requirements",
                "Business-related requirements",
                "Large planned expenses",
                "Other eligible financial needs",
            ],

            benefits: [
                "Property-backed financing option",
                "Can support larger planned financial requirements",
                "Useful for eligible personal or business needs",
                "Structured lending process",
                "Professional support during the documentation process",
            ],

            documents: [
                "Identity and address proof",
                "Property ownership documents",
                "Income-related documents",
                "Bank statements",
                "Property-related records",
                "Additional documents as applicable",
            ],

            eligibility: [
                "Applicant should meet applicable lending criteria",
                "Eligible property may be required as security",
                "Income and repayment capacity may be evaluated",
                "Property and ownership documents may be verified",
            ],

            useCases: [
                "Business financial requirements",
                "Property-backed funding needs",
                "Planned large expenses",
                "Eligible personal financial requirements",
            ],

            faqs: [
                {
                    question: "What is a mortgage loan?",
                    answer:
                        "A mortgage loan is a form of secured financing where eligible property may be used as security for the loan.",
                },
                {
                    question: "Can a mortgage loan be used for business requirements?",
                    answer:
                        "Depending on the applicable lending terms, mortgage-based financing may support eligible business-related requirements.",
                },
                {
                    question: "Is property documentation required?",
                    answer:
                        "Yes. Property ownership and related documents may be required as part of the assessment and documentation process.",
                },
            ],
        },

        {
            id: "personal-loan",
            title: "Personal Loan",
            eyebrow: "For Your Personal Needs",
            href: "/loans/personal-loan",
            shortDescription:
                "Financial support for important personal requirements and planned expenses.",

            description:
                "A personal loan can provide additional financial flexibility when you need support for eligible personal requirements, planned expenses, or important life events.",

            longDescription:
                "Unexpected expenses and important personal plans can sometimes require additional financial support. A personal loan can provide eligible applicants with a structured way to meet suitable personal financial requirements.",

            icon: UserRound,

            suitableFor: [
                "Personal expenses",
                "Planned purchases",
                "Important life events",
                "Unexpected financial requirements",
                "Other eligible personal needs",
            ],

            benefits: [
                "Flexible use for eligible personal requirements",
                "Useful for planned and unexpected expenses",
                "Structured repayment approach",
                "Straightforward application journey",
                "Customer-focused assistance",
            ],

            documents: [
                "Identity and address proof",
                "Income proof",
                "Bank statements",
                "Employment or business-related documents",
                "Additional documents as applicable",
            ],

            eligibility: [
                "Applicant should meet applicable age requirements",
                "Income and financial information may be evaluated",
                "Repayment capacity may be considered",
                "Required documentation must be provided",
            ],

            useCases: [
                "Managing planned personal expenses",
                "Handling unexpected financial requirements",
                "Funding important personal needs",
                "Supporting eligible life-event expenses",
                "Exploring consolidation of eligible loan and credit card dues",
            ],

            faqs: [
                {
                    question: "What can a personal loan be used for?",
                    answer:
                        "A personal loan may be used for eligible personal requirements, planned expenses, important purchases, or other suitable financial needs.",
                },
                {
                    question: "Do I need to provide income documents?",
                    answer:
                        "Income and financial documents may be required as part of the eligibility and lending assessment.",
                },
                {
                    question: "Can I consolidate loans and credit card dues?",
                    answer:
                        "You may be able to combine eligible loan balances and credit card dues into one loan without closing your credit cards. This depends on your profile, lender approval, and applicable terms.",
                },
                {
                    question: "Can I contact the team before applying?",
                    answer:
                        "Yes. You can contact Perfect Lender to discuss your financial requirement and understand the available options.",
                },
            ],
        },

        {
            id: "vehicle-loan",
            title: "Auto Loan",

            href: "/loans/vehicle-loan",
            eyebrow: "For Your Vehicle",
            shortDescription:
                "Move toward your next vehicle with financing built around your requirements.",

            description:
                "Vehicle financing can help eligible applicants manage the cost of purchasing a vehicle through a structured lending arrangement.",

            longDescription:
                "Whether a vehicle is needed for personal mobility or an eligible business requirement, vehicle financing can help spread the purchase cost through a structured repayment arrangement.",

            icon: CarFront,

            suitableFor: [
                "New vehicle purchase",
                "Eligible vehicle financing",
                "Personal transportation needs",
                "Business transportation requirements",
            ],

            benefits: [
                "Financial support for eligible vehicle purchases",
                "Structured repayment approach",
                "Suitable for different transportation requirements",
                "Professional assistance during the process",
                "Clear documentation guidance",
            ],

            documents: [
                "Identity and address proof",
                "Income-related documents",
                "Bank statements",
                "Vehicle-related documents",
                "Additional documents as applicable",
            ],

            eligibility: [
                "Applicant should meet applicable lending requirements",
                "Income and repayment capacity may be evaluated",
                "Vehicle-related documentation may be required",
                "Final eligibility depends on applicable lending criteria",
            ],

            useCases: [
                "Purchasing a personal vehicle",
                "Supporting business transportation needs",
                "Financing an eligible vehicle purchase",
            ],

            faqs: [
                {
                    question: "What can an auto loan be used for?",
                    answer:
                        "An auto loan can provide financing for eligible vehicle purchases, subject to applicable lending terms and criteria.",
                },
                {
                    question: "What documents may be required?",
                    answer:
                        "Documentation may include identity and address proof, income information, banking records, and vehicle-related documents.",
                },
                {
                    question: "Can I discuss my vehicle requirement before applying?",
                    answer:
                        "Yes. Contact the Perfect Lender team to discuss your requirement and understand the applicable process.",
                },
            ],
        },
    ],

    highlights: {
        eyebrow: "Why Explore Our Loan Options",
        title: "Financing solutions built around different needs.",
        description:
            "Every financial requirement is different. Explore a range of lending options and find a solution aligned with the purpose of your requirement.",

        items: [
            {
                title: "Multiple Loan Options",
                description:
                    "Explore solutions across personal, property, vehicle, and business financing needs.",
                icon: WalletCards,
            },
            {
                title: "Customer-Focused Service",
                description:
                    "Get support throughout the lending journey with a focus on clear communication.",
                icon: Users,
            },
            {
                title: "Clear Process",
                description:
                    "Understand the major steps involved in exploring and progressing with a lending solution.",
                icon: FileText,
            },
            {
                title: "Professional Support",
                description:
                    "Get assistance with your lending requirement and applicable documentation.",
                icon: ShieldCheck,
            },
        ],
    },

    process: {
        eyebrow: "How It Works",
        title: "A simple path toward your loan.",
        description:
            "From understanding your requirement to moving forward with the applicable lending process, we aim to keep the journey clear and straightforward.",

        steps: [
            {
                number: "01",
                title: "Tell Us Your Requirement",
                description:
                    "Share what you are looking to finance and help us understand your financial requirement.",
            },
            {
                number: "02",
                title: "Explore Your Options",
                description:
                    "Review the loan category and financing option that aligns with the nature of your requirement.",
            },
            {
                number: "03",
                title: "Submit Your Documents",
                description:
                    "Provide the applicable documents required for the lending assessment and process.",
            },
            {
                number: "04",
                title: "Move Forward",
                description:
                    "Once the applicable assessment and process are completed, proceed with your financial plans.",
            },
        ],
    },

    eligibility: {
        eyebrow: "Eligibility",
        title: "What can influence loan eligibility?",
        description:
            "Eligibility can vary depending on the loan type, applicant profile, financial circumstances, and applicable lending criteria.",

        factors: [
            {
                title: "Applicant Profile",
                description:
                    "Basic applicant information and applicable eligibility requirements may be considered.",
                icon: Users,
            },
            {
                title: "Income & Repayment Capacity",
                description:
                    "Income and financial information may be evaluated as part of the lending assessment.",
                icon: WalletCards,
            },
            {
                title: "Documentation",
                description:
                    "Relevant identity, income, banking, property, or asset documents may be required depending on the loan.",
                icon: FileText,
            },
            {
                title: "Loan Purpose",
                description:
                    "The purpose and type of financing can influence the applicable lending requirements.",
                icon: CheckCircle2,
            },
        ],
    },

    documents: {
        eyebrow: "Documentation",
        title: "Keep your documents ready.",
        description:
            "Documentation requirements can vary by loan type and applicant profile. The applicable list will be communicated during the lending process.",

        commonDocuments: [
            "Identity proof",
            "Address proof",
            "Income-related documents",
            "Bank statements",
            "Employment or business documents where applicable",
            "Property or vehicle documents where applicable",
            "Additional documents as required",
        ],
    },

    faq: {
        eyebrow: "Frequently Asked Questions",
        title: "Questions about our loans?",
        description:
            "Here are some common questions to help you understand the lending journey.",

        items: [
            {
                question: "Which loan options are available?",
                answer:
                    "Perfect Lender connects applicants with banks and NBFCs for Personal Loans, Business Loans, Home Loans, Mortgage Loans, and Auto Loans.",
            },
            {
                question: "How do I choose the right loan?",
                answer:
                    "The suitable loan depends on your purpose, financial requirement, applicant profile, and applicable lending criteria. You can contact the Perfect Lender team to discuss your requirement.",
            },
            {
                question: "What documents will I need?",
                answer:
                    "Requirements vary by loan type and applicant profile. Common documents can include identity and address proof, income information, bank statements, and loan-specific documents.",
            },
            {
                question: "How does the lending process work?",
                answer:
                    "The process generally involves understanding your requirement, reviewing the applicable loan option, providing required documents, completing the applicable assessment, and proceeding according to the lending terms.",
            },
            {
                question: "Can I discuss my requirement before applying?",
                answer:
                    "Yes. You can contact Perfect Lender to discuss your requirement and understand the available lending options and applicable process.",
            },
        ],
    },

    cta: {
        eyebrow: "Ready to Take the Next Step?",
        title: "Let's talk about your lending requirement.",
        description:
            "Tell us what you are looking for and explore the lending solution that fits your requirement.",

        primaryAction: {
            label: "Contact Us",
            href: "/contact",
        },

        secondaryAction: {
            label: "Back to Home",
            href: "/",
        },
    },
} as const;