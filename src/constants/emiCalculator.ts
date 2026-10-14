export type LoanType =
    | "personal-loan"
    | "business-loan"
    | "home-loan"
    | "mortgage-loan"
    | "vehicle-loan";

export type LoanTypeConfig = {
    id: LoanType;
    label: string;
    description: string;
    defaultAmount: number;
    minAmount: number;
    maxAmount: number;
    defaultRate: number;
    minRate: number;
    maxRate: number;
    defaultTenure: number;
    minTenure: number;
    maxTenure: number;
};

export const emiCalculatorContent = {
    eyebrow: "EMI Calculator",
    title: "Plan your loan before you take the next step.",
    description:
        "Estimate your monthly EMI, total interest, and total repayment based on your loan amount, interest rate, and tenure.",

    loanTypes: [
        {
            id: "personal-loan",
            label: "Personal Loan",
            description: "For eligible personal financial requirements.",
            defaultAmount: 500000,
            minAmount: 50000,
            maxAmount: 5000000,
            defaultRate: 12,
            minRate: 1,
            maxRate: 30,
            defaultTenure: 60,
            minTenure: 6,
            maxTenure: 120,
        },
        {
            id: "business-loan",
            label: "Business Loan",
            description: "For business and working capital requirements.",
            defaultAmount: 500000,
            minAmount: 50000,
            maxAmount: 10000000,
            defaultRate: 12,
            minRate: 1,
            maxRate: 30,
            defaultTenure: 60,
            minTenure: 6,
            maxTenure: 120,
        },
        {
            id: "home-loan",
            label: "Home Loan",
            description: "For eligible home purchase or construction needs.",
            defaultAmount: 2500000,
            minAmount: 100000,
            maxAmount: 50000000,
            defaultRate: 8,
            minRate: 1,
            maxRate: 20,
            defaultTenure: 120,
            minTenure: 12,
            maxTenure: 120,
        },
        {
            id: "mortgage-loan",
            label: "Mortgage Loan",
            description: "Property-backed financing for eligible requirements.",
            defaultAmount: 1500000,
            minAmount: 100000,
            maxAmount: 25000000,
            defaultRate: 10,
            minRate: 1,
            maxRate: 25,
            defaultTenure: 120,
            minTenure: 12,
            maxTenure: 120,
        },
        {
            id: "vehicle-loan",
            label: "Auto Loan",
            description: "For eligible auto financing requirements.",
            defaultAmount: 800000,
            minAmount: 50000,
            maxAmount: 5000000,
            defaultRate: 9,
            minRate: 1,
            maxRate: 20,
            defaultTenure: 60,
            minTenure: 12,
            maxTenure: 120,
        },
    ] satisfies LoanTypeConfig[],

    labels: {
        loanType: "Loan Type",
        loanAmount: "Loan Amount",
        interestRate: "Interest Rate",
        loanTenure: "Loan Tenure",
        monthlyEmi: "Monthly EMI",
        totalInterest: "Total Interest",
        totalPayment: "Total Payment",
        principalAmount: "Principal Amount",
        interestAmount: "Interest Amount",
    },

    disclaimer:
        "This calculator provides an illustrative estimate only. Actual EMI, interest rate, tenure, fees, and lending terms may vary based on the applicable loan product, applicant profile, assessment, and final terms.",
} as const;