import React from 'react';
import "./SettingsSecurityPage.css"
import NotificationPreferences from '../../components/setting and security/NotificationPreferences';
import AccountSettings from '../../components/setting and security/AccountSettings';
import SecuritySettings from '../../components/setting and security/SecuritySettings';
import AdminTools from '../../components/setting and security/AdminTools';
import SystemPreferences from '../../components/setting and security/SystemPreferences';
import DangerZone from '../../components/setting and security/DangerZone';

const SettingsSecurityPage = () => {
  return (
    <div className='container-settings flex flex-col justify-start ml-4 -mt-3 gap-4 '>
      <div className='settings-heading text-white text-[15px] font-thin'><h3>Manage account settings, security options & system preferences</h3></div>
      <div className=' flex gap-6 overflow-hidden w-[calc(100vw-340px)]'>
        <div className=' flex flex-col gap-3.5'>
          <div className="account-setting-box"><AccountSettings /></div>
          <div className="notification-preference-box"><NotificationPreferences /></div>
          <div className="system-preferences"><SystemPreferences /></div>
        </div>
        <div className="flex flex-col gap-3.5 flex-1">
          <div className="security-settings-box"><SecuritySettings /></div>
          <div className="admin-tools-permissions"><AdminTools /></div>
          <div className="danger-zone"><DangerZone /></div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSecurityPage;
