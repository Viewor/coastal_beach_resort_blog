import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';


const BlogPost = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [commentName, setCommentName] = useState('');
  const [commentContent, setCommentContent] = useState('');
  const post = location.state; // Receive object from navigation

  if (!post) return <p>No Post Details.</p>;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, [slug]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentName.trim() && commentContent.trim()) {
      const newComment = {
        id: post.comments.length + 1,
        author: commentName,
        content: commentContent,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      };
      // setPost({
      //   ...post,
      //   comments: [...post.comments, newComment],
      // });
      setCommentName('');
      setCommentContent('');
    }
  };


  return (
    <div key={post.id} className="min-h-screen bg-background text-foreground">
      {/* Cover Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img 
          src={post.image}
          alt={post.title}
          className={ post.image !== '' && post.image !== null ?  "absolute inset-0 w-full h-full object-cover":"hidden"}
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
          <h1
            className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg"
            data-aos="fade-down"
          >
            {post.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Author Info */}
        <div className="grid grid-cols-[auto_1fr] items-center gap-4 mb-6" data-aos="fade-right">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.auth} />
            <AvatarFallback className='text-gray-500 text-xs'>{post.auth?.[0]?.toUpperCase() || "?"}</AvatarFallback>
          </Avatar>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{post.auth}</span> &bull; {post.date}
          </div>
        </div>

        {/* Blog Content */}
        <article
          className="prose prose-lg max-w-none text-foreground leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className='pb-2 md:pb-4'>{post.excerpt}</p>
          <p>{post.content}</p>
        </article>

        {/* Comments Section */}
        <section className="mt-16" data-aos="zoom-in" data-aos-delay="200">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>

          {post.comments && post.comments.length > 0 ? (
            <>
              <Separator className="mb-6" />
              {post.comments.map((comment, index) => (
                <div
                  key={comment.id}
                  className="mb-6 border border-muted rounded-lg p-4 shadow-sm bg-background"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  <div className="flex items-center space-x-3 mb-2 text-sm text-muted-foreground">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback>
                        {comment.author?.[0]?.toUpperCase() || "?"}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-foreground">{comment.author}</span>
                    <span>&bull; {comment.date}</span>
                  </div>
                  <p className="text-foreground">{comment.content}</p>
                </div>
              ))}
            </>
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </section>

        {/* Comment Form */}
        <section className="mt-12" data-aos="fade-left" data-aos-delay="300">
          <h3 className="text-xl font-semibold mb-2">Leave a Comment</h3>
          <form onSubmit={handleCommentSubmit}>
            <Input
              aria-label="Your name"
              placeholder="Your name"
              value={commentName}
              onChange={(e) => setCommentName(e.target.value)}
              className="mb-4"
            />
            <Textarea
              aria-label="Your comment"
              placeholder="Write your comment here..."
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
              className="mb-4 min-h-[120px]"
            />
            <Button type="submit" aria-label="Submit comment">
              Submit Comment
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default BlogPost;
