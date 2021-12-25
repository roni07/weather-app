import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {

    const history = useHistory();

    const [countryName, setCountryName] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setCountryName(event.target.value);
    }

    const onSubmit = () => {
        history.push(`/country/${countryName}`);
    }

    return (
        <div style={{marginTop: "40px"}}>
            <h1>Welcome To Weather Applicaton</h1>
            <div>
                <TextField
                    variant="standard"
                    placeholder="Enter country"
                    value={countryName}
                    onChange={handleInputChange}
                />
            </div>
            <Button
                    size="medium"
                    variant="contained"
                    disabled={!countryName}
                    onClick={onSubmit}
                    style={{width: "210px", marginTop: "20px"}}
                >
                    Submit
                </Button>
        </div>
    );
}

export default Home;