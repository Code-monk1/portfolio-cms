function AboutMe() {
  return (
    <div style={{ backgroundColor: "white", padding: '20px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
      <h2 style={{ color: "blue", fontSize: '2rem' }}>About Me</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>Hi, I'm <strong>Adarsh Raj</strong>. I'm a B-Tech student in Civil Engineering at <strong>IIT (BHU), Varanasi</strong>, graduating in 2026. I'm passionate about software development, problem-solving, and data structures & algorithms.</p>
      <h3 style={{ color: "purple", marginTop: '20px' }}>Skills</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ background: '#e1ecf4', padding: '8px', margin: '5px', borderRadius: '5px' }}>C, C++, Python</li>
        <li style={{ background: '#e1ecf4', padding: '8px', margin: '5px', borderRadius: '5px' }}>HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, Express.js</li>
        <li style={{ background: '#e1ecf4', padding: '8px', margin: '5px', borderRadius: '5px' }}>SQL, NumPy, pandas, matplotlib</li>
      </ul>
    </div>
  );
}
