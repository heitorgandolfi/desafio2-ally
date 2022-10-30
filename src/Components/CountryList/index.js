import { useEffect, useState } from 'react';
import { fetchCountry, parseCountry } from '../../helpers/amazon';
import '../Form/Form.css';

export const CountryList = ({ id, name }) => {

	const [country, setCountry] = useState([]);

	useEffect(() => {
		setCountry([{ label: "Carregando...", value: "" }])
		fetchCountry().then(parseCountry).then(setCountry);
	}, []);

	return (
		<>
			<label>Países</label>
			<select
				id={id || name}
				name={name || id}
				className="input-form"
				required
				multiple
				size={6}
			>

				{country.map((country) => {
					const { label, value } = country
					return (<option key={value} value={value}>{label}</option>)
				})}
			</select>
		</>
	)
};

