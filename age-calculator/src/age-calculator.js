 import React, { useState } from "react";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState({ years: null, months: null, days: null });

  const calculateAge = () => {  
    if (!birthDate) return;

    const birthDateObj = new Date(birthDate);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - birthDateObj.getFullYear();
    let months = currentDate.getMonth() - birthDateObj.getMonth();
    let days = currentDate.getDate() - birthDateObj.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Age Calculator</h1>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px" }}
      />
      <br />
      <button
        onClick={calculateAge}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Calculate Age
      </button>
      {age.years !== null && (
        <h2 style={{ marginTop: "20px" }}>
          Your Age: {age.years} years, {age.months} months, and {age.days} days
        </h2>
      )}
    </div>
  );
};

export default AgeCalculator;
