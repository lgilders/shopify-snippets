# Required Discount Code (enter all lower case)
DISCOUNT_CODE = "savemore"

# Tier One Threshold, Discount, and Percentage
TIER_ONE_THRESHOLD = 0
TIER_ONE_DISCOUNT = Decimal.new(10) / 100.0
TIER_ONE_MESSAGE = "10% Off"

# Tier Two Threshold, Discount, and Percentage
TIER_TWO_THRESHOLD = 51
TIER_TWO_DISCOUNT = Decimal.new(15) / 100.0
TIER_TWO_MESSAGE = "15% Off"

# Tier Three Threshold, Discount, and Percentage
TIER_THREE_THRESHOLD = 101
TIER_THREE_DISCOUNT = Decimal.new(20) / 100.0
TIER_THREE_MESSAGE = "20% Off"

# Variables
categoryTotal = 0

if Input.cart.discount_code && Input.cart.discount_code.code == DISCOUNT_CODE

  # Adds up total cart value of X Category
  Input.cart.line_items.each do |line_item|
    product = line_item.variant.product
    next if product.gift_card?
    # Fix to convert decimal to string then to integer
    a = line_item.line_price_was
    a_int = Integer(a.cents.to_s)
  end
  
  Input.cart.line_items.each do |line_item|
    product = line_item.variant.product
    next if product.gift_card?
    
    if categoryTotal >= TIER_THREE_THRESHOLD * 100
      line_discount = line_item.line_price * TIER_THREE_DISCOUNT
      line_item.change_line_price(line_item.line_price - line_discount, message: TIER_THREE_MESSAGE)
    elsif categoryTotal >= TIER_TWO_THRESHOLD * 100
      line_discount = line_item.line_price * TIER_TWO_DISCOUNT
      line_item.change_line_price(line_item.line_price - line_discount, message: TIER_TWO_MESSAGE)
    elsif categoryTotal >= TIER_ONE_THRESHOLD * 100
      line_discount = line_item.line_price * TIER_ONE_DISCOUNT
      line_item.change_line_price(line_item.line_price - line_discount, message: TIER_ONE_MESSAGE)
    end
    
  end

end

Output.cart = Input.cart
