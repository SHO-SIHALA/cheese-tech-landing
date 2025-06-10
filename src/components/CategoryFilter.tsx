
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Category {
  id: string;
  name: string;
  description: string;
}

interface CategoryFilterProps {
  categories: Category[];
}

const CategoryFilter = ({ categories }: CategoryFilterProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category');

  const handleCategoryChange = (categoryName: string | null) => {
    if (categoryName) {
      setSearchParams({ category: categoryName.toLowerCase() });
    } else {
      setSearchParams({});
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button
          variant={!currentCategory ? "default" : "outline"}
          className="w-full justify-start"
          onClick={() => handleCategoryChange(null)}
        >
          All Products
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={currentCategory === category.name.toLowerCase() ? "default" : "outline"}
            className="w-full justify-start"
            onClick={() => handleCategoryChange(category.name)}
          >
            {category.name}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default CategoryFilter;
