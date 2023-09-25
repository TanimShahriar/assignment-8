import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    fetch('Donation.json')
      .then(res => res.json())
      .then(data => setCategories(data))

  }, [])

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mb-2 mt-4">Category List: {categories.length}</h2>
      <div className='grid grid-cols-4 gap-4 container mx-auto my-5'>
        {
          categories.map(category => <Category key={category.id} category={category}></Category>)
        }
      </div>

    </div>
  );
};

export default Categories;