/** @format */
import Widthdraw from "./assets/Withdraw.svg";
import borrow from "./assets/Borrow.svg";
import repay from "./assets/repay.svg";
import Deposit from "./assets/Deposit.svg";

export const holdersList = [
  {
    key: "platform",
    text: "FILL is the first lending platform built on Filecoin network",
  },
  {
    key: "burden",
    text: "An open-sourced protocol to enhance the Filecoion liquidity",
  },
  {
    key: "holders",
    text: "Borrow for storage providing and power growth",
  },
  {
    key: "provide",
    text: "Provide FIL liquidity and earn passive income",
  },
];

export const DealList: Record<string, any> = {
  Deposit: {
    key: "Deposit",
    title: (
      <div className='deal-title'>
        <h3 className='h3-title'>Deposit</h3>
        <div className='title'>PROVIDE LIQUIDITY AND RECEIVE FLE TOKEN</div>
      </div>
    ),
    icons: <img src={Deposit} className='deposit_svg' />,
    text: "At inception, deposit 1 FIL would be awarded for 1 FLE. With the development of the protocol, the exchange rate is subject to change based on the total amount of FLE outstanding and total amount of FIL liquidity provided",
  },
  Withdraw: {
    key: "Withdraw",
    title: (
      <div className='deal-title'>
        <h3 className='h3-title'>Withdraw</h3>
        <div>REDEEM FLE WITH THE SMART CONTRACT DEFINED EXCHANGE RATE</div>
      </div>
    ),
    icons: <img className='widthdraw_svg' src={Widthdraw} />,
    text: "With the same amount of FLE received at deposit, Liquidity Providers would be able to redeem larger amount of FIL as the interest payment expanded the total amount of FIL liquidity provided",
  },
  Borrow: {
    key: "Borrow",
    title: (
      <div className='deal-title'>
        <h3 className='h3-title'>Borrow</h3>
        <div>PLEDGE ACCOUNT BENEFICIARY, DESIGNED FOR STORAGE PROVIDING</div>
      </div>
    ),
    icons: <img className='borrow_svg' src={borrow} />,
    text: "The Storage Providers are able to borrow up to 2/3 of its pledgable balance with a borrowing interest rate no lower than 0.1% for Storage Providing",
  },
  Repay: {
    key: "Repay",
    title: (
      <div className='deal-title'>
        <h3 className='h3-title'>REPAY</h3>
        <div>INTEREST IS DETERMINED BY MARKET CONDITION, REPAY AT ANY TIME</div>
      </div>
    ),
    icons: <img className='borrow_svg' src={repay} />,
    text: "The borrowing interest is paid along with the principal repayment at any time and the interest rate is solely determined by the utilization of the liquidity pool",
  },
};

export const operateList: Record<string, any> = {
  Deposit: {
    key: "Deposit",
    title: (
      <div className='deal-title'>
        <h3 className='h3-title'>PROVIDING SUCURE</h3>
        <div>EFFICIENT AND EQUITABLW SERVICES</div>
      </div>
    ),
    text: [
      "Connect wallet",
      "Submit deposit request",
      "Confirm the estimated number of FLE to be received",
      "Deposit completed",
    ],
  },
  Borrow: {
    key: "Borrow",
    title: (
      <div className='deal-title'>
        <h3 className='h3-title'>PROVIDING SUCURE</h3>
        <div>EFFICIENT AND EQUITABLW SERVICES</div>
      </div>
    ),
    text: [
      "Connect wallet",
      "Submit borrow request",
      "System confirms the amount FIL can be borrowed and returns the estimated borrowing interest rate",
      "Confirm the transfer of the beneficiary address and the borrowing interest rate",
      "Distribute FIL",
      "Borrowing completed",
    ],
  },
  Withdraw: {
    key: "Withdraw",
    title: (
      <div className='deal-title'>
        <h3 className='h3-title'>PROVIDING SUCURE</h3>
        <div>EFFICIENT AND EQUITABLW SERVICES</div>
      </div>
    ),
    text: [
      "Connect wallet",
      "Submit withdraw request",
      "Confirm the estimated number of FIL to be received",
      "Withdraw completed",
    ],
  },
  Repay: {
    key: "Repay",
    title: (
      <div className='deal-title'>
        <h3 className='h3-title'>PROVIDING SUCURE</h3>
        <div>EFFICIENT AND EQUITABLW SERVICES</div>
      </div>
    ),
    text: [
      "Connect wallet",
      "Submit repayment request",
      "Confirm the estimated amount of interest",
      "Deduct both principal and interest from pledged account balance",
      "Transfer the beneficiary address back to the borrower",
      "Repayment completed",
    ],
  },
};

export const footerList: Array<Record<string, any>> = [
  [
    {
      title: "Contract Us",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeOA1Oeb7y0n8tpFAlSpRTE_vUnoImqQBbmMIlRuP8kOJmtqw/viewform?usp=sf_link",
    },
    {
      title: "Twitter",
      link: "https://twitter.com/FILL_Filecoin",
    },
    {
      title: "Github",
      link: "https://github.com/FILL-Lab",
    },
  ],
  [
    {
      title: "Medium",
      link: "https://medium.com/@FILL_Filecoin",
    },
    {
      title: "White Paper",
      link: "https://fill-liquidity-pool-for-storage.gitbook.io/fill-liquidity-pool-for-storage-providers/",
    },
  ],
];
