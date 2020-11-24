class Pin < ApplicationRecord
    validates :description, presence: true 

    has_one_attached :photo
    
    has_many :board_pins,
    class_name: :BoardPin,
    foreign_key: :pin_id,
    primary_key: :id

    has_many :boards,
    through: :boards_pins

    has_one :user,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id

end
