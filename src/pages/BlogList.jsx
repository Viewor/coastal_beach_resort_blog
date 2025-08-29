import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BlogFilter from '@/components/BlogFilter.jsx';
import PostCard from '@/components/PostCard.jsx';

import beach from '@/assets/beach.jpg';
import bike from '@/assets/bike-ride.jpg';
import cultural from '@/assets/cultural-parade.jpg';
import luxury from '@/assets/luxury.jpg';
import oceanfront from '@/assets/oceanfront.jpg';
import romantic from '@/assets/romantic.jpg';
import tourism from '@/assets/tourism.jpg';
import tug from '@/assets/tug-of-war.png';
import year from '@/assets/Thatched Bar.jpg';
import loungers from '@/assets/loungers.jpg';
import spar from '@/assets/spar.jpg';
import mountain from '@/assets/mountain.jpg';

// Sample blog posts
const blogPosts = [
	{
		id: 1,
		slug: 'hidden-beaches',
		title: 'Discover the Hidden Beaches of Our Resort',
		excerpt: 'Escape the crowds and find serene, untouched beaches with crystal-clear waters and powdery sands.',
		content: `In a world of feature creep and overloaded dashboards, simplicity is a radical act.
						Great UI isn't about minimalism for its own sake — it's about intentional clarity.
						From whitespace to typography, every decision should guide the user, not distract them.
						In this post, we explore how to design with purpose, reduce friction, and let your content shine.`,
		image: loungers,
		category: 'Travel',
		date: 'August 15, 2025',
		auth: 'Vuyo',
		comments: [
			{ id: 1, author: 'Jane Smith', content: 'This made me want to visit so badly!', date: 'August 16, 2025' },
			{ id: 2, author: 'John Smith', content: 'This is greate!', date: 'August 22, 2025' },
		],
	},
	{
		id: 2,
		slug: 'mountain-retreat',
		title: 'A Journey to Our Mountain Retreat',
		excerpt: 'Experience tranquility and adventure in the heart of the mountains with breathtaking views.',
		content: `Nestled in the mountains, our retreat offers adventure and relaxation...`,
		image: mountain,
		category: 'Adventure',
		date: 'August 10, 2025',
		auth: 'Vuyo',
		comments: [
			{ id: 1, author: 'Jane Smith', content: 'This made me want to visit so badly!', date: 'August 16, 2025' },
		],
	},
	{
		id: 3,
		slug: 'spa-getaway',
		title: 'Ultimate Relaxation at Our Luxury Spa',
		excerpt: 'Indulge in a rejuvenating spa experience with world-class treatments and serene ambiance.',
		content: `Our luxury spa offers a sanctuary for relaxation and wellness...`,
		image: spar,
		category: 'Wellness',
		date: 'August 5, 2025',
		auth: 'Vuyo',
		comments: [
			{ id: 1, author: 'Jane Smith', content: 'This made me want to visit so badly!', date: 'August 16, 2025' },
		],
	},
	{
		id: 4,
		slug: 'coastal-adventures',
		title: 'Coastal Adventures Await You',
		excerpt: 'From kayaking to snorkeling, explore the vibrant marine life along our coast.',
		content: `Dive into adventure with our coastal activities...`,
		image: bike,
		category: 'Adventure',
		date: 'July 30, 2025',
		auth: 'Vuyo',
		comments: [
			{ id: 1, author: 'Jane Smith', content: 'This made me want to visit so badly!', date: 'August 16, 2025' },
		],
	},
	// New blog posts
	{
		id: 5,
		slug: 'oceanfront-dining',
		title: 'Oceanfront Dining: A Culinary Experience',
		excerpt: 'Enjoy gourmet meals with a spectacular view of the ocean at our exclusive seaside restaurant.',
		content: `Our oceanfront restaurant offers the finest dishes, prepared with fresh, locally sourced ingredients...`,
		image: oceanfront,
		category: 'Dining',
		date: 'July 25, 2025',
		auth: 'Vuyo',
		comments: [
			{ id: 1, author: 'Jane Smith', content: 'This made me want to visit so badly!', date: 'August 16, 2025' },
		],
	},
	{
		id: 6,
		slug: 'sustainable-tourism',
		title: 'Sustainable Tourism: How We Protect Our Beaches',
		excerpt: 'Learn about our commitment to preserving natural resources and protecting the environment.',
		content: `We’ve implemented sustainable tourism practices to reduce our environmental footprint and maintain the natural beauty of our beaches...`,
		image: tourism,
		category: 'Sustainability',
		date: 'July 20, 2025',
		auth: 'Vuyo',
		comments: [
			{ id: 1, author: 'Jane Smith', content: 'This made me want to visit so badly!', date: 'August 16, 2025' },
		],
	},
	{
		id: 7,
		slug: 'family-friendly-activities',
		title: 'Family-Friendly Activities for All Ages',
		excerpt: 'From kids’ clubs to family adventures, there’s something for everyone at our resort.',
		content: `We offer a variety of fun, engaging activities designed for the entire family...`,
		image: tug,
		category: 'Family',
		date: 'July 15, 2025',
		auth: 'Vuyo',
		comments: [
			{ id: 1, author: 'Jane Smith', content: 'This made me want to visit so badly!', date: 'August 16, 2025' },
		],
	},
	{
		id: 8,
		slug: 'nightlife-beachside',
		title: 'Beachside Nightlife: Bars, Bonfires & More',
		excerpt: 'Unwind and enjoy the vibrant nightlife with beach bonfires, cocktails, and live music.',
		content: `As the sun sets, the resort comes to life with exciting beachside activities like bonfires, cocktail bars, and live entertainment...`,
		image: year,
		category: 'Entertainment',
		date: 'July 10, 2025',
		auth: 'Vuyo',
		comments: [
			{ id: 1, author: 'Jane Smith', content: 'This made me want to visit so badly!', date: 'August 16, 2025' },
		],
	},
	{
		id: 9,
		slug: 'romantic-getaway',
		title: 'Plan the Perfect Romantic Getaway',
		excerpt: 'Enjoy an intimate, unforgettable escape with your loved one at our luxurious resort.',
		content: `From candlelit dinners to private beach walks, we provide everything you need for a romantic getaway...`,
		image: romantic,
		category: 'Romance',
		date: 'July 5, 2025',
		auth: 'Vuyo',
		comments: [
			{ id: 1, author: 'Jane Smith', content: 'This made me want to visit so badly!', date: 'August 16, 2025' },
		],
	},
	{
		id: 10,
		slug: 'cultural-experiences',
		title: 'Discover the Local Culture & Heritage',
		excerpt: 'Dive deep into the local culture and heritage with curated tours and experiences.',
		content: `Learn about the rich history and traditions of the region with guided cultural tours and local workshops...`,
		image: cultural,
		category: 'Culture',
		date: 'June 30, 2025',
		auth: 'Vuyo',
		comments: [
			{ id: 1, author: 'Jane Smith', content: 'This made me want to visit so badly!', date: 'August 16, 2025' },
		],
	},
	{
		id: 11,
		slug: 'adventure-in-paradise',
		title: 'Adventure Awaits in Paradise',
		excerpt: 'From hiking trails to water sports, explore thrilling adventures that bring you closer to nature.',
		content: `Whether you love hiking, diving, or exploring new adventures, our resort offers endless opportunities for thrill-seekers...`,
		image: '',
		category: 'Adventure',
		date: 'June 25, 2025',
		auth: 'Vuyo',
		comments: [
			{ id: 1, author: 'Jane Smith', content: 'This made me want to visit so badly!', date: 'August 16, 2025' },
		],
	},
	{
		id: 12,
		slug: 'luxury-accommodation',
		title: 'Experience Luxury Accommodation Like Never Before',
		excerpt: 'Stay in our stunning villas and suites with breathtaking views of the ocean and mountains.',
		content: `Indulge in world-class accommodations, from oceanfront villas to suites with panoramic views...`,
		image: luxury,
		category: 'Accommodation',
		date: 'June 20, 2025',
		auth: 'Vuyo',
		comments: [
			{ id: 1, author: 'Jane Smith', content: 'This made me want to visit so badly!', date: 'August 16, 2025' },
		],
	}, {
		id: 101,
		title: "Why Simplicity Wins in UI Design",
		excerpt: "Complexity kills clarity. Here's how to strip away noise and build interfaces that breathe.",
		content: `In a world of feature creep and overloaded dashboards, simplicity is a radical act. 
  Great UI isn't about minimalism for its own sake — it's about intentional clarity. 
  From whitespace to typography, every decision should guide the user, not distract them. 
  In this post, we explore how to design with purpose, reduce friction, and let your content shine.`,
		category: "Design",
		date: "August 28, 2025",
		image: null,
		auth: 'Vuyo',
		comments: [
			{ id: 1, author: 'Jane Smith', content: 'This made me want to visit so badly!', date: 'August 16, 2025' },
		],
	}
];

const POSTS_PER_PAGE = 4;

const BlogList = () => {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [searchQuery, setSearchQuery] = useState('');
	const [postsToShow, setPostsToShow] = useState(POSTS_PER_PAGE);

	const categories = ['All', ...Array.from(new Set(blogPosts.map((post) => post.category)))];

	const filteredPosts = blogPosts.filter((post) => {
		const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
		const searchMatch =
			post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.category.toLowerCase().includes(searchQuery.toLowerCase());
		return categoryMatch && searchMatch;
	});

	const totalPosts = filteredPosts.length;

	// Display only the posts to show based on current page
	const paginatedPosts = filteredPosts.slice(0, postsToShow);

	// Load more posts when clicking "More Post" button
	const loadMorePosts = () => {
		setPostsToShow(postsToShow + POSTS_PER_PAGE);
	};

	let newBlogPost = blogPosts.slice(-2);

	useEffect(() => {
		AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
	}, []);

	useEffect(() => {
		// Reset posts to show when category or search query changes
		setPostsToShow(POSTS_PER_PAGE);
	}, [selectedCategory, searchQuery]);

	return (
		<div className="min-h-screen bg-gray-50 text-foreground w-[95%] place-self-center">
			{/* Hero Section */}

			<div className="relative h-[50vh] w-full overflow-hidden">
				<img
					src={beach}
					alt="Resort Blog Hero"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent flex items-center justify-center px-4">
					<div className="text-center">
						<h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg" data-aos="fade-down">
							Resort Blog
						</h1>
						<p className="text-lg md:text-xl text-white/80 mt-2 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
							Discover stories, guides, and updates from your favorite destination.
						</p>
						<div className="border-2  w-32 h-px place-self-center mt-4 md:mt-8 border-amber-500 mx-auto md:mx-0" data-aos="zoom-in" data-aos-delay="200"></div>
					</div>
				</div>
			</div>

			<div>
				{/* Filters */}
				<div className="flex space-x-2 items-center py-2 md:py-4">
					<hr className="flex-1 border-gray-300" />
					<span className="text-gray-400 italic">Recent Posts</span>
					<hr className="flex-1 border-gray-300" />
				</div>

				{/* Featured Post */}
				<div className="max-w-7xl mx-auto px-4 pb-12 mb-8">
					{/* Featured Post */}
					<PostCard posts={newBlogPost} />
					<hr className="p-4 m-8" />

					{/* Blog Filter */}
					<BlogFilter
						categories={categories}
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
						searchQuery={searchQuery}
						setSearchQuery={setSearchQuery}
					/>
					{/* Display Paginated Posts */}
					<PostCard posts={paginatedPosts} />

					{/* Load More Post Button */}
					{postsToShow < totalPosts && (
						<div className="text-center py-4">
							<button
								onClick={loadMorePosts}
								className="px-6 py-3 bg-primary text-white rounded-md font-semibold hover:bg-white hover:border hover:text-black transition-all duration-300"
							>
								More Post
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default BlogList;
