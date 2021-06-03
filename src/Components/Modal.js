import "./Modal.css";

const Modal = (props) => {
    return (
        <div style={props.modal}>
            <div className="modal">
                <div className="modalXWrapper" onClick={props.onClick}>
                    <span className="modalX">&#215;</span>
                </div>
                <h2 className="modalHeading">Terms and Conditions</h2>
                <div className="modalContent">
                    <p className="modalText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus arcu ut pulvinar dignissim.
                        Praesent maximus, mi in tristique aliquet, urna arcu semper purus, ut ornare nunc ipsum ac ex. Duis ut
                        molestie lorem. Donec a lectus quis purus fermentum pulvinar. Sed nec ex tellus. Aenean in sem vulputate,
                        malesuada ex eget, tempus nisl. Ut sed sapien turpis. In hac habitasse platea dictumst. Sed vehicula porta
                        augue, at ornare nulla congue eu. Integer mattis ut enim sed elementum. Etiam condimentum aliquam egestas.
                    </p>
                    <br />
                    <p className="modalText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus arcu ut pulvinar dignissim.
                        Praesent maximus, mi in tristique aliquet, urna arcu semper purus, ut ornare nunc ipsum ac ex. Duis ut
                        molestie lorem. Donec a lectus quis purus fermentum pulvinar. Sed nec ex tellus. Aenean in sem vulputate,
                        malesuada ex eget, tempus nisl. Ut sed sapien turpis. In hac habitasse platea dictumst. Sed vehicula porta
                        augue, at ornare nulla congue eu. Integer mattis ut enim sed elementum. Etiam condimentum aliquam egestas.
                        Phasellus quis tellus fringilla mi interdum consectetur. Phasellus tellus leo, dignissim ac fringilla
                        quis, consectetur et erat. Donec porttitor metus vel tortor rutrum faucibus. Cras nec viverra ante. Fusce
                        porttitor semper lorem, placerat rutrum orci lacinia vel. In congue, metus vel congue luctus, elit neque
                        varius dolor, in pulvinar urna lorem ac augue. Suspendisse potenti. Praesent aliquet molestie lorem, vitae
                        convallis justo mollis sit amet. Duis ornare leo nec tellus bibendum, volutpat ullamcorper purus mattis.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    <br />
                    <p className="modalText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus arcu ut pulvinar dignissim.
                        Praesent maximus, mi in tristique aliquet, urna arcu semper purus, ut ornare nunc ipsum ac ex. Duis ut
                        molestie lorem. Donec a lectus quis purus fermentum pulvinar. Sed nec ex tellus. Aenean in sem vulputate,
                        malesuada ex eget, tempus nisl. Ut sed sapien turpis. In hac habitasse platea dictumst. Sed vehicula porta
                        augue, at ornare nulla congue eu. Integer mattis ut enim sed elementum. Etiam condimentum aliquam egestas.
                    </p>
                </div>
            </div>
            //{" "}
        </div>
    );
};

export default Modal;
