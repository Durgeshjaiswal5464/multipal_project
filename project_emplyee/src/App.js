import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    address: "",
    email: "",
    country: "",
    state: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [customColor, setCustomColor] = useState("");
  const [marqueeTextColor, setMarqueeTextColor] = useState("#000000");
  const [marqueeBgColor, setMarqueeBgColor] = useState("#ffff00");

  // Country-State Mapping
  const countryStateMap = {
    India: ["Uttar Pradesh", "Maharashtra", "Bihar", "Delhi"],
    USA: ["California", "Texas", "New York", "Florida"],
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Validate form fields
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.surname.trim()) newErrors.surname = "Surname is required";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.country) newErrors.country = "Select a country";
    if (!formData.state) newErrors.state = "Select a state";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {

      console.log(formData);
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div className="app-container" style={{ backgroundColor: customColor || bgColor }}>
      {/* Marquee */}
      <marquee className="marquee" style={{ color: marqueeTextColor, backgroundColor: marqueeBgColor }}>
        Durgesh Jaiswal
      </marquee>

      {/* Button to Open Popup */}
      <button className="popup-button" onClick={() => setShowPopup(true)}>
        Open Color Customization
      </button>

      {/* Employee Registration Form */}
      <div className="form-container">
        <h2>Employee Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <span className="error">{errors.name}</span>

          <label>Surname:</label>
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
          <span className="error">{errors.surname}</span>

          <label>Phone Number:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          <span className="error">{errors.phone}</span>

          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
          <span className="error">{errors.address}</span>

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <span className="error">{errors.email}</span>

          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            {Object.keys(countryStateMap).map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          <span className="error">{errors.country}</span>

          <label>State:</label>
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">Select State</option>
            {formData.country &&
              countryStateMap[formData.country].map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
          </select>
          <span className="error">{errors.state}</span>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Customize Colors</h3>

            <label>Form Background Color:</label>
            <input type="color" value={customColor} onChange={(e) => setCustomColor(e.target.value)} />
            <button onClick={() => setCustomColor("")}>Reset</button>

            <label>Marquee Text Color:</label>
            <input type="color" value={marqueeTextColor} onChange={(e) => setMarqueeTextColor(e.target.value)} />

            <label>Marquee Background Color:</label>
            <input type="color" value={marqueeBgColor} onChange={(e) => setMarqueeBgColor(e.target.value)} />

            <button className="close-button" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      <style>{`
        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: background-color 1s ease-in-out;
          padding: 20px;
        }
        .form-container {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          max-width: 400px;
          width: 100%;
          text-align: center;
          margin-top: 20px;
        }
        label {
          display: block;
          margin-top: 10px;
          font-weight: bold;
        }
        input, select, textarea {
          width: 100%;
          padding: 8px;
          margin: 5px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .error {
          color: red;
          font-size: 12px;
          display: block;
          margin-bottom: 10px;
        }
        .marquee {
          font-size: 20px;
          font-weight: bold;
          padding: 5px;
          width: 100%;
          text-align: center;
        }
        .popup-button {
          background: #007bff;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          margin-top: 10px;
        }
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .popup-box {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }
        .close-button {
          background: red;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}

export default App;
