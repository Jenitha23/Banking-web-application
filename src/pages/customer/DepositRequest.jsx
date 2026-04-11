import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import FormInput from '../../components/common/FormInput';
import { UploadCloud } from 'lucide-react';

const DepositRequest = () => {
  const [file, setFile] = useState(null);

  const handleDeposit = (e) => {
    e.preventDefault();
    alert('Deposit request submitted successfully! Pending approval.');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-bank-dark">Request Deposit</h2>
        <p className="text-bank-textLight mt-1">Submit a deposit request by filling in the details and uploading your deposit slip.</p>
      </div>

      <Card className="p-8">
        <form className="space-y-6" onSubmit={handleDeposit}>
          <FormInput 
            label="Deposit Amount ($)" 
            id="amount" 
            type="number" 
            min="10"
            step="0.01"
            required 
            placeholder="0.00" 
          />
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-bank-text">Deposit Slip</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-bank-secondary transition-colors cursor-pointer bg-gray-50">
              <div className="space-y-1 text-center">
                <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-bank-secondary hover:text-bank-primary focus-within:outline-none">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e) => setFile(e.target.files[0])} />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, PDF up to 5MB
                </p>
                {file && <p className="text-sm font-bold text-bank-dark mt-2">{file.name}</p>}
              </div>
            </div>
          </div>

          <FormInput 
            label="Additional Notes (Optional)" 
            id="notes" 
            type="text" 
            placeholder="Any specific instructions..." 
          />

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <Button type="submit" variant="primary" className="px-8">
              Submit Request
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default DepositRequest;
