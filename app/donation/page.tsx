/* eslint-disable @next/next/no-img-element */
"use client";

const DonatePage = () => {
  return (
    <div className="flex items-center justify-center">
      <form
        method="POST"
        action="https://btcpay.btc.aw/api/v1/invoices"
        className="btcpay-form btcpay-form--block"
      >
        <input
          type="hidden"
          name="storeId"
          value="76BbH4suufHYMobjam8DYHVqAEsWsH69CnsAdjZXQyHc"
        />
        <input
          type="hidden"
          name="checkoutDesc"
          value="With this contribution you are going to send bitcoin to devdan to help him continue developing"
        />
        <input
          type="hidden"
          name="notifyEmail"
          value="danieldubonxd@gmail.com"
        />
        <input type="hidden" name="currency" value="BTC" />
        <input type="hidden" name="defaultPaymentMethod" value="BTC_LNURLPAY" />
        <button
          type="submit"
          className="submit"
          name="submit"
          style={{
            minWidth: "146px",
            minHeight: "40px",
            borderRadius: "4px",
            borderStyle: "none",
            backgroundColor: "#0f3b21",
            cursor: "pointer",
          }}
          title="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor"
        >
          <span style={{ color: "#fff" }}>Donate with</span>
          <img
            src="https://btcpay.btc.aw/img/paybutton/logo.svg"
            alt="BTCPay Server Logo"
            style={{
              height: "40px",
              display: "inline-block",
              padding: "5% 0 5% 5px",
              verticalAlign: "middle",
            }}
          />
        </button>
      </form>
    </div>
  );
};

export default DonatePage;
