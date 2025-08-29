import React from 'react';
import PostForm from '@/components/PostForm';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export default function CreatePost() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-12">
      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create New Blog Post</CardTitle>
        </CardHeader>
        <PostForm />
      </Card>
    </div>
  );
}
