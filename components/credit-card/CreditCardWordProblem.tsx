import React from 'react'
import { DropDownMenu } from './DropDownMenu'
import { 
    applyArray,
    approvedArray,
    billArray,
    buildArray,
    chargeArray,
    creditCardArray,
    creditLimitArray,
    doesntArray,
    interestArray,
    lateFeeArray,
    minimumArray,
    payArray,
    responsibleArray,
    unpaidArray,

 } from './CreditCardWordProblemData'

const CreditCardWordProblem = () => {
    return (
        <div className="flex flex-col p-12">
            <div className="mb-12">
                <div className="flex justify-center mb-12">
                    <h1 className="text-purple-600 font-bold text-5xl md:text-7xl uppercase">Credit Cards</h1>
                </div>
                <div className="flex justify-center mb-12">
                    <span className="text-4xl">You <DropDownMenu value="" words={chargeArray}/> a purchase to your credit card</span>
                </div>
                <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                    <div className="px-12">
                        <img className="" src="../../images/credit-card/credit-payment.svg"></img>
                    </div>
                    <div className="text-2xl">
                        <div className="flex justify-center p-8 bg-purple-200 rounded-2xl mx-12">
                            <span><DropDownMenu value="" words={creditCardArray}/> company pays the store</span>
                        </div>
                        <div className="flex justify-center p-8 bg-purple-300 rounded-2xl mx-12 my-4">
                            <span>
                                Credit card company sends you a <DropDownMenu value="" words={billArray}/> and you <DropDownMenu value="" words={payArray}/> the credit
                                card company
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-12 items-center">
                <div className="flex flex-col-reverse md:flex-row-reverse">
                    <img className="max-w-xs" src="../../images/credit-card/credit-receipt.svg"></img>
                    <ul className="p-12 flex flex-col text-2xl gap-4 rounded-2xl md:mx-12 m-12 bg-gradient-to-r from-gray-200 to-gray-0">
                        <li>You receive a <DropDownMenu value="" words={billArray}/> each month</li>
                        <li>Full bill <DropDownMenu value="" words={doesntArray}/> need to be paid</li>
                        <li><DropDownMenu value="" words={interestArray}/> is charged on <DropDownMenu value="" words={unpaidArray}/> amount</li>
                        <li>a <DropDownMenu value="" words={minimumArray}/> payment is required each month</li>
                        <li><DropDownMenu value="" words={lateFeeArray}/> is billed not paid on time</li>
                    </ul>
                </div>
                <div className="flex flex-col-reverse md:flex-row md:mx-12 m-12">
                    <img className="max-w-sm p-4" src="../../images/credit-card/credit-checklist.svg"></img>
                    <ul className="flex flex-col gap-8 p-12 text-2xl">
                        <li>Spending is limited by a <DropDownMenu value="" words={creditLimitArray}/></li>
                        <li>You <DropDownMenu value="" words={applyArray}/> for a credit card and need to be <DropDownMenu value="" words={approvedArray}/></li>
                        <li><DropDownMenu value="" words={buildArray}/> your credit with <DropDownMenu value="" words={responsibleArray}/> credit card use</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CreditCardWordProblem
