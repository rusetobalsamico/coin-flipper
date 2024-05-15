import './Coin.css';

function Coin({info}) {

    return(
        <img className="CoinImg" src={info.imgSrc} alt={info.side} />
    )
}

export default Coin;