# API Quick Reference Guide

## 📁 API Files Location
`src/api/` - All mock API data and loaders

## 🔌 Import Pattern
```javascript
import { sosRequestsAPI, volunteersAPI, ... } from '../../api/apiLoaders';
```

## 📊 Data Domains

### 1️⃣ SOS Requests
**File**: `sos_requests.json`
**Loader**: `sosRequestsAPI`

```javascript
// Get all SOS requests
const requests = await sosRequestsAPI.getAll();

// Filter by status: 'new', 'assigned', 'resolved'
const newRequests = await sosRequestsAPI.getByStatus('new');

// Filter by type: 'medical', 'fire', 'flood', 'trapped', 'offline'
const medical = await sosRequestsAPI.getByType('medical');

// Get single request
const sos = await sosRequestsAPI.getById('SOS-2501');
```

**Key Fields**: id, name, emergency_type, location, status, severity, confidence_score, ai_notes

---

### 2️⃣ Volunteers
**File**: `volunteers.json`
**Loader**: `volunteersAPI`

```javascript
// Get all volunteers
const all = await volunteersAPI.getAll();

// Get available volunteers (online + available)
const available = await volunteersAPI.getAvailable();

// Filter by role: 'Medical', 'Rescue', 'Logistics'
const medics = await volunteersAPI.getByRole('Medical');

// Get single volunteer
const vol = await volunteersAPI.getById('vol_001');
```

**Key Fields**: id, name, role, status, availability, ai_score, rating

---

### 3️⃣ Resources
**File**: `resources.json`
**Loader**: `resourcesAPI`

```javascript
// Get all resources
const all = await resourcesAPI.getAll();

// Get critical resources
const critical = await resourcesAPI.getCritical();

// Filter by category: 'Medical', 'Rescue', 'Supplies', 'Shelter', 'Communication'
const medical = await resourcesAPI.getByCategory('Medical');

// Get single resource
const res = await resourcesAPI.getById('res_001');
```

**Key Fields**: id, name, category, quantity, status, ai_priority

---

### 4️⃣ Shelters
**File**: `shelters.json`
**Loader**: `sheltersAPI`

```javascript
// Get all shelters
const all = await sheltersAPI.getAll();

// Get available shelters
const available = await sheltersAPI.getAvailable();

// Get critical shelters (near capacity)
const critical = await sheltersAPI.getCritical();

// Get single shelter
const shelter = await sheltersAPI.getById('shelter_001');
```

**Key Fields**: id, name, total_capacity, occupied, status, occupancy_percentage

---

### 5️⃣ Alerts
**File**: `alerts.json`
**Loader**: `alertsAPI`

```javascript
// Get all alerts
const all = await alertsAPI.getAll();

// Get active alerts
const active = await alertsAPI.getActive();

// Filter by priority: 'low', 'medium', 'high', 'critical'
const critical = await alertsAPI.getByPriority('critical');

// Get single alert
const alert = await alertsAPI.getById(1);
```

**Key Fields**: id, title, status, priority, engagement_percentage, recipients

---

### 6️⃣ Devices
**File**: `devices.json`
**Loader**: `devicesAPI`

```javascript
// Get all devices
const all = await devicesAPI.getAll();

// Get all gateways
const gateways = await devicesAPI.getGateways();

// Get devices with internet
const internet = await devicesAPI.getWithInternet();

// Filter by role: 'Gateway', 'Node'
const nodes = await devicesAPI.getByRole('Node');

// Get single device
const device = await devicesAPI.getById('dev_1');
```

**Key Fields**: id, name, role, signal, battery, status, internet

---

### 7️⃣ Dashboard Metrics
**File**: `dashboard_metrics.json`
**Loader**: `dashboardMetricsAPI`

```javascript
// Get all metrics
const all = await dashboardMetricsAPI.getAll();

// Get stats cards
const stats = await dashboardMetricsAPI.getStatsCards();

// Get alert stats
const alertStats = await dashboardMetricsAPI.getAlertStats();

// Get SOS trends (range: '7', '30', '90')
const trends = await dashboardMetricsAPI.getSOSTrends('30');

// Get mesh network info
const mesh = await dashboardMetricsAPI.getMeshNetwork();
```

**Key Fields**: value, label, trend, change_percentage

---

## 🎯 Common Patterns

### Load Data in Component
```javascript
const [data, setData] = useState([]);

useEffect(() => {
  const load = async () => {
    try {
      const result = await sosRequestsAPI.getAll();
      setData(result);
    } catch (error) {
      console.error('Failed to load:', error);
    }
  };
  load();
}, []);
```

### Filter Data
```javascript
const filtered = data.filter(item => item.status === 'new');
```

### Sort Data
```javascript
const sorted = data.sort((a, b) => b.severity - a.severity);
```

---

## 🔄 Status Values

**SOS Status**: `new`, `assigned`, `resolved`
**Volunteer Status**: `online`, `offline`
**Resource Status**: `available`, `low`, `critical`
**Shelter Status**: `available`, `near-full`, `critical`
**Alert Status**: `active`, `completed`
**Device Status**: `Stable`, `Active`, `Problem`

---

## 🎨 Priority Levels

**Severity**: `low`, `medium`, `high`, `critical`
**AI Priority**: `low`, `medium`, `high`, `critical`
**Alert Priority**: `low`, `medium`, `high`, `critical`

---

## 📈 Scoring Ranges

**Confidence Score**: 0 to 1 (0.0 = no confidence, 1.0 = full confidence)
**AI Score**: 0 to 100 (0 = unsuitable, 100 = perfect match)
**Rating**: 0 to 5 (0 = poor, 5 = excellent)
**Engagement %**: 0 to 100 (percentage of recipients engaged)

---

## 🚀 Migration to Real Backend

Replace API_BASE in `apiLoaders.js`:
```javascript
// Before (mock)
const API_BASE = '/src/api';

// After (real backend)
const API_BASE = 'https://api.example.com/v1';
```

Then update fetch calls:
```javascript
// Before
const response = await fetch(`${API_BASE}/sos_requests.json`);

// After
const response = await fetch(`${API_BASE}/sos-requests`);
```

**No component changes needed!** ✨

---

## 📝 Notes

- All timestamps are ISO 8601 format
- All IDs have domain prefixes (SOS-, USR-, vol_, res_, etc.)
- API loaders include 100ms simulated delay
- Error handling should be added in components
- JSON files can be edited manually for testing

---

## 🔗 Related Files

- Full API Documentation: `src/api/README.md`
- Extraction Summary: `API_EXTRACTION_SUMMARY.md`
- Component Updates: See individual component files

---

**Last Updated**: 2025-01-15
**Status**: ✅ Complete - All dummy data extracted to APIs
