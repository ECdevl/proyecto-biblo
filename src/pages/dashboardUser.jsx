import React, { useState } from 'react';
import "./DashboardUser.css"
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
      <div id="imagecontainer">
      <div id="frontimgdiv">
        <label id="frontimglabel">Imagen de portada: </label>
        <input id="frontimginput" type="file" name="coverImage" accept="image/*" onChange={handleChange} required/><br/>
        <img 
          id="frontimg" 
          src={formData.coverImage ? URL.createObjectURL(formData.coverImage) : ''} 
          style={{ display: formData.coverImage ? 'block' : 'none' }} 
        />
      </div>
      <div id='backimgdiv'>
        <label id="backimglabel">Imagen trasera: </label>
        <input id="backimginput" type="file" name="backImage" accept="image/*" onChange={handleChange} required/><br/>
        <img 
          id="backimg" 
          src={formData.backImage ? URL.createObjectURL(formData.backImage) : ''} 
          style={{ display: formData.backImage ? 'block' : 'none' }} 
        />
      </div>
      </div>
      <div>
        <label>Nombre del libro:</label><br/>
        <input id="nameinput" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder='Titulo'/>
      </div>
      <div>
        <label>Autor:</label><br/>
        <input id="autorinput" type="text" name="author" value={formData.author} onChange={handleChange} required placeholder='Autor del libro'/>
      </div>
      <div>
        <label>Código de barras:</label><br/>
        <input id="inputcode" type="text" name="barcode" value={formData.barcode} onChange={handleChange} placeholder='Codigo de barras (opcional)'/>
      </div>
      <div>
        <label>Disponibilidad:</label><br/>
        <select name="availability" onChange={handleChange}>
          <option value="Disponible">Disponible</option>
          <option value="No Disponible">No disponible</option>
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default DashboardUser;