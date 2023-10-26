const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage?.sender?.username !== message?.sender?.username;
    const textMsg = message.text.replace(/<p>|<\/p>/g, '');

    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <img
                    className="message-avatar"
                    src={message.sender.avatar}
                    alt="message-avatar"
                />
            )}

            {message?.attachments?.length > 0
                ? (
                    <img
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
                    />
                ) : (
                    <div className="message" style={{ float: "left", backgroundColor: "#CABCDC", marginLeft: isFirstMessageByUser ? "4px" : "48px" }}>
                        {textMsg}
                    </div>
                )
            }
        </div>
    );
};

export default TheirMessage;