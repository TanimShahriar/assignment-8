const Category = ({ category }) => {

  const { id, categori, title, image, card_bg, text_color, category_bg } = category;

  return (
    <div style={{ backgroundColor: card_bg }}
      className={`rounded-lg border-purple-600 cursor-pointer`}>
      <figure><img className="w-full mb-5" src={image} alt="Shoes" /></figure>
      <div className="">
        <h2 style={{ backgroundColor: category_bg, color: text_color }} className="mx-4 w-1/4 px-3 font-medium py-1 rounded-md ">{categori}</h2>
        <p className={`text-${text_color} mx-4 mb-4 mt-2 font-medium text-xl`}>{title}</p>
      </div>
    </div>
  );
};

export default Category;

