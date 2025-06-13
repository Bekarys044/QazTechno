import { useState } from "react";

function AddProductForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); 
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) return;

    const newProduct = {
      id: Date.now(),
      title,
      price: parseFloat(price),
      image,
      description,
    };

    onAdd(newProduct);

    setTitle("");
    setPrice("");
    setImage(null);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 bg-white rounded shadow">
      <input
        type="text"
        placeholder="Product title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border input-field  p-2 w-full"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border input-field  p-2 w-full"
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="border input-field   p-2 w-full"
        required
      />
      {image && <img src={image} alt="Preview" className="w-full h-48  object-cover rounded" />}
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border input-field  p-2 w-full"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-red-500 transition-all duration-300 ease-in-out"
      >
        Add Product
      </button>
    </form>
  );
}

export default AddProductForm;
