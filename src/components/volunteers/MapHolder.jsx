import './MapHolder.css'

const MapHolder = () => {
    return (
        <div className='container-resource-map'>
            <div className='map-holder'><img src="https://developers.google.com/static/maps/documentation/tile/images/example-basemap-tile.png"/></div>
            <div className='map-infobar'>
                <button className='map-infobar-button'>MANAGE RESOURCES</button>
            </div>
        </div>
    )
}

export default MapHolder;