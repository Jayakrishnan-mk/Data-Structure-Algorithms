class PaymentGateway {
    constructor() {
        this.bankMap = {
            card: new HDFCBank(),
            upi: new ICICIBank(),
            netbanking: new SBIBank()
        };
    }

    makePayment(paymentMode, paymentDetails) {
        const bank = this.bankMap[paymentMode];
        if (!bank) {
            console.log("Invalid payment mode");
            return false;
        }

        if (!this._validate(paymentMode, paymentDetails)) {
            console.log("Missing required payment details");
            return false;
        }

        const isSuccess = bank.process();
        console.log(isSuccess ? "Payment Success" : "Payment Failed");
        return isSuccess;
    }

    _validate(mode, details) {
        if (mode === "card") {
            return details.cardNumber && details.expiry && details.cvv;
        } else if (mode === "upi") {
            return details.vpa;
        } else if (mode === "netbanking") {
            return details.username && details.password;
        }
        return false;
    }
}

class HDFCBank {
    process() {
        return Math.random() > 0.2; // 80% success
    }
}

class ICICIBank {
    process() {
        return Math.random() > 0.3; // 70% success
    }
}

class SBIBank {
    process() {
        return Math.random() > 0.1; // 90% success
    }
}
