import "./ShelterCard.css";

const ShelterCard = ({
    name,
    distanceKm,
    totalCapacity,
    occupied,
    status,
    resources,
    lastUpdated,
    coordinator,
    image
}) => {
    const available = totalCapacity - occupied;
    const occupancyPercent = Math.round((occupied / totalCapacity) * 100);

    return (
        <div className={`shelter-card shelter-${status}`}>
            <div className="shelter-box1">
                <div className='shelter-image'><img src={image}></img></div>
                <div className="shelter-header">
                    <h3 className="shelter-name">{name}</h3>
                    <div className="shelter-distance">{distanceKm} km</div>
                    <div className="shelter-capacity">
                        <strong>{occupied}</strong> / {totalCapacity} Occupied
                        <div className="capacity-bar">
                            <div className="capacity-fill" style={{ width: `${occupancyPercent}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shelter-info">
                <p>Available Spaces: <strong>{available}</strong></p>
                <p>Coordinator: {coordinator}</p>
                <p className="shelter-last-update">Updated {lastUpdated}</p>
            </div>


        </div>
    );
};

export default ShelterCard;
