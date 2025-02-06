import Hotspot from '../../components/Hotspot';

export default function Room1() {
  return (
    <div style={{ position: 'relative', height: '500px', backgroundColor: '#f0f0f0', padding: "40px" }}>
      <h1>Welcome to Room 1</h1>
      <p>This room contains hotspots with additional information.</p>
      <p>Click on these Dots</p>

      {/* Add hotspots */}
      <Hotspot
        position={{ top: '50px', left: '100px' }}
        info="This is the first hotspot with important information."
      />
      <Hotspot
        position={{ top: '150px', left: '250px' }}
        info="This is the second hotspot with more details."
      />
      <Hotspot
        position={{ top: '250px', left: '400px' }}
        info="Here's another hotspot with some info."
      />
    </div>
  );
}