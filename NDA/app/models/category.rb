class Category < ApplicationRecord
has_many :disasters,  dependent: :destroy
end
