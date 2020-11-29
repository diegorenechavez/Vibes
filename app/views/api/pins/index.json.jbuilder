
@pins.each do |pin|
    json.set! pin.id do 
         json.extract! pin, :id, :description, :user_id, :content
         json.photoUrl url_for(pin.photo)
    end 
end 