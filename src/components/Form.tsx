import { FormEvent, useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(3, { message: 'Name must have atleast 3 characters' }),
  age: z
    .number({ invalid_type_error: 'Age field is required' })
    .min(18, { message: 'Age must have atleast 18 ' }),
});

/**
 * zod has a method that allows to extract
 * the type from a schema object
 */

// returns Typescript Type
type FormData = z.infer<typeof schema>;

// interface FormData {
//   name: string;
//   age: number;
// }

const Form = () => {
  // Storing value with useRef
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  // Storing values with useState
  //   const [name, setName] = useState('');
  //   const [age, setAge] = useState('');

  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     // if (nameRef.current != null) {
  //     //   console.log(nameRef.current.value);
  //     // }

  //     // if (ageRef.current != null) {
  //     //   console.log(ageRef.current.value);
  //     // }
  //   };

  //   working with useForm
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          //   ref={nameRef}
          //   value={name}
          //   onChange={(e) => setName(e.target.value)}
          {...register('name')}
          id='name'
          type='text'
          className='form-control'
        />
        {errors.name && <p className='text-danger'>{errors.name.message}</p>}
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input
          //   ref={ageRef}
          //   value={age}
          //   onChange={(e) => setAge(e.target.value)}
          {...register('age', { valueAsNumber: true })}
          id='age'
          type='number'
          className='form-control'
        />
        {errors.age && <p className='text-danger'>{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default Form;
