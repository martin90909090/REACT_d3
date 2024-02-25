import PropTypes from 'prop-types';

const Alert = ({ errors }) => {
    // Extraer los mensajes de error del objeto de errores
    const errorMessages = Object.values(errors).filter(error => error);

    // Si no hay mensajes de error, no renderizar nada
    if (errorMessages.length === 0) {
        return null;
    }

    return (
        <div>
            {errorMessages.map((message, index) => (
                <div key={index} className="alert alert-danger">
                    {message}
                </div>
            ))}
        </div>
    );
};

Alert.propTypes = {
    errors: PropTypes.object.isRequired,
};

export default Alert;