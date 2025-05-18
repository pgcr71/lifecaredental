'use client';

import { useEffect, useState } from 'react';
const useServices = () => {
    const [services, setServices] = useState([]);
    // const baseUrl = "https://aysha-dental-care.web.app";
    useEffect(() => {
        fetch(`/api/v1/fakeData`)
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    return [services]

}
export default useServices