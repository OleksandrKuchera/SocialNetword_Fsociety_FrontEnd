import { useState } from "react";
import style from './styles/LofinForm.module.scss'
import { Link } from "react-router-dom";

import axios from 'axios';

const RegistrationForm = () => {

    const [registrationData, setRegistrationData] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',

    });

    const [error, setError] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegistrationData({
            ...registrationData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', registrationData);
            console.log(response.data); // Опрацюйте відповідь сервера
            // Опрацюйте успішну відповідь сервера, наприклад, перенаправлення на іншу сторінку або відображення повідомлення про успішну реєстрацію
        } catch (error) {
            console.error('Помилка під час реєстрації:', error);
            setError('Помилка під час реєстрації');
            // Обробіть помилку, якщо така виникла
        }
    };

    return (
        <>
            <h2 className={style.login__title}>Become a Sailor!</h2>

            <form onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
                <label htmlFor="email">
                    <input type="email" placeholder="Your email" id="email" name="email" required onChange={handleInputChange} />
                </label>
                <label htmlFor="name">
                    <input type="text" placeholder="Your nickname" id="name" name="name" required onChange={handleInputChange} />
                </label>
                <label htmlFor="password">
                    <input type="password" placeholder="Your password" id="password" name="password" required onChange={handleInputChange} />
                </label>
                <label htmlFor="confirmPassword">
                    <input type="password" placeholder="Confirm your password" id="confirmPassword" name="confirmPassword" required onChange={handleInputChange} />
                </label>
                <input type="submit" value="Create an account" />
            </form>

            <div className={style.recomendation}>
                <p>Already have an account? <Link className={style.recomendation__link} to="/sign-in"><strong>Sign In</strong></Link></p>
            </div>
        </>
    );
}

export default RegistrationForm;
