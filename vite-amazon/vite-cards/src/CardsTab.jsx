import Card from "./Card.jsx";
import "./CardsTab.css";
function CardsTab(){
    return(
        <div className="Cards">
            
            <Card Title="Logitech MX master" idx="0"/>
            <Card Title="Apple pencil (2nd Gen)" idx="1"/>
            <Card Title="Zebronics transformer" idx="2"/>
            <Card Title="Petronics toad 23" idx="3"/>
        </div>
    );
}
export default CardsTab;