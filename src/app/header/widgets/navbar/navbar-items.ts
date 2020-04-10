// Menu
export interface Menu {
  path?: string;
  title?: string;
  type?: string;
  megaMenu?: boolean;
  megaMenuType?: string; // small, medium, large
  image?: string;
  children?: Menu[];
}

export const MENUITEMS: Menu[] = [
	{
		title: 'home', type: 'sub', children: [
	      { path: 'home/one', title: 'Fashion-01', type: 'extTabLink' },          
	      { path: 'home/two', title: 'Fashion-02', type: 'extTabLink'},         
	      { path: 'home/three', title: 'Fashion-03', type: 'extTabLink' },         
	      { path: 'home/four', title: 'vegetable', type: 'extTabLink' },        
	      { path: 'home/five', title: 'watch', type: 'extTabLink' },        
	      { path: 'home/six', title: 'furniture', type: 'extTabLink' },        
	      { path: 'home/seven', title: 'flower', type: 'extTabLink' },    
	      { path: 'home/eight', title: 'beauty', type: 'extTabLink' },   
	      { path: 'home/nine', title: 'electronics', type: 'extTabLink' },   
	      { path: 'home/ten', title: 'pets', type: 'extTabLink' },   
	      { path: 'home/eleven', title: 'metro', type: 'extTabLink' },   
	      { path: 'home/twelve', title: 'gym', type: 'extTabLink' },   
	      { path: 'home/thirteen', title: 'tools', type: 'extTabLink' },   
	      { path: 'home/fourteen', title: 'marijuana', type: 'extTabLink' }  
	    ]
	},
	{
		title: 'features', type: 'sub', megaMenu: true, megaMenuType: 'small', children: [
	      { path: '/blog/left-sidebar', title: 'blog-left-sidebar', image: 'assets/images/feature/blog-page.jpg', type: 'link' },
	      { path: '/blog/right-sidebar', title: 'blog-right-sidebar', image: 'assets/images/feature/blog(right-sidebar).jpg', type: 'link' },
	      { path: '/blog/details', title: 'blog-detail',  image: 'assets/images/feature/blog-detail.jpg', type: 'link' },
	      { path: '/home/left-sidebar/collection/all', title: 'category-left-sidebar', image: 'assets/images/feature/category-page.jpg', type: 'link' },
	      { path: '/home/right-sidebar/collection/all', title: 'category-right-sidebar', image: 'assets/images/feature/category-page(right).jpg', type: 'link' },
	      { path: '/home/no-sidebar/collection/all', title: 'category-no-sidebar', image: 'assets/images/feature/category-page(no-sidebar).jpg', type: 'link' }
	    ]
	},
	{
		title: 'products', type: 'sub', megaMenu: true, megaMenuType: 'medium', children: [
	      { path: '/home/left-sidebar/product/1', title: 'left-sidebar', image: 'assets/images/feature/product-page(left-sidebar).jpg', type: 'link' },
	      { path: '/home/right-sidebar/product/1', title: 'right-sidebar', image: 'assets/images/feature/product-page(right-sidebar).jpg', type: 'link' },
	      { path: '/home/no-sidebar/product/1', title: 'no-sidebar',  image: 'assets/images/feature/product-page(no-sidebar).jpg', type: 'link' },
	      { path: '/home/col-left/product/1', title: '3-col-thumbnail-left', image: 'assets/images/feature/product-page(3-col-left).jpg', type: 'link' },
	      { path: '/home/col-right/product/1', title: '3-col-thumbnail-right', image: 'assets/images/feature/product-page(3-col-right).jpg', type: 'link' },
	      { path: '/home/column/product/1', title: 'thumbnail-below', image: 'assets/images/feature/product-page(3-column).jpg', type: 'link' },
	      { path: '/home/accordian/product/1', title: 'accordian-details', image: 'assets/images/feature/product-page(accordian).jpg', type: 'link' },
	      { path: '/home/left-image/product/1', title: 'thumbnail-left', image: 'assets/images/feature/product-page(left-image).jpg', type: 'link' },
	      { path: '/home/right-image/product/1', title: 'thumbnail-right', image: 'assets/images/feature/product-page(right-image).jpg', type: 'link' },
	      { path: '/home/vertical/product/1', title: 'vertical-tab', image: 'assets/images/feature/product-page(vertical-tab).jpg', type: 'link' }
	    ]
	},
	{
		title: 'pages', type: 'sub', children: [
	      { path: '/pages/about-us', title: 'about-us', type: 'link' },          
	      { path: '/pages/lookbook', title: 'lookbook', type: 'link' },         
	      { path: '/pages/typography', title: 'Typography', type: 'link' }, 
	      { 
	      	title: 'Portfolio',  type: 'sub', children: [
		      	{ path: '/pages/grid/two/column', title: 'Portfolio-2-Grid',  type: 'link' },
		      	{ path: '/pages/grid/three/column', title: 'Portfolio-3-Grid',  type: 'link' },
		      	{ path: '/pages/grid/four/column', title: 'Portfolio-4-Grid',  type: 'link' },
		      	{ path: '/pages/grid/two/masonary', title: 'Masonary-2-Grid',  type: 'link' },
		      	{ path: '/pages/grid/three/masonary', title: 'Masonary-3-Grid',  type: 'link' },
		      	{ path: '/pages/grid/four/masonary', title: 'Masonary-4-Grid',  type: 'link' },
		      	{ path: '/pages/fullwidth/masonary', title: 'Masonary-Fullwidth',  type: 'link' }
	      	]
	      },         
	      { path: '/pages/dashboard', title: 'dashboard', type: 'link' },  
	      { path: '/pages/cart', title: 'cart', type: 'link' },  
	      { path: '/pages/wishlist', title: 'wishlist', type: 'link' },    
	      { path: '/pages/compare', title: 'compare', type: 'link' },  
	      { path: '/pages/checkout', title: 'checkout', type: 'link' },  
	      { path: '/pages/login', title: 'login', type: 'link' },        
	      { path: '/pages/register', title: 'register', type: 'link' },        
	      { path: '/pages/forgetpassword', title: 'forget-password', type: 'link' },  
	      { path: '/pages/search', title: 'search', type: 'link' },        
	      { path: '/pages/collection', title: 'collection', type: 'link' },  
	      { path: '/pages/order-success', title: 'order-success', type: 'link' },  
	      { path: '/pages/contact', title: 'contact', type: 'link' },  
	      { path: '/pages/faq', title: 'FAQ', type: 'link' },  
	      { path: '/pages/404', title: '404', type: 'link'}        
	    ]
	},
	{
		title: 'shop', type: 'sub', megaMenu: true, megaMenuType: 'large', children: [
	      { 
	      	title: 'mens-fashion',  type: 'link', children: [
		      	{ path: '/home/left-sidebar/collection/all', title: 'sports-wear',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'top',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'bottom',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'ethic-wear',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'sports-wear',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'shirts',  type: 'link' }
	      	]
	      },
	      { 
	      	title: 'women-fashion',  type: 'link', children: [
		      	{ path: '/home/left-sidebar/collection/all', title: 'dresses',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'skirts',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'westarn-wear',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'ethic-wear',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'sports-wear',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'bottom-wear',  type: 'link' }
	      	]
	      },
	      { 
	      	title: 'kids-fashion',  type: 'link', children: [
		      	{ path: '/home/left-sidebar/collection/all', title: 'sports-wear',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'ethic-wear',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'sports-wear',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'top',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'bottom-wear',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'ethic-wear',  type: 'link' }
	      	]
	      },
	      { 
	      	title: 'accessories',  type: 'link', children: [
		      	{ path: '/home/left-sidebar/collection/all', title: 'fashion-jewellery',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'caps-and-hats',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'precious-jewellery',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'necklaces',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'earrings',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'rings-wrist-wear',  type: 'link' }
	      	]
	      },
	      { 
	      	title: 'men-accessories',  type: 'link', children: [
		      	{ path: '/home/left-sidebar/collection/all', title: 'ties',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'cufflinks',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'pockets-squares',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'helmets',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'scarves',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', title: 'phone-cases',  type: 'link' }
	      	]
	      },
	    ]
	},
]