import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface ItemCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  size: string;
  condition: string;
  location: string;
  timeAgo: string;
  points?: number;
  isSwappable?: boolean;
}

export const ItemCard = ({
  id,
  title,
  image,
  category,
  size,
  condition,
  location,
  timeAgo,
  points,
  isSwappable = true
}: ItemCardProps) => {
  return (
    <Card className="group hover:shadow-[0_8px_30px_hsl(160_20%_15%/0.08)] transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-white to-soft border-border">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white hover:text-red-500 transition-colors"
        >
          <Heart className="w-4 h-4" />
        </Button>
        <Badge 
          variant="secondary" 
          className="absolute top-2 left-2 bg-white/90 text-foreground font-medium"
        >
          {category}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center space-x-2 mt-2">
              <Badge variant="outline" className="text-xs">
                Size {size}
              </Badge>
              <Badge 
                variant="outline" 
                className={`text-xs ${
                  condition === 'Excellent' ? 'border-eco-green text-eco-green' :
                  condition === 'Good' ? 'border-primary text-primary' :
                  'border-muted-foreground text-muted-foreground'
                }`}
              >
                {condition}
              </Badge>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>{location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{timeAgo}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            {points && (
              <div className="text-sm font-medium text-primary">
                {points} points
              </div>
            )}
            <div className="flex space-x-2 ml-auto">
              {isSwappable && (
                <Button variant="outline" size="sm">
                  Swap
                </Button>
              )}
              <Link to={`/item/${id}`}>
                <Button size="sm">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};