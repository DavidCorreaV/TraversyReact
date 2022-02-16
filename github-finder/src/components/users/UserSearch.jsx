import { useState, useContext } from "react";
import GithubContext from "../../context/Github/GithubContext";
const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 ls:grid-cols-2 md:grids-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input-lg input text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                type="submit"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {users.length > 0 && (
          <button onClick={clearUsers} className=" btn btn-ghost btn-lg">
            CLEAR
          </button>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
