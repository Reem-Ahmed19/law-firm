import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        {/* Info Side */}
        <div className="contact__info">
          <SectionTitle
            label="Get In Touch"
            title="Request a Consultation"
            subtitle="Our attorneys are available for confidential consultations. Reach out to discuss how we can serve your legal needs."
          />

          <div className="contact__details">
            <div className="contact__detail-item">
              <span className="contact__detail-icon">◎</span>
              <div>
                <h4 className="contact__detail-title">Our Office</h4>
                <p className="contact__detail-text">425 Lexington Avenue, 22nd Floor<br />New York, NY 10017</p>
              </div>
            </div>

            <div className="contact__detail-item">
              <span className="contact__detail-icon">◎</span>
              <div>
                <h4 className="contact__detail-title">Phone</h4>
                <p className="contact__detail-text">+1 (212) 555-0192</p>
              </div>
            </div>

            <div className="contact__detail-item">
              <span className="contact__detail-icon">◎</span>
              <div>
                <h4 className="contact__detail-title">Email</h4>
                <p className="contact__detail-text">counsel@sterlingassoc.com</p>
              </div>
            </div>

            <div className="contact__detail-item">
              <span className="contact__detail-icon">◎</span>
              <div>
                <h4 className="contact__detail-title">Office Hours</h4>
                <p className="contact__detail-text">Monday – Friday: 8:00 AM – 7:00 PM<br />Saturday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="contact__form-wrap">
          {submitted ? (
            <div className="contact__success">
              <span className="contact__success-icon">✦</span>
              <h3 className="contact__success-title">Thank You</h3>
              <p className="contact__success-text">
                Your consultation request has been received. A member of our team will contact you within one business day.
              </p>
              <Button
                text="Send Another Message"
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', message: '' }); }}
                variant="ghost"
              />
            </div>
          ) : (
            <div className="contact__form">
              <div className="contact__form-row">
                <FormInput
                  label="Full Name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange('name')}
                  placeholder="John Smith"
                  required
                />
                <FormInput
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="contact__form-row">
                <FormInput
                  label="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                  placeholder="+1 (212) 000-0000"
                />
                <div className="form-input">
                  <label className="form-input__label">Area of Interest</label>
                  <select
                    className="contact__select"
                    value={formData.service}
                    onChange={handleChange('service')}
                  >
                    <option value="">Select a practice area</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="litigation">Litigation</option>
                    <option value="ma">Mergers & Acquisitions</option>
                    <option value="ip">Intellectual Property</option>
                    <option value="realestate">Real Estate</option>
                    <option value="employment">Employment Law</option>
                  </select>
                </div>
              </div>

              <FormInput
                label="Your Message"
                value={formData.message}
                onChange={handleChange('message')}
                placeholder="Please briefly describe your legal matter..."
                required
                isTextarea
              />

              <div className="contact__form-footer">
                <p className="contact__disclaimer">
                  All communications are strictly confidential. Submitting this form does not establish an attorney-client relationship.
                </p>
                <Button text="Request Consultation →" onClick={handleSubmit} variant="primary" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
