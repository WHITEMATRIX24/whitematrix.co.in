import React, { useState } from 'react';

import Header from './header'; // Adjust the import path as needed
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Career = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        cv: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic (e.g., send data to server)
    };

    return (
        <div className="c-container">
            <Header />
            <div className="c-text-content">
            <h1 className="c-heading">Career</h1><br/>
                <p className="c-paragraph">
                <h2>Welcome to Our Team!</h2><br/>
                    Welcome to WHITE MATRIX! Join us in simplifying technology and driving innovation. Enjoy the flexibility of working from home while contributing to cutting-edge projects. Grow your skills in a collaborative environment that celebrates creativity and supports career development. Explore opportunities to be part of our forward-thinking team. Join us and make an impact.
                </p>
            </div>
            <form className="c-form" onSubmit={handleSubmit}>
            
                <div className="c-form-field-row">
                    <div className="c-form-field-row-firstname">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className="c-input-field "
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="c-form-field-row-secondname">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className="c-input-field"
                            value={formData.lastName}
                            onChange={handleChange}
                        />    
                    </div>
                </div>
                <div className="c-form-field-row">
                    <div className="c-form-field-row-email">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="c-input-field"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="c-form-field-row">
                    <div className="c-form-field-row-1-4">
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            className="c-input-field"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="c-form-field-row-3-4">
                        <label htmlFor="cv" className="c-file-label">Upload CV</label>
                        <input
                            type="file"
                            name="cv"
                            id="cv"
                            className="c-file-input"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit" className="c-submit-button">Submit</button>
            </form>
        </div>
    );
};

export default Career;
