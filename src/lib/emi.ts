export type EmiCalculationInput = {
    principal: number;
    annualInterestRate: number;
    tenureMonths: number;
};

export type AmortizationRow = {
    month: number;
    openingBalance: number;
    emi: number;
    principal: number;
    interest: number;
    closingBalance: number;
};

export type EmiCalculationResult = {
    emi: number;
    totalInterest: number;
    totalPayment: number;
    principalAmount: number;
    tenureMonths: number;
    annualInterestRate: number;
    amortization: AmortizationRow[];
};

export function calculateEmi({
    principal,
    annualInterestRate,
    tenureMonths,
}: EmiCalculationInput): EmiCalculationResult {
    if (principal <= 0 || tenureMonths <= 0 || annualInterestRate < 0) {
        return {
            emi: 0,
            totalInterest: 0,
            totalPayment: 0,
            principalAmount: 0,
            tenureMonths,
            annualInterestRate,
            amortization: [],
        };
    }

    const monthlyRate = annualInterestRate / 12 / 100;

    let emi = 0;

    if (monthlyRate === 0) {
        emi = principal / tenureMonths;
    } else {
        const factor = Math.pow(1 + monthlyRate, tenureMonths);

        emi =
            (principal * monthlyRate * factor) /
            (factor - 1);
    }

    const totalPayment = emi * tenureMonths;
    const totalInterest = totalPayment - principal;

    const amortization: AmortizationRow[] = [];

    let openingBalance = principal;

    for (let month = 1; month <= tenureMonths; month++) {
        const interest =
            monthlyRate === 0
                ? 0
                : openingBalance * monthlyRate;

        let principalComponent = emi - interest;

        let actualEmi = emi;

        // Prevent floating-point issues on the final payment.
        if (month === tenureMonths) {
            principalComponent = openingBalance;
            actualEmi = principalComponent + interest;
        }

        const closingBalance = Math.max(
            0,
            openingBalance - principalComponent
        );

        amortization.push({
            month,
            openingBalance,
            emi: actualEmi,
            principal: principalComponent,
            interest,
            closingBalance,
        });

        openingBalance = closingBalance;
    }

    return {
        emi,
        totalInterest,
        totalPayment,
        principalAmount: principal,
        tenureMonths,
        annualInterestRate,
        amortization,
    };
}