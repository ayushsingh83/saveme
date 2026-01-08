import { devicesAPI } from '../../api/apiLoaders';

export const getDevicesList = async () => {
  try {
    return await devicesAPI.getAll();
  } catch (error) {
    console.error('Failed to load devices:', error);
    return [];
  }
};

export const devicesList = [];
