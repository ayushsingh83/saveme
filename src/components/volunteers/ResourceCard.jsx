import "./ResourceCard.css"
const ResourceCard = ({
    id,
    name,
    category,
    quantity,
    unit,
    location,
    status,
    lastUpdated,
    aiPriority,
    colorClass,
    image
}) => {
    return (
        <div className={`resource-items ${colorClass}`}>
            <div className="resource-icon"><i className={`${image}`}></i></div>
            <div className="resource-info">
                <h1 className="resource-name">{name}</h1>
                <h3 className="resource-quantity"><span className="resource-qty">{quantity}</span> {unit}</h3>
                <p className="resource-location">{location}</p>
                <p className="resource-last-updated">{lastUpdated}</p>
            </div>
        </div>
    )
}

export default ResourceCard;