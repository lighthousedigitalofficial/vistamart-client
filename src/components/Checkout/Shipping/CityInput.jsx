/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import keys from '../../../config/keys'
import axios from 'axios'
// Custom hook to fetch and manage cities
const useCities = () => {
    const [cities, setCities] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCities = async () => {
            const storedCities = localStorage.getItem('cities')
            const storedTimestamp = localStorage.getItem('citiesTimestamp')

            // If cities exist in localStorage and are not expired
            const isExpired =
                !storedCities ||
                !storedTimestamp ||
                Date.now() - storedTimestamp > 86400000 // 1 day expiry

            if (storedCities && !isExpired) {
                setCities(JSON.parse(storedCities))
                setLoading(false)
            } else {
                try {
                    const { data } = await axios.get(
                        'https://app.sonic.pk/api/cities',
                        {
                            headers: {
                                Authorization: keys.TRAX_AUTH,
                            },
                        }
                    )

                    const fetchedCities = data.cities || []

                    // Store cities and timestamp in localStorage
                    localStorage.setItem(
                        'cities',
                        JSON.stringify(fetchedCities)
                    )
                    localStorage.setItem(
                        'citiesTimestamp',
                        Date.now().toString()
                    )

                    setCities(fetchedCities)
                    setLoading(false)
                } catch (err) {
                    setError('Failed to load cities.')
                    setLoading(false)
                    console.error(
                        'Error fetching shipping cities:',
                        err.response?.data || err.message
                    )
                }
            }
        }

        fetchCities()
    }, [])

    return { cities, loading, error }
}

const CityInput = ({ register, errors }) => {
    const { cities, loading, error } = useCities()

    if (loading) {
        return (
            <div>
                <label className="input-label">City</label>
                <select className="input" disabled>
                    <option>Loading cities...</option>
                </select>
            </div>
        )
    }

    return (
        <div>
            <label className="input-label">City</label>
            {error && (
                <div className="text-red-500 text-xs mt-1">
                    <p>{error}</p>
                </div>
            )}
            <select
                {...register('city', {
                    required: 'City is required',
                })}
                className={`input ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                }`}
            >
                <option value="">Select a city</option>
                {cities.length > 0 ? (
                    cities.map((city) => (
                        <option
                            key={city.id || city}
                            value={JSON.stringify({
                                cityId: city.id,
                                cityName: city.name,
                            })}
                        >
                            {city.name || city}
                        </option>
                    ))
                ) : (
                    <option>No cities available</option>
                )}
            </select>
            {errors.city && (
                <p className="text-red-500 text-xs mt-1">
                    {errors.city.message}
                </p>
            )}
        </div>
    )
}

export default CityInput
