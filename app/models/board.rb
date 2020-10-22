class Board < ApplicationRecord
    validates :name, presence: true
    validates :description, presence: true
    validates :user_id, presence: true
    
    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User,
    primary_key: :id

    has_many :board_pins,
    class_name: :BoardPin,
    foreign_key: :board_id,
    primary_key: :id

    has_many :pins,
    through: :board_pins
end
