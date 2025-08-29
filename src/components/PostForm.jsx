import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import ImageUploader from './ImageUploader';

const categories = ['Travel', 'Wellness', 'Marketing', 'Lifestyle'];

export default function PostForm() {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    date: '',
    image: null,
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleImageUpload = (file) => {
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Post submitted:', formData);
    // Integrate with backend here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 px-6 pb-6">
      {/* Title */}
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={handleChange('title')}
          placeholder="Enter post title"
        />
      </div>

      {/* Excerpt */}
      <div>
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea
          id="excerpt"
          value={formData.excerpt}
          onChange={handleChange('excerpt')}
          placeholder="Write a short summary..."
          className="min-h-[100px]"
        />
      </div>
      
      {/* Content */}
      <div>
        <Label htmlFor="excerpt">Content</Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={handleChange('excerpt')}
          placeholder="Write a full content here..."
          className="min-h-[200px]"
        />
      </div>

      {/* Category */}
      <div>
        <Label htmlFor="category">Category</Label>
        <Select
          value={formData.category}
          onValueChange={(value) => setFormData({ ...formData, category: value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Date */}
      <div>
        <Label htmlFor="date">Date</Label>
        <Input
          type="date"
          id="date"
          value={formData.date}
          onChange={handleChange('date')}
        />
      </div>

      {/* Image Upload */}
      <ImageUploader onUpload={handleImageUpload} />

      {/* Submit */}
      <Button type="submit" className="w-full">
        Publish Post
      </Button>
    </form>
  );
}
