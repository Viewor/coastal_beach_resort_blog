import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function BlogFilter({ categories, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4" data-aos="fade-right">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            className="px-4 py-2 text-sm font-medium cursor-pointer rounded-full shadow-sm transition-all duration-300 hover:bg-primary/80 hover:text-white"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
      <div className="relative w-full max-w-md">
        <Input
          placeholder="Search blog posts..."
          className="pr-12 rounded-full border border-amber-500 focus:ring-2 focus:ring-primary"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
