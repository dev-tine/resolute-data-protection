import { useMemo, useState } from "react";
import Button from "./Button.jsx";

const initialValues = {
  name: "",
  email: "",
  organization: "",
  serviceInterest: "",
  message: "",
};

export default function ContactForm() {
  const initialFormValues = useMemo(() => {
    const service = new URLSearchParams(window.location.search).get("service");
    return service ? { ...initialValues, serviceInterest: service } : initialValues;
  }, []);

  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateValue = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors = {};

    if (!values.name.trim()) nextErrors.name = "Name is required.";
    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!values.serviceInterest) nextErrors.serviceInterest = "Select a service interest.";
    if (!values.message.trim()) nextErrors.message = "Message is required.";

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
    }
  };

  return (
    <form className="rounded-md border border-navy-900/10 bg-white p-6 shadow-subtle sm:p-8 lg:p-9" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" value={values.name} error={errors.name} onChange={updateValue} required />
        <Field label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={updateValue} required />
        <Field label="Organization" name="organization" value={values.organization} error={errors.organization} onChange={updateValue} />
        <div>
          <label className="text-sm font-semibold text-navy-950" htmlFor="serviceInterest">
            Service Interest <span className="text-navy-700">*</span>
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={values.serviceInterest}
            onChange={updateValue}
            className="mt-2 w-full rounded-md border border-navy-900/15 bg-white px-4 py-3 text-navy-950 outline-none transition placeholder:text-steel-500 focus:border-navy-700 focus:ring-4 focus:ring-navy-700/10"
            aria-invalid={Boolean(errors.serviceInterest)}
          >
            <option value="">Select one</option>
            <option>Cutting Edge Research</option>
            <option>Expert Witness Services</option>
            <option>Advisory Services</option>
            <option>Training Services</option>
            <option>General Inquiry</option>
          </select>
          {errors.serviceInterest && <p className="mt-2 text-sm text-red-700">{errors.serviceInterest}</p>}
        </div>
      </div>

      <div className="mt-6">
        <label className="text-sm font-semibold text-navy-950" htmlFor="message">
          Message <span className="text-navy-700">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={updateValue}
          rows="6"
          className="mt-2 w-full rounded-md border border-navy-900/15 bg-white px-4 py-3 text-navy-950 outline-none transition focus:border-navy-700 focus:ring-4 focus:ring-navy-700/10"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="mt-2 text-sm text-red-700">{errors.message}</p>}
      </div>

      <div className="mt-7 flex flex-col gap-4 border-t border-navy-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit">Send Inquiry</Button>
        <p className="text-sm leading-6 text-steel-700">
          This form validates fields in the browser only.
        </p>
      </div>

      {submitted && (
        <p className="mt-5 rounded-md border border-navy-900/10 bg-steel-100 px-4 py-3 text-sm font-medium text-navy-900">
          Thank you. This prototype confirms the form interaction. Email delivery is not connected yet.
        </p>
      )}
    </form>
  );
}

function Field({ label, name, value, onChange, error, type = "text", required = false }) {
  return (
    <div>
      <label className="text-sm font-semibold text-navy-950" htmlFor={name}>
        {label} {required && <span className="text-navy-700">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-md border border-navy-900/15 bg-white px-4 py-3 text-navy-950 outline-none transition focus:border-navy-700 focus:ring-4 focus:ring-navy-700/10"
        aria-invalid={Boolean(error)}
      />
      {error && <p className="mt-2 text-sm text-red-700">{error}</p>}
    </div>
  );
}
