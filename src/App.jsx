import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar.jsx";
import UserCard from "./components/userCard/userCard.jsx";
import CarCard from "./components/carCard/carCard.jsx";
import users from "./UserData.js";
import cars from "./carData.js";

function UserList() {
  return (
    <>
      {users.map((el) => (
        <UserCard
          key={el.id}
          name={el.name}
          surname={el.surname}
          nickname={el.nickname}
          age={el.age}
          img_url={el.img_url}
          email={el.email}
          occupation={el.occupation}
          location={el.location}
        />
      ))}
    </>
  );
}

function CarList() {
  return (
    <>
      {cars.map((el) => (
        <CarCard
          key={el.id}
          carName={el.name}
          carBrand={el.brand}
          carModel={el.model}
          carYear={el.year}
          img_url={el.img_url}
          carPrice={el.price}
          carColor={el.color}
          carType={el.type}
          carLocation={el.location}
        />
      ))}
    </>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <button
        onClick={() =>
          window.open("https://lichess.org/", "_blank", "noopener")
        }
      >
        CLick me
      </button>
      <div className="main">
        <Routes>
          <Route path="/" element={<UserList />} />

          <Route path="/cars" element={<CarList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
