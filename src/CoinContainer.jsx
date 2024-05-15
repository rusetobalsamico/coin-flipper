import { useState } from "react";
import { choise } from "./helpers";
import Coin from "./Coin";
import "./CoinContainer.css";

function CoinContainer() {
  const coins = [
    {
      side: "heads",
      imgSrc: "https://tinyurl.com/react-coin-heads-jpg",
    },
    {
      side: "tails",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/US_50_Cent_Rev.png/800px-US_50_Cent_Rev.png",
    },
  ];

  const [state, setState] = useState({
    currentCoin: null,
    nFlips: 0,
    nHeads: 0,
    nTails: 0,
  });

  function flipCoin() {
    setState((prevState) => {
      const newCoin = choise(coins);
      //   const newState = {
      //     ...prevState,
      //     currentCoin: newCoin,
      //     nFlips: prevState.nFlips + 1,
      //   };
      //   if(newCoin.side === 'heads' ) {
      //     newState.nHeads += 1;
      //   } else {
      //     newState.nTails += 1;
      //   }
      return {
        ...prevState,
        currentCoin: newCoin,
        nFlips: prevState.nFlips + 1,
        nHeads: prevState.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: prevState.nTails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  }

  const handleClick = (e) => {
    flipCoin();
  };

  return (
    <div className="CoinContainer">
      <h2>Lets flip a coin!</h2>
      {state.currentCoin && <Coin info={state.currentCoin} />}
      <div>
        <button onClick={handleClick}>Flip Me!</button>
      </div>
      <p>
        Out of {state.nFlips} flips, there have been {state.nHeads} heads and{" "}
        {state.nTails} tails.{" "}
      </p>
    </div>
  );
}

export default CoinContainer;
