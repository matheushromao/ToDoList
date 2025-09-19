function Tasks(props) {
  console.log(props);
  return (
    <h1>
      {props.tasks.map((task, index) => (
        <p key={index}>{task.title}</p>
      ))}
    </h1>
  );
}

export default Tasks;
