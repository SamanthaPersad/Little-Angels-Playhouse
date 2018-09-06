class Student < ApplicationRecord
    belongs_to :classroom, foreign_key: "class_id"
end
