import "./styles.css";

export default function App() {
  function displayPerson(student) {
    return (
      <div>
        {" "}
        <h2>First: {student.first}</h2>{" "}
      </div>
    );

    //creat a map function to
  }

  // this will be an array that will store each individual through objects
  let people = [
    {
      first: "Allen",
      proNouns: "He/His",
      school: "Williamsburg Charter High School"
    },
    {
      first: "Joe",
      proNouns: "He/His",
      school: "Williamsburg Charter High School"
    }
  ];

  // this is a single person... for jsx we need to include {}
  return (
    <div className="App">
      <div class="row">
        {displayPerson(people[0])}
        {displayPerson(people[1])}
      </div>
    </div>
  );
}
