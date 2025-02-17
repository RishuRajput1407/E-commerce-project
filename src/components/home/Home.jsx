import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Badge,
  Box,
  InputBase,
  alpha,
  Modal,
  Rating,
  Chip,
  Divider,
  Fade,
  Stack,
  Link,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  Search as SearchIcon,
  ShoppingCart,
  Person,
  Menu as MenuIcon,
  Close as CloseIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  Favorite,
  FavoriteBorder,
  Share,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
} from '@mui/icons-material';

const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: '$299.99',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80',
    category: 'Audio',
    description: 'Experience premium sound quality with our latest wireless headphones. Features include active noise cancellation, 30-hour battery life, and premium comfort.',
    rating: 4.5,
    reviews: 128,
    features: ['Active Noise Cancellation', 'Bluetooth 5.0', '30-hour Battery Life', 'Quick Charge', 'Premium Build Quality'],
    colors: ['Black', 'Silver', 'Navy Blue'],
    inStock: true
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: '$399.99',
    image: 'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=500&q=80',
    category: 'Wearables',
    description: 'Stay connected and track your fitness with our advanced smartwatch. Features include heart rate monitoring, GPS, and a vibrant OLED display.',
    rating: 4.8,
    reviews: 245,
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', 'OLED Display', 'Sleep Tracking'],
    colors: ['Space Gray', 'Silver', 'Gold'],
    inStock: true
  },
  {
    id: 3,
    name: 'Ultra HD 4K Camera',
    price: '$899.99',
    image: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=500&q=80',
    category: 'Photography',
    description: 'Capture life\'s moments in stunning 4K resolution. Professional-grade camera with advanced features for both photos and videos.',
    rating: 4.7,
    reviews: 89,
    features: ['4K Video', '20MP Photos', 'Image Stabilization', 'Wi-Fi Connectivity', 'Touch Screen'],
    colors: ['Black'],
    inStock: true
  },
  {
    id: 4,
    name: 'Gaming Laptop Pro',
    price: '$1499.99',
    image: 'https://images.unsplash.com/photo-1637329428580-d272f4fb3849?w=500&q=80',
    category: 'Computing',
    description: 'Ultimate gaming performance with the latest RTX graphics and high-refresh rate display. Perfect for gaming and content creation.',
    rating: 4.9,
    reviews: 156,
    features: ['RTX 3080', '16GB RAM', '1TB SSD', '165Hz Display', 'RGB Keyboard'],
    colors: ['Black', 'White'],
    inStock: true
  },
  {
    id: 5,
    name: 'Premium Smartphone',
    price: '$999.99',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80',
    category: 'Mobile',
    description: 'Experience the future of mobile technology with our flagship smartphone. Features a stunning display and professional-grade cameras.',
    rating: 4.6,
    reviews: 312,
    features: ['5G Ready', 'Triple Camera', 'AMOLED Display', 'Fast Charging', 'Face ID'],
    colors: ['Midnight Black', 'Pacific Blue', 'Rose Gold'],
    inStock: true
  },
  {
    id: 6,
    name: 'Wireless Gaming Mouse',
    price: '$79.99',
    image: 'https://images.unsplash.com/photo-1613141411244-0e4ac259d217?w=500&q=80',
    category: 'Gaming',
    description: 'Professional gaming mouse with ultra-low latency and customizable RGB lighting. Perfect for competitive gaming.',
    rating: 4.4,
    reviews: 178,
    features: ['16000 DPI', 'RGB Lighting', 'Wireless', '500hr Battery', 'Ergonomic Design'],
    colors: ['Black', 'White'],
    inStock: true
  }
];


const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setIsFavorite(false);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setQuantity(1);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <Box sx={{ 
      flexGrow: 1,
      minHeight: '100vh',
      width: '100vw',
      overflowX: 'hidden'
    }}>
      <AppBar position="fixed" sx={{ 
        backgroundColor: '#fff', 
        color: '#333',
        width: '100%'
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              fontWeight: 600,
              background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            TechMart
          </Typography>

          <Box
            sx={{
              position: 'relative',
              borderRadius: 1,
              backgroundColor: alpha('#000', 0.05),
              '&:hover': { backgroundColor: alpha('#000', 0.1) },
              marginRight: 2,
              marginLeft: 0,
              width: '100%',
              maxWidth: '400px',
            }}
          >
            <Box sx={{ padding: '0 16px', height: '100%', position: 'absolute', display: 'flex', alignItems: 'center' }}>
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search products..."
              sx={{
                color: 'inherit',
                padding: '8px 8px 8px 48px',
                width: '100%',
              }}
            />
          </Box>

          <IconButton color="inherit">
            <Badge badgeContent={4} color="primary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Person />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1400&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }
          }}
        />
        <Container
          maxWidth={false}
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            color: 'white',
            px: { xs: 2, sm: 4, md: 8 },
            pt: 8
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Next-Gen Tech
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              maxWidth: 600,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Discover the latest innovations in technology with exclusive deals and premium products.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              width: 200,
              height: 50,
              background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1976d2, #21cbf3)',
              }
            }}
          >
            Shop Now
          </Button>
        </Container>
      </Box>

      <Container 
        maxWidth={false}
        sx={{ 
          my: 6,
          px: { xs: 2, sm: 4, md: 8 }
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 4,
            fontWeight: 600,
            textAlign: 'center',
            background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Featured Products
        </Typography>

        <Grid container spacing={3} sx={{ width: '100%', mx: 0 }}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    cursor: 'pointer'
                  },
                  borderRadius: 2,
                  overflow: 'visible',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  backgroundColor: '#fff',
                  mb: 2
                }}
                onClick={() => handleOpenModal(product)}
              >
                <Box sx={{ 
                  position: 'relative',
                  width: '100%',
                  backgroundColor: '#f5f5f5',
                  p: 2
                }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{ 
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      minHeight: '200px',
                      maxHeight: '300px'
                    }}
                  />
                  <Typography
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: 1,
                      fontSize: '0.875rem',
                      zIndex: 1
                    }}
                  >
                    {product.category}
                  </Typography>
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" component="h2" sx={{ 
                    fontWeight: 600,
                    mb: 1,
                    color: '#1a237e'
                  }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {product.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Rating value={product.rating} precision={0.1} size="small" readOnly />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      ({product.reviews} reviews)
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                      Key Features:
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                      {product.features.slice(0, 3).map((feature, index) => (
                        <Chip
                          key={index}
                          label={feature}
                          size="small"
                          variant="outlined"
                          sx={{ mb: 1 }}
                        />
                      ))}
                    </Stack>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                      {product.price}
                    </Typography>
                    <Typography variant="body2" color={product.inStock ? 'success.main' : 'error.main'}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </Typography>
                  </Box>
                  <Button 
                    variant="contained" 
                    fullWidth
                    sx={{
                      background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #1976d2, #21cbf3)',
                      }
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to cart logic here
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Product Details Modal */}
      <Modal
        open={Boolean(selectedProduct)}
        onClose={handleCloseModal}
        closeAfterTransition
      >
        <Fade in={Boolean(selectedProduct)}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '90%', sm: '80%', md: '70%' },
              maxWidth: '1000px',
              maxHeight: '90vh',
              overflow: 'auto',
              bgcolor: 'background.paper',
              borderRadius: 3,
              boxShadow: 24,
              p: { xs: 2, sm: 4 },
            }}
          >
            {selectedProduct && (
              <>
                <IconButton
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: 'grey.500',
                  }}
                  onClick={handleCloseModal}
                >
                  <CloseIcon />
                </IconButton>

                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        borderRadius: 2,
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Stack spacing={2}>
                      <Typography variant="h4" component="h2" fontWeight={600}>
                        {selectedProduct.name}
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Rating value={selectedProduct.rating} precision={0.1} readOnly />
                        <Typography variant="body2" color="text.secondary">
                          ({selectedProduct.reviews} reviews)
                        </Typography>
                      </Box>

                      <Typography variant="h5" color="primary" fontWeight={600}>
                        {selectedProduct.price}
                      </Typography>

                      <Typography variant="body1" color="text.secondary">
                        {selectedProduct.description}
                      </Typography>

                      <Divider />

                      <Box>
                        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                          Key Features
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                          {selectedProduct.features.map((feature, index) => (
                            <Chip
                              key={index}
                              label={feature}
                              sx={{ my: 0.5 }}
                              variant="outlined"
                            />
                          ))}
                        </Stack>
                      </Box>

                      <Box>
                        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                          Available Colors
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          {selectedProduct.colors.map((color, index) => (
                            <Chip key={index} label={color} />
                          ))}
                        </Stack>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
                        <Typography variant="subtitle1" fontWeight={600}>
                          Quantity:
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <IconButton onClick={() => handleQuantityChange(-1)}>
                            <RemoveIcon />
                          </IconButton>
                          <Typography sx={{ mx: 2 }}>{quantity}</Typography>
                          <IconButton onClick={() => handleQuantityChange(1)}>
                            <AddIcon />
                          </IconButton>
                        </Box>
                      </Box>

                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="contained"
                          size="large"
                          fullWidth
                          sx={{
                            background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #1976d2, #21cbf3)',
                            }
                          }}
                        >
                          Add to Cart
                        </Button>
                        <IconButton
                          sx={{
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 1,
                          }}
                          onClick={() => setIsFavorite(!isFavorite)}
                        >
                          {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
                        </IconButton>
                        <IconButton
                          sx={{
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 1,
                          }}
                        >
                          <Share />
                        </IconButton>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </>
            )}
          </Box>
        </Fade>
      </Modal>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: '#1a237e',
          color: 'white',
          py: 6,
          mt: 8
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* About Section */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                About TechMart
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Your one-stop destination for premium tech products. We offer the latest gadgets with 
                exceptional service and competitive prices.
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton size="small" sx={{ color: 'white' }}>
                  <Facebook />
                </IconButton>
                <IconButton size="small" sx={{ color: 'white' }}>
                  <Twitter />
                </IconButton>
                <IconButton size="small" sx={{ color: 'white' }}>
                  <Instagram />
                </IconButton>
                <IconButton size="small" sx={{ color: 'white' }}>
                  <LinkedIn />
                </IconButton>
              </Stack>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Quick Links
              </Typography>
              <List dense sx={{ p: 0 }}>
                <ListItem disablePadding>
                  <ListItemText 
                    primary={
                      <Link href="#" color="inherit" underline="hover">
                        Home
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText 
                    primary={
                      <Link href="#" color="inherit" underline="hover">
                        Products
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText 
                    primary={
                      <Link href="#" color="inherit" underline="hover">
                        About Us
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText 
                    primary={
                      <Link href="#" color="inherit" underline="hover">
                        Contact
                      </Link>
                    }
                  />
                </ListItem>
              </List>
            </Grid>

            {/* Customer Service */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Customer Service
              </Typography>
              <List dense sx={{ p: 0 }}>
                <ListItem disablePadding>
                  <ListItemText 
                    primary={
                      <Link href="#" color="inherit" underline="hover">
                        Shipping Policy
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText 
                    primary={
                      <Link href="#" color="inherit" underline="hover">
                        Return Policy
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText 
                    primary={
                      <Link href="#" color="inherit" underline="hover">
                        FAQ
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText 
                    primary={
                      <Link href="#" color="inherit" underline="hover">
                        Terms & Conditions
                      </Link>
                    }
                  />
                </ListItem>
              </List>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Contact Us
              </Typography>
              <List dense sx={{ p: 0 }}>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Phone sx={{ mr: 1, fontSize: 20 }} />
                  <ListItemText primary="+1 (555) 123-4567" />
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <Email sx={{ mr: 1, fontSize: 20 }} />
                  <ListItemText primary="support@techmart.com" />
                </ListItem>
                <ListItem disablePadding>
                  <LocationOn sx={{ mr: 1, fontSize: 20 }} />
                  <ListItemText primary="123 Tech Street, Silicon Valley, CA 94025" />
                </ListItem>
              </List>
            </Grid>
          </Grid>

          {/* Bottom Bar */}
          <Box
            sx={{
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              mt: 4,
              pt: 3,
              textAlign: 'center'
            }}
          >
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              &copy; {new Date().getFullYear()} TechMart. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
