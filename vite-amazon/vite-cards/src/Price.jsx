import "./Price.css"
function Price({oldPrice,newPrice}){
    return(
        <div className="Price">
        <span class="oldP">{oldPrice}</span>
        &nbsp;&nbsp;
        <span><b>{newPrice}</b></span>
        </div>
    );
}
export default Price;