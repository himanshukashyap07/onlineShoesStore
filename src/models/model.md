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
Cart ID
User ID
Created Date
Updated Date



## CartItem
- UserID
- Product ID -> arr[]
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




