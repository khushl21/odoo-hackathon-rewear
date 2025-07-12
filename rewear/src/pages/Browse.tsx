import { useState } from "react";
import { Header } from "@/components/Header";
import { ItemCard } from "@/components/ItemCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Grid, List } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import item1 from "@/assets/item1.jpg";
import item2 from "@/assets/item2.jpg";
import item3 from "@/assets/item3.jpg";

const Browse = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - in real app this would come from API
  const items = [
    {
      id: "1",
      title: "Vintage Denim Jacket",
      image: item1,
      category: "Outerwear",
      size: "M",
      condition: "Excellent",
      location: "Downtown",
      timeAgo: "2h ago",
      points: 15,
    },
    {
      id: "2",
      title: "Floral Summer Dress",
      image: item2,
      category: "Dresses",
      size: "S", 
      condition: "Good",
      location: "Uptown",
      timeAgo: "5h ago",
      points: 12,
    },
    {
      id: "3",
      title: "Cozy Knit Sweater",
      image: item3,
      category: "Knitwear",
      size: "L",
      condition: "Excellent",
      location: "Midtown", 
      timeAgo: "1d ago",
      points: 18,
    },
    {
      id: "4",
      title: "Classic White Shirt",
      image: item1,
      category: "Tops",
      size: "M",
      condition: "Good",
      location: "Downtown",
      timeAgo: "3h ago",
      points: 10,
    },
    {
      id: "5",
      title: "Black Leather Boots",
      image: item2,
      category: "Shoes",
      size: "9",
      condition: "Excellent",
      location: "Westside",
      timeAgo: "6h ago",
      points: 25,
    },
    {
      id: "6",
      title: "Silk Scarf Collection",
      image: item3,
      category: "Accessories",
      size: "One Size",
      condition: "Good",
      location: "Eastside",
      timeAgo: "2d ago",
      points: 8,
    },
  ];

  const categories = ["All", "Dresses", "Tops", "Bottoms", "Outerwear", "Shoes", "Accessories"];
  const sizes = ["All", "XS", "S", "M", "L", "XL", "XXL"];
  const conditions = ["All", "Excellent", "Good", "Fair"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Browse Items</h1>
          <p className="text-muted-foreground">Discover amazing clothing finds from our community</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search for items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-soft border-border"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[140px] bg-soft">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-border z-50">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-[120px] bg-soft">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-border z-50">
                  {sizes.map((size) => (
                    <SelectItem key={size} value={size.toLowerCase()}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-[140px] bg-soft">
                  <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-border z-50">
                  {conditions.map((condition) => (
                    <SelectItem key={condition} value={condition.toLowerCase()}>
                      {condition}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Showing {items.length} items
            </span>
            <div className="flex space-x-2">
              <Badge variant="secondary">Featured</Badge>
              <Badge variant="outline">Recently Added</Badge>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Select defaultValue="recent">
              <SelectTrigger className="w-[150px] bg-soft">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border border-border z-50">
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="points-low">Points: Low to High</SelectItem>
                <SelectItem value="points-high">Points: High to Low</SelectItem>
                <SelectItem value="location">Nearest to Me</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex border border-border rounded-md">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                className="rounded-r-none"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                className="rounded-l-none"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1"
        }`}>
          {items.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Items
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Browse;