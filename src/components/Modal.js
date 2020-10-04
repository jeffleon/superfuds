import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Button, ModalBody, ModalHeader, Modal, Table} from 'reactstrap'
import './styles/Modal.css'
import { Add } from '../redux/actions/favorites'
import { Plus } from '../redux/actions/favorites'
import { Minus } from '../redux/actions/favorites'
import { Delete } from '../redux/actions/favorites'



const ModalCar = (props) => {
    const [modal, setModal] = useState(false)
    const toggle = () => {
      dispatch(Add(props.item))
      setModal(!modal)
    }
    const data = useSelector(state => state.favorites)
    const dispatch = useDispatch()
    if (Array.isArray(data) && data.length >= 1) {
      var table = data.map((element) => {
        return(
          <tr className="cardprice">
            <td><img width="100" height="100" src={element.image}/></td>
            <td>
              <div className="title-elemnt">
                {element.title.length > 20?element.title.slice(0,20) + "...":element.title}
              </div>
              <div className="element-especif">
                {element.units_sf + "x" + element.net_content}  
              </div>
              <div className="element-sup">
                <strong>{element.supplier}</strong>  
              </div>
            </td>
            <td><Button color="success" onClick={() => dispatch(Plus(element.id))} className="rounded-circle m-4">+</Button>
                <span className="countmodal">{element.count}</span>
                <Button color="success" onClick={() => dispatch(Minus(element.id))} className="rounded-circle m-4">-</Button></td>
            <td className="mt-4"><span className="pesos">$</span>{element.count * element.price_real}</td>
            <td><i className="fa fa-trash-o mt-2" onClick={() => dispatch(Delete(element.id))} aria-hidden="true"/></td>
          </tr>
        )
      })  
    }
    return(
        <div>
        <Button color="success" className="btn-block btnmodal" onClick={toggle}><strong>Add to chart</strong></Button>
        <Modal isOpen={modal} toggle={toggle} className="modal-lg">
          <ModalHeader toggle={toggle} className="headermodal">Carrito de compras</ModalHeader>
          <ModalBody>
          <Table hover>
                <thead>
                    <tr>   
                        <th>Nombre</th>
                        <th></th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </Table>
          </ModalBody>
        </Modal>
      </div>
    )
}

export default ModalCar