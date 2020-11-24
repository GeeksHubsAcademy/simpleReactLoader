
import React from "react";


class Picture extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            loading : true
        }
        
    };

    componentDidMount(){

        setTimeout(() => {
            //3 segundos de carga... entonces hacemos el setState de loading a false
            this.setState({loading: false})
        }, 3000);
    }

    muestraContenido(){

        //si loading es false.. (después del setState hecho en componentDidMount..)
        if(!this.state.loading){
            return(
            //devolvemos el siguiente contenido html
            <div><img src="img/geeksLogo.png"></img></div>
            )
        }

        //devolvemos este contenido html por defecto, que supone la carga
        return(
            <div><img src="img/spinner.gif"></img></div>
        )
    }
    
    render() {
        return(
            <div>
                {this.muestraContenido()}
            </div>
        );
    };
    
    
};


export default Picture;