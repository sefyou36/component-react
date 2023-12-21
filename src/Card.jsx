import CardList from "./cardList"


const Card =  ({data})  => { 
  return (  
    <div >
  {data.map((item, index) => (
    <CardList key={index} data={item}/>
  ))}
  </div>
  )
}

  export default Card