import { useState } from "react";
import { Header } from "@/components/Header";
import { ItemCard } from "@/components/ItemCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Plus, Star, TrendingUp, Package, Repeat, Heart, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import item1 from "@/assets/item1.jpg";
import item2 from "@/assets/item2.jpg";
import item3 from "@/assets/item3.jpg";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data
  const user = {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    avatar: "/api/placeholder/80/80",
    joinDate: "January 2023",
    points: 145,
    level: "Eco Champion",
    rating: 4.8,
    totalSwaps: 23,
    co2Saved: "15.2kg"
  };

  const myListings = [
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
      status: "Active"
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
      status: "Pending"
    }
  ];

  const activeSwaps = [
    {
      id: "1",
      type: "outgoing",
      item: "My Vintage Denim Jacket",
      partner: "Alex Chen",
      theirItem: "Silk Blouse",
      status: "Pending Approval",
      date: "2 days ago"
    },
    {
      id: "2", 
      type: "incoming",
      item: "Cotton Sweater",
      partner: "Maria Lopez",
      theirItem: "My Floral Dress",
      status: "Awaiting Shipment",
      date: "5 days ago"
    }
  ];

  const wishlist = [
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8 border-border">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-lg">{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
                  <p className="text-muted-foreground">{user.email}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="secondary">{user.level}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">{user.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 md:ml-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{user.points}</div>
                  <div className="text-sm text-muted-foreground">Points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{user.totalSwaps}</div>
                  <div className="text-sm text-muted-foreground">Swaps</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-eco-green">{user.co2Saved}</div>
                  <div className="text-sm text-muted-foreground">CO₂ Saved</div>
                </div>
                <div className="text-center">
                  <Button size="sm" className="w-full">
                    <Settings className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </div>
              </div>
            </div>

            {/* Progress to next level */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Progress to next level</span>
                <span className="text-sm text-muted-foreground">185 / 200 points</span>
              </div>
              <Progress value={92.5} className="w-full" />
              <p className="text-xs text-muted-foreground mt-1">15 more points to reach "Sustainability Master"</p>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="swaps">Active Swaps</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Quick Stats */}
              <Card className="border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">
                    +2 from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Swaps</CardTitle>
                  <Repeat className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">
                    2 incoming, 1 outgoing
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Impact Score</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92</div>
                  <p className="text-xs text-muted-foreground">
                    Above community average
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="mt-6 border-border">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-eco-green rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Your Vintage Denim Jacket received 3 swap requests</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Alex Chen accepted your swap proposal</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">You earned 15 points from a successful swap</p>
                      <p className="text-xs text-muted-foreground">3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="listings">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">My Listings</h2>
              <Link to="/add-item">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Item
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myListings.map((item) => (
                <div key={item.id} className="relative">
                  <ItemCard {...item} />
                  <Badge 
                    variant={item.status === 'Active' ? 'default' : 'secondary'}
                    className="absolute top-2 left-2"
                  >
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="swaps">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Active Swaps</h2>

              {activeSwaps.map((swap) => (
                <Card key={swap.id} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant={swap.type === 'outgoing' ? 'default' : 'secondary'}>
                            {swap.type === 'outgoing' ? 'Outgoing' : 'Incoming'}
                          </Badge>
                          <Badge variant="outline">{swap.status}</Badge>
                        </div>
                        <h3 className="font-semibold text-foreground">{swap.item} ↔ {swap.theirItem}</h3>
                        <p className="text-sm text-muted-foreground">With {swap.partner} • {swap.date}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">View Details</Button>
                        <Button size="sm">Take Action</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wishlist">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Wishlist</h2>
              <Button variant="outline">
                <Heart className="w-4 h-4 mr-2" />
                Manage Alerts
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((item) => (
                <ItemCard key={item.id} {...item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;