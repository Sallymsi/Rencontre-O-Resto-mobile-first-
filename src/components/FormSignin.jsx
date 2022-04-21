import React from 'react';
import '../styles/main.scss';
import { useState } from 'react';
import { signin } from '../js/fetch'

const FormSignin = () => {
    const [firstInputValue, setFirstInputValue] = useState('')
    const [lastInputValue, setLastInputValue] = useState('')
    const [emailInputValue, setEmailInputValue] = useState('')
    const [passwordInputValue, setPasswordInputValue] = useState('')
    const [repeatInputValue, setRepeatInputValue] = useState('');

    const verifForm = (e) => {
        e.preventDefault();

        if (passwordInputValue === repeatInputValue) {
            const document = {
                prenom: firstInputValue,
                nom: lastInputValue,
                email: emailInputValue,
                password: passwordInputValue
            };

            const options = {
                method: "POST",
                body: JSON.stringify(document),
                headers: {"Content-type": "application/json"},
            };
            signin(options);
        }
    }


    return (
        <aside>
            <div className="blockFormSignin">
                <form method="post" className='form'>
                    <div className='inputDiv'>
                        <label for="firstName">Prénom</label><br></br>
                        <input type="text" name="firstName" id="firstName" aria-required="true" value={firstInputValue} onChange={(e) => setFirstInputValue(e.target.value)} required/>
                        { !firstInputValue && (
                            <p id="firstNameErrorMsg"></p>
                        )}
                    </div>
                    <div className='inputDiv'>
                        <label for="lastName">Nom</label><br></br>
                        <input type="text" name="lasttName" id="lastName" aria-required="true" value={lastInputValue} onChange={(e) => setLastInputValue(e.target.value)} required/>
                        <p id="lastNameErrorMsg"></p>
                    </div>
                    <div className='inputDiv'>
                        <label for="email">Email</label><br></br>
                        <input type="email" name="email" id="email" aria-required="true" value={emailInputValue} onChange={(e) => setEmailInputValue(e.target.value)} required/>
                        <p id="emailErrorMsg"></p>
                    </div>
                    <div className='inputDiv'>
                        <label for="password">Mot de passe</label><br></br>
                        <input type="password" name="password" id="password" aria-required="true" value={passwordInputValue} onChange={(e) => setPasswordInputValue(e.target.value)} required/>
                        <p id="passwordErrorMsg"></p>
                    </div>
                    <div className='inputDiv'>
                        <label for="repeatPassword">Répéter le mot de passe</label><br></br>
                        <input type="password" name="repeatPassword" id="repeatPassword" aria-required="true" onChange={(e) => setRepeatInputValue(e.target.value)} required/>
                        <p id="repeatPasswordErrorMsg"></p>
                    </div>
                    <div className='button'>
                        <input type="submit" value="C'est parti !" className='connexion' onClick={verifForm} />
                        <p>Déjà un compte ?</p>
                    </div>  
                </form>
            </div>
            
        </aside>
    );
}

export default FormSignin