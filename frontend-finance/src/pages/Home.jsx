/* eslint-disable no-unused-vars */
import { useState } from "react";
import './Home.css';

export default function Home(){
    const income = 10;
    return(
        <>
            <h1>Ansh kumar singh</h1>
            <div>
                <h2>INCOME : {income}</h2>
                <h2>SPENDINGS :</h2>
                <h2>SAVINGS :</h2>
            </div>
        </>
    )
};
