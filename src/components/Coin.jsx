const Coin = (props) => {
    const { name, icon, price, symbol } = props.coin;
    return (
        <div className='coin'>
            <h1 className='coin-name'>{name}</h1>
            <div className='coin-img'>
                <img src={icon} alt={name} />
            </div>
            <h3 className='coin-price'>${price.toFixed(4)}</h3>
            <h3 className='coin-symbol'>{symbol}</h3>
        </div>
    )
}

export default Coin