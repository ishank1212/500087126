// import React, { useState, useEffect } from "react";
import AllTrains from "../components/AllTrains";
// import trainService from "../services/trainService";

const AllTrainsPage = () => {
  // const [trains, setTrains] = useState([]);

  const trains = [
    {
      trainName: "Sikkim Exp",
      trainNumber: "2345",
      departureTime: { Hours: 11, Minutes: 23, Seconds: 0 },
      seatsAvailable: { sleeper: 4, AC: 4 },
      price: { sleeper: 591, AC: 1367 },
      delayedBy: 5,
    },
    {
      trainName: "Bokaro Exp",
      trainNumber: "2347",
      departureTime: { Hours: 13, Minutes: 32, Seconds: 0 },
      seatsAvailable: { sleeper: 55, AC: 0 },
      price: { sleeper: 88, AC: 278 },
      delayedBy: 7,
    },
    {
      trainName: "Kolkata Exp",
      trainNumber: "2345",
      departureTime: { Hours: 20, Minutes: 15, Seconds: 0 },
      seatsAvailable: { sleeper: 16, AC: 70 },
      price: { sleeper: 620, AC: 720 },
      delayedBy: 14,
    },
    {
      trainName: "Mumbai Exp",
      trainNumber: "2343",
      departureTime: { Hours: 22, Minutes: 37, Seconds: 0 },
      seatsAvailable: { sleeper: 8, AC: 15 },
      price: { sleeper: 580, AC: 680 },
      delayedBy: 16,
    },
    {
      trainName: "Cochin Exp",
      trainNumber: "2348",
      departureTime: { Hours: 15, Minutes: 55, Seconds: 0 },
      seatsAvailable: { sleeper: 1, AC: 0 },
      price: { sleeper: 572, AC: 859 },
      delayedBy: 11,
    },
    {
      trainName: "Chennai Exp",
      trainNumber: "2344",
      departureTime: { Hours: 21, Minutes: 35, Seconds: 0 },
      seatsAvailable: { sleeper: 3, AC: 1 },
      price: { sleeper: 397, AC: 515 },
      delayedBy: 15,
    },
    {
      trainName: "Hyderabad Exp",
      trainNumber: "2341",
      departureTime: { Hours: 23, Minutes: 55, Seconds: 0 },
      seatsAvailable: { sleeper: 6, AC: 7 },
      price: { sleeper: 554, AC: 1854 },
      delayedBy: 5,
    },
    {
      trainName: "Jodhpur Exp",
      trainNumber: "2344",
      departureTime: { Hours: 11, Minutes: 0, Seconds: 0 },
      seatsAvailable: { sleeper: 33, AC: 13 },
      price: { sleeper: 673, AC: 784 },
      delayedBy: 4,
    },
    {
      trainName: "Cuttack Exp",
      trainNumber: "2346",
      departureTime: { Hours: 12, Minutes: 3, Seconds: 0 },
      seatsAvailable: { sleeper: 10, AC: 1 },
      price: { sleeper: 488, AC: 643 },
      delayedBy: 6,
    },
    {
      trainName: "Srinagar Exp",
      trainNumber: "2349",
      departureTime: { Hours: 14, Minutes: 55, Seconds: 0 },
      seatsAvailable: { sleeper: 1, AC: 0 },
      price: { sleeper: 1017, AC: 1104 },
      delayedBy: 10,
    },
    {
      trainName: "Lucknow Exp",
      trainNumber: "2347",
      departureTime: { Hours: 17, Minutes: 33, Seconds: 0 },
      seatsAvailable: { sleeper: 5, AC: 1 },
      price: { sleeper: 342, AC: 483 },
      delayedBy: 12,
    },
    {
      trainName: "Amritsar Exp",
      trainNumber: "2346",
      departureTime: { Hours: 19, Minutes: 0, Seconds: 0 },
      seatsAvailable: { sleeper: 15, AC: 10 },
      price: { sleeper: 435, AC: 635 },
      delayedBy: 13,
    },
    {
      trainName: "Pune Exp",
      trainNumber: "2342",
      departureTime: { Hours: 23, Minutes: 0, Seconds: 0 },
      seatsAvailable: { sleeper: 6, AC: 7 },
      price: { sleeper: 779, AC: 1779 },
      delayedBy: 17,
    },
    {
      trainName: "Delhi Exp",
      trainNumber: "2343",
      departureTime: { Hours: 9, Minutes: 45, Seconds: 0 },
      seatsAvailable: { sleeper: 32, AC: 1 },
      price: { sleeper: 266, AC: 1278 },
      delayedBy: 3,
    },
    {
      trainName: "Mysore Exp",
      trainNumber: "2347",
      departureTime: { Hours: 13, Minutes: 32, Seconds: 0 },
      seatsAvailable: { sleeper: 2, AC: 2 },
      price: { sleeper: 540, AC: 673 },
      delayedBy: 8,
    },
    {
      trainName: "Panjim Exp",
      trainNumber: "2349",
      departureTime: { Hours: 13, Minutes: 32, Seconds: 0 },
      seatsAvailable: { sleeper: 2, AC: 1 },
      price: { sleeper: 185, AC: 362 },
      delayedBy: 9,
    },
  ];
  // useEffect(() => {
    // Fetch all trains
  //   trainService
  //     .getAllTrains()
  //     .then((data) => setTrains(data))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <AllTrains trains={trains} />
    </div>
  );
};

export default AllTrainsPage;
