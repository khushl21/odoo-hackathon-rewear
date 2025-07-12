import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Heart, Share2, MapPin, Clock, Star, Shield, Repeat } from "lucide-react";
import item1 from "@/assets/item1.jpg";

const ItemDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data - in real app this would be fetched based on ID
  const item = {
    id: "1",
    title: "Vintage Denim Jacket",
    description: "Beautiful vintage denim jacket in excellent condition. This classic piece features authentic wear and fading that gives it character. Perfect for layering over dresses or with casual outfits. Has been well cared for and comes from a smoke-free home.",
    images: [item1, item1, item1],
    category: "Outerwear",
    size: "M",
    condition: "Excellent",
    type: "Casual",
    brand: "Levi's",
    color: "Blue",
    material: "100% Cotton",
    tags: ["vintage", "denim", "casual", "classic"],
    location: "Downtown",
    timeAgo: "2h ago",
    points: 15,
    owner: {
      name: "Sarah Johnson",
      avatar: "/api/placeholder/40/40",
      rating: 4.8,
      totalSwaps: 23,
      joinDate: "2023"
    },
    swapPreferences: "Looking for summer dresses in size S/M, or casual tops. Open to other interesting pieces!"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Link */}
        <Link 
          to="/browse" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Browse
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <img 
                src={item.images[selectedImage]} 
                alt={item.title}
                className="w-full h-96 object-cover rounded-lg border border-border"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 hover:bg-white hover:text-red-500"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>
            
            {item.images.length > 1 && (
              <div className="flex space-x-2">
                {item.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg border-2 overflow-hidden ${
                      selectedImage === index ? 'border-primary' : 'border-border'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${item.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-2">
                  <Badge variant="secondary">{item.category}</Badge>
                  <h1 className="text-3xl font-bold text-foreground">{item.title}</h1>
                  {item.brand && (
                    <p className="text-lg text-muted-foreground">by {item.brand}</p>
                  )}
                </div>
                <Button variant="ghost" size="icon">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{item.timeAgo}</span>
                </div>
              </div>

              <p className="text-foreground leading-relaxed">{item.description}</p>
            </div>

            {/* Item Specs */}
            <Card className="border-border">
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-3">Item Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Size:</span>
                    <span className="ml-2 font-medium">{item.size}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Condition:</span>
                    <Badge 
                      variant="outline" 
                      className={`ml-2 ${
                        item.condition === 'Excellent' ? 'border-eco-green text-eco-green' : 'border-primary text-primary'
                      }`}
                    >
                      {item.condition}
                    </Badge>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Color:</span>
                    <span className="ml-2 font-medium">{item.color}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Material:</span>
                    <span className="ml-2 font-medium">{item.material}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Owner Info */}
            <Card className="border-border">
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-3">Listed by</h3>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={item.owner.avatar} alt={item.owner.name} />
                    <AvatarFallback>{item.owner.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-foreground">{item.owner.name}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-muted-foreground">{item.owner.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.owner.totalSwaps} successful swaps • Member since {item.owner.joinDate}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Swap Preferences */}
            {item.swapPreferences && (
              <Card className="border-border">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-3">Looking for</h3>
                  <p className="text-muted-foreground text-sm">{item.swapPreferences}</p>
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-soft rounded-lg">
                <div>
                  <div className="font-semibold text-foreground">{item.points} Points</div>
                  <div className="text-sm text-muted-foreground">Or propose a swap</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-eco-green" />
                  <span className="text-sm text-muted-foreground">Protected swap</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button className="flex-1" size="lg">
                  <Repeat className="w-4 h-4 mr-2" />
                  Propose Swap
                </Button>
                <Button variant="outline" className="flex-1" size="lg">
                  Redeem with Points
                </Button>
              </div>

              <Button variant="ghost" className="w-full">
                Message Owner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;