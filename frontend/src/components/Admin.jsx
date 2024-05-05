import { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Admin.css";

function Admin() {
  const [drinks, setDrinks] = useState([]);
  const [submitError, setSubmitError] = useState(false);
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");
  const [formId, setFormId] = useState("");
  const [formAction, setFormAction] = useState("add");
  const [formTitle, setFormTitle] = useState("");
  const [formImg, setFormImg] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formIngredients, setFormIngredients] = useState([]);
  const [messageInfo, setMessageInfo] = useState("");

  const formRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:8080/drinks")
      .then((response) => response.json())
      .then((result) => {
        setDrinks(result);
        window.scrollTo(0, 0);
      });
  }, []);

  const formValidation = () => {
    if (
      !formId ||
      !formTitle ||
      !formImg ||
      !formDescription ||
      formIngredients.length === 0
    ) {
      setSubmitError(true);
      setSubmitErrorMessage("Vänligen fyll i alla obligatoriska fält.");
    } else {
      setSubmitError(false);
      setSubmitErrorMessage("");
    }
  };

  const handleEdit = (drink) => {
    setFormId(drink.id);
    setFormTitle(drink.title);
    setFormImg(drink.image);
    setFormDescription(drink.description);
    setFormIngredients(drink.ingredients);
    setFormAction("edit");
    setSubmitError(false);

    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDelete = (drink) => {
    const confirmDelete = window.confirm("Vill du ta bort denna dryck?");
    if (confirmDelete) {
      fetch("http://localhost:8080/drink/" + drink.id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
          const updatedDrinks = drinks.filter((item) => item.id !== drink.id);
          setDrinks(updatedDrinks);
          setMessageInfo("Du har raderat en artikel framgångsrikt.");
        });
    }
  };

  const handleSubmitClick = () => {
    if (formAction === "add") {
      let formData = {
        id: formId,
        title: formTitle,
        image: formImg,
        description: formDescription,
        ingredients: formIngredients,
      };
      fetch("http://localhost:8080/drink", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then(() => {
          setDrinks([...drinks, formData]);

          clearFormFields();
          setMessageInfo("Du har lagt till en artikel framgångsrikt.");
          window.scrollTo(0, 0);
        });
    } else if (formAction === "edit") {
      let formData = {
        title: formTitle,
        image: formImg,
        description: formDescription,
        ingredients: formIngredients,
      };
      fetch("http://localhost:8080/drink/" + formId, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then(() => {
          const index = drinks.findIndex((item) => item.id === formId);
          if (index !== -1) {
            drinks[index].title = formTitle;
            drinks[index].image = formImg;
            drinks[index].description = formDescription;
            drinks[index].ingredients = formIngredients;
            clearFormFields();
            setMessageInfo("Du har uppdaterad en artikel framgångsrikt.");

            window.scrollTo(0, 0);
          }
        });
    }
  };
  const clearFormFields = () => {
    setFormId("");
    setFormTitle("");
    setFormImg("");
    setFormDescription("");
    setFormIngredients([]);
    setFormAction("add");
  };

  return (
    <>
      <div className="table-container">
        {messageInfo && (
          <div id="message-info" className="alert alert-info" role="alert">
            {messageInfo}
          </div>
        )}
        <table className="table table-striped table-container">
          <thead>
            <tr>
              <td>Id</td>
              <td>Title</td>
              <td>Image</td>
              <td>Description</td>
              <td>Ingredients</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {drinks.map((drink, index) => (
              <tr key={index}>
                <td>{drink.id}</td>
                <td>{drink.title}</td>
                <td>
                  <img width="50" src={drink.image} />
                </td>
                <td>{drink.description}</td>
                <td>
                  <ul>
                    {[...drink.ingredients].map((ingredient) => (
                      <li key={drink.id + "-" + ingredient}>{ingredient}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <button
                    onClick={() => handleEdit(drink)}
                    type="button"
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(drink)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="form-container" ref={formRef}>
        {submitError && (
          <div className="invalid-feedback">{submitErrorMessage}</div>
        )}
        <div>
          <label htmlFor="action-type" className="form-label">
            Action:
          </label>
          <select
            id="action-type"
            className="form-control"
            value={formAction}
            onChange={(event) => {
              setFormAction(event.target.value);
              formValidation();
            }}
          >
            <option value="add">Add</option>
            <option value="edit">Edit</option>
          </select>
          <label htmlFor="form-id" className="form-label">
            Id:
          </label>
          <input
            id="form-id"
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={formId}
            onChange={(event) => {
              setFormId(event.target.value);
              formValidation();
            }}
          />
          <label htmlFor="form-title" className="form-label">
            Title:
          </label>
          <input
            id="form-title"
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={formTitle}
            onChange={(event) => {
              setFormTitle(event.target.value);
              formValidation();
            }}
          />
          <label htmlFor="form-img" className="form-label">
            Image:
          </label>
          <input
            id="form-img"
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={formImg}
            onChange={(event) => {
              setFormImg(event.target.value);
              formValidation();
            }}
          />
          <label htmlFor="form-description" className="form-label">
            Description:
          </label>
          <textarea
            id="form-description"
            className="form-control"
            rows="3"
            cols="15"
            value={formDescription}
            onChange={(event) => {
              setFormDescription(event.target.value);
              formValidation();
            }}
          ></textarea>
          <label htmlFor="form-ingredients" className="form-label">
            Ingredients:
          </label>
          <textarea
            id="form-ingredients"
            className="form-control"
            rows="3"
            cols="15"
            value={formIngredients.join(",")}
            onChange={(event) => {
              setFormIngredients(event.target.value.split(","));
              formValidation();
            }}
          ></textarea>
          <button
            disabled={submitError}
            onClick={handleSubmitClick}
            type="buton"
            className="btn btn-success"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
export default Admin;
