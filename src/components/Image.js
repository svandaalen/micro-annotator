const Image = ({url, width}) => {
    return (
        <div style={{'padding': '3px'}}>
            <img
                src={url}
                width={width}
                alt=""
            />
        </div>
    )
}

export default Image
