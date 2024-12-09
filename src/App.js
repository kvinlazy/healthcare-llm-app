import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import ReferralFeature from "./ReferralFeature";
import Dashboard from "./Dashboard";

const App = () => {
  const [metrics, setMetrics] = useState({
    messages: 10,
    responseTime: 5,
    referrals: 3,
  });

  return (
    <div className="container">
      <h1 className="center-align">Communication Platform</h1>

      {/* Tabs Navigation */}
      <div className="tabs">
        <ul className="tabs">
          <li className="tab col s6"><a href="#tab1">Chat Window</a></li>
          <li className="tab col s6"><a href="#tab2">Referral Feature</a></li>
        </ul>
      </div>

      {/* Tab Content */}
      <div id="tab1" className="col s12">
        <ChatWindow />
      </div>

      <div id="tab2" className="col s12">
        <ReferralFeature />
      </div>

    </div>
  );
};

export default App;
