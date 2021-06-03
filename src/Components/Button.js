import "./Button.css";

const Button = (props) => {
    return (
        <>
            <button style={props.style} onClick={props.onClick} className="button">
                {props.text}
            </button>
        </>
    );
};

export default Button;
