import React, { Component } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Countrypicker from './components/Countrypicker/countrypicker'
import Content from './components/Content/content'
import Charts from './components/Charts/Charts'
import './App.css';
import { getData } from './api/api';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
            country: '',
            loading:false
            
        }
}

    async componentDidMount() {
        const data = await getData();
        this.setState({ data ,loading:true});
        console.log(data.confirmed)
    }
    handleCountryChange = async (country) => {
        console.log(country)
        const data = await getData(country);

        this.setState({ data, country: country });
    }
    render() {
        const { data} = this.state
        console.log(data)
        return (
            <div>
                 <div className="heading">
                    <h1 style={{ textAlign: "center",padding:"1%" }}>Covid-19</h1>
                 </div>
                <div className="bodybg">
                    <div className="model">
                        <Countrypicker handlecountry={this.handleCountryChange} />
                        {this.state.loading ? <Content data={data} /> : null}
                        {this.state.loading ? <Charts data={data} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
