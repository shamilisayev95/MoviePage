import React from 'react';
import './loginStyles.css';
import { logIn } from '../REST';

class Login extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            login: null,
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        
        logIn({ user: this.state.login })
            .then(result => {
                if (result) {
                    const { saveCurrentUser } = this.props;

                    saveCurrentUser(this.state.login);
                }
            })
            .catch(() => alert('This user is already exist'));
    };

    handleInput = event => {
        this.setState({
            login: event.target.value,
        });
    };

    render() {
        const { handleSubmit, handleInput } = this;

        return (
            <div className='root__auth-container'>
                <form
                    onSubmit={handleSubmit}
                    className='auth-container__auth-form'
                >
                    <span 
                        children='Authorization'
                        className='auth-form__form-name'
                    />
                    <input
                        name='login'
                        required
                        onChange={handleInput}
                        minlength='4'
                        className='auth-form__login-input'
                        placeholder='Please Type userName'
                    />
                    <button
                        className='auth-form__submit-button'
                        children='Sign in'
                    />
                </form>
            </div>
        );
    }
}

export default Login;
