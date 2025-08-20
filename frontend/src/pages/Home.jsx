/* eslint-disable no-unused-vars */
import { useState , useEffect} from "react";
import './Home.css';

export default function Home(){
    let income = 100;
    let spendings = 90;
    let savings = income-spendings;

    useEffect(()=>{
        fetch('http://localhost:5173/home');
    },[])
    return(
        <>
            <h1>Ansh kumar singh</h1>
            <div>
                <h2>INCOME : ₹{income}</h2>
                <h2>SPENDINGS : ₹{spendings}</h2>
                <h2>SAVINGS : ₹{savings}</h2>
                <h2>SAVING GOAL :</h2>
            </div>
        </>
    )
};
