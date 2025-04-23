import React, { useState } from 'react';

function DashboardUser({ onSubmitBookData }) {
  const [formData, setFormData] = useState({
    coverImage: null,
    backImage: null,
    name: '',
    author: '',
    barcode: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitBookData(formData); // Pasar los datos al componente padre
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Imagen de portada:</label>
        <input type="file" name="coverImage" accept="image/*" onChange={handleChange} />
      </div>
      <div>
        <label>Imagen trasera:</label>
        <input type="file" name="backImage" accept="image/*" onChange={handleChange} />
      </div>
      <div>
        <label>Nombre del libro:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Autor:</label>
        <input type="text" name="author" value={formData.author} onChange={handleChange} />
      </div>
      <div>
        <label>Código de barras:</label>
        <input type="text" name="barcode" value={formData.barcode} onChange={handleChange} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default DashboardUser;