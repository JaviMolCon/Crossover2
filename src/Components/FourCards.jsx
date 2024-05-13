import React from "react";
import Card from "./Card"
import cardBg0 from '../assets/cardBg0.jpeg';
import cardBg1 from '../assets/cardBg1.png';

const FourCards = () => {
  let text = "We were born 20 years ago with our block game, and today we are number 1 in cryptocurrency. We are are two friends, fans of retro gaming, we bet on the  future critpo."
  return <div className="w-full flex-wrap flex justify-between items-center ">
           <Card cardBg={cardBg0} bgColor="bg-neutral-50"/>
           <Card headline="COMPANY" text={text} bgColor="bg-neutral-50"/>
           <Card headline="HISTORY" text={text} bgColor="bg-neutral-50"/>
           <Card cardBgSmall={cardBg1} bgColor="bg-neutral-900"/>
         </div>;
};

export default FourCards;
