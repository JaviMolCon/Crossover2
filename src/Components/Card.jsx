import React from "react";
const FourCards = ({headline, text, bgColor, cardBg, cardBgSmall}) => {
  return <div className={`w-full overflow-hidden p-12  sm:p-14 md:p-20 lg:p-24 md:max-w-[50vw] aspect-square ${bgColor} bg-cover bg-center`} style={{backgroundImage: `url(${cardBg})`}}>
           <div className={`w-full aspect-square bg-contain bg-no-repeat bg-center`} style={{backgroundImage: `url(${cardBgSmall})`}}>
             <h2 className="font-bold uppercase pt-8 sm:pt-12 md:pt-14 lg:pt-24 pb-8 text-2xl sm:text-3xl md:text-4xl">{headline}</h2>
             <p className="text-lg sm:text-xl md:text-2xl">{text}</p>
           </div>       
         </div>;
};

export default FourCards;
