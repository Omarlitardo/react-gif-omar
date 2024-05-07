import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Simpsons"]);

  // console.log(categories);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // console.log(newCategory);
    // categories.push(newCategory);

    setCategories([...categories, newCategory]);
    // setCategories( cat=>[...cat, 'valorant']);
  };

  return (
    <>
      {/* { titulo} */}
      <h1>GifExpertApp</h1>

      <AddCategory
        //   setCategories={setCategories}
        // currentCategories={categories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {categories.map((category) => (
        <GifGrid 
        key={category} 
        category={category} />
      ))}
    </>
  );
};


