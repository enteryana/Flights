const sortFlights = () => {
    const organizedFlights = data.flights.sort((a, b) => {
        return (
            new Date(a.departureDate).getTime() -
            new Date(b.departureDate).getTime()
        );
    })
    return organizedFlights;
};

export default sortFlights;