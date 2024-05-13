const WeDontSG = () => {
  return (
    <div className="bg-pink-300">
      <div className="container1 flex justify-center p-20">
        <img
          src="./src/assets/Title 2.png"
          alt="We don't stop growing"
          className=""
        />
      </div>
      <div
        className="container2 flex flex-row p-32
       justify-around"
      >
        <div className="inset-x-0 bottom-0">
          <img src="./src/assets/Button 6.png" alt="growth per year" />
        </div>
        <img src="./src/assets/Vector Decoration.png" alt="graphic" />
        <div className="container2.1 flex flex-col gap-10">
          <img
            src="./src/assets/information 4.png"
            alt="80%"
            className="flex align-bottom"
          />
          <img
            src="./src/assets/button 5.png"
            alt="how to invest"
            className="flex align-bottom"
          />
        </div>
      </div>
      <div className="container3 flex flex-row justify-around p-28">
        <div className="container3.1 m-20 flex flex-col gap-10">
          <div className="flex justify-center">
            <img
              src="./src/assets/Vector Decoration 2.png"
              alt="hand"
              className="w-25"
            />
          </div>
          <div className="font-bold text-2xl">
            <ul>
              <li>✔ Acces to a demo account at no cost</li>
              <li>✔ 24/7 technical support</li>
              <li>✔ Trade on any device</li>
              <li>✔ No comissions are charged</li>
            </ul>
          </div>
          <button className="bg-black text-pink-300 font-bold px-30 py-3 rounded-full ">
            MORE INFO
          </button>
        </div>
        <div className="container3.2">
          <img
            src="./src/assets/place your image here (double click to edit).png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WeDontSG;
