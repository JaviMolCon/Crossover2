import React from "react";
const FourCards = ({headline, text, bgColor, cardBg, cardBgSmall}) => {
  return <div className={`w-full p-28 sm:max-w-[50vw] aspect-square ${bgColor} bg-cover bg-center`} style={{backgroundImage: `url(${cardBg})`}}>
           <div className={`w-full aspect-square bg-contain bg-no-repeat bg-center`} style={{backgroundImage: `url(${cardBgSmall})`}}>
             <h2 className="font-bold uppercase pt-24 pb-8 text-5xl">{headline}</h2>
             <p className="text-2xl">{text}</p>
           </div>       
         </div>;
};

export default FourCards;
