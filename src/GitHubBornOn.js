// Import useState and useEffect hooks from React
import React, { useState, useEffect } from "react";

import { API } from "aws-amplify";

export const GitHubBornOn = () => {

    const [bornOnInfo, updateBornOnInfo] = useState({});

    const fetchBornOnInfo = async () => {

        try {
            const data = await API.get("cryptoapi", "/born");
            updateBornOnInfo(data.bornOnInfo);
        }
        catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        fetchBornOnInfo();
    }, [])

    return (
        <h2>{bornOnInfo.login} - {bornOnInfo.created_at}</h2>
    )
};