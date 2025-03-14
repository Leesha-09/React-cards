import Price from "./Price.jsx";
import "./Card.css";

function Card({Title,idx}){
    let oldPrice=["9,547","7,346","6,547","3,679"];
    let newPrice=["8,547","6,346","5,547","2,679"];
    let description= [["8,000 DPI","5 Programmable buttons "],["Intuitive surface ","Designed for Ipad pro "],["Designed for Ipad","Fine surface "],["Wireless","Optical orientation "]];
    
    return(
        <div className="Card">
            <h4>{Title}</h4>
            <p>{description [idx][0]}</p>
            <p>{description [idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}></Price>
        </div>
    );
}
export default Card;