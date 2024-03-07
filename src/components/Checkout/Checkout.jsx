import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import './Checkout.css';
import { db } from '../../firebase/config';

const Checkout = () => {
    const { cart, totalCart, emptyCart } = useContext(CartContext);

    const [inputName, setInputName] = useState("");
    const [lastName, setLastName] = useState("");
    const [numberPhone, setNumberPhone] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [address, setAddress] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [emailValidated, setEmailValidated] = useState(false);
    const [orderId, setOrderId] = useState("");
    const [error, setError] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [hasCompletedPurchase, setHasCompletedPurchase] = useState(false);

    useEffect(() => {
        if (cart.length <= 0 && !hasCompletedPurchase) {
            emptyCart();
        }
    }, [cart, emptyCart, hasCompletedPurchase]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (/^[A-Za-z\s]*$/.test(value)) {
            if (name === 'nombre' && value.length <= 20) {
                setInputName(value);
                setError("");
            } else if (name === 'apellido' && value.length <= 20) {
                setLastName(value);
                setError("");
            }
        } else {
            setError("El nombre y el apellido solo pueden contener letras.");
        }
    };
    
    const handlePhoneChange = (e) => {
        const { value } = e.target;
        const numbers = /^[0-9\b]+$/;
        if (value === '' || numbers.test(value)) {
            setNumberPhone(value);
            setError("");
        } else {
            setError("El teléfono solo puede contener números.");
        }
    };

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setEmail(value);
        
        setEmailValidated(false);
    
        if (isValidEmail && value.trim().length === 0) {
            setError("");
        }
    };

    const handleConfirmEmailChange = (e) => {
        const { value } = e.target;
        if (value.length <= 30) {
            setConfirmEmail(value);
        }
    };

    const handleBlur = () => {
        if (email.trim().length > 0 && !emailValidated) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setIsValidEmail(emailPattern.test(email));

            setEmailValidated(true);
        }
    };

    const formFunction = (event) => {
        event.preventDefault();

        if (!inputName || !lastName || !numberPhone || !email || !confirmEmail || !address) {
            setError("Es necesario que completes todos los campos solicitados.");
            return;
        }

        if (email !== confirmEmail) {
            setError("Los correos electrónicos no coinciden.");
            return;
        }

        setError("");

        const order = {
            items: cart.map((orderItems) => ({
                id: orderItems.products.id,
                name: orderItems.products.name,
                amount: orderItems.amount
            })),
            total: totalCart(),
            date: new Date(),
            inputName,
            lastName,
            numberPhone,
            email
        }
        Promise.all(
            order.items.map(async (orderProduct) => {
                const productRef = doc(db, "products", orderProduct.id)
                const productDoc = await getDoc(productRef)
                const actuallyStock = productDoc.data().stock

                await updateDoc(productRef, {
                    stock: actuallyStock - orderProduct.amount
                })
            })
        )
        .then(() => {
            addDoc(collection(db,"orders"), order)
            .then((docRef ) => {
                setOrderId(docRef.id)
                emptyCart()
                setIsSubmitted(true);
                setHasCompletedPurchase(true);
            })
            .catch((error) => {
                console.log(error);
                setError("Se produjo un error al crear la orden de compra")
            })
        })
        .catch((error) => {
            console.log(error);
            setError("No se ha podido actualizar el stock, estamos trabajando para solucionarlo")
        })
    }

    return (
        <div className='checkOut'>
            {cart.length > 0 && !isSubmitted && (
                <form className='checkoutFormContainer' onSubmit={formFunction}>
                    <div className='checkoutProductsContainer'>
                        {cart.map((cartProducts) => {
                            const totalPrice = cartProducts.products.price * cartProducts.amount;
                            return (
                                <div className='checkoutProducts' key={cartProducts.products.id}>
                                    <p className='checkoutProductsInfo'>
                                        {cartProducts.products.name} x{cartProducts.amount}
                                        <span> UYU {totalPrice}</span>
                                    </p>
                                    <hr />
                                </div>
                            );
                        })}
                        <p className='checkoutTotalPrice'>
                            Precio total: UYU {cart.reduce((total, cartProducts) => total + (cartProducts.products.price * cartProducts.amount), 0)}
                        </p>
                    </div>
                    <h2 className='checkoutTitle'>
                        Ingrese sus datos
                    </h2>
                    <div className='checkoutFormContent'>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            name='nombre'
                            type="text"
                            value={inputName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='checkoutFormContent'>
                        <label htmlFor="apellido">Apellido</label>
                        <input
                            name='apellido'
                            type="text"
                            value={lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='checkoutFormContent'>
                        <label htmlFor="telefono">Teléfono</label>
                        <input
                            name='telefono'
                            type="text"
                            value={numberPhone}
                            onChange={handlePhoneChange}
                            maxLength={20}
                        />
                    </div>
                    <div className='checkoutFormContent'>
                        <label htmlFor="email">Email</label>
                        <input
                            name='email'
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            onBlur={handleBlur}
                            maxLength={35}
                        />
                        {!isValidEmail && emailValidated && <p className='emailError'>Por favor, introduce un correo electrónico válido.</p>}
                    </div>
                    <div className='checkoutFormContent'>
                        <label htmlFor="confirmarEmail">Confirmación de email</label>
                        <input
                            name='confirmarEmail'
                            type="email"
                            value={confirmEmail}
                            onChange={handleConfirmEmailChange}
                            maxLength={35}
                        />
                    </div>
                    <div className='checkoutFormContent'>
                        <label htmlFor="direccion">Dirección</label>
                        <input
                            name='direccion'
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            maxLength={30}
                        />
                    </div>
                    <div className='checkoutSubmitDiv'>
                        <button className='checkoutSubmit' type="submit">Completar compra</button>
                    </div>
                </form>
            )}

            {error && <p className='checkoutError'>{error}</p>}

            {orderId && (
                <div className='order'>
                    <p>¡Gracias por tu compra! Tu número de orden es: {orderId}</p>
                    <p>Te enviaremos un correo electrónico al email ingresado anteriormente con todos los datos</p>
                </div>
            )}

            {hasCompletedPurchase && (
                <div className='order'>
                    <Link to='/'>
                        <button className='returnHomeButton'>Volver al inicio</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Checkout;
