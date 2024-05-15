import "./Coin.css";

function Coin({ info }) {
  return (
    <div className="Coin">
      <img className="CoinImg" src={info.imgSrc} alt={info.side} />
    </div>
  );
}

export default Coin;
