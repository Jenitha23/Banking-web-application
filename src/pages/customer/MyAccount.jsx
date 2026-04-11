import React, { useEffect, useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import FormInput from '../../components/common/FormInput';
import { userService } from '../../services/api';

const MyAccount = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await userService.getProfile();
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch profile', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) {
    return <div className="p-8">Loading profile...</div>;
  }

  if (!user) {
    return <div className="p-8 text-red-500">Failed to load user data.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-bank-dark">My Account</h2>
        <p className="text-bank-textLight mt-1">Manage your account details and settings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-lg font-bold text-bank-dark mb-4">Personal Information</h3>
          <div className="space-y-4">
            <FormInput label="Full Name" type="text" defaultValue={user.name} />
            <FormInput label="Email Address" type="email" defaultValue={user.email} />
            <FormInput label="Account Number" type="text" defaultValue={user.accountNumber} disabled />
            <Button>Save Changes</Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold text-bank-dark mb-4">Security</h3>
          <div className="space-y-4">
            <FormInput label="Current Password" type="password" placeholder="Enter current password" />
            <FormInput label="New Password" type="password" placeholder="Enter new password" />
            <FormInput label="Confirm New Password" type="password" placeholder="Confirm new password" />
            <Button variant="secondary">Update Password</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MyAccount;
