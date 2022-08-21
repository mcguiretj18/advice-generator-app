const fetchRandomAdviceQuote = async () => {
    const { slip } = await fetch('https://api.adviceslip.com/advice').then(res => res.json());
    return {
        id: slip?.id,
        content: slip?.advice
    }
}

const App = () => {
    const [advice, setAdvice] = React.useState(null);

    // fetch advice quote on page load
    React.useEffect(() => {
        (async () => {
            const { id, content } = await fetchRandomAdviceQuote();
            setAdvice({ id, content });
        })();
    }, []);

    // when dice is clicked fetch a new advice
    const handleDiceClick = async () => {
        const { id, content } = await fetchRandomAdviceQuote();
        setAdvice({ id, content });
    }

    return (
        <div className="container text-center">
            <section className="advice">
                <h1 className="heading">Advice #{advice?.id}</h1>
                <p className="quote">
                    &ldquo;{advice?.content}&rdquo;
                </p>
                <div className="pattern-container">
                    <img className="pattern-mobile" src="images/pattern-divider-mobile.svg" alt="Pattern Mobile" />
                    <img className="pattern-desktop" src="images/pattern-divider-mobile.svg" alt="Pattern Desktop" />
                </div>
                <button className="dice-btn" onClick={handleDiceClick}>
                    <img className="dice" src="images/icon-dice.svg" alt="Dice Icon" height="24" width="24" />
                </button>
            </section>
        </div>
    )
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(<App />);