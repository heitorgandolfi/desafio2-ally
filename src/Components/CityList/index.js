import { useEffect, useState } from 'react';
import { fetchCity, parseCity } from '../../helpers/amazon';
import '../Form/Form.css';

export const CityList = ({ id, name }) => {

    const [city, setCity] = useState([]);

    useEffect(() => {
        setCity([{ label: "Carregando...", value: "" }])
        fetchCity().then(parseCity).then(setCity);
    }, []);

    return (
        <>
            <label>Cidades</label>
            <select
                id={id || name}
                name={name || id}
                className="input-form"
                required
                multiple
                size={6}
            >

                {city.map((city) => {
                    const { label, value } = city
                    return (<option key={value} value={value}>{label}</option>)
                })}
            </select>
        </>
    )
};
