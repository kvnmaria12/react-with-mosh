import { useState, useEffect } from 'react';
import UpdateForm from './UpdateForm';
import { CanceledError } from '../services/api-client';
import userService, { User } from '../services/user-service';

const FetchData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setErrror] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isFormShown, setIsFormShown] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [newName, setNewName] = useState<string>('');

  useEffect(() => {
    // using asyn/await
    // const fetchUsers = async () => {
    //   try {
    //     const res = await axios.get<User[]>(
    //       'https://jsonplaceholder.typicode.com/users',
    //       {
    //         signal: controller.signal,
    //       }
    //     );
    //     setUsers(res.data);
    //   } catch (err) {
    //     setErrror((err as AxiosError).message);
    //   }
    // };

    const { request, cancel } = userService.getAllUsers();

    request
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrror(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  const deleteUser = (user: User) => {
    const newUsers = users.filter((u) => u.id != user.id);
    setUsers(newUsers);

    userService.deleteUser(user.id).catch((err) => {
      setErrror(err.message);
    });
  };

  // const addUser = () => {
  //   const names = ['kevin', 'daniel', 'viji', 'david'];
  //   const newUser = {
  //     id: Math.floor(Math.random() * 100),
  //     name: names[Math.floor(Math.random() * 4)],
  //   };

  //   setUsers([...users, newUser]);

  //   // axios
  //   //   .post('https://jsonplaceholder.typicode.com/users', newUser)
  //   //   .then((res) => setUsers([res.data, ...users]));
  // };

  const updateUser = (user: User) => {
    const updatedUser = { ...user, name: user.name + '!' };
    setIsFormShown((prev) => !prev);
    const selectedData = users.filter((u) => u.id == user.id);
    setSelectedData(selectedData);
  };

  function submitHandler<T>(selectedData: T) {
    console.log(selectedData);
    const updatedUser = users.map((user) =>
      user.id == selectedData[0].id ? { ...user, name: newName } : user
    );
    setUsers(updatedUser);
    setIsFormShown(false);
  }

  return (
    <>
      {error && <p className='text-danger'>{error}</p>}
      {isLoading && <h1 className='text-center text-primary'>Loading...</h1>}

      {isFormShown && (
        <UpdateForm
          selectedData={selectedData}
          setSelectedData={setSelectedData}
          setNewName={setNewName}
        />
      )}
      {isFormShown && (
        <button
          className='btn btn-primary mb-3'
          onClick={() => {
            // addUser();
            submitHandler(selectedData);
          }}
        >
          Submit
        </button>
      )}

      <ul className='list-group'>
        {users.map((user) => (
          <li
            key={user.id}
            className='list-group-item d-flex justify-content-between'
          >
            {user.name}
            <div>
              <button
                className='btn btn-outline-primary mr-4'
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                onClick={() => deleteUser(user)}
                className='btn btn-outline-danger'
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchData;
