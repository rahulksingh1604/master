import { useFormik } from 'formik';

const RegistrationForm = () => {

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Password: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h1>Registration Form</h1>
            <div className='mb-3'>
                <label>User Name :</label>
                <input
                    className="form-control"
                    type="text"
                    name="UserName"
                    onChange={formik.handleChange}
                    value={formik.values.UserName}
                />
            </div>
            <div className='mb-3'>
                <label>Password :</label>
                <input
                    className="form-control"
                    type="password"
                    name="Password"
                    onChange={formik.handleChange}
                    value={formik.values.Password}
                />
            </div>
            <button className='btn btn-primary' type="submit">Register</button>
            <button className='btn btn-secondary' type="reset">Reset</button>
        </form>
    )
}

export default RegistrationForm;