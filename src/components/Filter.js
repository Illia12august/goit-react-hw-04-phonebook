export default function Filter({ propValue, filter }) {
    return (
      <div>
        <label>Find contacts by name</label>
  
        <input value={propValue} placeholder="Search..." onChange={e => filter(e.target.value)}></input>
      </div>
    );
  }
  