// Import useState and useEffect hooks from React
import React, { useState, useEffect } from "react";

import { API } from "aws-amplify";

export const GitHubBornOn = () => {

    const [bornOn, updateBornOn] = useState({ created_at: "" });

    const fetchDate = async () => {
        const { created_at } = bornOn;

        const data = await API.get("cryptoapi", `/born`);
        console.log(created_at)
        updateBornOn(data.bornOn);
    }

    useEffect(() => {
        fetchDate();
    }, [])

    return (
        <h2>Well...</h2>
    )
};