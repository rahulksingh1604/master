const RegistrationForm = () => {
    const submitDetails =(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (name && email && password && confirmPassword) {
            if (password === confirmPassword) {
                alert(`Registration successful for ${name}!`);
            } else {
                alert("Passwords do not match!");
            }
        } else {
            alert("Please fill all fields!");
        }
    }
    return (
        <form onSubmit={submitDetails}>
            <h1>Registration Form</h1>
            <div>
                <label>Name :</label>
                <input type="text" name="name" autocomplete="off"/>
            </div>
            <div>
                <label>Email :</label>
                <input type="text" name="email" autocomplete="off"/>
            </div>
            <div>
                <label>Password :</label>
                <input type="password" name="password" />
            </div>
            <div>
                <label>Confirm password :</label>
                <input type="text" name="confirmPassword" />
            </div>
            <button type="submit">Register</button>
            <button type="reset">Reset</button>
        </form>
    )
}

export default RegistrationForm;