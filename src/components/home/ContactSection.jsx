"use client";

import React, { useRef, useState } from 'react';
import {
  getCountries,
  getCountryCallingCode,
} from 'react-phone-number-input';
import countryLabels from 'react-phone-number-input/locale/en';
import flags from 'react-phone-number-input/flags';

import contactBg from '../../assets/Contact-img/Contact@2x.png';
import './ContactSection.css';

function CountryDropdown({
  value,
  onChange,
  options,
  mode = 'country',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selected = options.find(
    (country) => country.code === value
  );

  const handleSelect = (country) => {
    onChange(country.code);
    setIsOpen(false);
  };

  return (
    <div
      className={`custom-country-dropdown ${mode} ${isOpen ? 'is-open' : ''
        }`}
      ref={dropdownRef}
    >
      <button
        type="button"
        className="country-dropdown-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="country-selected-content">

          {selected && (
            <span className="country-flag">
              {flags[selected.code] &&
                React.createElement(flags[selected.code])}
            </span>
          )}

          {mode === 'country' && (
            <span className="country-selected-name">
              {selected?.name}
            </span>
          )}

          {mode === 'phone' && selected && (
            <span className="country-selected-code">
              +{selected.phone}
            </span>
          )}

        </span>

        <svg
          className="country-dropdown-arrow"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>


      {isOpen && (
        <div className="country-dropdown-menu">

          <div className="country-dropdown-list">

            {options.map((country) => (
              <button
                type="button"
                key={country.code}
                className={`country-dropdown-option ${country.code === value ? 'selected' : ''
                  }`}
                onClick={() => handleSelect(country)}
              >

                <span className="country-option-flag">
                  {flags[country.code] &&
                    React.createElement(flags[country.code])}
                </span>

                <span className="country-option-name">
                  {country.name}
                </span>

                {mode === 'phone' && (
                  <span className="country-option-code">
                    +{country.phone}
                  </span>
                )}

              </button>
            ))}

          </div>

        </div>
      )}
    </div>
  );
}

function ContactSection() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [selectedCountry, setSelectedCountry] = useState('IN');
  const [selectedPhoneCountry, setSelectedPhoneCountry] = useState('IN');
  const [phoneNumber, setPhoneNumber] = useState('');

  const countryOptions = getCountries()
    .map((code) => ({
      code,
      name: countryLabels[code],
      phone: getCountryCallingCode(code),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleAttachmentClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData();

      formData.append('name', name);
      formData.append('email', email);

      formData.append(
        'phone',
        phoneNumber
          ? `+${getCountryCallingCode(selectedPhoneCountry)}${phoneNumber}`
          : ''
      );

      const selectedCountryData = countryOptions.find(
        (country) => country.code === selectedCountry
      );

      formData.append(
        'country',
        selectedCountryData?.name || selectedCountry
      );

      formData.append('message', message);

      if (selectedFile) {
        formData.append('file', selectedFile);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit the form.');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Your message has been sent successfully.',
      });

      // Reset form
      setName('');
      setEmail('');
      setPhoneNumber('');
      setSelectedCountry('IN');
      setSelectedPhoneCountry('IN');
      setMessage('');
      setSelectedFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

    } catch (error) {
      console.error('CONTACT FORM ERROR:', error);

      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="container-fluid w-100 p-0 section-spacing-lg">
      <div className="section-contact">
        <div className="contact-image">
          <img src={contactBg.src} alt="" />
        </div>

        <div className="container contact-container-custom" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row">

            {/* ---- LEFT: Heading + Contact Items ---- */}
            <div className="col-lg-6">
              <div className="col-left">

                <div className="heading-section mb-24">
                  <div className="contact-badge-pill effectFade fadeUp mb-12 heading-sub fw-semibold">
                    {/* <span className="dot"></span> */}
                    Contact
                  </div>
                  <h2 className="heading-title effectFade fadeRotateX">
                    Let's Build <br /> Intelligent Things
                  </h2>
                </div>

                <div className="contact-items-wrapper">
                  {/* Email */}
                  <div className="contact-item effectFade fadeRotateX">
                    <div className="contact-item-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div className="contact-item-content">
                      <div className="contact-item-title">E-mail address</div>
                      <a href="mailto:info@vginfotech.ai" className="contact-item-text">info@vginfotech.ai</a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="contact-item effectFade fadeRotateX">
                    <div className="contact-item-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                      </svg>
                    </div>
                    <div className="contact-item-content">
                      <div className="contact-item-title">Phone number</div>
                      <a href="tel:+916262686865" className="contact-item-text">+91 62626 86865</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ---- RIGHT: Form ---- */}
            <div className="col-lg-6">
              <form className="form-contact effectFade fadeUp" onSubmit={handleSubmit}>
                <h3 className="heading fw-semibold">Fill this form below</h3>

                <fieldset className="mb-21">
                  <label className="fw-semibold text-body-3">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </fieldset>

                <fieldset className="mb-21">
                  <label className="fw-semibold text-body-3">Email address</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </fieldset>

                <fieldset className="mb-21">
                  <label className="fw-semibold text-body-3">
                    Your Phone
                  </label>

                  <div className="phone-input-wrapper">

                    <CountryDropdown
                      value={selectedPhoneCountry}
                      onChange={setSelectedPhoneCountry}
                      options={countryOptions}
                      mode="phone"
                    />

                    <input
                      type="tel"
                      className="phone-number-input"
                      value={phoneNumber}
                      onChange={(e) => {
                        // Allow digits only
                        const value = e.target.value.replace(/\D/g, '');
                        setPhoneNumber(value);
                      }}
                      placeholder="Enter your phone number"
                      inputMode="numeric"
                      autoComplete="tel"
                      pattern="[0-9]*"
                      required
                    />

                  </div>
                </fieldset>

                <fieldset className="mb-21">
                  <label className="fw-semibold text-body-3">
                    Country
                  </label>

                  <CountryDropdown
                    value={selectedCountry}
                    onChange={setSelectedCountry}
                    options={countryOptions}
                    mode="country"
                  />
                </fieldset>

                <fieldset className="mb-18">
                  <label className="fw-semibold text-body-3">More About The Project</label>
                  <textarea
                    name="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </fieldset>

                <div
                  className="attachment d-flex gap-8 align-items-center"
                  onClick={handleAttachmentClick}
                  role="button"
                  tabIndex={0}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="attachment-icon"
                  >
                    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                  </svg>

                  <div className="attachment-text fw-semibold">
                    {selectedFile ? selectedFile.name : 'Add an Attachment'}
                  </div>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.webp,application/pdf,image/jpeg,image/png,image/webp"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <div className=" d-flex justify-center">
                  <button
                    type="submit"
                    className="tf-btn w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Message'}
                  </button>
                </div>
                {submitStatus && (
                  <div className={`contact-form-status ${submitStatus.type}`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
