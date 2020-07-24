import React from 'react';


export default function Form() {
    const [pizzaForm, setPizzaForm] = useState({
        name: "",
        size: "",
        cheese: "",
        spinach: "",
        pepperoni: "",
        sausage: "",
        extraCheese: "",
        specialInstructions: "",
    });

    const initalError = {
        name: ""
    }

    const [disabledB, setDisabledB] = useState(true)
    console.log(disabledB)

    let formSchema = yup.object().shape({
        name: yup.string().required("Name must be at least 2 characters"),

        size: yup.string().required("Size is required!"),
        cheese: yup.string().required(),
        spinach: yup.string().required(),
        pepperoni: yup.string().required(),
        sausage: yup.string().required(),
        extraCheese: yup.string().required(),
        specialInstructions: yup.string().required(),
    });

    const [error, setError] = useState(initalError);

    const formSubmit = (event) => {
        event.preventDefault();
    };

    const validate = (event) => {
        yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then((valid) => {
                setError({
                    ...error,
                    [event.target.name]: "",
                });
            })
            .catch((err) => {
                console.log(err.errors);
                setError({
                    ...error,
                    [event.target.name]: err.errors[0],
                });
            });
    };

    useEffect(() => {
        formSchema.isValid(pizzaForm).then(valid => {
            console.log('valid?', valid);
            setDisabledB(!valid);
            console.log(valid)
        })
    }, [pizzaForm])

    const inputChange = (event) => {
        console.log(event.target.name);
        event.persist();
        validate(event);
        let value =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value;
        setPizzaForm({ ...pizzaForm, [event.target.name]: value });
    };

    return (

        <PizzaForm className="pizzaform" onSubmit={formSubmit} />
        <label htmlFor="name" className="name">
            Name Please
 	       </label>
        <input
            type="text"
            placeholder="Enter Name Here"
            className="text"
            name="name"
            onChange={inputChange}
        />

 { error.name.length > 0 ? <p className="error">{error.name}</p> : null }
 
    <label HTMLFor="size" className="size">
        Choice of Size
       </label>
        <select id="size" className="options" name="size" onChange={inputChange}>
            <option value="Select">Choose One</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
        </select>

        <h2 className="sauce">Choice Your Sauce</h2>
        <div className="Choose"></div>
        <label HTMLFor="Garlic Butter">Garlic Butter</label>
        <input
            type="radio"
            id="Garlic Butter"
            name="garlic"
            onChange={inputChange}
        />

        <label HTMLFor="Spicy">Spicy Sauce</label>
        <input type="radio" id="Spicy Sauce" name="Spicy" onChange={inputChange} />


        <h2 className="sauce">Add Toppings</h2>
        <div className="selection">
            <label HTMLFor="Garlic Butter">Pepperoni</label>
            <input
                type="checkbox"
                id="Pepperoni"
                name="pepperoni"
                onChange={inputChange}
            />

            <label HTMLFor="Sausage">Sausage</label>
            <input
                type="checkbox"
                id="Sausage"
                name="sausage"
                onChange={inputChange}
            />


            <label HTMLFor="Extra Cheese">Extra Cheese</label>
            <input
                type="checkbox"
                id="extracheese"
                name="extracheese"
                onChange={inputChange}
            />
        </div>

        <label HTMLFor="SpecialInstructions" className="instruction">
            Extra Instructions On Order
       </label>
        <textarea
            placeholder="Anything you need to tell us?"
            name="specialInstructions"
            onChange={inputChange}
        />

        <Link to="/pizzaForm/confirmation"><button className="btnOrder" disabled={disabledB}>Add To Order</button></Link>
        <PizzaForm />
   
   );
}
