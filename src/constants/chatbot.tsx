const prompts: string[][] = [
    ["hi", "hello", "hey"],
    ["how do I register", "how to sign up", "create an account"],
    ["how to login", "log in", "sign in"],
    ["forgot password", "reset password", "can't login"],
    ["how to buy a book", "buy textbooks", "purchase stationery"],
    ["how to sell a book", "sell textbooks", "list stationery"],
    ["how to exchange materials", "exchange books", "swap stationery"],
    ["how to contact support", "customer service", "help desk"],
    ["what is Unisync", "about Unisync", "what does Unisync do"],
    ["how to create a listing", "add product", "new listing"],
    ["how to chat with sellers", "message sellers", "contact sellers"],
    ["how to leave a review", "rate a product", "give feedback"],
    ["how to use filters", "search products", "filter items"],
    ["how to update profile", "change account details", "edit profile"],
    ["how to delete account", "remove account", "close account"],
    ["where is my order", "track order", "order status"],
    ["how to report an issue", "report problem", "flag a product"],
    ["payment options", "payment methods", "how to pay"],
    ["refund policy", "return policy", "get a refund"],
    ["bye", "goodbye", "see you later"]
  ];
  

  const replies: string[][] = [
    ["Hello! How can I assist you today?", "Hi! How can I help you?", "Hey there! Need any assistance?"],
    ["You can register by clicking on the 'Sign Up' button at the top right corner.", "To create an account, use the 'Register' option in the menu.", "Sign up by providing your details in the registration form available on the homepage."],
    ["Log in using your email and password via the 'Login' button at the top right corner.", "To sign in, enter your credentials on the login page.", "Use the 'Sign In' option from the menu to log in."],
    ["Click on 'Forgot Password' on the login page to reset your password.", "You can reset your password by following the 'Forgot Password' link.", "If you can't login, try using the 'Forgot Password' option to reset your credentials."],
    ["To buy a book, search for the item, add it to your cart, and proceed to checkout.", "You can purchase textbooks by browsing the listings and following the checkout process.", "Find the stationery you need, add it to your cart, and complete the purchase."],
    ["To sell a book, create a listing by providing the details and setting a price.", "List your textbooks by clicking on 'Sell' and filling out the required information.", "Use the 'Sell' button to list your stationery and materials."],
    ["Exchange materials by browsing exchange listings or creating your own.", "You can swap books by using the 'Exchange' feature on the platform.", "To exchange stationery, find a match and propose a swap."],
    ["Contact support via the 'Help' section or email us at support@unisync.com.", "Our customer service can be reached through the 'Contact Us' page.", "For assistance, use the 'Support' option or email support@unisync.com."],
    ["Unisync is a platform for students to buy, sell, and exchange study materials.", "We help students manage education costs by facilitating the trade of textbooks and stationery.", "Unisync creates a community where students can support each other by exchanging materials."],
    ["Create a listing by clicking on 'Add Product' and providing the necessary details.", "Use the 'New Listing' button to add a product to our marketplace.", "Fill out the listing form available under 'Sell' to create a new product listing."],
    ["Chat with sellers by clicking on 'Contact Seller' on the product page.", "You can message sellers directly from their product listings.", "Use the 'Message' feature to communicate with sellers."],
    ["Leave a review by navigating to the product page and clicking on 'Leave a Review'.", "Rate products and provide feedback using the review section on the product page.", "To give feedback, use the 'Review' option available on each listing."],
    ["Use the search bar and filters to find specific products.", "Apply filters such as category, price, and condition to narrow your search.", "Search for items using keywords and refine results with filters."],
    ["Update your profile by going to 'Account Settings' and making the necessary changes.", "Change your account details in the 'Edit Profile' section.", "You can edit your profile information from the account management page."],
    ["Delete your account by contacting support or using the 'Delete Account' option in settings.", "To close your account, navigate to account settings and choose 'Delete Account'.", "Remove your account by following the steps in the 'Account Deletion' section."],
    ["Track your order through the 'My Orders' page or contact support for assistance.", "You can view your order status in the 'Order History' section.", "For tracking orders, go to 'My Orders' or reach out to our support team."],
    ["Report an issue by using the 'Report' button on the product page or contacting support.", "Flag a problem by clicking on 'Report' or emailing our support team.", "You can report issues through the 'Report Problem' option on listings."],
    ["We accept various payment methods including credit cards, PayPal, and bank transfers.", "Payment options include credit/debit cards, PayPal, and more.", "Pay securely using our supported payment methods listed at checkout."],
    ["Our refund policy allows returns within 30 days of purchase. Read more on our 'Refund Policy' page.", "Check our return policy on the 'Refund Policy' page for details on getting a refund.", "You can request a refund by following our policy outlined on the refund information page."],
    ["Goodbye! Have a great day!", "See you later! Take care!", "Bye! Let us know if you need anything else."]
  ];
  

  const alternative: string[] = [
    "I'm listening... How can I help?",
    "Can you please provide more details?",
    "Maybe Vikas could help better. Please mail at vikas@gmail.com",
    "I'm here to assist you. Please tell me more."
  ];
export { prompts, replies, alternative };
