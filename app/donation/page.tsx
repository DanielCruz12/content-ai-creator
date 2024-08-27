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
      <input type="hidden" name="storeId" value="76BbH4suufHYMobjam8DYHVqAEsWsH69CnsAdjZXQyHc" />
      <input type="hidden" name="checkoutDesc" value="With this contribution you are going to help devdan" />
      <input type="hidden" name="browserRedirect" value="https://content-ai-creator.vercel.app/" />
      <input type="hidden" name="notifyEmail" value="danieldubonxd@gmail.com" />
      <input type="hidden" name="checkoutQueryString" value="lang=en" />
      <input type="hidden" name="currency" value="USD" />
      <button 
        type="submit" 
        className="submit" 
        name="submit" 
        style={{ 
          minWidth: '160px', 
          minHeight: '37px', 
          borderRadius: '4px', 
          borderStyle: 'none', 
          backgroundColor: '#0f3b21', 
          cursor: 'pointer' 
        }} 
        title="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor"
      >
        <span style={{ color: '#fff' }}>Donate with</span>
        <img 
          src="https://btcpay.btc.aw/img/paybutton/logo.svg" 
          alt="BTCPay Logo" 
          style={{ 
            height: '37px', 
            display: 'inline-block', 
            padding: '5% 0 5% 5px', 
            verticalAlign: 'middle' 
          }} 
        />
      </button>
    </form>
    </div>
  );
};

export default DonatePage;
