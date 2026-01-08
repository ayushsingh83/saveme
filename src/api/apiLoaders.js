// Mock API Loaders - Simulates API responses from JSON files
// Each function treats JSON files as if they were backend API endpoints

const API_BASE = '/src/api';

// Helper function to simulate API delay
const simulateDelay = (ms = 100) => new Promise(resolve => setTimeout(resolve, ms));

// SOS Requests API
export const sosRequestsAPI = {
  async getAll() {
    await simulateDelay();
    const response = await fetch(`${API_BASE}/sos_requests.json`);
    const data = await response.json();
    return data.sos_requests;
  },

  async getById(id) {
    const requests = await this.getAll();
    return requests.find(req => req.id === id);
  },

  async getByStatus(status) {
    const requests = await this.getAll();
    return requests.filter(req => req.status === status);
  },

  async getByType(type) {
    const requests = await this.getAll();
    return requests.filter(req => req.emergency_type === type);
  }
};

// Volunteers API
export const volunteersAPI = {
  async getAll() {
    await simulateDelay();
    const response = await fetch(`${API_BASE}/volunteers.json`);
    const data = await response.json();
    return data.volunteers;
  },

  async getById(id) {
    const volunteers = await this.getAll();
    return volunteers.find(vol => vol.id === id);
  },

  async getAvailable() {
    const volunteers = await this.getAll();
    return volunteers.filter(vol => vol.availability && vol.status === 'online');
  },

  async getByRole(role) {
    const volunteers = await this.getAll();
    return volunteers.filter(vol => vol.role === role);
  }
};

// Resources API
export const resourcesAPI = {
  async getAll() {
    await simulateDelay();
    const response = await fetch(`${API_BASE}/resources.json`);
    const data = await response.json();
    return data.resources;
  },

  async getById(id) {
    const resources = await this.getAll();
    return resources.find(res => res.id === id);
  },

  async getByCategory(category) {
    const resources = await this.getAll();
    return resources.filter(res => res.category === category);
  },

  async getCritical() {
    const resources = await this.getAll();
    return resources.filter(res => res.ai_priority === 'critical' || res.status === 'critical');
  }
};

// Shelters API
export const sheltersAPI = {
  async getAll() {
    await simulateDelay();
    const response = await fetch(`${API_BASE}/shelters.json`);
    const data = await response.json();
    return data.shelters;
  },

  async getById(id) {
    const shelters = await this.getAll();
    return shelters.find(shelter => shelter.id === id);
  },

  async getAvailable() {
    const shelters = await this.getAll();
    return shelters.filter(shelter => shelter.status === 'available');
  },

  async getCritical() {
    const shelters = await this.getAll();
    return shelters.filter(shelter => shelter.status === 'critical');
  }
};

// Alerts API
export const alertsAPI = {
  async getAll() {
    await simulateDelay();
    const response = await fetch(`${API_BASE}/alerts.json`);
    const data = await response.json();
    return data.alerts;
  },

  async getById(id) {
    const alerts = await this.getAll();
    return alerts.find(alert => alert.id === id);
  },

  async getActive() {
    const alerts = await this.getAll();
    return alerts.filter(alert => alert.status === 'active');
  },

  async getByPriority(priority) {
    const alerts = await this.getAll();
    return alerts.filter(alert => alert.priority === priority);
  }
};

// Devices API
export const devicesAPI = {
  async getAll() {
    await simulateDelay();
    const response = await fetch(`${API_BASE}/devices.json`);
    const data = await response.json();
    return data.devices;
  },

  async getById(id) {
    const devices = await this.getAll();
    return devices.find(device => device.id === id);
  },

  async getByRole(role) {
    const devices = await this.getAll();
    return devices.filter(device => device.role === role);
  },

  async getGateways() {
    const devices = await this.getAll();
    return devices.filter(device => device.role === 'Gateway');
  },

  async getWithInternet() {
    const devices = await this.getAll();
    return devices.filter(device => device.internet);
  }
};

// Dashboard Metrics API
export const dashboardMetricsAPI = {
  async getAll() {
    await simulateDelay();
    const response = await fetch(`${API_BASE}/dashboard_metrics.json`);
    const data = await response.json();
    return data.dashboard_metrics;
  },

  async getStatsCards() {
    const metrics = await this.getAll();
    return metrics.stats_cards;
  },

  async getAlertStats() {
    const metrics = await this.getAll();
    return metrics.alert_stats;
  },

  async getSOSTrends(range = '30') {
    const metrics = await this.getAll();
    const key = `${range}_days`;
    return metrics.sos_trends[key];
  },

  async getMeshNetwork() {
    const metrics = await this.getAll();
    return metrics.mesh_network;
  }
};

export default {
  sosRequestsAPI,
  volunteersAPI,
  resourcesAPI,
  sheltersAPI,
  alertsAPI,
  devicesAPI,
  dashboardMetricsAPI
};
