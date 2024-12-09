import React, { useState } from "react";

const ReferralFeature = () => {
  const [referrals, setReferrals] = useState([]);
  const [form, setForm] = useState({
    name: "",
    dob: "",
    hospitalNumber: "",
    reason: "",
  });

  const addReferral = () => {
    setReferrals((prev) => [...prev, { ...form, status: "Pending" }]);
    setForm({ name: "", dob: "", hospitalNumber: "", reason: "" });
  };

  return (
    <div>
      <h2>Referral Feature</h2>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="DOB"
        value={form.dob}
        onChange={(e) => setForm({ ...form, dob: e.target.value })}
      />
      <input
        placeholder="Hospital Number"
        value={form.hospitalNumber}
        onChange={(e) => setForm({ ...form, hospitalNumber: e.target.value })}
      />
      <input
        placeholder="Reason"
        value={form.reason}
        onChange={(e) => setForm({ ...form, reason: e.target.value })}
      />
      <button onClick={addReferral}>Add Referral</button>
      <ul>
        {referrals.map((ref, index) => (
          <li key={index}>
            {ref.name} - {ref.status}
            <button
              onClick={() =>
                setReferrals((prev) =>
                  prev.map((r, i) =>
                    i === index ? { ...r, status: "Complete" } : r
                  )
                )
              }
            >
              Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReferralFeature;
