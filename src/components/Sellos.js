import React,{useState} from 'react'
import './styles/Sellos.css'
import {UncontrolledTooltip} from 'reactstrap'

const Sellos = (props) =>{
        return(
            <>
            {props.sellos.map((element, index) =>
                <>
                    <img width="25" height="25" className="ml-auto mt-1 sellos" data-toggle="tooltip" id={element.name + props.id.toString()} key={index} src={element.image}/>
                    <UncontrolledTooltip placement="right" target={element.name + props.id.toString()}>
                        <div className="title-tooltip">Producto</div>
                        <span className="description-tooltip">{element.name}</span>
                    </UncontrolledTooltip>
                </>
            )}     
            </>
        )
}

export default Sellos