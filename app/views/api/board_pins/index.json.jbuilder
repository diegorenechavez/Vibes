@board_pins.each do |board_pin|
    json.set! board_pin.id do
        json.board_id board_pin.board_id
        json.extract! board_pin.pin, :description, :content, :id
        json.photoUrl url_for(board_pin.pin.photo)
    end 
end 