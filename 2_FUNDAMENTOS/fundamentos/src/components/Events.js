const Events = () => {

    const handleMyEvent = () => { 
        console.log("Ativou o evento!")
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique</button>
            </div>
        </div>
    )
};

export default Events;