import Title from "../Components/Title"
import Button from "../Components/Button"
import "./Contact.css"
import { findByLabelText } from "@testing-library/dom"



const clearButton = {
    backgroundColor: '#EB8D8D',
}

const sendButton = {
    backgroundColor: '#9AEB8D',
}


const Contact = () => {
    return <div className="contact">

        <div className="wrapper">
            <div className="adress">
                <Title title="Contact" />
            </div>

            <div className="contact-form">
                <form action="" class="form">
                    <label className="cartContact" for="">First Name</label>
                    <input type="text" />
                </form>

                <form action="" class="form">
                    <label className="cartContact" for="">Last Name</label>
                    <input type="text" />
                </form>

                <form action="" class="form">
                    <label className="cartContact" for="">Email </label>
                    <input type="text" />
                </form>

                <form action="" class="form">
                    <label className="cartContact" for="">Masseg</label>
                    <textarea type="text" />
                </form>
            </div>
        </div>
        <div className="btn-knapp">
            <div className="btn-clear">
                <Button className="cartContact" text="clear" style={clearButton} />
            </div>
            <div className="btn-esnd">
                <Button className="cartContact" text="Send" style={sendButton} />
            </div>
        </div>
    </div>


};




export default Contact;




















