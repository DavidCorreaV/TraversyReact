import useLocalStorage from "../hooks/useLocalStorage";
const CustomHookExample2 = () => {
  const [task, setTask] = useLocalStorage("task", "");
  return (
    <div>
      <form className="w-25">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Task
          </label>
          <input
            className="form-control"
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default CustomHookExample2;
