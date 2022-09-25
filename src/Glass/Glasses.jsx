import React, { Component } from 'react'
import dataGlasses from '../Data/dataGlasses.json'
import "./Glasses.css"
export default class Glasses extends Component {

    state = {
        glasseslist: {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    renderGlassesList = () => {
        return dataGlasses.map((glaItem, index) => {
            return <img onClick={() => { this.onchangeGlasses(glaItem) }} src={glaItem.url} alt='' className="ml-2 p-2 border border-width-1" style={{ width: '110px', cursor: 'pointer', backgroundColor: 'white' }} key={index} />
        })
    }

    onchangeGlasses = (glass) => {
        this.setState({
            glasseslist: glass
        })
    }

    render() {
        return (
            <div className='model'>

                <div style={{ backgroundColor: 'rgba(0,0,0,.2)', height: '100%' }}>
                    <h3 style={{ color: "#f0f8ff", backgroundColor: "rgba(0,0,0,.5)", height: '5%' }} className="text-light p-5">TRY GLASSES APP ONLINE</h3>
                    <div className='container'>
                        <div className='row'>

                            <div className="col-3 left-model  kinh" >
                                <img src="./glassesImage/model.jpg" alt="" />

                            </div>

                            <div className="col-3 kinhphai kinh">
                                <div >
                                    <img src="./glassesImage/model.jpg" alt="" />
                                </div>
                                <img className='glasses' src={this.state.glasseslist.url} alt="" />
                                <div className="thongtin">

                                    <span className='tenkinh' >{this.state.glasseslist.name}</span><br />
                                    <span >{this.state.glasseslist.price}</span><br />
                                    <span className='motakinh' >{this.state.glasseslist.desc}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Div chứa các kính được chọn */}
                    <div className="bg-light container mt-5 d-flex justify-content-center p-5">
                        {this.renderGlassesList()}
                    </div>
                </div>
            </div >
        )
    }
}
