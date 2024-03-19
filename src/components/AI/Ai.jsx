import React, {useState} from 'react'
import Appbar from './Appbar'
// import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import Loader from './Loader'
// import { useHistory } from "react-router-dom";
import PredictionComponent from './predictionComponent';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function Ai() {
    const classes = useStyles();
    const [isDropdownDisabled, setIsDropdownDisabled] = useState(false);
    const [selectedStock, setSelectedStock] = useState("");
    const [showGraph, setShowGraph] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleChange = (event) => {
        setIsLoading(true);
        setSelectedStock(event.target.value);
        const payload = {
            stock_name: event.target.value
        };
        setIsDropdownDisabled(true);

        axios.post("/predictions", payload)
            .then((res) => {
                setResult(res.data.data);
                setIsLoading(false);
                setShowGraph(true);
                setIsDropdownDisabled(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
                setIsDropdownDisabled(false);
            });
    };

    const stockNames = ['AAPL', 'SAIL.NS', 'AMZN', 'GOOG'];

    return (
        <>
            <div>
                <Appbar />
                <div className="outer-container">
                    <div className='container'>
                        <h1 style={{ color: '#ffba08' }}>Select Stock Name</h1>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={selectedStock}
                            disabled={isDropdownDisabled}
                            onChange={handleChange}
                            name="stock_name"
                            style={{ width: 400, height: 70, backgroundColor: 'white' }}
                        >
                            {stockNames.map((ele, index) => (
                                <MenuItem value={ele} key={index}>{ele}</MenuItem>
                            ))}
                        </Select>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="chart-loader-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                {isLoading && <><Loader /><h4 style={{ fontWeight: 'bold', color: '03045e' }}>Please wait while we are training our model and getting predictions for you</h4></>}
            </div>
            <br />
            {showGraph && <PredictionComponent data={result} date={new Date()} />}
        </>
    );
}
