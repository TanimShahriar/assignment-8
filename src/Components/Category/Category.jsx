const Category = ({ category }) => {

  const { id, categori, title, image, card_bg, text_color } = category;

  return (
    <div className={`bg-${card_bg} rounded-lg bg-slate-100 border-purple-600 cursor-pointer`}>
      <figure><img className="w-full mb-4" src={image} alt="Shoes" /></figure>
      <div className="">
        <h2 className="mx-4 w-1/4 px-3 font-medium py-1 rounded-md bg-red-100">{categori}</h2>
        <p className={`text-${text_color} mx-4 mb-4 font-medium text-xl`}>{title}</p>
      </div>
    </div>
  );
};

export default Category;

