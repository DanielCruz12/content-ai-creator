/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

const DonatePage = ({ imgSize }: any) => {
  const [copied, setCopied] = useState(false);
  const walletAddress =
    "lnbc1pnv08hxpp5srcmv0fxhmlz6yneraxgcgez632q7q6czwkhkukanjunvwz5v2ysdp82pshjgr5dusyymrfde4jq4mpd3kx2apq24ek2uscqzpuxqyz5vqsp5hpg6zyxu6ykr52p6l3x7n3wzy367lfvay47lfr3mj9ulyk6kf9sq9qxpqysgq42dhp6krefyhk7pxd7qcw4w08lkpnvcy9uzcn6lqd9ljf2zklpjjxtj4enc2u6q02pl26wcpz474rqjtwkv4uynx6g6j38w8du3jspgq64lj2q";

  const truncatedAddress = `${walletAddress.slice(0, 10)}....${walletAddress.slice(-10)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-gray-50 rounded-lg shadow-lg p-4 sm:p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Support DanDev
        </h1>
        <p className="mt-4 text-center text-gray-600">
          Your support helps me continue building amazing things. Any
          contribution is greatly appreciated!
        </p>
        <div className="flex justify-center mt-6">
          <img
            src="/image.png"
            alt="QR Code"
            className={imgSize ? imgSize : "w-full h-full"}
          />
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-700">Or send to my wallet address:</p>
          <div className="flex flex-col items-center justify-center mt-2 sm:flex-row sm:items-center">
            <span className="px-3 py-1 font-mono text-sm text-black bg-gray-200 rounded mb-2 sm:mb-0 sm:mr-3">
              {truncatedAddress}
            </span>
            <button
              onClick={handleCopy}
              className="text-sm font-medium text-white bg-gray-600 rounded-lg px-3 py-1 hover:bg-gray-700"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
