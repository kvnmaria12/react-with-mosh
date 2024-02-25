import { useState } from 'react';
import Drink from './components/Drink';
import Message from './components/Message';
import { produce } from 'immer';
import MutatingExmpls from './MutatingExmpls';
import Exercise from './Exercise';
import ExapandableText from './components/ExapandableText';
import Form from './components/Form';
import ExpenseForm from './components/expense-tracker/ExpenseForm';

import ExpenseApp from './components/expense-tracker/ExpenseApp';
import SideApp from './SideEffects/SideApp';
import ProductListApp from './SideEffects/ProductListApp';
import EffectCleanUp from './SideEffects/Effect-Clean-Up';
import FetchData from './SideEffects/Fetch-Data';

function App() {
  // mutating with arrays
  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handleClickArrays = () => {
    // Add
    setTags([...tags, 'exiciting']);

    // Remove
    setTags(tags.filter((tag) => tag != 'happy'));

    // Update
    setTags(tags.map((tag) => (tag == 'happy' ? 'happniess' : tag)));
  };

  // mutating deeply nested objects
  const [customer, setCustomer] = useState({
    name: 'John',
    address: {
      city: 'San Franciso',
      zipCode: 94111,
    },
  });

  /**
   * while mutating deeply nested objects, the new object
   * should not depend on the old object.
   * We should have a brand new object
   *
   * Note: Avoid nested state object
   */
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  // Mutating an Array of Objects
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: 'Bug 1',
      fixed: false,
    },
    {
      id: 2,
      title: 'Bug 2',
      fixed: false,
    },
  ]);

  // using immer js
  const handleClickArrayOfObject = () => {
    // setBugs(bugs.map((bug) => (bug.id == 1 ? { ...bug, fixed: true } : bug)));

    // using immer js
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id == 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {/* <Message />
      <Message />
      <Message /> */}
      {/* <Drink /> */}
      {/* <MutatingExmpls /> */}
      {/* <Exercise /> */}
      {/* <ExapandableText maxChars={150}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.here are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected
        humour, or randomised words which don't look even slightly believable.
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrassing hidden in the middle of text. All the
        Lorem Ipsum generators on the Internet tend to repeat predefined chunks
        as necessary, making this the first true generator on the Internet. It
        uses a dictionary of over 200 Latin words, combined with a handful of
        model sentence structures, to generate Lorem Ipsum which looks
        reasonable. The generated Lorem Ipsum is therefore always free from
        repetition, injected humour, or non-characteristic words etc. 5
        paragraphs words bytes lists Start with 'Lorem ipsum dolor sit amet...
      </ExapandableText> */}
      {/* <Form /> */}
      {/* <ExpenseApp /> */}
      {/* <SideApp /> */}
      {/* <ProductListApp /> */}
      {/* <EffectCleanUp /> */}
      {/* <FetchData /> */}
    </div>
  );
}

// called as pure function
/**
 * function with same input
 * should always return the same output
 * is called as pure function
 */
function multiplyBy2(input: number): number {
  return input * 2;
}

// let count = 0;
// function incremenet() {
//   count++;
//   console.log(count);
// }

// incremenet();
// incremenet();
// incremenet();

// const result = multiplyBy2(1);

export default App;
