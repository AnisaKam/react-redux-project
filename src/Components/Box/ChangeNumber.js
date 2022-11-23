const ChangeNumber = ({number, setNumber}) => {

    const addNumber = () => {
        const newNumber = number + 1;
        setNumber(newNumber)
    }
    
    const removeNumber = () => {
        if (number <=1) return
        const newNumber = number - 1;
        setNumber(newNumber)
    }

    return (<div>
        <button onClick={addNumber}>+</button>
        <span>{number}</span>
        <button onClick={removeNumber}>-</button>
    </div>)
}

export default ChangeNumber;