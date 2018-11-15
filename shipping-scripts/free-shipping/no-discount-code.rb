FREE_SHIPPING_HEADER = "Free Shipping - 3-7 Business Days"
FREE_SHIPPING_CODE = "shipandsave"
ELIGIBLE_SERVICES = ['3-7 Business Days']

Input.shipping_rates.each do |shipping_rate|
    if ELIGIBLE_SERVICES.include?(shipping_rate.name)
        shipping_rate.apply_discount(shipping_rate.price, message: FREE_SHIPPING_HEADER)
    end  
end

Output.shipping_rates = Input.shipping_rates
