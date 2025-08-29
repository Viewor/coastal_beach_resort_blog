import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function ImageUploader({ onUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) onUpload(file);
  };

  return (
    <div>
      <Label htmlFor="image">Cover Image</Label>
      <Input type="file" id="image" accept="assets/*" onChange={handleFileChange} />
    </div>
  );
}
