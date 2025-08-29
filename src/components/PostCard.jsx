import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlogCard({ posts }) {
	const navigate = useNavigate();
	
	  const handleItemClick = (post,url) => {
		navigate(`/blog/${url}`, { state: post }); }
	return (
		
		<div>
			{posts.map((post) => (
				<article 
					key={post.id}
					className="relative bg-white dark:bg-neutral-900 rounded-xl shadow-md overflow-hidden p-3 md:p-6 mb-4 md:mb-8 flex flex-col md:flex-row gap-6"
					data-aos="fade-up"
				>
					{/* Image */}
					<div className={post.image !== '' && post.image !== null ? "relative z-10 w-full md:w-1/2" : "hidden"}>
						<img
							src={post.image}
							alt={post.title}
							className="rounded-lg w-full h-auto object-cover hover:scale-[1.02] max-h-96 transition-transform duration-300"
						/>
					</div>

					{/* Text Content */}
					<div className="relative z-10 w-full md:w-1/2 text-center md:text-left">
						<span className="text-sm uppercase tracking-wide font-semibold mb-2 block font-mono text-gray-500">
							{post.category}
						</span>
						<h2 className="text-2xl md:text-3xl font-bold mb-4 font-sans">
							{post.title}
						</h2>
						<p className='flex space-x-2 mb-2 md:mb-4 text-xs italic'>
							<span>{ post.auth }</span> <span>&bull;</span>	<span>{ post.date }</span>
							</p>
						<p className="text-base font-serif text-gray-700 mb-6">
							{post.excerpt}
						</p>
						<button onClick={() => handleItemClick(post,post.slug)}
							className="inline-block bg-white text-black border border-black px-5 py-2 rounded-md font-medium hover:bg-black hover:text-white transition-all duration-300"
						>
							Read More
						</button>
					</div>
				</article>
			))}
		</div>
	);
}

