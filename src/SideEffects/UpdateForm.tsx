interface User {
  id: number;
  name: string;
}

interface Props {
  selectedData: User[];
  setNewName: string;
}

const UpdateForm = ({ selectedData, setNewName }: Props) => {
  const { id, name } = selectedData[0];

  return (
    <form action=''>
      <label htmlFor='id' className='form-label'>
        Id
        <input
          value={id}
          disabled
          id='id'
          type='id'
          className='form-control mr-2'
        />
      </label>
      <label htmlFor='name' className='form-label'>
        Name
        <input
          defaultValue={name}
          id='name'
          type='name'
          className='form-control mb-2'
          onChange={(e) => setNewName(e.target.value)}
        />
      </label>
    </form>
  );
};

export default UpdateForm;
