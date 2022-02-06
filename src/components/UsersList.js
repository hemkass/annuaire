import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isEmpty } from "./isEmpty";

const UsersLists = () => {
  const user = useSelector((state) => state.userReducer);

  return (
    !isEmpty(user) && (
      <>
        {user.map((user) => {
          return (
            <div key={user.id}>
              <Link to={`/user${user.id}`}>
                <div>{user.name}</div>
              </Link>
            </div>
          );
        })}
      </>
    )
  );
};

export default UsersLists;
