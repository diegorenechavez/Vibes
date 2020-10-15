json.array! @pins do |pin|
    json.extract! pin, :id, :description
    json.photoUrl url_for(pin.photo)
end 