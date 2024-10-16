import React, { useState } from "react";
import "./Payment.css";
const Payment = () => {
  const [cardNumber, setCardNumber] = useState("Enter Yor Card Number");
  const [expDate, setExpDate] = useState("MM/YY");
  const [ccv, setCcv] = useState("***");
  const [cardName, setCardName] = useState("Syed Muhammad Hasnain");
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCardNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, "");
    const formattedInput = input.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(formattedInput);
  };

  const handleExpDateChange = (event) => {
    const input = event.target.value.replace(/\D/g, "");
    const formattedInput = input.replace(/(.{2})/g, "$1/").slice(0, 5);
    setExpDate(formattedInput);
  };

  const handleCcvChange = (event) => {
    const input = event.target.value.replace(/\D/g, "");
    setCcv(input);
  };

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24 bg-slate-100">
      <form className="bg-white w-full max-w-3xl mx-auto px-6 py-8 shadow-md rounded-md flex">
        <div className="w-1/2 pr-8 border-r-2 border-slate-300">
          <label className="text-neutral-800 font-bold text-sm mb-2 block">
            Card number:
          </label>
          <input
            type="text"
            className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg focus-visible:outline-none focus-visible:border-purple-600"
            id="cardNumber"
            maxLength="19"
            placeholder="XXXX XXXX XXXX XXXX"
            value={cardNumber}
            onChange={handleCardNumberChange}
            onClick={flipCard}
          />
          <div className="flex gap-x-2 mb-4">
            <div className="flex-1">
              <label className="text-neutral-800 font-bold text-sm mb-2 block">
                Exp. date:
              </label>
              <input
                type="text"
                className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg focus-visible:outline-none focus-visible:border-purple-600"
                id="expDate"
                maxLength="5"
                placeholder="MM/YY"
                value={expDate}
                onChange={handleExpDateChange}
                onClick={flipCard}
              />
            </div>
            <div className="flex-1">
              <label className="text-neutral-800 font-bold text-sm mb-2 block">
                CCV:
              </label>
              <input
                type="text"
                className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg focus-visible:outline-none focus-visible:border-purple-600"
                id="ccvNumber"
                maxLength="3"
                placeholder="123"
                value={ccv}
                onChange={handleCcvChange}
                onClick={() => setIsFlipped(true)}
              />
            </div>
          </div>

          <label className="text-neutral-800 font-bold text-sm mb-2 block">
            Card holder:
          </label>
          <input
            type="text"
            className="flex h-10 w-full rounded-md border-2 px-4 py-1.5 text-lg focus-visible:outline-none focus-visible:border-purple-600"
            id="cardName"
            placeholder="John Doe"
            value={cardName}
            onChange={handleCardNameChange}
            onClick={flipCard}
          />
        </div>

        <div className="w-1/2 pl-8">
          <div className="w-full h-56 perspective-1000">
            <div
              id="creditCard"
              className={`crediCard relative cursor-pointer transition-transform duration-500 ${
                isFlipped ? "rearIsVisible" : ""
              }`}
              onClick={flipCard}>
              <div
                className="w-full m-auto rounded-xl shadow-2xl absolute backface-hidden"
                style={{ backfaceVisibility: "hidden" }}>
                <img
                  src="https://i.ibb.co/swnZ5b1/Front-Side-Card.jpg"
                  className="relative object-cover w-full h-full rounded-xl"
                />
                <div className="w-full px-8 absolute top-8 text-white">
                  <div className="pt-1">
                    <p className="font-light">Card Number</p>
                    <p className="font-medium tracking-more-wider h-6">
                      {cardNumber}
                    </p>
                  </div>
                  <div className="pt-6 flex justify-between">
                    <div>
                      <p className="font-light">Name</p>
                      <p className="font-medium tracking-widest h-6">
                        {cardName}
                      </p>
                    </div>
                    <div>
                      <p className="font-light">Expiry</p>
                      <p className="font-medium tracking-wider h-6 w-14">
                        {expDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-full m-auto rounded-xl shadow-2xl absolute backface-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}>
                <img
                  src="https://i.ibb.co/Fn11jBc/Rear-Side-Card.jpg"
                  className="relative object-cover w-full h-full rounded-xl"
                />
                <div className="w-full absolute top-8">
                  <div className="px-8 mt-12">
                    <p className="text-black flex items-center pl-4 pr-2 w-14 ml-auto">
                      {ccv}
                    </p>
                    <p className="text-white font-light flex justify-end text-sm mt-2">
                      security code
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Payment;
