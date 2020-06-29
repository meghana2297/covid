import React, { Component } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { getCountries } from '../../api/api'
import './countrypicker.css'
class Countrypicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryValues:[]
        }
    }
    async componentDidMount() {
        const country = await getCountries();
        await this.setState({ countryValues:country})
        console.log(country)
    }

    render() {
        return (
            <div>
                <br/>
                <FormControl className="dropdown" >
                    <NativeSelect defaultValue="" onChange={(e) => this.props.handlecountry(e.target.value)}>
                        <option value="">World Wide</option>
                        {this.state.countryValues.map((country, i) => <option key={i} value={country}>{country}</option>)}                    </NativeSelect>
                </FormControl>
            </div>
        );
    }
}
export default Countrypicker;
