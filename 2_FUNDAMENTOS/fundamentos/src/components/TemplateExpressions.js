const TempleteExpressions = () => {

    const name = "Julio Paschoal"
    const data = {
        age: 36,
        job: "Programmer"
    }

    return (
        <div>
            <h1> Olá {name}, Você atua como: {data.job}!</h1>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )
}

export default TempleteExpressions;