import React, { useState, useEffect } from 'react';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { Button } from 'react-bootstrap';
import useForm from './useForm';
import * as actions from "../actions/dLookup";
import { useToasts } from "react-toast-notifications";
import {Form} from 'simple-react-form'

const [fromCountires, setFromCountries] = useState("");
const [fromCity, setFromCity] = useState();

const handleFromCountries = e => {
    const country = countryList.find(
        country => country.name === e.target.value
    );
    const cities = country.cities?.find(city => city.cities === country);

    setFromCountries(country.name);
    setFromCity(cities.cities);
    setFromCountriesCode(country.code);
};

useEffect(() => {
    console.log(fromCountires);
    console.log(fromCountriesCode);
}, [fromCountires, fromCountriesCode]);


const initialFieldValues = {

    CustomerCode: '',
    EnglishName: '',
    ArabicName: '',
    MobileNumber: '',
    Email: '',
    Country: '',
    City: '',
    AddressLine1: '',
    AddressLine2: '',
    AddressLine3: '',

}

const DLookupForm = (props) =>  {const { addToast } = useToasts()

//validate()
//validate({fullName:'jenny'})
const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('CustomerCode' in fieldValues)
        temp.CustomerCode = fieldValues.CustomerCode ? "" : "This field is required."
    if ('EnglishName' in fieldValues)
        temp.EnglishName = fieldValues.EnglishName ? "" : "This field is required."
    if ('ArabicName' in fieldValues)
        temp.ArabicName = fieldValues.ArabicName ? "" : "This field is required."
    if ('Email' in fieldValues)
        temp.Email = (/^$|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('Country' in fieldValues)
        temp.Country = fieldValues.Country ? "" : "This field is required."
    if ('City' in fieldValues)
        temp.City = fieldValues.City ? "" : "This field is required."
    if ('AddressLine1' in fieldValues)
        temp.AddressLine1 = fieldValues.AddressLine1 ? "" : "This field is required."
        if ('AddressLine2' in fieldValues)
        temp.AddressLine2 = fieldValues.AddressLine2 ? "" : "This field is required."
        if ('AddressLine3' in fieldValues)
        temp.AddressLine3 = fieldValues.AddressLine3 ? "" : "This field is required."
    setErrors({
        ...temp
    })

    if (fieldValues == values)
        return Object.values(temp).every(x => x == "")
}



    return (
        <form autoComplete='off' noValidate>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name='Customer Code'
                        variant='outlined'
                        label='Customer Code'
                        value={values.CustomerCode}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name='English Name'
                        variant='outlined'
                        label='English Name'
                        value={values.EnglishName}
                        onChange={handleInputChange}
                    />

                    <TextField
                        name='Arabic Name'
                        variant='outlined'
                        label='Arabic Name'
                        value={values.ArabicName}
                        onChange={handleInputChange}
                    />

<Form.Select
                aria-label="Select Country"
                onChange={e => handleFromCountries(e)}
            >
                <option></option>
                {countryList.map((country, key) => (
                    <option key={key} title={country.code} value={country.name}>
                        {country.name}
                    </option>
                ))}
            </Form.Select>
            <Form.Label className={"fw-bold"}>City</Form.Label>
            <Form.Select
                aria-label="Select City"
                onChange={e => handleFromCountries(e)}
            >
                <option></option>
                {fromCity.map((city, key) => (
                    <option key={key} title="" value={city.cities}>
                        {city.cities}
                    </option>
                ))}
            </Form.Select>
                </Grid>
                <Grid item xs={6}>

                    <TextField
                        name='Email'
                        variant='outlined'
                        label='Email'
                        value={values.Email}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name='Mobile Number'
                        variant='outlined'
                        label='Mobile Number'
                        value={values.MobileNumber}
                        onChange={handleInputChange}
                    />

                    <TextField
                        name='Address Line 1'
                        variant='outlined'
                        label='Address Line 1'
                        value={values.AddressLine1}
                        onChange={handleInputChange}
                    />

                    <TextField
                        name='Address Line 2'
                        variant='outlined'
                        label='Address Line 2'
                        value={values.AddressLine2}
                        onChange={handleInputChange}
                    />

                    <TextField
                        name='Address Line 3'
                        variant='outlined'
                        label='Address Line 3'
                        value={values.AddressLine3}
                        onChange={handleInputChange}
                    />

                </Grid>
            </Grid>
        </form>
    )
}
export default DLookupForm;