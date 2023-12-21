const Appel = ({number,color,logo}) => {
    return (
        <div>
            <h1>Hello from appel</h1>
            <p style={{backgroundColor:color}}>I have {number} apple</p>
            <img src={logo} />
        </div>
    )
}

export default Appel