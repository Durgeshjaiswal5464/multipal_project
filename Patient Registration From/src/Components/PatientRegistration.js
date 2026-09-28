import React, { useState } from "react";

export default function PatientRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    country: "",
    city: "",
    department: "",
    roomNumber: "",
    mobile: "",
    fatherName: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
    setSubmitted(false);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.username.trim()) newErrors.username = "User name is required.";
    if (!formData.department.trim()) newErrors.department = "Department is required.";
    if (!formData.roomNumber.trim()) newErrors.roomNumber = "Room number is required.";

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
    console.log("Patient Data:", formData);
  };

  return (
    <div
      className="card p-4 shadow mt-4"
      style={{ backgroundColor: "#90EE90" }}
    >
      <h2 className="text-center mb-4">Patient Registration</h2>

      {submitted && (
        <div className="alert alert-success" role="alert">
          Patient registered successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Enter full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">User Name</label>
            <input
              type="text"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              placeholder="Enter user name"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Country</label>
            <select
              className="form-control"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="America">America</option>
              <option value="Japan">Japan</option>
              <option value="Russia">Russia</option>
              <option value="China">China</option>
              <option value="Pakistan">Pakistan</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Department</label>
            <input
              type="text"
              className={`form-control ${
                errors.department ? "is-invalid" : ""
              }`}
              placeholder="Enter department"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
            {errors.department && (
              <div className="invalid-feedback">{errors.department}</div>
            )}
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Room Number</label>
            <input
              type="text"
              className={`form-control ${
                errors.roomNumber ? "is-invalid" : ""
              }`}
              placeholder="Enter room number"
              name="roomNumber"
              value={formData.roomNumber}
              onChange={handleChange}
            />
            {errors.roomNumber && (
              <div className="invalid-feedback">{errors.roomNumber}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="tel"
              className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
              placeholder="Enter 10-digit mobile number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && (
              <div className="invalid-feedback">{errors.mobile}</div>
            )}
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Father Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter father name"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-success w-100 mt-3"
        >
          Register
        </button>
      </form>
    </div>
  );
}

