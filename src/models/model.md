# all models

## user
```bash

name -> string
mobileNumber -> number
email -> string
role -> enum(guest,admin,user)
password -> string
acount status -> enum(active,block)
date:Date
isEmailVarified

```

## Address
```bash
UserId:
FullName:
Phone:
House/street
city
state
postal code
nearby

```

## product 

```bash 
productName -> string
brand -> string
Description -> string
price -> number 
DiscountPrice -> number , default=0
Gender-> enum(girl,boy,men,women,child)
ShoeType-> enum(sport,casual,formal)
salePrice -> number
Quantity -> number
varient:object(size,color)
image url -> string


```
## Cart
User ID
Created Date
Updated Date



## CartItem
- cartId
- Product ID 
- Quantity
- Price at time added

## order
```bash
User ID
AddressId
payment ID
Orderlist[]
Total Amount
Discount Amount
Delivery Charge
Final Amount
Payment Status
Order Status
Created Date
```
## OrderItem
- Order ID
- Product ID
- Quantity
- Price
- Total Price
## content
```bash

out story -> string
faq -> object (question:answer)
terms of service -> string
privacy policy -> string
shipping policy -> string
return policy -> string
social media link -> object (insta:String, facebook:string, youtube:string)

```

## payment
```bash

orderId
UserID
amount
currency
gateway
paytmOrderId
paytmTxnId
paytmBankTxnId
status -> enum: ["initiated", "pending", "success", "failed", "cancelled"], default: "initiated"
paytmStatus
responseCode
responseMessage
checksumHash
isVerified
paymentMethod
failureReason
refundId
refundAmount
refundStatus
refundDate
paytmResponse
```





const editablePages = [
    { slug: 'our-story', title: 'Our Story', content: `Founded in 2024, SoleSculpt was born from a passion for innovative design and a desire to redefine the footwear industry. We believe that shoes should be more than just a functional necessity; they should be a seamless extension of your personal style and a testament to quality craftsmanship.\n\nOur journey began with a small team of designers, engineers, and dreamers who shared a common vision: to create shoes that perfectly balance aesthetics, comfort, and sustainability. We spent countless hours researching materials, refining our manufacturing processes, and pushing the boundaries of what's possible in footwear.\n\nToday, SoleSculpt is proud to offer a collection that embodies our core values. Each pair of shoes is a work of art, meticulously crafted to provide unparalleled comfort and timeless style. We are committed to using eco-friendly materials and ethical production methods, ensuring that our footprint on the planet is as light as the feeling of our shoes on your feet.\n\nThank you for being a part of our story. We're excited to see where the path takes us next.` },
    { slug: 'faq', title: 'Frequently Asked Questions', content: `[{"question":"What is your shipping policy?","answer":"We offer free standard shipping on all orders within the United States. Expedited shipping is available for an additional fee. International shipping rates vary by country."},{"question":"What is your return policy?","answer":"We accept returns within 30 days of purchase for a full refund. Items must be in new, unworn condition with original packaging. To initiate a return, please visit our returns portal."},{"question":"How do I know what size to order?","answer":"Our shoes generally run true to size. We recommend ordering your usual shoe size. If you are between sizes, we suggest sizing up. You can also refer to our size chart for more detailed measurements."},{"question":"Are your shoes vegan?","answer":"We offer a selection of vegan-friendly shoes made from high-quality synthetic materials. Look for the 'Vegan' badge on the product page to identify these styles."},{"question":"How do I care for my shoes?","answer":"Care instructions vary by material. For leather shoes, we recommend using a leather cleaner and conditioner. For canvas and synthetic materials, a gentle soap and water solution can be used. Always allow shoes to air dry."}]` },
    { slug: 'careers', title: 'Careers', content: `We're always looking for talented people to join our team.` },
    { slug: 'terms', title: 'Terms of Service', content: `Please read these terms carefully before using our services.` },
    { slug: 'privacy', title: 'Privacy Policy', content: `Your privacy is important to us.` },
    { slug: 'press', title: 'Press', content: `SoleSculpt in the news.` },
    { slug: 'shipping-returns', title: 'Shipping & Returns', content: `Information about our shipping and return policies.` },
];