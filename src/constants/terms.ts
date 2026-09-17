export const termsContent = {
    hero: {
        eyebrow: "Terms & Conditions",
        title: "Terms that guide your use of our website.",
        description:
            "These Terms & Conditions explain the general terms applicable to your use of the Perfect Lender website and the information and services made available through it.",
        lastUpdated: "Last Updated: September 2026",
    },

    overview: {
        eyebrow: "Before You Continue",
        title: "Please read these terms carefully.",
        description:
            "By accessing or using this website, you acknowledge that you have read and understood these Terms & Conditions and agree to use the website responsibly and in accordance with applicable laws.",
    },

    sections: [
        {
            id: "website-usage",
            number: "01",
            title: "Website Usage",
            paragraphs: [
                "You may use this website to learn about Perfect Lender, explore available loan solutions, and contact us regarding your financial requirements.",
                "You agree not to use the website for unlawful purposes, to interfere with its operation, or to attempt to gain unauthorized access to any part of the website or its systems.",
            ],
        },

        {
            id: "loan-information",
            number: "02",
            title: "Loan Information",
            paragraphs: [
                "Information provided on this website is intended to give users general information about available lending solutions and related processes.",
                "Loan availability, eligibility, documentation, terms, conditions, and other requirements may vary depending on the applicable loan product and applicant profile.",
            ],
        },

        {
            id: "eligibility-approval",
            number: "03",
            title: "Eligibility & Approval",
            paragraphs: [
                "Submitting an enquiry or application does not guarantee loan approval, disbursement, or any particular lending terms.",
                "Any lending decision is subject to the applicable assessment, documentation, eligibility requirements, lending criteria, and terms communicated during the relevant process.",
            ],
        },

        {
            id: "user-responsibilities",
            number: "04",
            title: "User Responsibilities",
            paragraphs: [
                "Users are responsible for providing information that is accurate and complete when submitting an enquiry or communicating with Perfect Lender.",
                "Users should review applicable loan terms and documentation carefully before proceeding with any financial arrangement.",
            ],
        },

        {
            id: "accuracy-of-information",
            number: "05",
            title: "Accuracy of Information",
            paragraphs: [
                "We aim to keep website information clear and useful. However, information on the website may change from time to time and may not always reflect the latest applicable terms or requirements.",
                "Users should contact Perfect Lender directly for information specific to their financial requirement before relying on website information for a particular decision.",
            ],
        },

        {
            id: "third-party-links",
            number: "06",
            title: "Third-Party Links & Services",
            paragraphs: [
                "The website may contain links to third-party websites, services, or resources where applicable.",
                "Third-party websites and services operate independently and may have their own terms, privacy policies, and practices. Perfect Lender is not responsible for the content or policies of external websites.",
            ],
        },

        {
            id: "intellectual-property",
            number: "07",
            title: "Intellectual Property",
            paragraphs: [
                "Unless otherwise stated, website content including text, branding, graphics, design elements, and other materials is intended for use in connection with the website and its services.",
                "Users should not reproduce, modify, distribute, or commercially exploit website content without appropriate authorization.",
            ],
        },

        {
            id: "website-availability",
            number: "08",
            title: "Website Availability",
            paragraphs: [
                "We may update, modify, suspend, or discontinue parts of the website from time to time for maintenance, improvements, security, or other operational reasons.",
                "We do not guarantee that the website will always be available, uninterrupted, or free from technical issues.",
            ],
        },

        {
            id: "limitation-of-liability",
            number: "09",
            title: "Limitation of Liability",
            paragraphs: [
                "To the extent permitted by applicable law, Perfect Lender shall not be responsible for losses arising solely from reliance on general website information where the applicable terms, assessment, or financial arrangement have not been separately confirmed.",
                "Users should obtain appropriate information and review applicable documentation before entering into any financial arrangement.",
            ],
        },

        {
            id: "changes-to-terms",
            number: "10",
            title: "Changes to These Terms",
            paragraphs: [
                "These Terms & Conditions may be updated from time to time to reflect changes to the website, services, processes, or applicable requirements.",
                "The updated version will be published on this page along with the corresponding revision date.",
            ],
        },
    ],

    cta: {
        eyebrow: "Need Clarification?",
        title: "Have a question about these terms?",
        description:
            "If you need clarification about our website, loan solutions, or the applicable process, please get in touch with the Perfect Lender team.",

        primaryAction: {
            label: "Contact Us",
            href: "/contact",
        },

        secondaryAction: {
            label: "View Loan Options",
            href: "/loans",
        },
    },
} as const;