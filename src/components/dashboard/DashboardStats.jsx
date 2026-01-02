import StatsCardsRow from './StatsCardsRow'
import LiveSOSActivity from './LiveSOSActivity'
import DisasterMapWidget from './DisasterMapWidget'
import MeshStatusWidget from './MeshStatusWidget'

const DashboardStats = () => {
  return (
    <div className="p-6 space-y-6">

      
      <StatsCardsRow />

     
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-5">
          <LiveSOSActivity />
        </div>

        <div className="col-span-7">
          <DisasterMapWidget />
        </div>
      </div>

      
      <MeshStatusWidget />
    </div>
  )
}

export default DashboardStats
