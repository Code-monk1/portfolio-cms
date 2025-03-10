function Education() {
  const education = [
    { level: 'B-Tech Civil Engineering', institution: 'IIT (BHU), Varanasi', year: 2026, percentage: 7.78 },
    { level: 'CBSE (XII)', institution: 'Jawahar Navodaya Vidyalaya, Siwan', year: 2022, percentage: 92.8 },
    { level: 'CBSE (X)', institution: 'Jawahar Navodaya Vidyalaya, Siwan', year: 2020, percentage: 95.4 }
  ];

  return (
    <div style={{ backgroundColor: "pink", padding: '20px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
      <h2 style={{ color: "black", fontSize: '2rem' }}>Education</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {education.map((edu, index) => (
          <li key={index} style={{ background: '#e1ecf4', padding: '8px', margin: '5px', borderRadius: '5px' }}>{`${edu.level} - ${edu.institution} (${edu.year}) - ${edu.percentage}%`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Education;

