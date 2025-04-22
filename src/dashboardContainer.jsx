import React, { useState } from 'react';
import DashboardUser from './pages/dashboardUser';
import Card from './Card';

function dashboardContainer() {
  const [data, setData] = useState([]);

  const handleSave = (formData) => {
    setData((prevData) => [...prevData, formData]);
  };

  return (
    <div>
      <DashboardUser onSave={handleSave} />
      <div className="cards-container">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default dashboardContainer;