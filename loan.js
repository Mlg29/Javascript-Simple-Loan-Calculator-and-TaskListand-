//Loan Calculators

const loanForm = document.querySelector("#loan-form")

loanForm.addEventListener("submit", function(e){
    //Hide Results
    document.querySelector('#result').style.display ="none"
    //show loader
    document.querySelector('#loading').style.display ="block"

    setTimeout(calculateResult, 3000)
    e.preventDefault()
})

function calculateResult() {
    const amount = document.querySelector('#amount')
    const interest = document.querySelector('#interest')
    const years = document.querySelector('#years')
    const monthlyPayment = document.querySelector('#monthly-payment')
    const totalPayment = document.querySelector('#total-payment')
    const totalInterest = document.querySelector('#total-interest')


    const principle = parseFloat(amount.value)
    const calculatedInterest = parseFloat(interest.value)/ 100 / 12
    const calculatedPayment = parseFloat(years.value) * 12


    //monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayment)
    const monthly = (principle * x * calculatedInterest) / (x-1)

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * calculatedPayment).toFixed(2)
        totalInterest.value = ((monthly * calculatedPayment) - principle).toFixed(2)
    
        //show Result
        document.querySelector('#result').style.display ="block"

        //Hide loading
        document.querySelector('#loading').style.display ="none"
    } else {
        alert("Please check your input value again")
    }
        
}

