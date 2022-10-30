const base_url = "https://amazon-api.sellead.com"

const responseToJson = (response) => response.json();

const sortByLabelAscending = (a, b) => {
    return a.label.localeCompare(b.label)
}

export const parseCountry = (country) => {
    return country.map((state) => {
        return { label: state.name, value: state.code }
    }).sort(sortByLabelAscending);
}

export const parseCity = (city) => {
    return city.map((state) => {
        return { label: state.name, value: state.id }
    }).sort(sortByLabelAscending);
}


export const fetchCountry = () => {
    const url = `${base_url}/country`
    return fetch(url, { cache: "force-cache" }).then(responseToJson);
};

export const fetchCity = () => {
    const url = `${base_url}/city`
    return fetch(url, { cache: "force-cache" }).then(responseToJson);
};