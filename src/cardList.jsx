import Card from "./Card"
import { useState } from "react"






const CardList = ({data}) => {
    const [isShow,setIsShow] = useState(data.shows)

    const handleClickk = () => {
        console.log("hello");
        setIsShow(!isShow)
        }
    return(
    <div className="flex justify-center text-center">

        {isShow ? <div  className="border border-black  bg-red-400   " >
            <img className="rounded-full" src={data.imgSrc} alt={data.fullName} />
            <h2>{data.fullName}</h2>
            <p>{data.bio}</p>
            <p>Profession: {data.profession}</p>
            <button className="border bg-lime-900 text" onClick={handleClickk} >Change State</button>
        

    </div> :<div>
            <p>Not Found</p>
            <button className="border bg-lime-900 text" onClick={handleClickk} >Change State</button>
        </div>}
    

    </div>
    )
}

export default CardList