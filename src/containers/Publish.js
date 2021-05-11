import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const PublishPage = ({ userToken }) => {
  // History
  const history = useHistory();

  // States
  const [productPicture, setProductPicture] = useState();
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCondition, setProductCondition] = useState("");
  const [productCity, setProductCity] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productData, setProductData] = useState();
  const [isSubmit, setIsSubmit] = useState(false);

  // Fonctions handle
  const handlePicture = (event) => {
    setProductPicture(event.target.files[0]);
  };

  const handleTitle = (event) => {
    setProductTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setProductDescription(event.target.value);
  };

  const handlePrice = (event) => {
    setProductPrice(event.target.value);
  };

  const handleCondition = (event) => {
    setProductCondition(event.target.value);
  };

  const handleCity = (event) => {
    setProductCity(event.target.value);
  };

  const handleBrand = (event) => {
    setProductBrand(event.target.value);
  };

  const handleSize = (event) => {
    setProductSize(event.target.value);
  };

  const handleColor = (event) => {
    setProductColor(event.target.value);
  };

  // Fonction handleSubmit et requête
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("picture", productPicture);
    formData.append("title", productTitle);
    formData.append("description", productDescription);
    formData.append("price", productPrice);
    formData.append("condition", productCondition);
    formData.append("city", productCity);
    formData.append("brand", productBrand);
    formData.append("size", productSize);
    formData.append("color", productColor);

    try {
      const response = await axios.post(
        "https://brahim-elba-vinted.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      setProductData(response.data);
      setIsSubmit(true);
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return isSubmit ? (
    <div>L'offre a bien été publiée</div>
  ) : (
    <div className="publish-page">
      <form className="form-publish" onSubmit={handleSubmit}>
        <div>
          <p>Vends ton article</p>
          <input type="file" name="picture" onChange={handlePicture} />
        </div>
        <div>
          <p>Titre</p>
          <input
            type="text"
            name="title"
            placeholder="Exemple : Chemise blanche Zara"
            value={productTitle}
            onChange={handleTitle}
          />
          <p>Décris ton article</p>
          <textarea
            name="description"
            placeholder="Exemple : Taille normalement"
            value={productDescription}
            onChange={handleDescription}
          />
        </div>
        <div>
          <p>Marque</p>
          <input
            type="text"
            name="brand"
            placeholder="Exemple : Zara"
            value={productBrand}
            onChange={handleBrand}
          />
          <p>Taille</p>
          <input
            type="text"
            name="size"
            placeholder="Exemple : L / 40 / 12"
            value={productSize}
            onChange={handleSize}
          />
          <p>Couleur</p>
          <input
            type="text"
            name="color"
            placeholder="Exemple : Blanc"
            value={productColor}
            onChange={handleColor}
          />
          <p>État</p>
          <input
            type="text"
            name="condition"
            placeholder="Exemple : Neuf avec étiquette"
            value={productCondition}
            onChange={handleCondition}
          />
          <p>Lieu</p>
          <input
            type="text"
            name="city"
            placeholder="Exemple : Paris"
            value={productCity}
            onChange={handleCity}
          />
        </div>
        <div>
          <p>Prix</p>
          <div>
            <input
              type="text"
              name="price"
              value={productPrice}
              onChange={handlePrice}
            />
            <label htmlFor="check-echange">
              <input type="checkbox" id="check-echange" />
              <p>Je suis intéressé(e) par les échanges</p>
            </label>
          </div>
        </div>

        <input type="submit" value="Publier" />
      </form>
    </div>
  );
};

export default PublishPage;
