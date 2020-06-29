import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container } from 'react-bootstrap';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './card.css'
class Content extends Component {
   
    
    render() {
        const { confirmed, recovered, deaths } = this.props.data
        return (
            <div>
                <br/>
                <Card className="card" >
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <h3 style={{ color: "orange" }}>{confirmed.value}</h3>
                            <p style={{ position: "absolute", top: "65%", fontSize: "65%" }}>Confirmed</p>
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                <Card className="card" >
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <h3 style={{ color: "red" }}>{deaths.value}</h3>
                            <p style={{ position: "absolute", top: "65%", fontSize: "65%" }}>Deaths</p>
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                <Card className="card"  >
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <h3 style={{ color: "green" }}>{recovered.value}</h3>
                            <p style={{ position: "absolute", top: "65%", fontSize: "65%" }}>Recovered</p>
                        </Typography>
                    </CardContent>
                </Card>
               
            </div>
        );
    }
}
export default Content;
