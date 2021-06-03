import "./Button.css";

const Button = (props) => {
    return (
        <>
            <button
                style={props.style}
                className="button"
                onClick={props.onClick}
            >
                {props.text}
            </button>
        </>
    );
};

export default Button;
