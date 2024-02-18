import React, { Component } from 'react'
import Foto1 from "../assets/img/foto1.jpg"
import Foto2 from "../assets/img/foto2.jpg"
import Foto3 from "../assets/img/foto3.jpg"
import Foto4 from "../assets/img/foto4.jpg"
import Foto5 from "../assets/img/foto5.jpg"
import Foto6 from "../assets/img/foto6.jpg"
const fotos = [Foto1, Foto1, Foto2, Foto3, Foto4, Foto5, Foto6]

class Aspirantes extends Component{
    constructor(props){
        super(props)
        this.state = {
            aspirantes : []
        }

    }
    componentDidMount(){
        try{
            fetch("http://localhost:3000/api/applicant")
            .then(response => (response.json()))
            .then(data => (
                console.log(data.data.applicants[0]),
                this.setState({aspirantes: data.data.applicants})))
            .catch(e=>{console.log(e)}) 
        }
        catch (error) {
            console.log(error);
          }
    }
    render(){
            return(
                <section className='content aspirantes'>
                    <h2 text-pink-500>Aspirantes</h2>
                    {this.state.aspirantes.map(aspirante => (
                        <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                            <div className="box-avatar">
                                <img src={fotos[aspirante.id]} alt="Gloria"/>
                            </div>
                            <div className="box-bio">
                                <h2 className="bio-name">{aspirante.first_name}</h2>
                                <p className="bio-position">Administrador</p>
                            </div>
                            <div className="box-actions">
                                <button>
                                    <i className="bi bi-star" />
                                </button>
                                <button>
                                    <i className="bi bi-chat" />
                                </button>
                                <button>
                                    <i className="bi bi-envelope" />
                                </button>
                            </div>
                        </div>
                    ))}
                </section>
        )
    }
}
  
  export default Aspirantes;
