import React,{useState} from 'react'
import { Card, CardBody, CardSubtitle, CardTitle, CardImg, Badge} from "reactstrap";
import './styles/Rendercards.css'
import Sellos from '../components/Sellos'
import ModalCar from '../components/Modal'


const Rendercards = (props) => {
    const [isShown, setIsShown] = useState(false);
    return(
        <div className="container">
            <Card>
                <div className="container">
                    <div className="selloswraper">
                        <Sellos sellos={props.item.sellos} id={props.item.id}/>
                    </div>
                    <div className="imgwraper">
                        <CardImg top src={props.item.image} alt="Card img" className="cardimages"/>
                    </div>
                </div>
                <CardBody  key={props.item.id} 
                 onMouseEnter={() => setIsShown(true)} 
                 onMouseLeave={() => setIsShown(false)}>
                    <div className="row">
                        <CardSubtitle className="col-5 cardsubtitle"><strong>Superfuds</strong></CardSubtitle>
                        <Badge color="badge" className="col-2 ml-auto mr-4" pill>{props.item.net_content}</Badge>
                    </div>
                    <CardTitle className="cardtext">{props.item.title}</CardTitle>
                    <CardSubtitle className="ml-auto cardprice"><strong><span className="pesos">$</span>{props.item.price_real}</strong></CardSubtitle>
                    {isShown?<ModalCar item={props.item}/>:<div></div>}
                </CardBody>
            </Card>
        </div>
    )
}

export default Rendercards