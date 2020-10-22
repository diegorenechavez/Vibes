class BoardPin < ApplicationRecord
    validates :board_id, presence:true
    validates :pin_id, presence:true


    belongs_to :board,
    foreign_key: :board_id,
    class_name: :Board,
    primary_key: :id

    belongs_to :pin,
    foreign_key: :pin_id,
    class_name: :Pin,
    primary_key: :id

end
