import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ItemCard } from "@/components/ItemCard";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowRight, Recycle, Users, Leaf, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import item1 from "@/assets/item1.jpg";
import item2 from "@/assets/item2.jpg";
import item3 from "@/assets/item3.jpg";

const Landing = () => {
  const featuredItems = [
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
    }
  ];

  const categories = [
    "Dresses", "Tops", "Bottoms", "Outerwear", "Shoes", "Accessories"
  ];

  const stats = [
    { icon: Users, label: "Active Swappers", value: "2,500+" },
    { icon: Recycle, label: "Items Exchanged", value: "12,000+" },
    { icon: Leaf, label: "CO2 Saved", value: "850kg" },
    { icon: TrendingUp, label: "User Satisfaction", value: "98%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-soft via-warm to-accent overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  🌱 Sustainable Fashion Platform
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Give Your Clothes a 
                  <span className="text-transparent bg-gradient-to-r from-eco-green to-eco-light bg-clip-text"> Second Life</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Join our community of conscious fashionistas. Exchange unused clothing through direct swaps or our point-based redemption system.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/browse">
                  <Button variant="hero" className="group">
                    Start Swapping
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/add-item">
                  <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                    List an Item
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="People exchanging clothes" 
                className="w-full h-auto rounded-2xl shadow-[0_20px_60px_hsl(160_20%_15%/0.15)]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-primary">15,000+</div>
                <div className="text-sm text-muted-foreground">Happy Swappers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-[0_4px_20px_hsl(150_60%_45%/0.1)]">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-soft">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Browse by Category</h2>
            <p className="text-lg text-muted-foreground">Find exactly what you're looking for</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link key={category} to={`/browse?category=${category.toLowerCase()}`}>
                <Card className="hover:shadow-[0_8px_30px_hsl(160_20%_15%/0.08)] transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Items</h2>
            <p className="text-lg text-muted-foreground">Discover amazing finds from our community</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredItems.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/browse">
              <Button variant="outline" size="lg">
                Browse All Items
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-eco-green to-eco-light">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of conscious consumers making fashion more sustainable, one swap at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="px-8 py-3 text-lg bg-white text-primary hover:bg-white/90"
                >
                  Join the Community
                </Button>
              </Link>
              <Link to="/browse">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-3 text-lg border-white text-white hover:bg-white/10"
                >
                  Start Browsing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;