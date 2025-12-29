export interface Flight {
    flightNumber: string;
    airline: string;
    status: "On Time" | "Delayed" | "Landed" | "Cancelled" | "In Air";
    origin: string;
    destination: string;
    scheduledDeparture: string;
    actualDeparture: string;
    scheduledArrival: string;
    estimatedArrival: string;
    gate?: string;
    terminal?: string;
}

const FLIGHTS: Flight[] = [
    {
        flightNumber: "AI302",
        airline: "Air India",
        status: "On Time",
        origin: "DEL (Delhi)",
        destination: "SYD (Sydney)",
        scheduledDeparture: "13:15",
        actualDeparture: "13:20",
        scheduledArrival: "06:40 (+1)",
        estimatedArrival: "06:35 (+1)",
        gate: "B12",
        terminal: "T3",
    },
    {
        flightNumber: "EK501",
        airline: "Emirates",
        status: "In Air",
        origin: "BOM (Mumbai)",
        destination: "DXB (Dubai)",
        scheduledDeparture: "04:30",
        actualDeparture: "04:42",
        scheduledArrival: "06:00",
        estimatedArrival: "05:55",
        gate: "42",
        terminal: "T2",
    },
    {
        flightNumber: "BA110",
        airline: "British Airways",
        status: "Delayed",
        origin: "JFK (New York)",
        destination: "LHR (London)",
        scheduledDeparture: "18:00",
        actualDeparture: "19:45",
        scheduledArrival: "06:00",
        estimatedArrival: "07:30",
        gate: "C5",
        terminal: "T7",
    },
    {
        flightNumber: "QF1",
        airline: "Qantas",
        status: "Landed",
        origin: "SYD (Sydney)",
        destination: "LHR (London)",
        scheduledDeparture: "17:05",
        actualDeparture: "17:10",
        scheduledArrival: "05:55",
        estimatedArrival: "05:40",
        terminal: "T1",
    },
    {
        flightNumber: "JL747",
        airline: "Japan Airlines",
        status: "On Time",
        origin: "NRT (Tokyo)",
        destination: "DEL (Delhi)",
        scheduledDeparture: "10:50",
        actualDeparture: "10:55",
        scheduledArrival: "16:50",
        estimatedArrival: "16:45",
        gate: "C2",
    },
];

export const searchFlight = async (query: string): Promise<Flight | null> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const normalizedQuery = query.toUpperCase().trim();
    return FLIGHTS.find((f) => f.flightNumber === normalizedQuery) || null;
};
