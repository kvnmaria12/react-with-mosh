import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import categories from '../categories';

const schema = z.object({
  description: z
    .string()
    .min(3, { message: 'description should have min 3 characters' })
    .max(50, { message: 'description should have max 50 characters' }),
  amount: z
    .number({ invalid_type_error: 'amout is required' })
    .min(10, { message: 'amount should have min 10 characters' })
    .max(100_000, { message: 'amount should have max 100 characters' }),

  category: z.enum(categories, {
    errorMap: () => ({ message: 'Category is required' }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

// interface ExpenseData {
//   description: string;
//   amount: number;
//   category: string;
// }

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input
          {...register('description')}
          id='description'
          type='text'
          className='form-control'
        />
        {errors.description && (
          <p className='text-danger'>{errors.description.message}</p>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='amount' className='form-label'>
          Amount
        </label>
        <input
          {...register('amount', { valueAsNumber: true })}
          id='amount'
          type='number'
          className='form-control'
        />
        {errors.amount && (
          <p className='text-danger'>{errors.amount.message}</p>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='category' className='form-label'>
          Category
        </label>
        <select {...register('category')} id='category' className='form-select'>
          <option value=''>--Please choose an option--</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className='text-danger'>{errors.category.message}</p>
        )}
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default ExpenseForm;
