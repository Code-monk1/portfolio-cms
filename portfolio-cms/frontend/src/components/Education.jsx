function Education() {
  const education = [
    { level: 'Class 10th', institution: 'XYZ School', year: 2016, percentage: 95 },
    { level: 'Class 12th', institution: 'ABC School', year: 2018, percentage: 93 },
    { level: 'Graduation', institution: 'IIT BHU', year: 2023, percentage: 89 }
  ];

  return (
    <div>
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>{`\${edu.level} - \${edu.institution} (\${edu.year}) - \${edu.percentage}%`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
